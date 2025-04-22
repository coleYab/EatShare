<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RecepieController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        $user = auth()->user();
        $user->loadMissing('recepies');
        return Inertia::render('dashboard', [
            'userData' => $user
        ]);
    })->name('dashboard');

    // Route::get('/', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');


    Route::get('profile', function() {
        return Inertia::render('creators/profile');
    })->name('profile');
    
    Route::get('profile/edit', function() {
        return Inertia::render('creators/edit');
    })->name('profile');


    Route::resource(
        'recepie', RecepieController::class    
    );
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
