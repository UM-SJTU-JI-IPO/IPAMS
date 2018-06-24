<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransferEvaluation extends Model
{
    protected $table = 'transfer_evaluations';
    protected $primaryKey = 'evaluationID';

    protected $guarded = [
        'evaluationID'
    ];

}
