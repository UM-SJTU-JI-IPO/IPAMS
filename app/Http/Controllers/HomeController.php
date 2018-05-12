<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
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
