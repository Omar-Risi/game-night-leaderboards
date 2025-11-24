<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Player extends Model
{
    //
    protected $fillable = [
        'name',
        'gutech_email',
        'user_name',
        'phone_number',
        'total_score'
    ];

    public function results(): HasMany
    {
        return $this->hasMany(MinigameResult::class);
    }

    public function getTotalPointsAttribute()
    {
        return $this->results()->sum('score');
    }
}
