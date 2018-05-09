<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

use Socialite;



class JaccountLoginController extends Controller
{
    /**
     * Redirect the user to the Jaccount authentication page.
     *
     * @return Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('jaccount')->redirect();
    }

    /**
     * Obtain the user information from Jaccount.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
        $user = Socialite::driver('jaccount')->user();

        // OAuth One Providers
        $token = $user->token;
        $refreshToken = $user->refreshToken;

        // validate the info

        // create the user

        // sign the user in

        // redirect to home

        //dd($user->token);
        dd($user);
    }
}
