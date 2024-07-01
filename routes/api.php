<?php

use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\MailboxController;
use App\Http\Controllers\Api\V1\NewsTypesController;
use Illuminate\Support\Facades\Route;

// api/v1
Route::prefix('v1')->group(function () {
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('news-types', NewsTypesController::class);
    Route::apiResource('mailbox', MailboxController::class);
});
