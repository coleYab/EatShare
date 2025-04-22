<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreRecepieRequest;
use App\Http\Requests\UpdateRecepieRequest;
use App\Models\Recepie;
use App\Models\Ingredient;
use App\Models\Step;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RecepieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recepies = Recepie::with(['user', 'steps', 'ingredients'])->get();
        return Inertia::render('recepie/index', [
            'recepies' => $recepies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('recepie/create', [
            'edit' => false
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRecepieRequest $request)
    {
        $data = $request->validated();
        
        DB::transaction(function () use ($data) {
            // Create the recepie
            $recepie = Recepie::create([
                'title' => $data['title'],
                'user_id' => auth()->id(), // Or however you're handling users
                'description' => $data['description'],
                'image' => $data['image'],
                'preparation_time' => $data['preparation_time'],
                'cooking_time' => $data['cooking_time'],
                'serving' => $data['servings'],
                'difficulty' => $data['difficulty'],
            ]);
    
            // Create ingredients
            foreach ($data['ingredients'] as $ingredient) {
                $recepie->ingredients()->create([
                    'name' => $ingredient['name'],
                    'amount' => $ingredient['amount'],
                    'unit' => $ingredient['unit'],
                ]);
            }
    
            // Create steps
            foreach ($data['steps'] as $step) {
                $recepie->steps()->create([
                    'description' => $step['description'],
                    'title' => $step['title'] ?? 'Step', // optional title
                    'duration' => $step['time'],
                ]);
            }
        });
    

        return Inertia::render('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Recepie $recepie)
    {
        $recepie = $recepie->loadMissing('user');
        $recepie = $recepie->loadMissing('ingredients');
        $recepie = $recepie->loadMissing('steps');
        return Inertia::render('recepie/show', [
            'recepie' => $recepie,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recepie $recepie)
    {
        $recepie->loadMissing('steps');
        $recepie->loadMissing('ingredients');
        return Inertia::render('recepie/create', [
            'recepie' => $recepie,
            'edit' => true
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecepieRequest $request, Recepie $recepie)
    {  
    $data = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'image' => 'nullable|string', // or image if uploading
        'preparation_time' => 'required|integer',
        'cooking_time' => 'required|integer',
        'servings' => 'required|integer',
        'difficulty' => 'required|string',
        'ingredients' => 'array|required',
        'ingredients.*.name' => 'required|string',
        'ingredients.*.amount' => 'required|numeric',
        'ingredients.*.unit' => 'required|string',
        'steps' => 'array|required',
        'steps.*.description' => 'required|string',
        'steps.*.title' => 'nullable|string',
        'steps.*.time' => 'required|integer',
    ]);

    DB::transaction(function () use ($data, $recepie) {
        // Update recipe
        $recepie->update([
            'title' => $data['title'],
            'description' => $data['description'],
            'image' => $data['image'],
            'preparation_time' => $data['preparation_time'],
            'cooking_time' => $data['cooking_time'],
            'serving' => $data['servings'],
            'difficulty' => $data['difficulty'],
        ]);

        // Remove old ingredients and steps
        $recepie->ingredients()->delete();
        $recepie->steps()->delete();

        // Recreate ingredients
        foreach ($data['ingredients'] as $ingredient) {
            $recepie->ingredients()->create([
                'name' => $ingredient['name'],
                'amount' => $ingredient['amount'],
                'unit' => $ingredient['unit'],
            ]);
        }

        // Recreate steps
        foreach ($data['steps'] as $step) {
            $recepie->steps()->create([
                'description' => $step['description'],
                'title' => $step['title'] ?? 'Step',
                'time' => $step['time'],
            ]);
        }
    });

    return to_route('dashboard')->with('success', 'Recipe updated successfully!');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recepie $recepie)
    {
        $recepie->delete();
        return redirect()->to('/recepie');
    }
}
