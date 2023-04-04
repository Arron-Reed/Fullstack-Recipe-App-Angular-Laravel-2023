<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\Request;
use App\Models\RecipeList;

class RecipeListController extends Controller
{
    public function create(Request $request)
    {
        $fields = $request->validate([
            'recipeList_name' => 'required|string',
            'user_id' => 'required|bigint',
        
        ]);
        $recipeLists = RecipeList::create([
            'recipeList_name' => $fields['recipeList_name'],
            'user_id' => $fields['user_id'],
        ]);

        $response = [
          
        ];

        return response($response, 201);

    }
}
