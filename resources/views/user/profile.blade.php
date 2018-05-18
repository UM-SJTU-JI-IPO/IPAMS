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
                                        User Profile
                                    </h3>
                                </div>
                                <div class="panel-body">
                                    <div class="row m-b-xs">
                                        <div class="col-md-3 col-lg-3 " align="center">
                                            <img alt="User Pic" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" class="img-rounded img-responsive">
                                        </div>

                                        <div class=" col-md-9 col-lg-9 ">
                                            <table class="table table-user-information">
                                                <tbody>
                                                    <tr>
                                                        <th>Legal Name:</th>
                                                        <td>{{ Auth::user()->name }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>SJTU ID</th>
                                                        <td>{{ Auth::user()->sjtuID }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Gender</th>
                                                        <td>{{ Auth::user()->gender }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Birthday:</th>
                                                        <td>{{ Auth::user()->birthday }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Email</th>
                                                        <td>{{ Auth::user()->email }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Mobile Phone</th>
                                                        <td>{{ Auth::user()->mobile }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Identity File</th>
                                                        <td>
                                                            {{ Auth::user()->idCardType }}<br>
                                                            {{ Auth::user()->idCardNo }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class=" col-md-4 col-lg-4 ">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Passport No</th>
                                                        <td>
                                                            @if (Auth::user()->passportNo)
                                                                {{ Auth::user()->passportNo }}
                                                            @else
                                                                Please Update
                                                            @endif
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class=" col-md-4 col-lg-4 ">
                                            <table class="table">
                                                <tbody>
                                                <tr>
                                                    <th>Passport Issue Date</th>
                                                    <td>
                                                        @if (Auth::user()->passportIssueDate)
                                                            {{ Auth::user()->passportIssueDate }}
                                                        @else
                                                            Please Update
                                                        @endif
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class=" col-md-4 col-lg-4 ">
                                            <table class="table">
                                                <tbody>
                                                <tr>
                                                    <th>Passport Expire Date</th>
                                                    <td>
                                                        @if (Auth::user()->passportExpireDate)
                                                            {{ Auth::user()->passportExpireDate }}
                                                        @else
                                                            Please Update
                                                        @endif
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <a href="/user/edit" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i> Edit Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
@endsection
