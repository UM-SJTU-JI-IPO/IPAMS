<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function profile()
    {
        return view('user/profile');
    }

    public function edit()
    {
        return view('user/edit');
    }

    public function update()
    {
        return redirect()->route('user');
    }
}
