<?php

namespace App\Filament\Resources\MinigameResults\Pages;

use App\Filament\Resources\MinigameResults\MinigameResultResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditMinigameResult extends EditRecord
{
    protected static string $resource = MinigameResultResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
