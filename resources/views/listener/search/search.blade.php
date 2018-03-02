
@extends('listener.footer.footer')


<!-- Content -->
@section('content')

<div class="container">
  <!-- <h2>Dynamic Tabs</h2>
  <h5>N artist(s) founded related with "x"</h5>
  <ul class="nav nav-tabs nav-justified">
    <li class="active"><a data-toggle="tab" href="#searchArtist">Artist</a></li>
    <li><a data-toggle="tab" href="#se1">Album</a></li>
    <li><a data-toggle="tab" href="#se2">Song</a></li>
    
  </ul>

  <div class="tab-content">
    <div  class="tab-pane fade in active searchArtistData" id="searchArtist">
      
      
    </div>
    <div  class="tab-pane fade searchAlbumData" id="se1 ">
     
     lamabat
    </div>

    <div  class="tab-pane fade" id="se2">
      
    </div>
    </div>
    
  </div> -->
  <h1 class="explore-row-title explore-row-title-left">SEARCH RESULT</h1>
   <!-- <h5 id="searchFounded">N artist(s) founded related with "x"</h5> -->
  <ul class="nav nav-tabs nav-justified">
    <li class="active"><a data-toggle="tab" href="#home" >Artist(s)</a></li>
    <li><a data-toggle="tab" href="#menu1">Album(s)</a></li>
    <li><a data-toggle="tab" href="#menu2">Song(s)</a></li>
    
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active searchArtistData" style="color:white">
      NO RESULT FOUND
      <!-- <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
    </div>
    <div id="menu1" class="tab-pane fade searchAlbumData" style="color:white">
    NO RESULT FOUND
      <!-- <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
    </div>
    <div id="menu2" class="tab-pane fade searchSongWrap">

      <!-- <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p> -->
    <table class="table">
		    <!-- <thead>
		      <tr>
		        <th>Firstname</th>
		        <th>Lastname</th>
		        <th>Email</th>
		      </tr>
		    </thead> -->
		    <tbody class="searchSongData" style="color:white">
        
      
    		</tbody>
  </table>
    
    </div>
    
  </div>
</div>





@endsection



