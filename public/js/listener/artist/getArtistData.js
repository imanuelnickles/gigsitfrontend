//Global Var
var addPlaylist_SongId;

function artistData(){
	

$.ajax({
  	url: api+'artist',
	type: 'GET',
	async:false,
	success:function(data){
		console.log(data);
		$('.artistData').append('<div class="row sm-title explore-row-title explore-row-title-left">ALL ARTIST</div>');
		for (var i = 0; i < data.content.length ;i++) {
			
		$('.artistData').append("<div class='col-md-2 '>"+
			"<div class='row'>"+
				"<a href='#' onclick='ArtistAlbums("+data.content[i].artist_id+
				")'><img class='img-responsive img-thumbnail' style='width:160px;height:160px' src='"+api+data.content[i].artist_picture+"'></a>"+

				"</div>"+
			"<div class='row glass' >"+
				"<a href='#' onclick='ArtistAlbums("+data.content[i].artist_id+
				")'style='text-decoration:none;color:white;width:160px;'>"+
				"<span style=''>"+
				data.content[i].artist_name+"</a>"+
				"</span>"+

				"</div>"+
			"</div>"

			);	

		};



		

		
	}
});


}

/*edit di backend dan di javascript*/
function ArtistAlbums(id){

	$.ajax({
		url :  api+'albumsong/'+id,
		type: 'GET',
		async:false,
		success:function(data){
			$('.artistData').html("");
			$('.ArtistSong').html("");
			$('.ArtistAlbum').html("");
			console.log(data);
			var data_length=data.content.length;
			var SongTotal=0;
			var counter=0;
			

			for (var i = 0; i < data_length ; i++) {

				for (var j = 0; j < data.content[i].song_id.length; j++) {
				
					var SoId=data.content[i].song_id[j].song_id;
					counter++;

					
					$('.ArtistSong').append('<tr class="artist-song-table">'+
							'<td style="color:white">'+
							(counter)+'.'+
							'</td>'+
							'<td >'+
							'<a href="#/" onclick="songDetail('+data.content[i].song_id[j].song_id+')">'+data.content[i].song_id[j].song_title+'</a>'+
								
							'</td>'+
							'<td>'+
							'<a href="#/" onclick="AlbumDetail('+data.content[i].album_id+')">'+data.content[i].album_title+'</a>'+
									
							'</td>'+
							'<td>'+
							'<a href="#/" onclick="changeMusic('+SoId+')" title="Play Song"><i class="glyphicon glyphicon-play" ></i></a>'+
							/*'<a href="#/" id="song-popover" style="cursor:pointer" data-toggle="popover" data-trigger="focus"  data-content="<a onclick=\'changeMusic('+SoId+')\'>Play</a><br><a href=\'#/\' data-toggle=\'modal\' data-target=\'#addToPlaylist\' onclick=\'addToPlaylist('+SoId+')\'>Add to playlist</a>"><img style="width:50px;height:20px;" class="img-responsive" src="../public/picture/album/three_dots.png"></a>'+*/
							'</td>'+
							'<td>'+
								'<a href="#/" data-toggle="modal" data-target="#addToPlaylist" onclick="addToPlaylist('+SoId+')" title="Add to Playlist"><i class="glyphicon glyphicon-star"></i></a>'+
							'</td>'+
							'<td>'+
								'<a href="#/" onclick="addMusicToQueque('+SoId+')" title="Add to Play Queue"><i class="glyphicon glyphicon-plus"></i></a>'+
							'</td>'+
						'</tr>');
					SongTotal++;
					
				};
				
			

				$('.ArtistAlbum').append(

				"<div class='col-md-2 '>"+
					"<div class='row'>"+
					"<a href='#' onclick='AlbumDetail("+data.content[i].album_id+
					")'><img class=' img-thumbnail' style='width:160px;height:160px;margin:0 auto;text-align:center;' src='"+api+data.content[i].album_picture+"'></a>"+

					"</div>"+
					"<div class='row glass'>"+
					"<a href='#' style='text-decoration:none;color:white;width:160px;'>"+
					"<h4>"+
					data.content[i].album_title+
					"</h4>"+
					"</a>"+
					"</div>"+
				"</div>"


				);



			};

			$('.artistPicture').html("<div class='col-md-12' style='margin:0 auto;text-align:center;'>"+
				"<div class='row'>"+
					"<img class='img-circle' style='width:150px;height:150px;' src='"+api+data.artist.artist_picture+"'>"+
				"</div>"+
				"<div class='row' style='padding-bottom:30px;'>"+
					"<h3 style='color:white'>"+data.artist.artist_name+"</h3>"+
				"</div>"+
				"</div>");
			
			$('.artistData').append("<ul class='nav nav-tabs nav-justified artist-detail-tab'>"+
    
			    "<li class='active'><a data-toggle='tab' href='#s1'>Song <span class='badge artist-badge'>"+SongTotal+"</span></a></li>"+
			    "<li><a data-toggle='tab' href='#s2'>Album <span class='badge artist-badge'>"+data_length+"</span></a></li>"+
			    
			  	"</ul>");
					}
				});

			$('.ArtistDetail').removeClass("hidden");

			

			
					


			
		



			

	
}


/*edit bagian webservicesnya*/
function AlbumDetail(id){
	

		$.ajax({
			url : api+'album/'+id,
			type : "GET",
			async:false,
			success : function(data){

				$('.artistData').html("");
				$('.ArtistSong').html("");
				$('.ArtistAlbum').html("");
				$('.AlbumSong').html("");
				$('.ArtistDetail').addClass("hidden");
				console.log(data);
				$('.artistPicture').html("<div class='col-md-12' style='margin:0 auto;text-align:center;'>"+
				"<div class='row'>"+
					"<img class='img-circle' style='width:150px;height:150px;' src='"+api+data.artist.album_picture+"'>"+
				"</div>"+
				"<div class='row' style='padding-bottom:30px;'>"+
					"<h3 style='color:white'>"+data.artist.album_title+"</h3>"+
				"</div>"+
				"</div>");

				



				for (var i = 0; i < data.song.song_id.length; i++) {
					
					$('.AlbumSong').append('<tr  class="artist-song-table">'+
							'<td style="color:white">'+
							(i+1)+'.'+
							'</td>'+
							'<td>'+
							'<a href="#/" onclick="songDetail('+data.song.song_id[i].song_id+')">'+data.song.song_id[i].song_title+'</a>'+
								
							'</td>'+
							'<td>'+
							'<a href="#/" onclick="AlbumDetail('+data.song.song_id[i].album_id+')">'+data.song.album_title+'</a>'+
									
							'</td>'+
							'<td>'+
							'<a href="#/" onclick="changeMusic('+data.song.song_id[i].song_id+')" title="Play Song"><i class="glyphicon glyphicon-play" ></i></a>'+
							
							'</td>'+
							'<td>'+
								'<a href="#/" data-toggle="modal" data-target="#addToPlaylist" onclick="addToPlaylist('+data.song.song_id[i].song_id+')" title="Add to Playlist"><i class="glyphicon glyphicon-star"></i></a>'+
							'</td>'+
							'<td>'+
								'<a href="#/" onclick="addMusicToQueque('+data.song.song_id[i].song_id+')" title="Add to Play Queue"><i class="glyphicon glyphicon-plus"></i></a>'+
							'</td>'+
						'</tr>');

					

				};


			}

		});


		
						
	/*console.log("Albums :"+id);*/

}

function songDetail(id){
	
	$('.songDetail').html("");
		$.ajax({
            url :  api+'song/'+id,
            type: 'GET',
            async:false,
         
            success:function(data){
            	console.log(data);
            	$('.songDetail').append('<div class="row ">'+
            		
            			'<div class="col-lg-2 col-md-offset-3">'+
            		'<img src="'+api+data.song.album.album_picture+'" class="img-thumbnail " style="width:120px;height:120px">'+
            		
            		'</div>'+
            		'<div class="col-lg-4 " style="margin-top:2%">'+
            			'<div class="row">'+
	            			'<span class="song-detail-text">'+
	            				data.song.song_title+
	            			'</span>'+
	            		'</div>'+
	            		'<div class="row song-button" style"margin-top:1%">'+
	            			'<a href="#/" onclick="changeMusic('+data.song.song_id+')">'+
	            				'<i class="glyphicon glyphicon-play"></i>'+      					
	            			' Play'+
	            			'</a>'+
	            			'&nbsp&nbsp&nbsp'+
	            			'<a href="#/" data-toggle="modal" data-target="#addToPlaylist" onclick="addToPlaylist('+data.song.song_id+')" >'+
	            				'<i class="glyphicon glyphicon-star"></i>'+      					
	            			' Add to Playlist'+
	            			'</a>'+
	            			'&nbsp&nbsp&nbsp'+
	            			'<a href="#/" onclick="addMusicToQueque('+data.song.song_id+')" >'+
	            				'<i class="glyphicon glyphicon-plus"></i>'+      					
	            			' Add to Play Queque'+
	            			'</a>'+
	            		'</div>'+
            		'</div>'+
            		'</div>'+
            		'<div class="row ">'+
            			'<div class="col-lg-6 col-md-offset-4">'+
            				'<table class="song-detail-table">'+
            					'<tr >'+
            					'<td>Artist</td>'+
            					'<td> : </td>'+
            					'<td>'+data.song.album.artist.artist_name+'</td>'+
            					'</tr>'+
            					'<tr>'+
            					'<td>Album</td>'+
            					'<td> : </td>'+
            					'<td>'+data.song.album.album_title+'</td>'+
            					'</tr>'+
            					'<tr>'+
            					'<td>Release Data</td>'+
            					'<td> : </td>'+
            					'<td>'+data.song.album.release_date+'</td>'+
            					'</tr>'+
            					        					
            				'</table>'+
            			'</div>'+
            		'</div>'
            		);
            }});

}
function addMusicToQueque(id){
	
	$.ajax({
            url :  api+'changeSong/'+id,
            type: 'GET',
            async:false,
            success:function(data){
            	
            if(currentQueque.song.length==0){
    	currentQueque.song.push(

			    {id: id_array , song_id: id ,song_title:data.content[0].song_title,artist_id:data.content[0].album.artist.artist_id,artist_name:data.content[0].album.artist.artist_name}

		);

		musicPointer=0;
		id_array++;
		//$('#song').attr("autoplay",true);
		getMusicData(currentQueque.song[musicPointer].song_id);
    }else{
    	currentQueque.song.push(

			    {id: id_array , song_id: id,song_title:data.content[0].song_title,artist_id:data.content[0].album.artist.artist_id,artist_name:data.content[0].album.artist.artist_name }

		);
		//musicPointer=id_array;
		id_array++;
		$('#song').attr("autoplay",true);
    }
            }
        });

    
    
}

function changeMusic(id){
	$.ajax({
            url :  api+'changeSong/'+id,
            type: 'GET',
            async:false,
            success:function(data){
            	console.log(data);
            	  if(currentQueque.song.length==0){
    			currentQueque.song.push(

			    {id: id_array , song_id: id ,song_title:data.content[0].song_title,artist_id:data.content[0].album.artist.artist_id,artist_name:data.content[0].album.artist.artist_name}

		);
		musicPointer=0;
		id_array++;
    }else{
    	currentQueque.song.push(

			    {id: id_array , song_id: id ,song_title:data.content[0].song_title,artist_id:data.content[0].album.artist.artist_id,artist_name:data.content[0].album.artist.artist_name}

		);
		musicPointer=id_array;
		id_array++;
    }
            }
            });

    $('#song').attr("autoplay",true);
    document.getElementById('playhead').style.marginLeft = 0+ "px";
    document.getElementById('trackProgress').style.width = 0+ "px";
    getMusicData(currentQueque.song[musicPointer].song_id);
}

function getMusicData(id){
	   $.ajax({
            url :  api+'play/'+id+'/'+userId,
            type: 'GET',
            success:function(data){
                //console.log(data);
                /*$('#song').attr('src','https://api.gigsit.id/public/'+data.content[0].song_file);*/
                $('#song').attr('src',api+data.content[0].song_file);
                $('.artist-name').html(data.content[0].album.artist.artist_name);
                $('.artist-name').attr('u',data.content[0].album.artist.artist_id);
                $('.song-name').html(data.content[0].song_title);
                $('.song-name').attr('u',data.content[0].song_id);
                $('#album').attr('src',api+data.content[0].album.album_picture);
                $('#playlistButton').attr('onClick','addToPlaylist('+data.content[0].song_id+')');
                console.log(currentQueque);

                if($('#song').attr("autoplay")){
                	musicStart();
                }else{
                	musicStop();
                }
                
              

            }
        });
}
function addToPlaylist(id){

	addPlaylist_SongId=id;
	console.log(id);
	$.ajax({
		url: api+'playlist/data/'+userId ,
		method:'GET',
		success:function(data){

				for (var i = 0; i < data.playlist.length; i++) {

		$('#playlistList').append('<a href="#/" data-dismiss="modal" onclick=submitToPlaylist('+data.playlist[i].playlist_id+')>'+
          '<div class="row">'+
          	'<div class="col-lg-6">'+
		     '<img class="img-thumbnail" src="/picture/ma.jpg" style="width:100px;height:100px;">'+
		   '</div>'+
		   '<div class="col-lg-6">'+
		     '<div class="row">'+data.playlist[i].playlist_name+'</div>'+
		     '<div class="row">'+data.playlist[i].playlist_content+'</div>'+
		   '</div>'+
          '</div>'+
          '</a>');
		console.log(addPlaylist_SongId);
	};

		}
	});
	
	
}

function submitToPlaylist(id){
	
	$.ajax({
		url: api+'playlist/add/'+id+'/song/'+addPlaylist_SongId ,
		method:'GET',
		success:function(data){
			changePage('main','playlist');
		}
	});
}




