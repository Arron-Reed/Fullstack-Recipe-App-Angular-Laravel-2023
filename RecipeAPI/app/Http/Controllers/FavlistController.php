<?php

namespace App\Http\Controllers;

use App\Models\Favourite;
use App\Models\Recipe;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;


class FavlistController extends Controller {

    public function index(Request $request)
    {
        $userID = auth()->user()['id'];
        $result = Favourite::select("recipeId")->where('user_id', $userID)->get();
        return $result ;
    }

  

    public function create(Request $request) {
        $favourite = new favourite;
        
        $favourite->recipeId = $request->recipeId;
        $favourite->user_id = $request->user_id;
        $favourite->save();
    }

/*
    public function showAll(Request $request)
    {
        $userID =  auth()->user()['id'];
        $lists = RecipeList::where('userID', $userID)->get();
        return $lists ;
    }





    public function store(Request $request)
    {
        $newList = false;

        if ($request['name'] !== '') {
            $newList = RecipeList::create([
                'name' => $request['name'],
                'userID' => auth()->user()['id'],
                'recipes' => json_encode([])
            ]);
        }
  
        return $newList;
    }





    public function show($id)
    {
        return RecipeList::find($id);
    }

    public function getRecipeLists($id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($recipeLists, 200);
        } else {
            return response()->json([
                "message" => "User not found"
            ], 400);
        }
    }


    public function destroy($id)
    {
        return RecipeList::destroy($id);
    }
*/



}
