<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Recipe extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class, 'recipe_user', 'recipe_id', 'user_id');
    }

}
