<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
    public function destroyer() {
        auth()->logout();

        return redirect()->route('main');
    }
}
