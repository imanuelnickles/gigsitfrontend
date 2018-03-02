@extends('artist.layouts.artist')


<!-- Main Content -->
@section('content')
<div class="container" id="manage-table">
	<!--MANAGE SONG COMPONENTS-->
    <div class="row ">
        <div class="col-md-12  ">
        
            <div class="panel panel-color">

            	<div class="panel-heading manageTitle panel-head-color">
            		Album Manager
            	</div>
              
              
            	<div class="panel-body manageSong manageAlbum " >
                  <div class="container ">

            		  <div class="row add-new-album">

                    <button id="add-new-album" class="btn new-album-button">Upload New Album(s)</button>
                  </div>

                  </div>
                </div>
                <div class="panel-body ">
                    <div class="row manageButton"></div>
                </div>
            
        </div>
    </div>

</div>


<div class="modal fade" id="myModal" style="margin-top:15%" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Delete Album</h4>
        </div>
        <div class="modal-body">

            Are you sure you want delete this album ?
                           
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" id="modalYes" data-dismiss="modal">Yes</button>  
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>

  <div class="modal fade" id="myModal1" style="margin-top:15%" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Delete Song</h4>
        </div>
        <div class="modal-body">

            Are you sure you want delete this song ?
                           
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" id="modalYes1" data-dismiss="modal">Yes</button>  
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>
@endsection
