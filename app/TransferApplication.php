<?php

namespace App;

use App\Mail\applicationStatusChange;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;

class TransferApplication extends Model
{
    protected $table = 'transfer_applications';
    protected $primaryKey = 'applicationID';

    protected $guarded = [
        'applicationID'
    ];

    public function applier()
    {
        return $this->belongsTo('App\User',
            'sjtuID','sjtuID');
    }

    public function appliedCourse()
    {
        return $this->belongsTo('App\TransferCourse',
            'courseID','courseID');
    }

    public function assignedReviewers()
    {
        return $this->belongsToMany('App\User', 'transfer_evaluations',
                    'applicationID', 'evaluatorID',
                        'applicationID','sjtuID')
                    ->as('evaluation')
                    ->withPivot('evaluationID','applicationID','evaluatorID','evaluatorType',
                                         'evaluatorDecision','evaluatorComments','evaluationStatus',
                                         'created_at','updated_at');
    }

    public function updateProgress(String $progress) {
        $this->update([
            'evaluationProgress'   => $progress
        ]);
    }

    public function updateStatus(String $status) {
        $this->update([
            'status'   => $status
        ]);
    }

    public function emailApplier($applier, $evaluation, $course) {
        Mail::to($applier->email)
            ->queue(new applicationStatusChange(
                    $applier->name,
                    $this,
                    $evaluation,
                    $course)
            );
    }
}
