<?php

namespace App\Observers;

use App\Models\MinigameResult;

class PlayerMinigameResultObserver
{
    /**
     * Handle the MinigameResult "created" event.
     */
    public function created(MinigameResult $minigameResult): void
    {
        $player = $minigameResult->player->fresh(); // Get fresh data from DB
        $totalPoints = $player->results()->sum('score');

        $player->total_score = $totalPoints;
        $player->save();
    }

    /**
     * Handle the MinigameResult "updated" event.
     */
    public function updated(MinigameResult $minigameResult): void
    {
        $player = $minigameResult->player->fresh(); // Get fresh data from DB
        $totalPoints = $player->results()->sum('score');

        $player->total_score = $totalPoints;
        $player->save();
    }

    /**
     * Handle the MinigameResult "deleted" event.
     */
    public function deleted(MinigameResult $minigameResult): void
    {
        $player = $minigameResult->player->fresh(); // Get fresh data from DB
        $totalPoints = $player->results()->sum('score');

        $player->total_score = $totalPoints;
        $player->save();
    }

    /**
     * Handle the MinigameResult "restored" event.
     */
    public function restored(MinigameResult $minigameResult): void
    {
        //
    }

    /**
     * Handle the MinigameResult "force deleted" event.
     */
    public function forceDeleted(MinigameResult $minigameResult): void
    {
        //
    }
}
