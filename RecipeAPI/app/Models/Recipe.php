<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Recipe extends Model
{
    use HasFactory;

    public function favlists(): HasMany
    {
        return $this->hasMany(Favlist::class);
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

}
