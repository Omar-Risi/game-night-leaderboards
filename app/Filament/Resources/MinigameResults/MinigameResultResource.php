<?php

namespace App\Filament\Resources\MinigameResults;

use App\Filament\Resources\MinigameResults\Pages\CreateMinigameResult;
use App\Filament\Resources\MinigameResults\Pages\EditMinigameResult;
use App\Filament\Resources\MinigameResults\Pages\ListMinigameResults;
use App\Filament\Resources\MinigameResults\Schemas\MinigameResultForm;
use App\Filament\Resources\MinigameResults\Tables\MinigameResultsTable;
use App\Models\MinigameResult;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class MinigameResultResource extends Resource
{
    protected static ?string $model = MinigameResult::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return MinigameResultForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MinigameResultsTable::configure($table);
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
            'index' => ListMinigameResults::route('/'),
            'create' => CreateMinigameResult::route('/create'),
            'edit' => EditMinigameResult::route('/{record}/edit'),
        ];
    }
}
