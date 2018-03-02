var data = [
            //empty array object
        ];
        $.ajax({
        url:api+'search/data',
        method:'GET',
        success:function(feed){
            for (var i = 0; i < feed.artist.length; i++) {
                data.push({ label: feed.artist[i].artist_name  , category: "Artist" });
            };
            for (var i = 0; i < feed.albums.length; i++) {
                data.push({ label: feed.albums[i].album_title  , category: "Albums" });
            };
            for (var i = 0; i < feed.song.length; i++) {
                data.push({ label: feed.song[i].song_title  , category: "Song" });
            };
            
        }
    });

  $( function() {
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
      _create: function() {
        this._super();
        this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
      },
      _renderMenu: function( ul, items ) {
        
        var that = this,
          currentCategory = "";

        $.each( items, function( index, item ) {
          var li;
          if ( item.category != currentCategory ) {
            ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
            currentCategory = item.category;
          }
          li = that._renderItemData( ul, item );
          if ( item.category ) {
            li.attr( "aria-label", item.category + " : " + item.label );
          }
        });
      }
    });
    
    /*{ label: "anders", category: "Artist" },
      { label: "andreas", category: "Song" },
      { label: "antal", category: "Song" },
      { label: "annhhx10", category: "Artist" },
      { label: "annk K12", category: "Artist" },
      { label: "annttop C13", category: "Albums" },
      { label: "anders andersson", category: "Album" },
      { label: "andreas andersson", category: "Song" },
      { label: "andreas johnson", category: "Song" }*/
    

    $( "#search" ).catcomplete({

      delay: 0,
      source: data
    });

    document.querySelector('#search').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        // 13 is enter
      var query=$("#search").val();
        if(query!=null && query!='' && query!='undefined'){
      
    
        changePage('main','search');
        
        getSearchData($("#search").val());
      }
    }
    });

    $("#go-search").click(function(){
        var query=$("#search").val();
        if(query!=null && query!='' && query!='undefined'){
      
    
        changePage('main','search');
        
        getSearchData($("#search").val());
      }
        
    });


  } );

function getSearchData(query){

    $.ajax({
      url:api+'search/data/'+query,
      method:'GET',
      success:function(data){

         // console.log(query);
         //console.log(data);

         if(data.artist.length!=0){
          $('.searchArtistData').html("");
        for (var i = 0; i < data.artist.length; i++) {

          $('.searchArtistData').append('<a href="#/album" onclick="exploreArtistInfo('+data.artist[i].artist_id+')" >'+
            '<div class="col-md-2">'+
            '<div class="row">'+
            '<img class="img-responsive img-thumbnail" style="width:160px;height:160px" src="'+api+data.artist[i].artist_picture+'">'+
            '</div>'+
            '<div class="row glass">'+
            '<span style="color:white">'+data.artist[i].artist_name+'</span>'+
            '</div>'+
          '</div></a>');

                  };
          }

          if(data.albums.length!=0){
            $('.searchAlbumData').html("");
          for (var i = 0; i < data.albums.length; i++) {

          $('.searchAlbumData').append('<a href="#/album" onclick="exploreAlbumInfo('+data.albums[i].album_id+')" >'+
            '<div class="col-md-2">'+
            '<div class="row">'+
            '<img class="img-responsive img-thumbnail" style="width:160px;height:160px" src="'+api+data.albums[i].album_picture+'">'+
            '</div>'+
            '<div class="row glass">'+
            '<span style="color:white">'+data.albums[i].album_title+'</span>'+
            '</div>'+
          '</div></a>');

            }

          }

          if( data.song.length!=0){
           
          
            for (var i = 0; i < data.song.length; i++) {

           
            var SoId=data.song[i].song_id;
            
            var SoName=data.song[i].song_title;
            
              $('.searchSongData').append('<tr class="artist-song-table">'+
               '<td>'+
               (i+1)+'.'+
               '</td>'+ 
              '<td >'+
              '<a href="#/" onclick="exploreSongInfo('+SoId+')">'+SoName+'</a>'+
                
              '</td>'+
              '<td>'+
              '<a href="#/" onclick="exploreAlbumInfo('+data.song[i].album_id+')">'+data.song[i].album.album_title+'</a>'+
                  
              '</td>'+
              '<td>'+
              '<a href="#/" onclick="changeMusic('+SoId+')" title="Play Song"><i class="glyphicon glyphicon-play"></i></a>'+
              /*'<a href="#/" id="song-popover" style="cursor:pointer" data-toggle="popover" data-trigger="focus"  data-content="<a onclick=\'changeMusic('+SoId+')\'>Play</a><br><a href=\'#/\' data-toggle=\'modal\' data-target=\'#addToPlaylist\' onclick=\'addToPlaylist('+SoId+')\'>Add to playlist</a>"><img style="width:50px;height:20px;" class="img-responsive" src="../public/picture/album/three_dots.png"></a>'+*/
              '</td>'+
              '<td>'+
                '<a href="#/" data-toggle="modal" data-target="#addToPlaylist" onclick="addToPlaylist('+SoId+')" title="Add to Playlist"><i class="glyphicon glyphicon-star"></i></a>'+
              '</td>'+
              '<td>'+
                '<a href="#/" onclick="addMusicToQueque('+SoId+')" title="Add to Play Queue"><i class="glyphicon glyphicon-plus"></i></a>'+
              '</td>'+
            '</tr>');
              
                  };


                  }else{
                     $('.searchSongData').html("NO RESULT FOUND");
                  }


        }
    });
}

/*$('#searchArtistDataButton').click(function(){
  $('#searchFounded').html("x");
});*/