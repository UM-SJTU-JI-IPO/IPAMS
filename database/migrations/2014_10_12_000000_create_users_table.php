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
            $table->increments('id');
            $table->string('uuid')->unique();
            $table->string('studentID');
            $table->string('name');
            $table->string('userType');
            $table->integer('birthDay');
            $table->integer('birthMonth');
            $table->integer('birthYear');
            $table->string('birthday');
            $table->string('gender');
            $table->string('email')->unique();
            $table->string('mobile');
            $table->string('idCardType');
            $table->string('idCardNo');
            $table->string('accessToken');
            $table->string('refreshToken');
            $table->rememberToken();
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
        Schema::drop('users');
    }
}
