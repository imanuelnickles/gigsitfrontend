<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserFavoriteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_favorite', function (Blueprint $table) {
            $table->increments('favoriteID');
            $table->integer('userID')->unsigned();
            $table->integer('artistID')->unsigned();

            //Foreign Key
             $table->foreign('userID')->references('userID')->on('user')->onDelete('cascade')->onUpdate('cascade');
             $table->foreign('artistID')->references('artistID')->on('artist')->onDelete('cascade')->onUpdate('cascade');
            
    
        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('user_favorite');
    }
}
