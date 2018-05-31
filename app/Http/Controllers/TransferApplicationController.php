<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransferApplicationController extends Controller
{
    public function index()
    {
        return view('transfercourses.myapplications');
    }

    public function create()
    {
        return view('transfercourses.newapplication');
    }
}
