@extends('login_register.login_register')


<!-- Main Content -->
@section('content')
		
<ul class="nav nav-tabs nav-justified register-section">
  <li class="active" id="listener-register"><a data-toggle="tab" href="#home">Music Listener</a></li>
  <li id="artist-register"><a data-toggle="tab" href="#menu1">Artist</a></li>
  
</ul>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">

    	<div class="mat-div">
            <label for="email" class="mat-label">Username</label>
            <input id="usernamereg" class="mat-input" type="text" name="username" />
          </div>
          <div class="mat-div">
            <label for="email" class="mat-label">Email</label>
            <input id="emailreg" class="mat-input" type="email" name="email" />
          </div>
          <div class="mat-div">
            <label for="email" class="mat-label">Password</label>
            <input id="passreg" class="mat-input" type="password" name="password" />
          </div>

          <div class="mat-div">
            <label for="email" class="mat-disable">Birth of Date</label>
            <input id="bodreg" class=" form-control" type="date"  />
          </div>

          <input id="rolereg" name="roleID" type="hidden" value="2"/>
          <!--Gender Section -->
          <select id="genderreg" style="width:100%;margin-top:20px;" >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
          </select>
       
         <!--Province Section -->
          <select  id="provincereg" style="width:100%" >
                <option  value="">-- Province --</option>

          </select>
          <!--City Section -->
          <select disabled id="cityreg" style="width:100%" >
                <option value="">-- City --</option>
               
          </select>


  </div>
  <div id="menu1" class="tab-pane fade">
    		<div class="mat-div">
            <label for="email" class="mat-label">Username</label>
            <input id="artistusernamereg" class="mat-input" type="text" name="username" />
          </div>
           <div class="mat-div">
            <label for="email" class="mat-label">Band Name</label>
            <input id="artistbandreg" class="mat-input" type="text" name="password" />
          </div>
          <div class="mat-div">
            <label for="email" class="mat-label">Email</label>
            <input id="artistemailreg" class="mat-input" type="email" name="email" />
          </div>
         
          <div class="mat-div" style="margin-bottom:5%">
            <label for="email" class="mat-label">Password</label>
            <input id="artistpassreg" class="mat-input" type="password" name="password" />
          </div>
  </div>
 
</div>
          <div class="row">
          <div class="col-md-2"> <input type="checkbox" id="agree-button" value=""></div>
          <div class="col-md-10" style="margin-left:-8%">I agree with term & conditions </div> 
            
          </div>
          	
          	
          
          	
          	
         
         
          <div class="row row-centered">
            <button id="create">Register</button>
          </div>
          
        
@endsection