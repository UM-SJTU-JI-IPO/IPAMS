{{-- TODO ATTENTION IE not supported for submit btn location Warning should present when IE detected --}}
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
                                    <form id="profile_form" method="POST" action="/user/edit">
                                        {{ csrf_field() }}
                                        <div class="row m-b-xs">
                                            <div class="col-md-3 col-lg-3">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-12 col-lg-12" align="center">
                                                        <img alt="User Pic" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" class="img-rounded img-responsive">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <div class="form-group">
                                                            <div align="center">
                                                                {{--TODO Implement change image function--}}
                                                                <a href="#" data-original-title="change image" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i> Change Image</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-9 col-lg-9">
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newLegalName">Legal Name</label>
                                                            <input type="text" class="form-control" id="newLegalName" name="newLegalName" value="{{ Auth::user()->name }}" readonly>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newSJTUID">SJTU ID</label>
                                                            <input type="number" class="form-control" id="newSJTUID" name="newSJTUID" value="{{ Auth::user()->studentID }}" readonly>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newGender">Gender</label>
                                                            <input type="text" class="form-control" id="newGender" name="newGender" value="{{ Auth::user()->gender }}">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newBirthday">Birthday</label>
                                                            <input type="date" class="form-control" id="newBirthday" name="newBirthday" value="{{ Auth::user()->birthday }}">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newEmail">Email</label>
                                                            <input type="email" class="form-control" id="newEmail" name="newEmail" value="{{ Auth::user()->email }}">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newMobile">Mobile</label>
                                                            <input type="number" class="form-control" id="newMobile" name="newMobile" value="{{ Auth::user()->mobile }}">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newIDCardType">Identify File Type</label>
                                                            <input type="text" class="form-control" id="newIDCardType" name="newIDCardType" value="{{ Auth::user()->idCardType }}" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="newIDCardNo">Identify File No.</label>
                                                            <input type="text" class="form-control" id="newIDCardNo" name="newIDCardNo" value="{{ Auth::user()->idCardNo }}" readonly>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="newPassportNo">Passport No.</label>
                                                    <input type="text" class="form-control" id="newPassportNo" name="newPassportNo" value="{{ Auth::user()->passportNo }}">
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="newPassportIssueDate">Passport Issue Date</label>
                                                    <input type="date" class="form-control" id="newPassportIssueDate" name="newPassportIssueDate" value="{{ Auth::user()->passportIssueDate }}">
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="newPassportExpireDate">Passport Expire Date</label>
                                                    <input type="date" class="form-control" id="newPassportExpireDate" name="newPassportExpireDate" value="{{ Auth::user()->passportExpireDate }}">
                                                </div>
                                            </div>
                                        </div>
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
