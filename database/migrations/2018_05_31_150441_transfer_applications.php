<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TransferApplications extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfer_applications', function (Blueprint $table) {
            $table->increments('applicationID');
            $table->string('sjtuID');
            $table->string('evaluationID');
            $table->string('syllabusFile');
            $table->string('applicationFormFile');
            $table->string('additionalMaterialFile');
            $table->string('evaluationProgress');
            $table->string('evaluationResult');
            $table->string('evaluationInfo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
