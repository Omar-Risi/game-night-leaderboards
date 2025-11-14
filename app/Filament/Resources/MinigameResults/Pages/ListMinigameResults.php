<?php

namespace App\Filament\Resources\MinigameResults\Pages;

use App\Filament\Resources\MinigameResults\MinigameResultResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListMinigameResults extends ListRecords
{
    protected static string $resource = MinigameResultResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
