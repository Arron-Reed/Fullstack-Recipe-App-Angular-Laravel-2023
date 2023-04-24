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
        
    if (!Favourite::where('recipeId', $request['favourite_recipeId'])->where('user_id', $request['user_id'])->exists())
        {
            $favourite = new favourite;
            $favourite->recipeId = $request->recipeId;
            $favourite->user_id = $request->user_id;
            $favourite->save();
        }
    }


//    public function delete(Request $request)
//    {
//        $favourite = Favourite::where("user_id", $request->userId)->where('user_id', $userID)->get();
//        return [
//            "message" => "Recipe removed from favourites"
//        ];
    }


/*
    public function destroy($id)
    {
        return RecipeList::destroy($id);
    }
*/




