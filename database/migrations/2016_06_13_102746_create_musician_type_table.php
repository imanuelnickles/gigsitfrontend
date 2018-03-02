<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArtistTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artist', function (Blueprint $table) {
            $table->increments('artistID');

            $table->string('facebookID');
            $table->string('artist_name');
            $table->string('artist_bio');
            $table->string('artist_picture');

            //Foreign Key
            $table->foreign('facebookID')->references('facebookID')->on('facebook')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('artist');
    }
}
