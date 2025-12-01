<?php

use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'players' => Player::orderByDesc('total_score')->paginate(50)
    ]);
})->name('home');

Route::get('/signup', function () {
    return Inertia::render('signup');
})->name('signup');

Route::post('/api/signup', function (Request $request) {
    $validated = $request->validate([
        'name' => ['string','required'],
        'phone_number' => ['string','required'],
        'user_name' => ['string','required'],
        'gutech_email' => ['string','required'],
    ]);

    Player::create($validated);

    return redirect()->to('/signup')->with('success');
});
