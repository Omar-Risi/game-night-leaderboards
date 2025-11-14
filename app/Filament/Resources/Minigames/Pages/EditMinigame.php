<?php

namespace App\Filament\Resources\Minigames\Pages;

use App\Filament\Resources\Minigames\MinigameResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditMinigame extends EditRecord
{
    protected static string $resource = MinigameResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
