@extends('listener.footer.footer')


<!-- Content -->
@section('content')

<div class="container" id="playlistData" style="min-height:400px;color:white;">
 <a href="#"  class="playlist-text" onclick="CreatePlaylist()" ><h4>CREATE NEW PLAYLIST <i class=" glyphicon glyphicon-plus"></i></h4></a>

 <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog" style="margin-top:15%;">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="color:black">New Playlist</h4>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" placeholder="playlist name" id="playlistName">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" onclick="playlistSubmitName()" >OK</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="playlistEdit" role="dialog" style="margin-top:15%;">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="color:black">Enter a New Playlist Name</h4>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" placeholder="playlist name" id="playlistEditName">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" onclick="playlistSubmitEditName()" >OK</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>

    <div class="modal fade" id="playlistDeleteModal" role="dialog" style="margin-top:15%;">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="color:black">Delete Playlist</h4>
        </div>
        <div class="modal-body" style="color:black">

            Are you sure you want delete this playlist ?
                           
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" id="playlistDeleteModal1" data-dismiss="modal">Yes</button>  
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>

 <!-- <div class="row">
   <div class="col-lg-2">
     <img class="img-thumbnail" src="../../webserve/public/uploads/artist/5/profile/picture/images.png" style="width:100px;height:100px;">
   </div>
   <div class="col-lg-2">
     <div class="row">Playlist A</div>
     <div class="row">10 songs</div>
   </div>
   <div class="col-lg-4">
     <span class="glyphicon glyphicon-pencil"></span>
     <span class="glyphicon glyphicon-trash"></span>
   </div>
 </div>
 -->
 

</div>



@endsection



