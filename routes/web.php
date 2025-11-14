<?php

use App\Models\Player;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', ['players' => Player::orderByDesc('total_points')->take(15)->get()]);
})->name('home');

