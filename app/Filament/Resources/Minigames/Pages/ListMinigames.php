<?php

namespace App\Filament\Resources\Minigames\Pages;

use App\Filament\Resources\Minigames\MinigameResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListMinigames extends ListRecords
{
    protected static string $resource = MinigameResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
