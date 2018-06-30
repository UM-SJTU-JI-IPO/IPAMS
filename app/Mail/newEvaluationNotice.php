<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class newEvaluationNotice extends Mailable
{
    use Queueable, SerializesModels;

    public $receiverName, $applierName, $evaluation, $course;
    /**
     * Create a new message instance.
     *
     * @return void
     */

    public function __construct($receiverName, $applierName, $evaluation, $course)
    {
        $this->receiverName = $receiverName;
        $this->applierName = $applierName;
        $this->evaluation = $evaluation;
        $this->course = $course;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject = "[IPAMS] Action Required: Evaluation Request No. " . $this->evaluation->evaluationID . "Created";
        return $this->view('emails.ActionRequired.newevaluationnotice');
    }
}
