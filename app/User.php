<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


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
        'sjtuID',
        'name',
        'class',
        'instituteRole',
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
        'avatarPath',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

    public function transferApplications()
    {
        return $this->hasMany('App\TransferApplication');
    }

}
