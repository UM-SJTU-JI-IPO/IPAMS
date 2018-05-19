@extends('layouts.app')

@section('title', 'Users Management Panel')

@section('content')
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container-fluid">
            <div class="row">
                <div class=" col-md-12 col-lg-12 ">
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
