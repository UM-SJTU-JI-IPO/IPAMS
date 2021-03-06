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

Route::get('/usersadmin', 'UsersManageController@index')->name("usersAdmin");
Route::get('/usersadmin/{user_id}','UsersManageController@show');
Route::put('/usersadmin/{user_id?}','UsersManageController@update');
Route::post('/usersadmin/{user_id}/role','UsersManageController@updateRole');

//Route::get('/transferCourses', 'TransferApplicationController@panel')->name("transferPanel");
Route::get('/transferCourses/allCourses','TransferApplicationController@listCourses')->name("allTransferCourses");
Route::get('/transferCourses/newApplication','TransferApplicationController@newApp')->name("newTransferApplication");
Route::post('/transferCourses/newApplication','TransferApplicationController@create')->name("createTransferApplication");
Route::get('/transferCourses/myApplication','TransferApplicationController@index')->name("myTransferApplications");
Route::get('/transferCourses/application/{applicationID}','TransferApplicationController@show')->name("applicationsDetail");

Route::get('/transferCourses/myEvaluation','TransferEvaluationController@index')->name("myCourseTransferEvaluations");
Route::get('/transferCourses/myEvaluation/{evaluationID}','TransferEvaluationController@show')->name("currentEvaluation");
Route::post('/transferCourses/myEvaluation/{evaluationID}','TransferEvaluationController@update')->name("updateEvaluation");

Route::get('/login', 'Auth\LoginController@create')->name("generalLogin");

Route::get('/login/github', 'Auth\GithubLoginController@redirectToProvider');
Route::get('/login/github/callback', 'Auth\GithubLoginController@handleProviderCallback');

Route::get('/login/jaccount', 'Auth\JaccountLoginController@redirectToProvider');
Route::get('/login/jaccount/callback', 'Auth\JaccountLoginController@handleProviderCallback');

Route::get('/logout', 'SessionController@destroyer');

/*Route::get('/mailable', function () {
    return new App\Mail\newApplicationNotice(Auth::user()->name, '一个人');
});*/