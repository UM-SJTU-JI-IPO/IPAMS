@extends('layouts.app')

@section('title', 'User Profile Panel')

@section('content')
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
              <h2>User Panel</h2>
              <ol class="breadcrumb">
                  <li>
                      <a href="/">Dashboard</a>
                  </li>
                  <li class="active">
                      <a href="/user">User Profile</a>
                  </li>
              </ol>
            </div>
        </div>

        <div class="row">
            <div class="ibox">
                <div class="ibox-title">
                    <h5>User Profile</h5>
                </div>
                @include('user.profiledetail')
                <div class="ibox-footer">
                    <a href="/user/edit" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i> Edit Profile</a>
                </div>
            </div>
        </div>
    </div>
@stop
