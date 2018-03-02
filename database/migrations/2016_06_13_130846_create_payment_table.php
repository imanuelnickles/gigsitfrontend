<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment', function (Blueprint $table) {
            $table->increments('paymentID');
            $table->integer('payment_typeID')->unsigned();
            $table->date('payment_date');
            $table->integer('payment_total')->unsigned();
            $table->string('payment_status');

        
            //Foreign Key
            $table->foreign('payment_typeID')->references('payment_typeID')->on('payment_type')->onDelete('cascade')->onUpdate('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('payment');
    }
}
