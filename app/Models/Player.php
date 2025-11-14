<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Player extends Model
{
    //
    protected $fillable = [
        'name',
        'gutech_id',
        'total_score'
    ];

    public function results() :HasMany
    {
        return $this->hasMany(PlayerMinigameResult::class);
    }

    public function getTotalPointsAttribute()
    {
        return $this->results()->sum('score');
    }
}
