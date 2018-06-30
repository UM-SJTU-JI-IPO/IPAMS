<?php

namespace App\Http\Controllers;

use App\Mail\newEvaluationNotice;
use App\Mail\newMaterialRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use App\User;
use App\TransferApplication;
use App\TransferEvaluation;

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
        // Early validation to avoid dirtying DB
        if ($evaluation->evaluatorType == 'IPO PreEval' && $request->newDecision == 'Approved') {
            // TODO Check Evaluator existence

            $this->validate(request(), [
                'facultySjtuId' =>  'required|numeric'
            ]);
        }

        // Update evaluation
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

        // Find corresponding application and course
        $application = TransferApplication::find($evaluation->applicationID);
        $course = $application->appliedCourse;
        $applier = User::find($application->sjtuID);

        // Create new evaluation for assigned faculty if current evaluation is "IPO PreEval"
        if ($evaluation->evaluatorType == 'IPO PreEval') {
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

            // apply changes according to decision
            if ($request->newDecision == 'Approved') {
                // Assign faculty evaluator
                $newEvaluation = TransferEvaluation::create([
                    'applicationID'     => $evaluation->applicationID,
                    'evaluatorID'       => $request->facultySjtuId,
                    'evaluatorType'     => 'Faculty Eval',
                    'evaluatorDecision' => 'Pending',
                    'evaluationStatus'  => 'Pending',
                ]);
                $facultyEvaluator = User::find($request->facultySjtuId);
                Mail::to($facultyEvaluator->email)
                    ->queue(new newEvaluationNotice(
                            $facultyEvaluator->name,
                            $applier->name,
                            $evaluation,
                            $course)
                    );
                $newEvaluation->save();
                // Update application evaluationProgress
                $application->updateProgress('Faculty Eval');
                $application->updateStatus('Under Faculty Reviewing');
                // Email Applier, must do after update application
                $application->emailApplier($applier, $evaluation, $course);
            } elseif ($request->newDecision == 'Rejected') {
                // Update application evaluationProgress
                $application->updateProgress('Eval Completed');
                $application->updateStatus('Review Completed');
                // Email Applier, must do after update application
                $application->emailApplier($applier, $evaluation, $course);
            } elseif ($request->newDecision == 'FMR') {
                // Email student for FMR
                Mail::to($applier->email)->queue(new newMaterialRequest(
                    $applier->name,
                    $application,
                    $evaluation,
                    $course
                ));

                // Update application evaluationProgress
                $application->updateStatus('Further Materials Requested');
            } else {
                // Still Pending, no action
            }
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
                    $newEvaluation->save();
                }
                // Update application evaluationProgress
                $application->updateProgress('UC Eval');
                $application->updateStatus('Under UC Reviewing');
                // Email Applier, must do after update application
                $application->emailApplier($applier, $evaluation, $course);
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
                    $eachEval->save();

                    // Email IPO
                    $curEvaluator = User::find($eachEval->evaluatorID);
                    Mail::to($curEvaluator->email)->queue(new newEvaluationNotice(
                        $curEvaluator->name,
                        $applier->name,
                        $eachEval,
                        $course
                    ));
                }

                // Update application evaluationProgress
                $application->updateProgress('IPO PreEval');
                $application->updateStatus('Application Submitted');
                // Email Applier, must do after update application
                $application->emailApplier($applier, $evaluation, $course);
            } elseif ($request->newDecision == 'FMR') {
                // Email student for FMR
                Mail::to($applier->email)->queue(new newMaterialRequest(
                    $applier->name,
                    $application,
                    $evaluation,
                    $course
                ));

                // Update application evaluationProgress
                $application->updateStatus('Further Materials Requested');
            } else {
                // Still Pending, no action
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
                // Notice IPO result and update rest UC evaluations which are not decided
                if ($ayeCount >= 0.5 * count($eachEvaluator)) {
                    // get result undecided UC evaluations
                    $restUCEval = TransferEvaluation::where([
                            ['applicationID','=',$application->applicationID],
                            ['evaluatorType','=','UC Eval'],
                            ['evaluationStatus','=','Pending']
                        ]
                    )->get();
                    // all UC Eval status become Decided
                    foreach ($restUCEval as $eachEval) {
                        $eachEval->update([
                            'evaluatorDecision' => 'Approved',
                            'evaluatorComments' => 'Majority Decision',
                            'evaluationStatus'  => 'Decided',
                        ]);
                        $eachEval->save();
                    }


                    foreach (User::all()->where('instituteRole','=','IPO') as $evaluator) {
                        $newEvaluation = TransferEvaluation::create([
                            'applicationID'     => $evaluation->applicationID,
                            'evaluatorID'       => $evaluator->sjtuID,
                            'evaluatorType'     => 'IPO Confirm',
                            'evaluatorDecision' => 'Pending',
                            'evaluationStatus'  => 'Pending',
                        ]);
                        $newEvaluation->save();

                        // Email IPO
                        Mail::to($evaluator->email)->queue(new newEvaluationNotice(
                            $evaluator->name,
                            $applier->name,
                            $newEvaluation,
                            $course
                        ));
                    }
                    // Update application evaluationProgress
                    $application->updateProgress('IPO Confirm');
                    $application->updateStatus('IPO Confirming');
                    // Email Applier, must do after update application
                    $application->emailApplier($applier, $evaluation, $course);
                }
            } elseif ($request->newDecision == 'FMR') {
                // Email student for FMR
                Mail::to($applier->email)->queue(new newMaterialRequest(
                    $applier->name,
                    $application,
                    $evaluation,
                    $course
                ));
                // Update application evaluationProgress
                $application->updateStatus('Further Materials Requested');
            } else {
                // Still Pending, no action
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
            // Email Applier, must do after update application
            $application->emailApplier($applier, $evaluation, $course);
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
