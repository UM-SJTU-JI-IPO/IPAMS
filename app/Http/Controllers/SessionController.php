<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
    public function create()
    {
        auth()->login();

        return redirect()->route('main');
    }

    public function destroyer()
    {
        auth()->logout();

        return redirect()->route('main');
    }
}
