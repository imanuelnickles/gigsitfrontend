<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFacebookUserRelationshipTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facebook_user_relationship', function (Blueprint $table) {
            $table->increments('facebook_user_relationshipID');
            $table->string('facebookID');
            $table->string('facebook_music_relationID');
            
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
        Schema::drop('facebook_user_relationship');
    }
}
