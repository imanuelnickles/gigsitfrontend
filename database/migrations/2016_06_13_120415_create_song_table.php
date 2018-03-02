<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSongTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('song', function (Blueprint $table) {
            $table->increments('songID');
            $table->integer('song_priceID')->unsigned();
            $table->integer('albumID')->unsigned();
            $table->string('song_name');
            $table->time('song_duration');
            $table->string('song_file');

        
            //Foreign Key
            $table->foreign('song_priceID')->references('song_priceID')->on('song_price')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('albumID')->references('albumID')->on('album')->onDelete('cascade')->onUpdate('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('song');
    }
}
