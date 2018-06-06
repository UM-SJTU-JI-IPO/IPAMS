<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransferApplicationController extends Controller
{
    public function index()
    {
        return view('transfercourses.myapplications');
    }

    public function newApp()
    {
        return view('transfercourses.newapplication');
    }

    public function create()
    {

    }

}
