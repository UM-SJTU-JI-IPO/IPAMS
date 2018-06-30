@extends('layouts.app')

@section('title', 'Application Detail')

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
                        <a href="/transferCourses/myApplication">My Applications</a>
                    </li>
                    <li class="active">
                        Application Detail
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
                                <h5>Application No. {{ $application->applicationID }} Detail</h5>
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
            </div>
        </div>
    </div>
@stop