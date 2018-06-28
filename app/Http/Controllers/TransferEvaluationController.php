<?php

namespace App\Http\Controllers;

use App\TransferApplication;
use App\TransferEvaluation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\User;

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
                return $user->evaluation->evaluatorType == 'Faculty PreEval';
            });
        $UCEvaluators = $relatedEvaluators->filter(
            function ($user) {
                return $user->evaluation->evaluatorType == 'UC PreEval';
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
     * @param  \App\TransferEvaluation  $transferEvaluation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TransferEvaluation $transferEvaluation)
    {
        //
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
