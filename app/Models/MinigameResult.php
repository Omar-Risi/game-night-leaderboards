<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MinigameResult extends Model
{

    protected $fillable = [
        'player_id',
        'minigame_id',
        'score'
    ];

    public function player():BelongsTo {
        return $this->belongsTo(Player::class);
    }

    public function minigame():BelongsTo {
        return $this->belongsTo(Minigame::class);
    }
}
