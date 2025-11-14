<?php

use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', ['players' => Player::orderByDesc('total_points')->take(15)->get()]);
})->name('home');

Route::get('/signup', function () {
    return Inertia::render('signup');
})->name('signup');

Route::post('/api/signup', function (Request $request) {

    $validated = $request->validate([
        'name' => ['string','required'],
        'gutech_id' => ['string','required'],
    ]);

    Player::create($validated);

    return redirect()->to('/signup')->with('success');
});
