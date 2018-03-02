<!DOCTYPE html>
<html>
    <head> 
<link rel="shortcut icon" href="picture/gigsit.ico">

        <title>GigsIt</title>
        <meta name="viewport" content="width=device-width" />
        

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" >
        <link rel="stylesheet" href="{{ asset('css/login/toaster.css') }}">

        <!-- Latest compiled and minified JavaScript -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script  src="{{ asset('js/toaster/toaster.js')}}"></script>
        
        <script>
				function isMobile() {
			if( navigator.userAgent.match(/Android/i)
					|| navigator.userAgent.match(/webOS/i)
					|| navigator.userAgent.match(/iPhone/i)
					|| navigator.userAgent.match(/iPad/i)
					|| navigator.userAgent.match(/iPod/i)
					|| navigator.userAgent.match(/BlackBerry/i)
					|| navigator.userAgent.match(/Windows Phone/i)
					){
				return true;
			}
			else {
				return false;
			}
		}

			if (isMobile()) {
			location.replace("https://m.gigsit.id");
		  }
		  else {
				console.log("Browser");
		  }
		
		
		
		</script>
        
            <script >
            /*Global Var API*/
           var api="https://api.gigsit.id/";
            //var api=window.location.origin + '/gwsv2.0/public/';
            /*Global Var Header*/
            //var header=window.location.origin + '/revisi_gfe/public/';
             var header="https://beta.gigsit.id/";

            /*Global Var User*/
            var userId;
            var username;
            
            /*Global Var Music Player*/
            var currentQueque={song:[]};
            var musicPointer=0;
            var id_array=0;
            var loopStatus=0;//0 for shuffle & 1 for loop

            /*Token Checker*/
                 if(localStorage.getItem("token"))
              {

               var token=localStorage.getItem("token");
                  
                $.ajax({
                  url : api+'auth/authuser',
                  method : "GET",
                  async:false,
                  headers : {Authorization:'Bearer '+token},
                  success : function(Response){
                        if(Response.user.role_id==1){
                            
                            location.replace(header+'artist/profile');
                        }
                        else{
                            userId=Response.user.user_id;
                           //listenerId=Response.user.user_id;
                        username=Response.user.username;

                        /*AJAX Setup*/
                           $.ajaxSetup({
                        headers : {Authorization:'Bearer '+token},
                        async:false,
                        beforeSend:function(){
                            
                            $('.loading-wrapper').removeClass("hidden");
                        },
                        complete:function(){
                            setTimeout(function(){
                                $('.loading-wrapper').addClass("hidden");
                            },100);
                            
                             
                        }
                        
                        });
                            
                        
                         }
                        

                        
                    },
                  error:function(){
                    
                    location.replace(header+'login');
                  }


                });

              
                
              }else{
                location.replace(header+'login');
              }

        </script>

        <!-- Custom Fonts -->

        <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
   



        <!-- CSS-->
       
        <link rel="stylesheet" href="{!! asset('css/listener/main/MainFrame.css') !!}"> 
        <link rel="stylesheet" href="{!! asset('css/listener/explore/explore.css') !!}"> 
        <link rel="stylesheet" href="{!! asset('css/listener/profile/profile.css') !!}"> 
        <link rel="stylesheet" href="{!! asset('css/listener/search/search.css') !!}"> 
        <link rel="stylesheet" href="{!! asset('css/listener/playlist/playlist.css') !!}">
        <link rel="stylesheet" href="{!! asset('css/listener/artist/artist.css') !!}">  
        <!--Album CSS-->
        <link rel="stylesheet" href="{!! asset('css/listener/player/MusicPlayer.css') !!}">
        <link rel="stylesheet" href="{!! asset('css/listener/player//AlbumRotation.css') !!}">



        
        <!--JS -->
        
        <script type="text/javascript" src="{!! asset('js/listener/player/MusicPlayer.js') !!}"></script>
        <script type="text/javascript" src="{!! asset('js/listener/artist/getArtistData.js') !!}"></script>
        <script type="text/javascript" src="{!! asset('js/listener/explore/getExploreData.js') !!}"></script>
        <script type="text/javascript" src="{!! asset('js/listener/search/searchData.js') !!}"></script>
        <script type="text/javascript" src="{!! asset('js/listener/playlist/playlist.js') !!}"></script>
        <script type="text/javascript" src="{!! asset('js/listener/profile/profile.js') !!}"></script>


        <style type="text/css">
       
        
            
            .list-inline {
              list-style: none;
              display: block;
              
            }
           
            .list-inline li a{
              font-size: 25px;
              color: #777;
            }
            .bg-footer{
                background: #262626;
                padding: 1% 1% 7% 1%;
                font-family: "Roboto";
                font-weight: 300;
                font-size: 16px;
                color: white;
                margin-top: 5%;
            }
            .glass{
                background:  rgba(0,0,0,0.2);
                width: 160px;
                text-align: center;
                margin-bottom: 20%;
            }
            .glass-chart{
                background:  rgba(0,0,0,0.2);
                width: 160px;
                text-align: center;
                margin-bottom: 10%;
                color: white;
            }
            .glassy{
                /*background:  rgba(1,0,0,0.2);*/
                width: 160px;
                text-align: center;
                color:white;
                font-family: "Roboto";
                font-weight: 400;
               
            }
            .row-centered{
              text-align: center;
            }
            

            /*
             *  STYLE 1
             */

            .ui-autocomplete::-webkit-scrollbar-track,#style-1::-webkit-scrollbar-track
            {
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
              border-radius: 10px;
              background-color: #F5F5F5;
            }

            .ui-autocomplete::-webkit-scrollbar, #style-1::-webkit-scrollbar
            {
              width: 12px;
              background-color: #F5F5F5;
            }

            .ui-autocomplete::-webkit-scrollbar-thumb,#style-1::-webkit-scrollbar-thumb
            {
              border-radius: 10px;
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
              background-color: #555;
            }

            .body-background{
                background: black;
            }
            .loading-wrapper{
                margin-left: 42%;
                margin-top:18%; 
                z-index:1000;
                position:fixed;
            }
            .loading-img{
                position:fixed;
                z-index:1000;
                width: 150px;
                height: 150px;
               
            }
        </style>    
    </head>
   <div class="loading-wrapper ">
        <img src="https://www.asus.com/support/images/support-loading.gif" class="loading-img">
    </div>
    <body onload="changePage('main','explore')" id="style-1" class="body-background">
     

          <nav class="navbar navbar-default navbar-fixed-top top-pad top-color border-color" style="z-index:100">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll ">
                
                <a class="navbar-brand page-scroll " href="#" onclick="changePage('main', 'explore')"><img class="logo" src="{!! asset('picture/logo.png') !!}"></img></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse top-space " id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-left">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a  onclick="changePage('main', 'explore')" href="#/explore" >HOME</a>
                    </li>
                    <li>
                        <a  onclick="changePage('main', 'artistdata')" href="#/artist" >ARTIST</a>
                    </li>
                    <li>
                        <a   onclick="changePage('main', 'playlist')" href="#/playlist" >MY PLAYLIST</a>
                    </li>
                    
                    <li>
                        <div class="mysearch-header">
                            <a  href="#" ><span class="glyphicon glyphicon-search mysearch-button" id="go-search"></span></a>
                            <input type="text" id="search" class="mysearch" placeholder="Search artist,albums or song">
                            
                        </div>
                    </li>

                </ul>

                <ul class="nav navbar-nav navbar-right " >
                 
                                <li><a href="#/" id="userProfile" onclick="changePage('main','profile')"><i class="glyphicon glyphicon-user"></i></a></li>
                                <li><a href="#/" id="userLogout">Logout</a></li>
                         
                     
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
 
    </nav>
   

    <!--CONTENT-->






<div class="container-fluid" >

<div id="main" style="margin-top:120px;" >

    <!-- AJAX Content -->

</div>


</div>

<!--iFrame ends here-->

<!--Footer starts here-->
<div id="footer">

     
      <div  class="navbar navbar-default navbar-fixed-bottom  bottom-color border-color" >

            <div class="container ">
                <div class="queque-play panel hidden" id="quequePlay">
                    <div class="panel-heading"><span class="pull-left">Play Queue</span><span class="pull-right"><a href="#/" class="playlist-text" onclick="emptyQueque()"><i class="glyphicon glyphicon-trash"> </i> Delete List</a> </span></div>
                    <div class="panel-body" id="quequePlayContent">
                        
                    </div>    
            </div>
                <ul class="nav navbar-nav navbar-left">
            <li>
                <div class="AlbumContainer">
                    <img id="album" style="width:90px;height:90px" class="" src={!! asset('picture/musicplayer/album.png') !!} >
                    <script>                    
                    //rotateAnimation("album",10);
                    </script>
                </div>

            </li>
            
            <li class="artist-container ">
                <a class="artist-name" href="#/artist" u="">Artist</a>
                <a class="song-name" href="#/songname" u="">Song Name</a>
                <audio   id="song" ontimeupdate="updateTime()" >
                    <source  src="" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>

                <div id="songSlider" onclick="setSongPosition(this,event)">
                     <div id="trackProgress">
                            <div id="playhead"></div>
                     </div>
                 </div>  
                    
            </li>
            <!--Shuffle-->
            <div id="shuffle-container">
                <a href="#/shuffle" class="shuffle-mode">
                    <img class="loop" id="loop" onclick="changeLoop()" src={!! asset('picture/musicplayer/loop.png')!!}>
                </a>
             


            <script>
               $( "#shuffle-container" ).hide();
            </script>
            </div>

            <li class="song-control-container">
                

                <div class="shuffleBar" >
                <script>
                    $( ".shuffleBar" ).hide();
                </script>
                    
                   

                </div>
                <a href="#/shuffle" class="shuffle-song song-control" onclick="shuffleLoop()">
                    <img class="shuffle" id="shuffleImage" src={!! asset('picture/musicplayer/shuffle.png')!!}>
                </a>
                
            </li>

            <!--Shuffle Ends Here-->
            <div id="range-container">
            <input type="range" id="vols" name="quantity" min="1" max="100" onchange="showValue(this.value)">
            <script>
                $( "#range-container" ).hide();
            </script>
            </div>
            <li class="song-control-container">

                <div class="VolumeSlider" >
                <script>
                $( ".VolumeSlider" ).hide();
                </script>
                    
                    <!--<div id="volumeMeter" onclick="setNewVolume(this,event)">

                        <div id="volumeStatus">
                             <div id="volumehead"></div>
                     </div>
                    </div>  -->

                </div>

                <a href="#/volume" class="volume-song song-control" onclick="volumeHide()">
                    <img id="volumeImage" class="volume" src={!! asset('picture/musicplayer/volume.png')!!}>
                </a>
                
            </li>
            <li class="song-control-container">
                <!-- setFavorite() dihapus-->
                <a href="#/favorite" data-toggle="modal" data-target="#addToPlaylist" id="playlistButton" onclick="addToPlaylist()" class="favorite-song song-control">
                    <img id="favoriteImage"  src={!! asset('picture/musicplayer/favorite.png')!!}>
                </a>


            </li>
            
            <li>
                 <div id="songTime">0:00 / 0:00</div>
            </li>

            </ul>    


            <ul class="nav navbar-nav navbar-right ">
            <li class="music-control-container">
                <a class="music-control-link" href="#/" onclick="previousSong()">
                <img id="previousImage" class="music-control-song" src={!! asset('picture/musicplayer/previous.png')!!}>
                </a>
            </li>
            <li class="music-play-pause" >
                <a class="music-control-link">
                <img id="songPlayPause" class="play" onclick="playPause('song')" src={!! asset('picture/musicplayer/play.png')!!}>
                
                </a>
            </li>
            <li class="music-control-container ">
                <a class="music-control-link" href="#/" onclick="nextSong()">
                    <img id="nextImage" class="music-control-song" src={!! asset('picture/musicplayer/next.png')!!}>
                </a>
            </li>
            <li class="pop-playlist">
                <a href="#/" onclick="quequePlay()" >
                     <img class="pop-playlist-icon" src={!! asset('picture/musicplayer/playlist.png')!!}>
                </a>
            </li>

                    
                </ul>

            </div>
        

            


            
                
                   
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

    </body>
<div id="snackbar"  style="margin-bottom:4%;z-index=1000">
    <div class="alert alert-danger" id="snackbs" >
     <i class="fa fa-times-circle"></i>
      &nbsp; 
        <span id="snackmsg"></span>
  </div>
</div>
                
<div id="snackbar-success"  style="margin-bottom:4%;z-index=1000">
    <div class="alert alert-success" id="snackbs" >
     <i class="fa fa-check"></i>
      &nbsp; 
        <span id="snackmsgs"></span>
  </div>
</div>

                







<script>
$( document ).ready(function() {
    console.log( "ready!" );
});


    /*changePage function*/
    function changePage(id, url)
    {
      /*AJAX Call to Gigsit's Routes*/
        $.ajax({
            url:url,
            method:'GET',
            async:false,
            success:function(obj){
              
                /* obj = JSON.parse(xhttp.responseText);*/
                document.getElementById(id).innerHTML = obj.body;
                

                if(url.localeCompare("artistdata")==0)
                {

                artistData();
                
                }else if(url.localeCompare("profile")==0){
                    /*Triggering AJAX Call Function in profile.js*/
                    profileData();
                }else if(url.localeCompare("playlist")==0){
                    /*Triggering AJAX Call Function in playlist.js*/
                    playlistData();
                }else if(url.localeCompare("explore")==0){
                    /*Triggering AJAX Call Function in profile.js*/
                    $('.carousel').carousel('cycle');
                    exploreData();
                }

            }
        });
        

        /*document.getElementById(id).innerHTML = "";

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                obj = JSON.parse(xhttp.responseText);
                document.getElementById(id).innerHTML = obj["body"];
                

                if(url.localeCompare("artistdata")==0)
                {

                artistData();
                
                }else if(url.localeCompare("profile")==0){
                    profileData();
                }else if(url.localeCompare("playlist")==0){
                    playlistData();
                }else if(url.localeCompare("test")==0){
                    $('.carousel').carousel('cycle');
                    exploreData();
                }


            }
        }
        xhttp.open("GET", url, false);
        xhttp.send();*/
        
    }
    
  

 
   /* Artist Name Event Listener (Click)*/
    $('.artist-name').click(function(){
        if($('.artist-name').attr('u')!=''){
        exploreArtistInfo($('.artist-name').attr('u'));
      }
    });

    /*Song Name Event Listener (Click)*/
    $('.song-name').click(function(){
      if($('.song-name').attr('u')!='')
      {
        exploreSongInfo($('.song-name').attr('u'));
      }
        
    });

   /* Username Appending HTML */
    $('#userProfile').append(" "+username);
    
   /* User Logout*/
    $('#userLogout').click(function(){
        localStorage.setItem("token", "");
        listenerId=0;
        location.replace(header+'login');
    });
</script>

</html>
