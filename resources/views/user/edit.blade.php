{{-- TODO ATTENTION IE not supported Warning should present when IE detected --}}
@extends('layouts.app')

@section('title', 'User Profile Panel')

@section('content')
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 toppad" >
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    <h3 class="panel-title">
                                        Edit User Profile
                                    </h3>
                                </div>
                                <div class="panel-body">
                                    <form id="profile_form" method="post" action="/user/edit">
                                        <div class="row">
                                            <div class="col-md-3 col-lg-3">
                                                <div class="row">
                                                    <div align="center">
                                                        <img alt="User Pic" src="https://cdn.mos.cms.futurecdn.net/98fbc1277506ce75130f959b531b9b49-970-80.jpg" class="img-rounded img-responsive">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group">
                                                        <div align="center">
                                                            {{--TODO Implement change image function--}}
                                                            <a href="#" data-original-title="change image" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i> Change Image</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-9 col-lg-9">
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newLegalName">Legal Name</label>
                                                            <input type="text" class="form-control" id="newLegalName" value="{{ Auth::user()->name }}">
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newSJTUID">SJTU ID</label>
                                                            <input type="number" class="form-control" id="newSJTUID" value="{{ Auth::user()->studentID }}">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newGender">Gender</label>
                                                            <input type="text" class="form-control" id="newGender" value="{{ Auth::user()->gender }}">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newBirthday">Birthday</label>
                                                            <input type="date" class="form-control" id="newBirthday" value="{{ Auth::user()->birthday }}">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12">
                                                        <div class="form-group">
                                                            <label for="newEmail">Email</label>
                                                            <input type="email" class="form-control" id="newEmail" value="{{ Auth::user()->email }}">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newIDCardType">Identify File Type</label>
                                                            <input type="text" class="form-control" id="newIDCardType" value="{{ Auth::user()->idCardType }}">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newIDCardNo">Identify File No.</label>
                                                            <input type="text" class="form-control" id="newIDCardNo" value="{{ Auth::user()->idCardNo }}">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>






                                        {{--
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox"> Check me out
                                            </label>
                                        </div>--}}
                                    </form>
                                </div>
                                <div class="panel-footer">
                                    <button type="submit" form="profile_form" class="btn btn-sm btn-primary"><i class="glyphicon glyphicon-ok"></i> Update</button>
                                    <a href="/user" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove"></i> Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
