<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserLocationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_location', function (Blueprint $table) {
            $table->increments('user_locationID');
            $table->integer('userID')->unsigned();
            $table->integer('countryID')->unsigned();
            $table->integer('cityID')->unsigned();
            $table->integer('districtID')->unsigned();

            //Foreign Key
            $table->foreign('userID')->references('userID')->on('user')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('countryID')->references('countryID')->on('country')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('cityID')->references('cityID')->on('city')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('districtID')->references('districtID')->on('district')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('user_location');
    }
}
