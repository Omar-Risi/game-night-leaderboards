<?php

namespace App\Filament\Resources\MinigameResults\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class MinigameResultForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('player_id')
                    ->relationship('player', 'user_name')
                    ->searchable()
                    ->preload()
                    ->required(),
                Select::make('minigame_id')
                    ->relationship('minigame', 'minigame')
                    ->required(),
                TextInput::make('score')
                    ->required()
                    ->numeric(),
            ]);
    }
}
