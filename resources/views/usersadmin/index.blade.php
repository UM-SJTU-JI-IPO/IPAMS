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
                    <table class="table table-stripped table-hover">
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
                                <td>
                                    {{ $user->userType }}
                                </td>
                                {{--<td>
                                    <span class="label label-primary">Enable</span>
                                </td>--}}
                                <td>
                                    <div class="text-right">
                                        @if ($user->userType != 'admin')
                                            <button class="btn-primary btn btn-xs">Set as Admin</button>
                                        @else
                                            <button class="btn-warning btn btn-xs">Revoke Admin</button>
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

