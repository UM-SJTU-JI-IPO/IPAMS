
@extends('emails.layout')

@section('content')
Hi {{ $user->name }},
<br>
<br>
Welcome to IPAMS. IPAMS stands for International Program Application and Management System.
This email is the confirmation of your first time login.

@endsection

