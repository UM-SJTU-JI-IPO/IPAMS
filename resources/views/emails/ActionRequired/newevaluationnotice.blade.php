@extends('emails.layout')

@section('content')
    Hi {{ $receiverName }}, <br><br>

    A new Course Transfer Evaluation Request for <br><br>

    <i>{{ $course->university }} {{ $course->courseCode }} {{ $course->courseName }}</i> <br><br>

    was submitted by <strong>{{ $applierName }}</strong> and waiting for
    {{ $evaluation->evaluatorType }} {{ $evaluation->evaluationStatus }} decision
    , please <a href="http://ipams.xyz">Login</a> to check.


@endsection