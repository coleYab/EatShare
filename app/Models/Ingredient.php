<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    /** @use HasFactory<\Database\Factories\IngredientFactory> */
    use HasFactory;


    protected $fillable = [
        'name',
        'amount',
        'unit',
        'recepie_id',
    ];

    public function recepie() {
        return $this->belongsTo(Recepie::class);
    }
}
