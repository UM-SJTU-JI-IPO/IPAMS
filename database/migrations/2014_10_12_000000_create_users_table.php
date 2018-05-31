<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('sjtuID')->unique();
            $table->string('name');
            $table->integer('class')->nullable(); // e.g. Class of 2018
            $table->string('instituteRole')->nullable(); // e.g. Loacal, Exchange
            $table->integer('birthDate');
            $table->integer('birthMonth');
            $table->integer('birthYear');
            $table->date('birthday');
            $table->string('gender');
            $table->string('email')->unique();
            $table->string('mobile');
            $table->string('idCardType');
            $table->string('idCardNo');
            $table->string('passportNo')->nullable();
            $table->date('passportIssueDate')->nullable();
            $table->date('passportExpireDate')->nullable();
            $table->string('userType');
            $table->rememberToken();
            $table->timestamps();
            $table->primary('sjtuID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
