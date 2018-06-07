<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransferCourse extends Model
{
    protected $table = 'transfer_courses';
    protected $primaryKey = 'courseID';

    protected $guarded = [
        'courseID'
    ];

    public function transferApplications()
    {
        return $this->hasMany('App\TransferApplication');
    }
}
