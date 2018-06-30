<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class newMaterialRequest extends Mailable
{
    use Queueable, SerializesModels;

    public $receiverName, $application, $evaluation, $course;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($receiverName, $application, $evaluation, $course)
    {
        $this->receiverName = $receiverName;
        $this->application = $application;
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
        $this->subject = "[IPAMS] Action Required: Application No. " . $this->application->applicationID . " Request Further Materials";
        return $this->view('emails.ActionRequired.newmaterialrequest');
    }
}
