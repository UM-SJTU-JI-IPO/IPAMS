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
        $this->validate(request(), [
            'newBirthday' => 'required',
            'newGender' => 'required',
            'newEmail' => 'required',
            'newMobile' => 'required',
            'newPassportNo' => 'nullable',
            'newPassportIssueDate' => 'nullable|date',
            'newPassportExpireDate' => 'nullable|date|after:newPassportIssueDate'
        ]);

        $user = Auth::user();

        $user->update([
            'birthDate' => date('d',strtotime(request('newBirthday'))),
            'birthMonth'=> date('m',strtotime(request('newBirthday'))),
            'birthYear' => date('Y',strtotime(request('newBirthday'))),
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
