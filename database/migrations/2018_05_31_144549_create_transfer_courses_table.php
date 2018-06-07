<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransferCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfer_courses', function (Blueprint $table) {
            $table->increments('courseID');
            $table->string('university');
            $table->string('courseCode');
            $table->string('courseName');
            $table->string('applicationID');
            $table->boolean('ifEquivalent')->default(false);
            $table->string('jiCourseCode')->nullable();
            $table->string('jiCourseName')->nullable();
            $table->string('status');
            $table->date('activeTime')->nullable();
            $table->date('expireTime')->nullable();
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
        Schema::dropIfExists('transfer_courses');
    }
}
