<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransferCourse extends Model
{
    protected $table = 'transfer_courses';
    protected $primaryKey = 'courseID';

    protected $fillable = [
        'university',
        'courseCode',
        'status',
        'activeTime',
        'expireTime'
    ];

    public function phone()
    {
        return $this->hasMany('App\Phone');
    }
}
