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
        Schema::create('favlist_recipe', function (Blueprint $table) {
            $table->bigInteger('favlist_id')->unsigned();
            $table->bigInteger('recipe_id')->unsigned();
            $table->foreign('favlist_id')
                ->references('id')
                ->on('favlists')
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
        Schema::dropIfExists('favlist_recipe');
    }
};
