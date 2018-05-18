<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

use App\Http\Controllers\Controller;
use App\User;
use UUID;

use Socialite;



class JaccountLoginController extends Controller
{
    /*
    public function __construct()
    {
        $this->middleware('auth');
    }
    */


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
        // Get user
        $provider = 'jaccount';
        $user = Socialite::driver($provider)->user();

        // OAuth One Providers
        $token = $user->token;
        $refreshToken = $user->refreshToken;

        $user = $user->user;

        // Check if signed in
        $authUser = $this->findOrCreateUser($user, $provider);

        // sign the user in
        Auth::login($authUser, true);

        // redirect to home
        //return view('home.index', compact('authUser'));
        return redirect()->route('dashboard');
    }

    private function findOrCreateUser($user, $provider)
    {
        $passportNo = null;
        if ($user['cardType'] == "01") {
            $idCardType = "PRC ID";
        } else if ($user['cardType'] == "03") {
            $idCardType = "Passport";
            $passportNo = $user['cardNo'];
        } else {
            $idCardType = "Others";
        }

        // no idea why could not use uuid as where column
        if ($authUser = User::where('sjtuID', $user['code'])->first()) {
            $authUser->update([
                'sjtuID' => $user['code'],
                'name'      => $user['name'],
                'idCardType'=> $idCardType,
                'idCardNo'  => $user['cardNo'],
            ]);

            return $authUser;
        }

        //dd($user);

        return User::create([
            'uuid'      => UUID::generate()->string,
            'sjtuID'    => $user['code'],
            'name'      => $user['name'],
            'userType'  => $user['userType'],
            'birthDate' => $user['birthday']['birthDay'],
            'birthMonth'=> $user['birthday']['birthMonth'],
            'birthYear' => $user['birthday']['birthYear'],
            'birthday'  => date($user['birthday']['birthYear'] . '-' . $user['birthday']['birthMonth'] . '-' . $user['birthday']['birthDay']),
            'gender'    => ucwords($user['gender']),
            'email'     => $user['email'],
            'mobile'    => $user['mobile'],
            'idCardType'=> $idCardType,
            'idCardNo'  => $user['cardNo'],
            'passportNo'=> $passportNo
        ]);


    }

}
