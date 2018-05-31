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
        return $this->belongsTo('App\User');
    }

    public function appliedCourse()
    {
        return $this->belongsTo('App\TransferCourse');
    }
}
