<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlaylistTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('playlist', function (Blueprint $table) {
            $table->increments('playlistID');
            $table->integer('playlist_typeID')->unsigned();//FK
            $table->string('playlist_name');
            $table->integer('playlist_content')->unsigned();
            $table->integer('userID')->unsigned();//FK
            $table->integer('songID')->unsigned();//FK
            
            //Foreign Key
            $table->foreign('playlist_typeID')->references('playlist_typeID')->on('playlist_type')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('userID')->references('userID')->on('user')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('songID')->references('songID')->on('song')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('playlist');
    }
}
