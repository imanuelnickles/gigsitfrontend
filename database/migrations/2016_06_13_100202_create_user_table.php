<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->increments('userID');
            $table->string('username');
            $table->string('email');
            $table->string('password');
            $table->string('gender');
            $table->integer('roleID')->unsigned();
            $table->string('facebookID');

            //Foreign Key
            $table->foreign('roleID')->references('roleID')->on('role')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::drop('user');
    }
}
