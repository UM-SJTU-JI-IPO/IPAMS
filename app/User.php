<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;


class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'sjtuID';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid',
        'sjtuID',
        'name',
        'class',
        'studentType',
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
        'userType',
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
