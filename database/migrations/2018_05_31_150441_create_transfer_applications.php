<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransferApplications extends Migration
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
            $table->string('evaluationID')->nullable();
            $table->string('courseID');
            $table->string('type');
            $table->text('appComment');
            $table->string('tcafFile');
            $table->string('sjtuTransferFormFile')->nullable();
            $table->string('syllabusFile');
            $table->string('additionalMaterialsFile')->nullable();
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
