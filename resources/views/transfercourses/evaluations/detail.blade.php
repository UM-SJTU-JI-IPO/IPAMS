@extends('layouts.app')

@section('title', 'Evaluation Detail')

@section('content')

    <div class="wrapper wrapper-content animated fadeInRight ">
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Course Transfer Panel</h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="/">Dashboard</a>
                    </li>
                    <li class="active">
                        <a href="/transferCourses/myEvaluation">My Evaluations</a>
                    </li>
                    <li>
                        Evaluation Detail
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5>Evaluation No. {{ $evaluation->evaluationID }} Detail</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-up"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ibox-content">
                                @include('transfercourses.applicationinfo')
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5>Evaluation Progress</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-up"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ibox-content">
                                @if (!$IPOEvaluators->isEmpty())
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <h5>IPO PreEvaluation</h5>
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Evaluator</th>
                                                    <th>Status</th>
                                                    <th>Decision</th>
                                                    <th>Comments</th>
                                                    <th>Updated Time</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @foreach ($IPOEvaluators as $evaluator)
                                                    <tr>
                                                        <td>{{ $evaluator->evaluation->evaluationID }}</td>
                                                        <td>{{ $evaluator->name }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluationStatus }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluatorDecision }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluatorComments }}</td>
                                                        <td>{{ $evaluator->evaluation->updated_at }}</td>
                                                    </tr>
                                                @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                @endif
                                @if (!$facultyEvaluators->isEmpty())
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <h5>JI Faculty Evaluation</h5>
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Evaluator</th>
                                                    <th>Status</th>
                                                    <th>Decision</th>
                                                    <th>Comments</th>
                                                    <th>Updated Time</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @foreach ($facultyEvaluators as $evaluator)
                                                    <tr>
                                                        <td>{{ $evaluator->evaluation->evaluationID }}</td>
                                                        <td>{{ $evaluator->name }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluationStatus }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluatorDecision }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluatorComments }}</td>
                                                        <td>{{ $evaluator->evaluation->updated_at }}</td>
                                                    </tr>
                                                @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                @endif
                                @if (!$UCEvaluators->isEmpty())
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <h5>UC Evaluation</h5>
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Evaluator</th>
                                                    <th>Status</th>
                                                    <th>Decision</th>
                                                    <th>Comments</th>
                                                    <th>Updated Time</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @foreach ($UCEvaluators as $evaluator)
                                                    <tr>
                                                        <td>{{ $evaluator->evaluation->evaluationID }}</td>
                                                        <td>{{ $evaluator->name }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluationStatus }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluatorDecision }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluatorComments }}</td>
                                                        <td>{{ $evaluator->evaluation->updated_at }}</td>
                                                    </tr>
                                                @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                @if ($evaluation->evaluationStatus != 'Decided'
                  && $evaluation->evaluationStatus != 'Declined')
                    <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5>My Decision</h5>
                            </div>
                            <div class="ibox-content">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <form id="evaluation_form" method="POST" action="/transferCourses/myEvaluation/{{ $evaluation->evaluationID }}"  enctype="multipart/form-data">
                                            {{ csrf_field() }}
                                            <div class="form-group">
                                                <label for="newDecision">Decision</label><br>
                                                <select class="selectpicker form-control" id="newDecision" name="newDecision">
                                                    <option {{ isSelected('Pending', $evaluation->evaluatorDecision) }} value="Pending">Pending</option>
                                                    @if ($evaluation->evaluatorType == 'Faculty Eval')
                                                        <option value="Declined">Decline to Evaluate</option>
                                                    @endif
                                                    <option {{ isSelected('Approved', $evaluation->evaluatorDecision) }} value="Approved">Approve</option>
                                                    <option {{ isSelected('Rejected', $evaluation->evaluatorDecision) }} value="Rejected">Reject</option>
                                                    <option {{ isSelected('FMR', $evaluation->evaluatorDecision) }} value="FMR">Further Materials Required</option>
                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label>Additional Comments</label>
                                                <textarea class="col-md-12 col-lg-12 m-b-sm" name="addComment" id="addComment" rows="3" maxlength="1024"></textarea>
                                            </div>

                                            @if ($evaluation->evaluatorType == 'Faculty Eval')
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12">
                                                        <p>Please <strong>Decline</strong> this evaluation if you think
                                                            your background is not suitable for the evaluation of
                                                            this application.</p>
                                                    </div>
                                                </div>
                                            @endif

                                            @if ($evaluation->evaluatorType == 'IPO PreEval')
                                                <div class="row m-t-md">
                                                    <div class="col-md-6 col-lg-6">
                                                        <h4>Assign Faculty for Evaluation</h4>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4 col-lg-4">
                                                        <div class="form-group">
                                                            <label>Faculty SJTU ID</label>
                                                            <input type="text" class="form-control" id="facultySJTUID" name="facultySJTUID" placeholder="SJTU ID">
                                                        </div>
                                                    </div>
                                                    {{--<div class="col-md-4 col-lg-4">
                                                        <div class="form-group">
                                                            <label>Faculty Email</label>
                                                            <input type="text" class="form-control" id="facultyEmail" name="facultyEmail" placeholder="Email">
                                                        </div>
                                                    </div>--}}
                                                </div>
                                            @elseif ($evaluation->evaluatorType == 'IPO Confirm')
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12">
                                                        <div class="form-group">
                                                            <label for="evalResult">Evaluation Result</label><br>
                                                            <select class="selectpicker form-control" id="evalResult" name="evalResult">
                                                                <option {{ isSelected('Pending', $application->evaluationResult) }} value="Pending">Pending</option>
                                                                <option {{ isSelected('Approved', $application->evaluationResult) }} value="Approved">Approved</option>
                                                                <option {{ isSelected('Rejected', $application->evaluationResult) }} value="Rejected">Rejected</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label>Active Date</label>
                                                            <input type="date" class="form-control" id="activeTime" name="activeTime">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label>Expire Date</label>
                                                            <input type="date" class="form-control" id="expireTime" name="expireTime">
                                                        </div>
                                                    </div>
                                                </div>

                                            @endif

                                            <div>
                                                <button class="btn btn-sm btn-primary float-right m-t-md" type="submit"><strong>
                                                @if($evaluation->evaluatorDecision == 'Pending')
                                                    Make Decision
                                                @else
                                                    Update Decision
                                                @endif
                                                </strong></button>
                                            </div>
                                        </form>
                                        @include('errors.validate')
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endif
            </div>
        </div>
    </div>
@stop