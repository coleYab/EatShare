<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Recepie extends Model
{
    /** @use HasFactory<\Database\Factories\RecepieFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'user_id',
        'description',
        'image',
        'preparation_time',
        'cooking_time',
        'serving',
        'difficulty',
    ];
    

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function ingredients() : HasMany {
        return $this->hasMany(Ingredient::class);
    }

    public function steps() : HasMany {
        return $this->hasMany(Step::class);
    }
}
