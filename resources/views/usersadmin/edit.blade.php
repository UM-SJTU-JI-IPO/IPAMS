@extends('layouts.app')

@section('title', 'Users Management Panel')

@section('content')
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Users Management Panel</h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="/">Dashboard</a>
                    </li>
                    <li>
                        <a href="/usersadmin">Users Admin</a>
                    </li>
                    <li class="active">
                        <strong>User Detail</strong>
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="ibox">
                <div class="ibox-title">
                    <h5>User Profile</h5>
                    <div class="ibox-tools">
                        <a class="collapse-link">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                    </div>
                </div>
                @include('user.profiledetail')
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="ibox ">
                    <div class="ibox-title">
                        <h5>Change User's Institute Role</h5>
                    </div>
                    <div class="ibox-content">
                        <div class="row">
                            <div class="col-lg-2 col-md-2">
                                <label>Current Institute Role</label>
                                <p>
                                    {{ $user->instituteRole }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <form id="instituteRoleUpdateForm" method="POST" action="/usersadmin/{{ $user->sjtuID }}/role">
                                    {{ csrf_field() }}
                                    <div class="form-group">
                                        <label for="newInstituteRole">Changes to</label><br>
                                        <select class="selectpicker form-control" id="newInstituteRole" name="newInstituteRole">
                                            <option {{ isSelected('IPO', $user->instituteRole) }} value="IPO">IPO</option>
                                            <option {{ isSelected('UC', $user->instituteRole) }} value="UC">UC</option>
                                            <option {{ isSelected('UEO', $user->instituteRole) }} value="UEO">UEO</option>
                                            <option {{ isSelected('staff', $user->instituteRole) }} value="staff">JI Staff</option>
                                            <option {{ isSelected('faculty', $user->instituteRole) }} value="faculty">JI Faculty</option>
                                            <option {{ isSelected('local', $user->instituteRole) }} value="local">Local Student</option>
                                            <option {{ isSelected('exchange', $user->instituteRole) }} value="exchange">Exchange Student</option>
                                        </select>
                                    </div>

                                    <div>
                                        <button class="btn btn-sm btn-warning float-right m-t-md" type="submit">
                                            <strong>
                                                Update Role
                                            </strong>
                                        </button>
                                    </div>
                                </form>
                                @include('errors.validate')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
