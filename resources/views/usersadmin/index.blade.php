@extends('layouts.app')

@section('title', 'Users Management Panel')

@section('content')
    <div class="wrapper wrapper-content animated fadeInRight ">

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
                        <strong>Users Index</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">

            </div>
        </div>
        <div class="row">
            <div class="ibox">
                <div class="ibox-content">
                    <table class="footable table table-stripped table-hover" data-page-size="15">
                        <thead>
                        <tr>
                            {{--<th data-visible="false">ID</th>--}}
                            {{--<th data-visible="false">UUID</th>--}}
                            <th>SJTU ID</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Student Type</th>
                            <th>User Type</th>
                            <th class="text-right" data-sort-ignore="true">Action</th>

                        </tr>
                        </thead>
                        <tbody>
                        @foreach( $users as $user)
                            <tr>
                                <td>
                                    {{ $user->sjtuID }}
                                </td>
                                <td>
                                    {{ $user->name }}
                                </td>
                                <td>
                                    {{ $user->class }}
                                </td>
                                <td>
                                    {{ $user->studentType }}
                                </td>
                                <td id="{{ $user->sjtuID }}userType">
                                    {{ $user->userType }}
                                </td>
                                {{--<td>
                                    <span class="label label-primary">Enable</span>
                                </td>--}}
                                <td>
                                    <div class="text-right action">
                                        @if ($user->userType != 'admin')
                                            <button class="btn-primary btn btn-xs setAdmin" value="{{ $user->sjtuID }}-{{ $user->name }}">Set as Admin</button>
                                        @else
                                            <button class="btn-warning btn btn-xs revokeAdmin" value="{{ $user->sjtuID }}-{{ $user->name }}">Revoke Admin</button>
                                        @endif
                                        <button class="btn-danger btn btn-xs">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        @endforeach

                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="6">
                                <ul class="pagination pull-right"></ul>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                    <div class="modal fade" id="setAdminModal" tabindex="-1" role="dialog" aria-labelledby="setAdminModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <h4 class="modal-title" id="mySetAdminModalLabel">Attention</h4>
                                </div>
                                <div class="modal-body">
                                    <p style="display:inline">Do you confirm to change the user: </p>
                                    <p style="display:inline;font-weight: bold;color:purple;" id="targetAddAdminUsersID"></p>
                                    <p style="display:inline">to be an admin?</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary btn-confirm-change" value="set">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="revokeAdminModal" tabindex="-1" role="dialog" aria-labelledby="revokeAdminModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <h4 class="modal-title" id="myRevokeAdminModalLabel">Attention</h4>
                                </div>
                                <div class="modal-body">
                                    <p style="display:inline">Do you confirm to revoke the admin privilege of the user: </p>
                                    <p style="display:inline;font-weight: bold;color:purple;" id="targetRevokeAdminUsersID"></p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-warning btn-confirm-change" value="revoke">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="wrapper wrapper-content">
                    <table class="table table-bordered">
                        <tbody>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
@stop

