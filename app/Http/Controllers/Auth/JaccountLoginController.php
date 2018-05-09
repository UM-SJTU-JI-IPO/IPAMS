<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

use Auth;
use View;
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

    /*
     * Callback with User's data
     * @param  string $provider Returns either twitter or github
     * @return array User's data

    public function getUser($provider)
    {
        $user = Socialize::with($provider)->user();

        $authUser = $this->findOrCreateUser($user, $provider);

        Auth::login($authUser, true);

        return view('pages.account', compact('authUser'));
    }



     * Find User and return or Create User and return
     * @param  Object $user
     * @param  String $provider Returns either Twitter or Github
     * @return array User's data

    private function findOrCreateUser($user, $provider)
    {
        if ($authUser = User::where('id', $user->id)->first()) {
            $authUser->update([
                'id'        => $user->id,
                'avatar'    => $user->avatar,
                'name'      => $user->name,
                'username'  => $user->nickname,
                'url'       => 'http://' . $provider . '.com/' . $user->nickname
            ]);

            return $authUser;
        }

        return User::create([
            'id'        => $user->id,
            'avatar'    => $user->avatar,
            'name'      => $user->name,
            'username'  => $user->nickname,
            'url'       => 'http://' . $provider . '.com/' . $user->nickname,
            'provider'  => $provider
        ]);


    }
    */

}
