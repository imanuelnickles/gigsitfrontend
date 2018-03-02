<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserMusicActivityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_music_activity', function (Blueprint $table) {
            $table->increments('user_activityID');
            $table->integer('userID')->unsigned();
            $table->integer('songID')->unsigned();
            $table->dateTime('listenDate');

            //Foreign Key
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
        Schema::drop('user_music_activity');
    }
}
