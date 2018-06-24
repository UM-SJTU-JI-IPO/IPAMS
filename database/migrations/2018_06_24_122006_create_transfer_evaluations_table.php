<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransferEvaluationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfer_evaluations', function (Blueprint $table) {
            $table->increments('evaluationID');
            $table->string('applicationID');
            $table->string('evaluatorID');
            $table->string('evaluatorType')->nullable();
            $table->string('evaluatorDecision')->nullable();
            $table->text('evaluatorComments')->nullable();
            $table->string('evaluationStatus');
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
        Schema::dropIfExists('transfer_evaluations');
    }
}
