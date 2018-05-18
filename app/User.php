<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;


class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid',
        'name',
        'studentID',
        'userType',
        'birthDate',
        'birthMonth',
        'birthYear',
        'birthday',
        'gender',
        'email',
        'mobile',
        'idCardType',
        'idCardNo',
        'passportNo',
        'passportIssueDate',
        'passportExpireDate',
        'accessToken',
        'refreshToken'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'accessToken', 'refreshToken',
    ];

}
