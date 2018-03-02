<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sell', function (Blueprint $table) {
            $table->increments('sellID');
            $table->integer('userID')->unsigned();
            $table->integer('songID')->unsigned();
            $table->integer('paymentID')->unsigned();
            $table->integer('discount')->unsigned();
        
            //Foreign Key
            $table->foreign('userID')->references('userID')->on('user')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('songID')->references('songID')->on('song')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('paymentID')->references('paymentID')->on('payment')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sell');
    }
}
