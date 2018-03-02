<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use View;
use App\Http\Requests;

class HomeController extends Controller
{

	/*Login and Register*/
	public function Login()
	{
		return View('login_register.login');
	}

		public function Register()
	{
		return View('login_register.register');
	}

	public function forgotPassword(){
		return View('login_register.forgot_password');
	}

	/*Main Frame Loads*/
    public function index()
	{
		return view('listener.layouts.listener');
		
	}
	

}

