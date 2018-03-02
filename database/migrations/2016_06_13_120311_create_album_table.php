<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlbumTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('album', function (Blueprint $table) {
            $table->increments('albumID');
            $table->integer('artistID')->unsigned();
            $table->string('album_name');
            $table->time('album_duration');
            $table->string('album_picture');
            $table->integer('album_content')->unsigned();
           

        
            //Foreign Key
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
        Schema::drop('album');
    }
}
