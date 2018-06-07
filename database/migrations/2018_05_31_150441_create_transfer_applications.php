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
            $table->string('courseID')->nullable();
            $table->string('type');
            $table->text('appComment')->nullable();
            $table->string('tcafFile');
            $table->string('syllabusFile');
            $table->string('additionalMaterialsFile')->nullable();
            $table->string('status');
            $table->string('evaluationProgress')->nullable();
            $table->string('evaluationResult')->nullable();
            $table->string('evaluationInfo')->nullable();
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
