<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', 'HomeController@index')->name("main");
Route::get('/minor', 'HomeController@minor')->name("minor");

Route::get('login/github', 'Auth\GithubLoginController@redirectToProvider');
Route::get('login/github/callback', 'Auth\GithubLoginController@handleProviderCallback');

Route::get('login/jaccount', 'Auth\JaccountLoginController@redirectToProvider');
Route::get('login/jaccount/callback', 'Auth\JaccountLoginController@handleProviderCallback');