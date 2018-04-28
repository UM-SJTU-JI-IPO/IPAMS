<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

        //dd($user->token);
        dd($user);
    }
}
