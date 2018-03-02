@extends('listener.footer.footer')


<!-- Content -->
@section('content')

<!-- <img src="../public/picture/loading/loading.jpg" class="hidden" id="loading"> -->
<div class="container songDetail">
	<div class="row artistPicture"></div>
	<div class="row artistData">



	</div>
	
	<div class="row">
		<!--AlbumDetail-->
		<table class="table">
			<tbody class="AlbumSong">

		      </tbody>
		</table>
		<!--Ends AlbumDetail-->	
	</div>
	
	



  	<!--TABS-->
  <div class="tab-content hidden ArtistDetail">
    <div id="s1" class="tab-pane fade in active ">
      <!-- <h3 >Song</h3>-->
		      <table class="table">
		    <!-- <thead>
		      <tr>
		        <th>Firstname</th>
		        <th>Lastname</th>
		        <th>Email</th>
		      </tr>
		    </thead> -->
		    <tbody class="ArtistSong">
      
      
    		</tbody>
  </table>
    </div>
    <div id="s2"  class="tab-pane fade ArtistAlbum">
      <!-- <h3>Album</h3> -->
      
    </div>
    
  </div>

  <div class="modal fade" id="addToPlaylist" role="dialog" style="margin-top:14%;">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
         
          <h4 class="modal-title">Save to My Playlist</h4>
        </div>
        <div class="modal-body" id="playlistList">
        	<!-- <a href="#/">
          <div class="row">
          	<div class="col-lg-6">
		     <img class="img-thumbnail" src="../../webserve/public/uploads/artist/5/profile/picture/images.png" style="width:100px;height:100px;">
		   </div>
		   <div class="col-lg-6">
		     <div class="row">Playlist A</div>
		     <div class="row">10 songs</div>
		   </div>
          </div>
          </a> -->
        </div>
        <div class="modal-footer">
          
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>

</div>




@endsection



