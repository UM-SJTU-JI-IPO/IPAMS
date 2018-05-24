@extends('layouts.app')

@section('title', 'Users Management Panel')

@section('content')

    <div class="wrapper wrapper-content animated fadeInRight ">

        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>E-commerce product list</h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a>E-commerce</a>
                    </li>
                    <li class="active">
                        <strong>Product list</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">

            </div>
        </div>
        <div class="row">
            <div class="ibox">
                <div class="ibox-content">
                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                        <tr>

                            <th data-toggle="true">Product Name</th>
                            <th data-hide="phone">Model</th>
                            <th data-hide="all">Description</th>
                            <th data-hide="phone">Price</th>
                            <th data-hide="phone,tablet" >Quantity</th>
                            <th data-hide="phone">Status</th>
                            <th class="text-right" data-sort-ignore="true">Action</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                Example product 1
                            </td>
                            <td>
                                Model 1
                            </td>
                            <td>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has a more-or-less normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like readable English.
                            </td>
                            <td>
                                $50.00
                            </td>
                            <td>
                                1000
                            </td>
                            <td>
                                <span class="label label-primary">Enable</span>
                            </td>
                            <td class="text-right">
                                <div class="btn-group">
                                    <button class="btn-white btn btn-xs">View</button>
                                    <button class="btn-white btn btn-xs">Edit</button>
                                </div>
                            </td>
                        </tr>



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
                        @foreach( $users as $user)
                            <tr>
                                {{--@foreach( $user as $attr)--}}
                                <td>
                                    {{--{{ $attr }}--}}
                                    {{ $user->name }}
                                </td>
                                {{--@endforeach--}}
                            </tr>
                        @endforeach
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection


<!-- FooTable -->
<script src="{!! asset('js/app.js') !!}"></script>

