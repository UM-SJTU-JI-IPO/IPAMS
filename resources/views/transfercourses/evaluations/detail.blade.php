@extends('layouts.app')

@section('title', 'Applications to be Evaluated')

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
                                <div class="row">
                                    <div class="col-md-3 col-lg-3">
                                        <h4 class="m-t-none m-b">Application No. {{ $evaluation->applicationID }}</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 col-lg-3">
                                        <h4 class="m-t-none m-b">Applier </h4>
                                        <p>{{ $applier->name }}</p>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <h4 class="m-t-none m-b">University </h4>
                                        <p>{{ $course->university }}</p>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <h4 class="m-t-none m-b">Course Code </h4>
                                        <p>{{ $course->courseCode }}</p>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <h4 class="m-t-none m-b">Course Name</h4>
                                        <p>{{ $course->courseName }}</p>
                                    </div>
                                </div>
                                <div class="row m-t-sm">
                                    <div class="col-md-3 col-lg-3">
                                        <h4 class="m-t-none m-b">Transfer Course Application Form</h4>
                                        <a target="_blank" href="/storage/{{ $application->tcafFile }}"><button class="btn-primary btn btn-sm">View</button></a>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <h4 class="m-t-none m-b">Course Syllabus</h4>
                                        <a target="_blank" href="/storage/{{ $application->syllabusFile }}"><button class="btn-primary btn btn-sm">View</button></a>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <h4 class="m-t-none m-b">Additional Materials</h4>
                                        @if ($application->additionalMaterialsFile)
                                            <a href="/storage/{{ $application->additionalMaterialsFile }}"><button class="btn-primary btn btn-sm">Download</button></a>
                                        @else
                                            No Material
                                        @endif
                                    </div>
                                </div>
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
                                                        <td>{{ $evaluator->evaluation->evaluationDecision }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluationComments }}</td>
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
                                                        <td>{{ $evaluator->evaluation->evaluationDecision }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluationComments }}</td>
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
                                                        <td>{{ $evaluator->evaluation->evaluationDecision }}</td>
                                                        <td>{{ $evaluator->evaluation->evaluationComments }}</td>
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
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5>My Decision</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-up"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ibox-content">
                                <div class="row">
                                    <div class="col-sm-12 b-r">
                                        <form role="form">
                                            <div class="form-group">
                                                <label for="newGender">Decision</label><br>
                                                <select class="selectpicker form-control" id="newGender" name="newGender">
                                                    <option selected value="Pending">Pending</option>
                                                    <option value="Approved">Approve</option>
                                                    <option value="Rejected">Reject</option>
                                                    <option value="FMR">Further Materials Required</option>
                                                </select>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12 col-lg-12">
                                                    <label>Additional Comments</label>
                                                    <textarea class="col-md-12 col-lg-12" name="appComment" id="appComment" rows="3"></textarea>
                                                </div>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop