<?php

namespace App\Filament\Resources\Minigames;

use App\Filament\Resources\Minigames\Pages\CreateMinigame;
use App\Filament\Resources\Minigames\Pages\EditMinigame;
use App\Filament\Resources\Minigames\Pages\ListMinigames;
use App\Filament\Resources\Minigames\Schemas\MinigameForm;
use App\Filament\Resources\Minigames\Tables\MinigamesTable;
use App\Models\Minigame;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class MinigameResource extends Resource
{
    protected static ?string $model = Minigame::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::PuzzlePiece;

    public static function form(Schema $schema): Schema
    {
        return MinigameForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MinigamesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListMinigames::route('/'),
            'create' => CreateMinigame::route('/create'),
            'edit' => EditMinigame::route('/{record}/edit'),
        ];
    }
}
