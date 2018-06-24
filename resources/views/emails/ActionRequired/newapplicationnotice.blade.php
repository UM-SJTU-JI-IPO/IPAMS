@extends('emails.layout')

@section('content')
    Hi {{ $receiverName }}, <br><br>

    A new Course Transfer Application was submitted by <strong>{{ $applierName }}</strong>, please <a href="http://ipams.xyz">Login</a> to check.


@endsection




