<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('users')->group(function () {
    Route::get('/', 'Api\UserController@index');
    Route::get('/{user}', 'Api\UserController@show');
    Route::post('/', 'Api\UserController@store');
    Route::put('/{user}', 'Api\UserController@update');
    Route::delete('/{user}', 'Api\UserController@destroy');
});

Route::prefix('roles')->group(function () {
    Route::get('/', 'Api\RoleController@index');
    Route::get('/{role}', 'Api\RoleController@show');
    Route::post('/', 'Api\RoleController@store');
    Route::put('/{role}', 'Api\RoleController@update');
    Route::delete('/{role}', 'Api\RoleController@destroy');
});

Route::prefix('posts')->group(function () {
    Route::get('/', 'Api\PostController@index');
    Route::get('/{post}', 'Api\PostController@show');
    Route::post('/', 'Api\PostController@store');
    Route::put('/{post}', 'Api\PostController@update');
    Route::delete('/{post}', 'Api\PostController@destroy');
});
