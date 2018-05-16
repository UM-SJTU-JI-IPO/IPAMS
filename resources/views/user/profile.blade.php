@extends('layouts.app')

@section('title', 'User Info Panel')

@section('content')
  <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 toppad" >
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Personal Information</h3>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src="https://cdn.mos.cms.futurecdn.net/98fbc1277506ce75130f959b531b9b49-970-80.jpg" class="img-rounded img-responsive"> </div>

                                        <div class=" col-md-9 col-lg-9 ">
                                            <table class="table table-user-information">
                                                <tbody>
                                                <tr>
                                                    <td>Legal Name:</td>
                                                    <td>{{ Auth::user()->name }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gender</td>
                                                    <td>{{ ucwords(Auth::user()->gender) }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Birthday:</td>
                                                    <td>{{ Auth::user()->birthday }}</td>
                                                </tr>

                                                <tr>

                                                <tr>
                                                    <td>Home Address</td>
                                                    <td>Kathmandu,Nepal</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td><a href="mailto:info@support.com">info@support.com</a></td>
                                                </tr>
                                                <td>Phone Number</td>
                                                <td>123-4567-890(Landline)<br><br>555-4567-890(Mobile)
                                                </td>

                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <span class="pull-right">
                                        <a href="/user/edit" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i></a>
                                        <a data-original-title="Remove this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="text-center m-t-lg" style="background: yellow">
                            <h1>
                                Simple example of second view
                            </h1>
                            <small>Writen in user.blade.php file.</small>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
@endsection
