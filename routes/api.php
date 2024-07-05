<?php

use App\Http\Controllers\Api\V1\AboutController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\CommentController;
use App\Http\Controllers\Api\V1\CommentDetailsController;
use App\Http\Controllers\Api\V1\MailboxController;
use App\Http\Controllers\Api\V1\NewsController;
use App\Http\Controllers\Api\V1\NewsTypesController;
use App\Http\Controllers\Api\V1\UploadController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

// api/v1
Route::prefix('v1')->middleware('cors')->group(function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
        Route::post('change-password', [AuthController::class, 'changePassword']);
    });

    Route::group(['prefix' => 'upload'], function () {
        Route::post('file', [UploadController::class, 'upload']);
        Route::post('files', [UploadController::class, 'uploadMultiple']);
    });

    Route::apiResource('users', UserController::class);
    Route::apiResource('categories', CategoryController::class);

    Route::post('categories/sort/priority', [CategoryController::class, 'sortPriority']);
    Route::post('categories/change/display', [CategoryController::class, 'changeDisplay']);

    Route::apiResource('about', AboutController::class);
    Route::apiResource('news-types', NewsTypesController::class);
    Route::apiResource('mailbox', MailboxController::class);
    Route::apiResource('news', NewsController::class);
    Route::apiResource('comments', CommentController::class);
    Route::apiResource('replies', CommentDetailsController::class);
});
