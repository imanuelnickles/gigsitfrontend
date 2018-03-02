
@extends('listener.footer.footer')


<!-- Content -->
@section('content')

<div class="container" id="listenerProfile">
 
    <div class="row row-centered">
      <img src="" class="img-circle" style="width:90px;height:90px" id="listenerPicture">
    </div>

    <div class="row row-centered">
      <div class="col-md-4 col-md-offset-4">
       <input type="file" id="listenerFilePicture" class="form-control" name="listenerFilePicture" accept="image/*">
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-4"><h4  style="color:white">Edit Profile</h4></div>
    </div>
    <div class="row">

    
      <div class="mat-div col-md-4 col-md-offset-4">
            <label for="email" class="mat-disable is-active is-completed">Username</label>
            <input id="listenerUsername" class="mat-input" type="text" name="username" />
          </div>
    
    </div>
    <div class="row">

    
      <div class="mat-div col-md-4 col-md-offset-4">
            <label for="email" class="mat-disable is-active is-completed">Email</label>
            <input id="listenerEmail" class="mat-input" type="text" name="email" disabled="" / style="cursor:not-allowed">
          </div>
    
    </div>

    <div class="row">

    
      <div class="mat-div col-md-4 col-md-offset-4">
            <label for="email" class="mat-disable is-active is-completed">Birth of Date</label>
            <input id="listenerBOD" class="mat-input datepicker" type="date" class="form-control"  >
          </div>
    
    </div>


    <div class="row">

    
      <div class=" col-md-4 col-md-offset-4">
            <label for="email" class="mat-disable ">Gender</label>
           <select  id="listenerGender" class="form-control select-box" style="width:100%" >
                    <option  value="">--Gender--</option>
                    <option  value="Male">Male</option>
                    <option  value="Female">Female</option>
              </select>
          </div>
    
    </div>

    
     <div class="row">
         <div class="col-md-4 col-md-offset-4">
          <!--Province Section -->
              <select  id="provincereg" class="form-control select-box" style="width:100%" >
                    <option  value="">-- Province --</option>

              </select>
        </div>
      </div>

      <div class="row">
      <div class="col-md-4 col-md-offset-4">
          <!--City Section -->
          <select disabled id="cityreg" class="form-control select-box" style="width:100%" >
                <option value="">-- City --</option>
    
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 col-md-offset-4"><h4 style="color:white">Change Password</h4></div>
    </div>

     <!-- <div class="row">

    
      <div class="mat-div col-md-4 col-md-offset-4">
            <label for="email" class="mat-label">Old Password</label>
            <input id="listenerOldPassword" class="mat-input" type="password"  >
          </div>
    
    </div> -->
     <div class="row">

    
      <div class="mat-div col-md-4 col-md-offset-4">
            <label for="email" class="mat-label">New Password</label>
            <input id="listenerNewPassword" class="mat-input" type="password" >
          </div>
    
    </div>
     <div class="row">

    
      <div class="mat-div col-md-4 col-md-offset-4">
            <label for="email" class="mat-label">Confirm New Password</label>
            <input id="listenerNewConfirmPassword" class="mat-input" type="password"  >
          </div>
    
    </div>
     
   
   
    
    <div class="row row-centered profile-button">

    
      <button onclick="listenerProfileChange()">Save changes</button>
       <button onclick="changePage('main','profile')">Cancel</button>
    
    </div>
    
 
 

</div>



@endsection



