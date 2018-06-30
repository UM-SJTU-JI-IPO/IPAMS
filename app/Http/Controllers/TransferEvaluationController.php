<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use App\User;
use App\TransferApplication;
use App\TransferEvaluation;
use App\Mail\newApplicationNotice;

class TransferEvaluationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $appsToEval = $user->assignedApplications;
        foreach ($appsToEval as $app)
        {
            $app->course = $app->appliedCourse()->first();
        }
        return view('transfercourses.evaluations.index',['appsToEval' => $appsToEval]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  $evaluationID
     * @return \Illuminate\Http\Response
     */
    public function show($evaluationID)
    {
        $evaluation = TransferEvaluation::find($evaluationID);
        $application = TransferApplication::find($evaluation->applicationID);
        $applier = $application->applier;
        $course = $application->appliedCourse;
        $relatedEvaluators = $application->assignedReviewers;
        $IPOEvaluators = $relatedEvaluators->filter(
            function ($user) {
                return $user->evaluation->evaluatorType == 'IPO PreEval';
            });
        $facultyEvaluators = $relatedEvaluators->filter(
            function ($user) {
                return $user->evaluation->evaluatorType == 'Faculty Eval';
            });
        $UCEvaluators = $relatedEvaluators->filter(
            function ($user) {
                return $user->evaluation->evaluatorType == 'UC Eval';
            });

        return view('transfercourses.evaluations.detail',[
            'evaluation'            => $evaluation,
            'application'           => $application,
            'applier'               => $applier,
            'course'                => $course,
            'IPOEvaluators'         => $IPOEvaluators,
            'facultyEvaluators'     => $facultyEvaluators,
            'UCEvaluators'          => $UCEvaluators
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TransferEvaluation  $transferEvaluation
     * @return \Illuminate\Http\Response
     */
    public function edit(TransferEvaluation $transferEvaluation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  $evaluationID
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $evaluationID)
    {
        $this->validate(request(), [
            'newDecision' => 'required',
            'addComment' => 'nullable|max:1024',
        ]);

        // Update current evaluation values
        $evaluation = TransferEvaluation::find($evaluationID);
        $evaluation->update([
            'evaluatorDecision' => $request->newDecision,
            'evaluatorComments' => $request->addComment,
        ]);
        if ($request->newDecision == 'Declined') {
            $evaluation->update([
                'evaluationStatus' => 'Declined'
            ]);
        } elseif ($request->newDecision == 'FMR') {
            $evaluation->update([
                'evaluationStatus' => 'Pending'
            ]);
        } else {
            $evaluation->update([
                'evaluationStatus'  => 'Decided'
            ]);
        }
        $evaluation->save();

        // Find corresponding application
        $application = TransferApplication::find($evaluation->applicationID);

        // Create new evaluation for assigned faculty if current evaluation is "IPO PreEval"
        if ($evaluation->evaluatorType == 'IPO PreEval') {
            $this->validate(request(), [
                'facultySJTUID' =>  'required|numeric'
            ]);

            // TODO Check Evaluator existence

            // Update other IPO evaluations status
            $restIPOEvaluators = $application->assignedReviewers->filter(
                function ($user) {
                    return  $user->evaluation->evaluatorType == 'IPO PreEval'
                        && ($user->evaluation->evaluationStatus == 'Pending'
                        ||  $user->evaluation->evaluationStatus == 'Reassigning');
                });
            foreach ($restIPOEvaluators as $eachEvaluator) {
                $eachEvaluator->evaluation->update([
                    'evaluatorDecision' => $request->newDecision,
                    'evaluatorComments' => 'Decision made by ' . Auth::user()->name,
                    'evaluationStatus'  => 'Decided',
                ]);
                $eachEvaluator->evaluation->save();
            }

            // Assign faculty evaluator
            $newEvaluation = TransferEvaluation::create([
                'applicationID'     => $evaluation->applicationID,
                'evaluatorID'       => $request->facultySJTUID,
                'evaluatorType'     => 'Faculty Eval',
                'evaluatorDecision' => 'Pending',
                'evaluationStatus'  => 'Pending',
            ]);
            $evaluator = User::find($request->facultySJTUID);
//            TODO Mail::to($evaluator->email)
//                ->queue(new newApplicationNotice($evaluator->name, User::find($application->sjtuID)->name));
            $newEvaluation->save();
            // Update application evaluationProgress
            $application->updateProgress('Faculty Eval');
            $application->updateStatus('Under Faculty Reviewing');
        }

        // if current evaluation is "Faculty Eval"
        if ($evaluation->evaluatorType == 'Faculty Eval') {
            if ($request->newDecision == 'Approved' || $request->newDecision == 'Rejected') {
                // this faculty approve or reject this application
                // Create evaluations for each UC member to confirm this decision
                foreach (User::all()->where('instituteRole','=','UC') as $evaluator) {
                    $newEvaluation = TransferEvaluation::create([
                        'applicationID'     => $evaluation->applicationID,
                        'evaluatorID'       => $evaluator->sjtuID,
                        'evaluatorType'     => 'UC Eval',
                        'evaluatorDecision' => 'Pending',
                        'evaluationStatus'  => 'Pending',
                    ]);
//                    TODO Email UC weekly
//                  Mail::to($evaluator->email)
//                        ->queue(new newApplicationNotice($evaluator->name, User::find($application->sjtuID)->name));
                    $newEvaluation->save();
                }
                // Update application evaluationProgress
                $application->updateProgress('UC Eval');
                $application->updateStatus('Under UC Reviewing');
            } elseif ($request->newDecision == 'Declined') {
                // this faculty refused to evaluate this application
                // IPO reassign this application
                $IPOEvals = TransferEvaluation::where([
                    ['applicationID','=',$application->applicationID],
                    ['evaluatorType','=','IPO PreEval'],
                    ['evaluationStatus','!=','Declined']
                ]
                )->get();
                // all IPO PreEval status become reassigning
                foreach ($IPOEvals as $eachEval) {
                    $eachEval->update([
                        'evaluatorDecision' => 'Pending',
                        'evaluationStatus'  => 'Reassigning',
                    ]);
                    // TODO Email IPO group members

                    $eachEval->save();
                }

                // Update application evaluationProgress
                $application->update([
                    'evaluationProgress' => 'IPO PreEval'
                ]);
            } elseif ($request->newDecision == 'FMR') {
                // TODO Email student for FMR
                // Update application evaluationProgress
                $application->updateStatus('Further Materials Requested');
            }
        }

        // if current evaluation is "UC Eval"
        if ($evaluation->evaluatorType == 'UC Eval') {
            if ($request->newDecision == 'Approved' || $request->newDecision == 'Rejected') {
                // this UC member approve or reject this application
                // Get all UC evaluation for this application
                $UCEvaluators = $application->assignedReviewers->filter(
                    function ($user) {
                        return $user->evaluation->evaluatorType == 'UC Eval';
                    });
                $ayeCount = 0;
                foreach ($UCEvaluators as $eachEvaluator) {
                    if ($eachEvaluator->evaluation->evaluatorDecision == 'Approved') {
                        ++$ayeCount;
                    }
                }
                // Notice IPO result
                if ($ayeCount >= 0.5 * count($eachEvaluator)) {
                    foreach (User::all()->where('instituteRole','=','IPO') as $evaluator) {
                        $newEvaluation = TransferEvaluation::create([
                            'applicationID'     => $evaluation->applicationID,
                            'evaluatorID'       => $evaluator->sjtuID,
                            'evaluatorType'     => 'IPO Confirm',
                            'evaluatorDecision' => 'Pending',
                            'evaluationStatus'  => 'Pending',
                        ]);
//                    TODO Email IPO
//                  Mail::to($evaluator->email)
//                        ->queue(new newApplicationNotice($evaluator->name, User::find($application->sjtuID)->name));
                        $newEvaluation->save();
                    }
                    // Update application evaluationProgress
                    $application->updateProgress('IPO Confirm');
                    $application->updateStatus('IPO Confirming');
                }
            } elseif ($request->newDecision == 'FMR') {
                // TODO Email student for FMR
                // Update application evaluationProgress
                $application->updateStatus('Further Materials Requested');
            }
        }

        // if current evaluation is "IPO Confirm"
        if ($evaluation->evaluatorType == 'IPO Confirm') {
            // Validate course fields
            $this->validate(request(), [
                'evalResult'    =>  'required',
                'activeTime'    =>  'nullable|date',
                'expireTime'    =>  'nullable|date|after:activeTime'
            ]);

            // Update course active, expire info.
            $course = $application->appliedCourse;
            $course->update([
                'status'        => 'Evaluated',
                'activeTime'    => $request->activeTime ? $request->activeTime : null,
                'expireTime'    => $request->expireTime ? $request->expireTime : null,
            ]);
            $course->save();

            // Update application evaluationProgress
            $application->update([
                'evaluationResult'  => $request->evalResult
            ]);
            $application->updateProgress('Eval Completed');
            $application->updateStatus('Review Completed');
        }

        // Save Updated Application
        $application->save();

        // Go back to index of evaluations
        return redirect()->route('myCourseTransferEvaluations');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TransferEvaluation  $transferEvaluation
     * @return \Illuminate\Http\Response
     */
    public function destroy(TransferEvaluation $transferEvaluation)
    {
        //
    }
}
