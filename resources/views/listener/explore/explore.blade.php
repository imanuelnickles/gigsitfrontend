  @extends('listener.footer.footer')


  <!-- Content -->
  @section('content')







 <div class="container explore">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <!-- <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol> -->

    <!-- Wrapper for slides -->
    <div class="carousel-inner" id="slider-ads" role="listbox">
      <!-- <div class="item active">
        <img src="https://hd.unsplash.com/photo-1443745029291-d5c27bc0b562" alt="Chania" width="460" height="345">
      </div>

      <div class="item">
        <img src="http://imgcache.wechat.com/music/joox/photo_id_en/focus_1000/b/d/217e1c230e733abd.jpg" alt="Chania" width="460" height="345">
      </div>
    
      <div class="item">
        <img src="https://hd.unsplash.com/photo-1462813277085-db5366eb347b" alt="Flower" width="460" height="345">
      </div>

      <div class="item">
        <img src="https://hd.unsplash.com/photo-1459233313842-cd392ee2c388" alt="Flower" width="460" height="345">
      </div> -->
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  
    <div class="row explore-row-title">
    
        <div class="col-md-12">
          <div class="pull-left explore-row-title-left">
            HOT ARTISTS
          </div>
          <div class="pull-right explore-row-title-right">
            <a href="#" onclick="seeMore(1)">
              See More >>
            </a>
          </div>
        
        </div>
      </div>
      <div class="row explore-row-content" id="exploreHotArtist">
     
        <!-- <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div> -->
        
      </div>

      <div class="row explore-row-title">
    
        <div class="col-md-12">
          <div class="pull-left explore-row-title-left">
            NEW RELEASES
          </div>
          <div class="pull-right explore-row-title-right">
            <a href="#" onclick="seeMore(2)">
              See More >>
            </a>
          </div>
        
        </div>
      </div>
      <div class="row explore-row-content" id="exploreNewRelease">
     
        <!-- <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div> -->
        
      </div>

      <div class="row explore-row-title">
    
        <div class="col-md-12">
          <div class="pull-left explore-row-title-left">
            RECOMMENDED ALBUMS
          </div>
          <div class="pull-right explore-row-title-right">
            <a href="#" onclick="seeMore(3)">
              See More >>
            </a>
          </div>
        
        </div>
      </div>
      <div class="row explore-row-content" id="exploreRecommendedAlbum">
     
        <!-- <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div> -->
        
      </div>

      <div class="row explore-row-title">
    
        <div class="col-md-12 ">
          <div class="pull-left explore-row-title-left" >
            TOP CHARTS
          </div>
          <div class="pull-right explore-row-title-right" >
            <a href="#" onclick="seeMore(4)">
              See More >>
            </a>
          </div>
        
        </div>
      </div>
      <div class="row explore-row-content" id="exploreTopChart">
        
      <!--   <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div>
        <div class="col-md-2">
          <img class="img-responsive img-thumbnail"src="{{asset('picture/ma.jpg')}}">
        </div> -->
        
      </div>

  
  

  <!-- <div class="row">
    <div class="col-sm-2">
      <h3>Column 1</h3>
      
      <a href="#">Band Hello</a>
    </div>
    <div class="col-sm-2">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-2">
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
     <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-8">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
     <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-8">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
     <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>

    </div>



  </div> -->

  <!-- <div class="span6">
  <div class="panel panel-primary">
    <div class="panel-heading">Our Top Download</div>
    <div class="panel-body">
    <div class="col-sm-2">
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
    <div class="col-sm-2">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    </div>

  </div>

</div> -->

<!--   <div class="jumbotron">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>
   <div class="jumbotron">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>
   <div class="jumbotron">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>
 
 </div>
 -->
  <!-- <div class="jumbotron">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>

  <div class="jumbotron">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>

  <div class="jumbotron">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div> -->

</div>
@endsection



