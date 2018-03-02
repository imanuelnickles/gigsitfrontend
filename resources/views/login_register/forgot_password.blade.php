@extends('login_register.login_register')


<!-- Main Content -->
@section('content')
      	 <div class="row row-centered">
          <span style="font-size:18px;color:#FFCC33">Forgot your password?</span>
        </div>

        <div class="wrap">  
          <div class="mat-div">
            <label for="email" class="mat-label">Email</label>
            <input id="emailForgotPassword" class="mat-input" type="email" name="email" />
          </div>
          
        </div>
        <div class="row row-centered">
          <button id="submitForgotPassword">submit</button>
        </div>
        
        
@endsection