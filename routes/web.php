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

Auth::routes();

Route::get('/', 'HomeController@index')->name("main");
Route::get('/dashboard', 'HomeController@dashboard')->name("dashboard");

Route::get('/user', 'UserController@profile')->name("user");
Route::get('/user/edit', 'UserController@edit')->name("editUser");
Route::post('/user/edit', 'UserController@update');

Route::get('/usersmanage', 'UserController@show')->name("usersManage");

Route::get('/login', 'Auth\LoginController@create')->name("generalLogin");

Route::get('/login/github', 'Auth\GithubLoginController@redirectToProvider');
Route::get('/login/github/callback', 'Auth\GithubLoginController@handleProviderCallback');

Route::get('/login/jaccount', 'Auth\JaccountLoginController@redirectToProvider');
Route::get('/login/jaccount/callback', 'Auth\JaccountLoginController@handleProviderCallback');

Route::get('/logout', 'SessionController@destroyer');