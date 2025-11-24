<?php

namespace App\Filament\Resources\Players\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Fieldset;
use Filament\Schemas\Schema;

class PlayerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                Fieldset::make('Player information')->schema([
                    TextInput::make("name")->label('Player Name')->placeholder('Omar Al Reesi')->columnSpanFull()->required(),
                    TextInput::make("user_name")->label('Player Name')->placeholder('Omar Al Reesi')->columnSpanFull()->required(),
                    TextInput::make("phone_number")->label('Player Name')->placeholder('Omar Al Reesi')->columnSpanFull()->required(),
                    TextInput::make("gutech_email")->label('Gutech Id')->placeholder('25-xxxx')->columnSpanFull()->required(),
                ])->columnSpanFull()
            ]);
    }
}
