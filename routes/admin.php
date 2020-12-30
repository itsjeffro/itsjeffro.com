<?php

use Illuminate\Support\Facades\Route;

Route::get('/{view?}', 'Admin\DashboardController@index')
    ->where('view', '(.*)')
    ->name('admin.dashboard');