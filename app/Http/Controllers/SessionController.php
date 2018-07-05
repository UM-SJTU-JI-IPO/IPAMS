<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App;

class SessionController extends Controller
{
    public function create()
    {
        auth()->login();

        return redirect()->route('main');
    }

    public function destroyer()
    {
        Auth::logout();
        $callback = env('JACCOUNT_LOGOUT_DST');
        $url = 'https://jaccount.sjtu.edu.cn/oauth2/logout?client_id=D4ao3kRItPMv9nf4e5TeNinO&retUrl=' . $callback;
        return Redirect::to($url);
    }
}
