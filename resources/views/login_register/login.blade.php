@extends('login_register.login_register')


<!-- Main Content -->
@section('content')
      
        <div class="wrap">  
          <div class="mat-div">
            <label for="email" class="mat-label">Email</label>
            <input id="email" class="mat-input" type="email" name="email" />
          </div>
          <div class="mat-div">
            <label for="password" class="mat-label ">Password</label>
            <input id="password" class="mat-input" type="password" name="password" />
          </div>
        </div>
         
        <div class="row row-centered">
          <button id="submit">login</button>
        </div>
       <div class="row row-centered" style="margin-top:2%">
          <span><a class="link" href={{ url('forgotpassword')}} >Forgot your password?</a></span>
          <br>
         Don't have account?<a class="link" href={{ url('register')}}>Register here !</a>
        </div>
        
        
@endsection