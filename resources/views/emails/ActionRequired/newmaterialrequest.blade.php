@extends('emails.layout')

@section('content')
    Hi {{ $receiverName }}, <br><br>

    Your application for <br><br>

    <i>{{ $course->university }} {{ $course->courseCode }} {{ $course->courseName }}</i> <br><br>

    needs more supplimental materials.<br><br>

    The evaluator's comment is:
    <blockquote>{{ $evaluation->evaluatorComments }}</blockquote>

    Please <a href="http://ipams.xyz">Login</a> to check.


@endsection