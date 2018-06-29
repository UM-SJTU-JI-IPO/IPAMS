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
                            <th>App #</th>
                            <th>University</th>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>TCAF</th>
                            <th>Syllabus</th>
                            <th>Additional Materials</th>
                            <th>App Progress</th>
                            <th>Eval Type</th>
                            <th>My Decision</th>
                            <th class="text-right" data-sort-ignore="true">Detail</th>

                        </tr>
                        </thead>
                        <tbody>
                        @foreach( $appsToEval as $app )
                            <tr>
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
                                    <a target="_blank" href="/storage/{{ $app->tcafFile }}"><button class="btn-primary btn btn-xs">View</button></a>
                                </td>
                                <td>
                                    <a target="_blank" href="/storage/{{ $app->syllabusFile }}"><button class="btn-primary btn btn-xs">View</button></a>
                                </td>
                                <td>
                                    @if ($app->additionalMaterialsFile)
                                        <a href="/storage/{{ $app->additionalMaterialsFile }}"><button class="btn-primary btn btn-xs">Download</button></a>
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
                                    @if ($app->evaluationProgress == $app->evaluation->evaluatorType)
                                        <a target="_blank" href="/transferCourses/myEvaluation/{{ $app->evaluation->evaluationID }}"><button class="btn-primary btn btn-xs">Review</button></a>
                                    @else
                                        <span class="label label-warning">Closed</span>
                                    @endif
                                </td>
                            </tr>
                        @endforeach

                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="11">
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