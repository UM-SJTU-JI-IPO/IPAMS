<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransferApplication extends Model
{
    protected $table = 'transfer_applications';
    protected $primaryKey = 'applicationID';

    protected $guarded = [
        'applicationID'
    ];

    public function applier()
    {
        return $this->belongsTo('App\User','sjtuID','sjtuID');
    }

    public function appliedCourse()
    {
        return $this->belongsTo('App\TransferCourse','courseID','courseID');
    }

    public function assignedReviewers()
    {
        return $this->belongsToMany('App\User', 'transfer_evaluations', 'applicationID', 'evaluatorID','applicationID','sjtuID');
    }
}
