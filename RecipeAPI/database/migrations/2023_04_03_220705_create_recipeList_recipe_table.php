<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recipeList_recipe', function (Blueprint $table) {
            $table->bigInteger('recipeList_id')->unsigned();
            $table->bigInteger('recipe_id')->unsigned();
            $table->foreign('recipeList_id')
                ->references('id')
                ->on('recipeLists')
                ->onDelete('cascade');
            $table->foreign('recipe_id')
                ->references('id')
                ->on('recipes')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipeList_recipe');

    }
};
