<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

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

        /*$client = new Client();
        $res = $client->get('https://jaccount.sjtu.edu.cn/oauth2/logout?client_id=D4ao3kRItPMv9nf4e5TeNinO&retUrl=http://ipams.test/');*/
        return redirect()->route('main');
    }
}
