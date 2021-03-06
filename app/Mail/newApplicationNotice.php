<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class newApplicationNotice extends Mailable
{
    use Queueable, SerializesModels;

    public $receiverName, $applierName, $course;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($receiverName, $applierName, $course)
    {
        $this->receiverName = $receiverName;
        $this->applierName = $applierName;
        $this->course = $course;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject = "[IPAMS] Action Required: New Course Transfer Application Created";
        return $this->view('emails.ActionRequired.newapplicationnotice');
    }
}
