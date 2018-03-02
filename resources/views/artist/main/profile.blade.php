@extends('artist.layouts.artist')


<!-- Main Content -->
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-color" >
            	<div class="panel-heading panel-head-color">  Artist Profile  </div>
            	<div class="panel-body ">

            	<div class="row">
            		<div class="col-md-3" >
            			<img id="artistPic" class="img-circle artistPic" style="" src="">
                        </div>
                        <div class="col-md-4" >
                              <div class="row">
                                    <span>Image</span>
                              </div>
                              <div class="row">
                                    <input type="file" id="updateImg" class="form-control file-background" accept="image/.jpg">
                              </div>
                        </div>
                        
                        
            	</div>
                  
                  <div class="row artist-profile">
                        <div class="col-md-3" >
                             Username

                        </div>
                        <div class="col-md-4" >
                              <input type="text"  class="usernameArea form-control" id="artistUsername">

                        </div>
                  </div>

                  <div class="row artist-profile">
                        <div class="col-md-3" >
                              Email

                        </div>
                        <div class="col-md-4" >
                              <span id="artistEmail"></span>
                              
                              
                        </div>
                  </div>

            	<div class="row artist-profile">
            		<div class="col-md-3" >
                              <span>Band Name</span>
            			
            			
            			
            		</div>
                        <div class="col-md-3" >
                              
                              <span id="artistBandName"></span>
                              
                              
                        </div>
            	</div>
            	
                  
                  <div class="row artist-profile">
                        <div class="col-md-3" >
                                    New Password 

                        </div>
                        <div class="col-md-9" >
                              <input class="form-control usernameArea" type="password" id="artistNewPassword"></input> 

                        </div>
                  </div>
                  <div class="row artist-profile">
                        <div class="col-md-3" >
                                    Confirm New Password

                        </div>
                        <div class="col-md-9" >
                              <input class="form-control usernameArea" type="password" id="artistConfirmNewPassword"></input> 

                        </div>
                  </div>
                  <div class="row artist-profile">
                        <div class="col-md-3" >
                                   

                        </div>
                        <div class="col-md-2" >
                                   <button type="button" id="updateBtn" class="btn btn-update">Update</button> 

                        </div>
                        
                  </div>


            </div>
            
                
            

            </div>

           
        </div>
    </div>
</div>
@endsection
