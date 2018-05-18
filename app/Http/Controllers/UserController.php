<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\User;

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
        $user = Auth::user();
        dd(date(request('newBirthday')));
        $user->update([
            'birthDate' => date('d',request('newBirthday')),
            'birthMonth'=> date('m',request('newBirthday')),
            'birthYear' => date('Y',request('newBirthday')),
            'birthday'  => request('newBirthday'),
            'gender'    => ucwords(request('newGender')),
            'email'     => request('newEmail'),
            'mobile'    => request('newMobile'),
            'passportNo'=> request('newPassportNo'),
            'passportIssueDate'=> request('newPassportIssueDate'),
            'passportExpireDate'=> request('newPassportExpireDate'),
        ]);

        $user->save();

        return redirect()->route('user');
    }
}
