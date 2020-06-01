<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => 'client_credentials'], function () {
    Route::get('logout', 'AuthController@logout');
    });

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('/login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::get('admin', 'AdminController@index');
    Route::get('cat', 'CategoriesController@index');
    Route::post('catg', 'CategoriesController@store');
    Route::post('uploadi', 'ImageController@store');

    Route::group([
      'middleware' => 'auth:api'
    ], function() {

        Route::get('user', 'AuthController@user');
    });
});
