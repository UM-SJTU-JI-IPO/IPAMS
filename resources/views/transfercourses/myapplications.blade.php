@extends('layouts.app')

@section('title', 'My Courses Transfer Applications')

@section('content')

    <div class="wrapper wrapper-content animated fadeInRight ">
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Course Transfer Panel</h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="/">Dashboard</a>
                    </li>
                    <li>
                        <a href="/transferCourses/myApplication">Transfer Courses</a>
                    </li>
                    <li class="active">
                        <a href="/transferCourses/myApplication"><strong>My Transfer Applications</strong></a>
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
                            <th>Application ID</th>
                            <th>University</th>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>TCAF</th>
                            <th>Syllabus</th>
                            <th>Additional Materials</th>
                            <th>Additional Explanation</th>
                            <th>Status</th>
                            <th class="text-right" data-sort-ignore="true">Action</th>

                        </tr>
                        </thead>
                        <tbody>
                        @foreach( $applications as $app )
                            <tr>
                                <td>
                                    {{ $app->applicationID }}
                                </td>
                                <td>
                                    {{ $app->appliedCourse()->first()->university }}
                                </td>
                                <td>
                                    {{ $app->appliedCourse()->first()->courseCode }}
                                </td>
                                <td>
                                    {{ $app->appliedCourse()->first()->courseName }}
                                </td>
                                <td>
                                    <a href="/storage/{{ $app->tcafFile }}"><button class="btn-primary btn btn-xs setAdmin">View</button></a>
                                </td>
                                <td>
                                    <a href="/storage/{{ $app->syllabusFile }}"><button class="btn-primary btn btn-xs setAdmin">View</button></a>
                                </td>
                                <td>
                                    @if ($app->additionalMaterialsFile)
                                        <a href="/storage/{{ $app->additionalMaterialsFile }}"><button class="btn-primary btn btn-xs setAdmin">Download</button></a>
                                    @else
                                        No Material
                                    @endif
                                </td>
                                <td>
                                    {{ $app->appComment }}
                                    {{--<span class="label label-primary">Enable</span>--}}
                                </td>
                                <td>
                                    {{ $app->status }}
                                </td>
                                <td>

                                </td>
                            </tr>
                        @endforeach

                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="10">
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