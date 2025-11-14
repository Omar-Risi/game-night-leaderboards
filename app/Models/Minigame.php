<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Minigame extends Model
{
    protected $fillable = [
        'name',
        'score'
    ];
}
