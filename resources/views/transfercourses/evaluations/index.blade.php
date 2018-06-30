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
                        Application List
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="ibox">
                <div class="ibox-content">
                    <table class="footable table table-stripped table-hover" data-page-size="15">
                        <thead>
                        <tr>
                            <th>Eval #</th>
                            <th>App #</th>
                            <th>University</th>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>TCAF</th>
                            <th>Syllabus</th>
                            <th>Additional Materials</th>
                            <th>Current Status</th>
                            <th>Eval Type</th>
                            <th>My Decision</th>
                            <th class="text-right" data-sort-ignore="true">Detail</th>

                        </tr>
                        </thead>
                        <tbody>
                        @foreach( $appsToEval as $app )
                            <tr>
                                <td>
                                    {{ $app->evaluation->evaluationID }}
                                </td>
                                <td>
                                    {{ $app->applicationID }}
                                </td>
                                <td>
                                    {{ $app->course->university }}
                                </td>
                                <td>
                                    {{ $app->course->courseCode }}
                                </td>
                                <td>
                                    {{ $app->course->courseName }}
                                </td>
                                <td>
                                    <a target="_blank" href="/storage/{{ $app->tcafFile }}"><button class="btn-info btn btn-xs">View</button></a>
                                </td>
                                <td>
                                    <a target="_blank" href="/storage/{{ $app->syllabusFile }}"><button class="btn-info btn btn-xs">View</button></a>
                                </td>
                                <td>
                                    @if ($app->additionalMaterialsFile)
                                        <a href="/storage/{{ $app->additionalMaterialsFile }}"><button class="btn-info btn btn-xs">Download</button></a>
                                    @else
                                        No Material
                                    @endif
                                </td>
                                <td>
                                    {{ $app->evaluationProgress }}
                                </td>
                                <td>
                                    {{ $app->evaluation->evaluatorType }}
                                </td>
                                <td>
                                    {{ $app->evaluation->evaluatorDecision }}
                                </td>
                                <td>
                                    <a href="/transferCourses/myEvaluation/{{ $app->evaluation->evaluationID }}">
                                        @if ($app->evaluation->evaluationStatus != 'Decided'
                                          && $app->evaluation->evaluationStatus != 'Declined')
                                            <button class="btn-primary btn btn-xs">Review</button>
                                        @else
                                            <button class="btn-info btn btn-xs">Show</button>
                                        @endif
                                    </a>
                                </td>
                            </tr>
                        @endforeach

                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="12">
                                <ul class="pagination pull-right"></ul>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>

@stop