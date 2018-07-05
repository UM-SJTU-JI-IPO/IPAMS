<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

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
        $url = 'https://jaccount.sjtu.edu.cn/oauth2/logout?client_id=D4ao3kRItPMv9nf4e5TeNinO&retUrl=http://ipams.test/';
        return Redirect::to($url);
    }
}
