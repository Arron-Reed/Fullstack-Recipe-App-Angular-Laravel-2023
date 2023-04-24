<?php

use App\Http\Controllers\FavlistController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Login user
Route::post('login', [AuthController::class, 'login']);
// Register user
Route::post('register', [AuthController::class, 'register']);

// If logged in...


Route::group(['middleware' => 'auth:sanctum'], function() {
    // Logout user
    Route::post('logout', [AuthController::class, 'logout']);
    // Get specific user details
    Route::get('getuser/{id}', [AuthController::class, 'getUser']);
    
    // Delete Recipe from Favourites
    Route::post('deletefavourite/{id}', [FavlistController::class, 'delete']);


    // Get Favourite recipes
    Route::get('recipelists', [FavlistController::class, 'index']);

    // Add Favourite recipe
    Route::post('favourites', [FavlistController::class, 'create']);
  
    // Create RecipeList
    //Route::post('create', [RecipeListController::class, 'create']);

    // Get specific user details
    //Route::post('recipelist', [RecipelistController::class, 'store']);





});
