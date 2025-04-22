<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Ingredient;
use App\Models\Recepie;
use App\Models\Step;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ])->each(function ($user) {
            Recepie::factory(10)->create([
                'user_id' => $user->id,
            ])->each(function ($recepie) {
                // Attach 3-6 ingredients per recipe
                Ingredient::factory(rand(3, 6))->create([
                    'recepie_id' => $recepie->id,
                ]);
    
                // Attach 2-5 steps per recipe
                Step::factory(rand(2, 5))->create([
                    'recepie_id' => $recepie->id,
                ]);
            });
        });
    }
}
