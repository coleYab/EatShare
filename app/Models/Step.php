<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
    /** @use HasFactory<\Database\Factories\StepFactory> */
    use HasFactory;

    
    protected $fillable = [
        'title',
        'description',
        'time',
        'recepie_id',
    ];
    

    public function recepie() {
        return $this->belongsTo(Recepie::class);
    }
}
