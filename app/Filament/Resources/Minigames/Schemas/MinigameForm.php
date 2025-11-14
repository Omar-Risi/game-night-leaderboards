<?php

namespace App\Filament\Resources\Minigames\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Fieldset;
use Filament\Schemas\Schema;

class MinigameForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Fieldset::make('Minigame Information')->schema([
                    TextInput::make('minigame')
                        ->label('Name')
                        ->required()
                        ->columnSpanFull(),
                    TextInput::make('score')
                        ->label('Default Score')
                        ->required()
                        ->numeric()
                        ->default(0)
                        ->columnSpanFull(),
                ])
                        ->columnSpanFull(),
            ]);
    }
}
