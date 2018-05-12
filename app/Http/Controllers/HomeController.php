<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index']);
    }

    public function index()
    {
        return view('home/index');
    }

    public function user()
    {
        return view('home/user');
    }

    public function dashboard()
    {
        return view('home/dashboard');
    }
}
