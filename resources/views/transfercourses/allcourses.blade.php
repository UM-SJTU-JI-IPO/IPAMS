@extends('layouts.app')

@section('title', 'Transfer Courses List')

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
                        <a href="/transferCourses/allCourses"><strong>All Transfer Courses</strong></a>
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
                            <th>Course ID</th>
                            <th>University</th>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Corresponding Application</th>
                            <th>Equivalent</th>
                            <th>JI Course Code</th>
                            <th>Status</th>
                            <th>Active Time</th>
                            <th>Expire Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach( $courses as $course )
                            <tr>
                                <td>
                                    {{ $course->courseID }}
                                </td>
                                <td>
                                    {{ $course->university }}
                                </td>
                                <td>
                                    {{ $course->courseCode }}
                                </td>
                                <td>
                                    {{ $course->courseName }}
                                </td>
                                <td>
                                    {{ $course->applicationID }}
                                </td>
                                <td>
                                    @if ($course->ifEquivalent)
                                        Yes
                                    @else
                                        No
                                    @endif
                                </td>
                                <td>
                                    @if ($course->ifEquivalent)
                                        {{ $course->jiCourseCode }}
                                    @else
                                        No Corresponding JI Course
                                    @endif
                                </td>
                                <td>
                                    {{ $course->status }}
                                </td>
                                <td>
                                    @if ($course->activeTime)
                                        {{ $course->activeTime }}
                                    @else
                                        Not Applicable
                                    @endif
                                </td>
                                <td>
                                    @if ($course->expireTime)
                                        {{ $course->expireTime }}
                                    @else
                                        Not Applicable
                                    @endif
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