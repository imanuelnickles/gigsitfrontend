@extends('artist.layouts.artist')


<!-- Main Content -->
@section('content')
<div class="container">



  <div class="panel panel-color">
    <div class="panel-heading panel-head-color">Album Manager</div>
    <div class="panel-body">

      <form class="form-horizontal" role="form" enctype="multipart/form-data" action="upload">
          <div class="form-group form-group-md">
            <label class="col-md-2 control-label" for="sm">Album Title</label>
            <div class="col-sm-3">
              <input class="form-control" id="albumTitle" type="text" >
            </div>
            <div class="col-sm-6">
              <span id="albumTitleError"></span>
            </div>
          </div>

          <div class="form-group form-group-md">
            <label class="col-md-2 control-label" for="sm">Album Picture</label>
            <div class="col-sm-3">
              <input class="form-control" id="albumPicture" name="albumPicture" accept="image/*" type="file" >
            </div>
            <div class="col-sm-6">
              <span id="albumPictureError"></span>
            </div>
          </div>

          <div class="form-group form-group-md">
            <label class="col-md-2 control-label" for="sm">Genre</label>
            <div class="col-sm-3">
            <select class="form-control" id="songGenre" name="songGenre">
                <option value="">--Select Genre--</option>
                <option value="Pop">Pop</option>
                <option value="Jazz">Jazz</option>
                <option value="Reggae">Reggae</option>
                <option value="Blues">Blues</option>
                <option value="Rock">Rock</option>
            </select>
              
            </div>
            <div class="col-sm-6">
              <span id="genreError"></span>
            </div>
          </div>
          
          
          <div class="form-group form-group-md">
            <label class="col-md-2 control-label" for="sm">Song(s)</label>
            <div class="col-sm-3">
              <input class="form-control" id="songFile" name="songFile[]" type="file" accept="audio/mp3" multiple >
            </div>
            <div class="col-sm-6">
              <span id="songFileError"></span>
            </div>
          </div>
                  <div class="form-group form-group-md"> 
                    <div class="col-md-2"></div>
                    
                      <div class="col-md-10">
                  <table class="table ">
                    <thead >
                      <tr>
                        <th class="col-md-1">No.</th>
                        <th class="col-md-3">Song Name</th>
                         <th>Size</th>
                        <th >Status</th>
                      </tr>
                    </thead>
                    <tbody id="newRow">
                    
                    </tbody>
                  </table>
             </div>
   </div>
                
   <div class="form-group form-group-md">
         <div class="col-sm-2">
          </div>
          <div class="col-sm-8">
            <label class=" control-label" for="sm">Total Song(s)</label>
            
              <label class="control-label" id="totalSongs" for="sm">0</label>

          </div>
            
            
          </div>

   <div class="form-group form-group-md"> 
    <div class="col-sm-2">
    </div>
    <div class="col-sm-8">
        <input type="checkbox" id="checkTerm">
      <!-- Trigger the modal with a button -->
        <label>I agree with</label>
        <a  id="tnc" data-toggle="modal" data-target="#myModal" style="cursor:pointer">
        Terms & Condition
        </a>

    </div>

    </div>

    <div class="form-group form-group-md"> 
    <div class="col-sm-2">
    </div>
    <div class="col-lg-4">
                  <div class="progress ">
                    <div class="progress-bar progress-bar-striped active " id="progressUpload" role="progressbar"
                    aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:0%;color:black">
                      0%
                    </div>
                  </div>
                  </div>
      <div class="col-sm-2">
              <span id="uploadError"></span>
            </div>

    </div>

     <div class="form-group form-group-md"> 
    <div class="col-sm-2">
    </div>
   <div class="col-sm-3">
      
      <!-- Trigger the modal with a button -->
        <button type="button" id="upload" class="btn  btn-md new-album-button" >
        Upload &nbsp
        <i class="fa fa-btn glyphicon glyphicon-upload"> </i>

        </button>
         <button type="button" class="btn btn-md new-album-button " id="cancelUpload"  >
        Cancel &nbsp
        <i class="fa fa-btn glyphicon glyphicon-remove"> </i>

        </button>

    </div>

     
     
    </div>


   


            </div>
      
      </form>
         
       <!--
    <div class="col-sm-4">
      <h3>Column 3</h3> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-2">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-2">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-2">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-2">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-10">
            
    </div>
    -->
   





    </div>

  </div>






<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Term & Condition</h4>
      </div>
      <div class="modal-body" id="tncContent">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>




</div>



@endsection