<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'Admin\DashboardController@index')->name('admin.dashboard');

Route::prefix('users')->group(function () {
    Route::get('/', 'Admin\UserController@index');
    Route::get('/{user}', 'Admin\UserController@show');
    Route::post('/', 'Admin\UserController@store');
    Route::put('/{user}', 'Admin\UserController@update');
    Route::delete('/{user}', 'Admin\UserController@destroy');
});

Route::prefix('roles')->group(function () {
    Route::get('/', 'Admin\RoleController@index');
    Route::get('/{role}', 'Admin\RoleController@show');
    Route::post('/', 'Admin\RoleController@store');
    Route::put('/{role}', 'Admin\RoleController@update');
    Route::delete('/{role}', 'Admin\RoleController@destroy');
});
