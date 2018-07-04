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
          @include('user.profiledetail')
        </div>
    </div>
@stop
