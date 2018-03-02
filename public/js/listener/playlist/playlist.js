//Global var
var playlistEditId;

function CreatePlaylist(){
	$('#myModal').modal();
	$('.modal-backdrop').removeClass("modal-backdrop"); 
}
	
function playlistSubmitName(){
	//console.log(listenerId);
	$('#myModal').modal();
	$('.modal-backdrop').removeClass("modal-backdrop"); 
	if($('#playlistName').val()==''){
		toaster("Playlist name must be filled");
		
	}else{
	$('#playlistName').attr('disabled','disabled');
	//console.log($('#playlistName').val());
	var playlistName=$('#playlistName').val();
	var data={
		userId:userId,
		playlistName:playlistName
	};
	$.ajax({
		url: api+'playlist',
		method:'POST',
		data:data,
		async:false,
		success:function(data){
			//console.log(data);
			//changePage('main','test');
			changePage('main','playlist');
		}
	});
	}
}

function playlistData(){
	
	$.ajax({
		url: api+'playlist/data/'+userId ,
		method:'GET',
		success:function(data){
			console.log(data);
		$('#playlistData').prepend('<div class="row sm-title explore-row-title explore-row-title-left">MY PLAYLIST</div>');
		for (var i = 0; i < data.playlist.length; i++) {
			$('#playlistData').append('<div class="row" style="margin-bottom:1%">'+
   '<div class="col-lg-2">'+
     '<img class="img-thumbnail" src="/picture/ma.jpg" style="width:100px;height:100px;">'+
   '</div>'+
   '<div class="col-lg-2">'+
     '<div class="row"><a href="#" class="playlist-text" onclick="playlistDetail('+data.playlist[i].playlist_id+')">'+data.playlist[i].playlist_name+'</a></div>'+
     '<div class="row" style="color:grey">'+data.playlist[i].playlist_content+' Songs</div>'+
   '</div>'+
   '<div class="col-lg-4" style="margin-top:1%">'+
     '<a href="#" class="playlist-text"   onclick="playlistEdit('+data.playlist[i].playlist_id+')"><span class="glyphicon glyphicon-pencil"></span></a>'+
     '<a href="#" class="playlist-text" style="margin-left:4%" onclick="playlistDel('+data.playlist[i].playlist_id+')"><span class="glyphicon glyphicon-trash"></span></a>'+
   '</div>'+
 '</div>');
		};
			
			
		}
	});
}

function playlistDetail(id){
	//console.log(id);
	$('#playlistData').html("");
	

	$.ajax({
		url: api+'playlist/detail/'+ id,
		method:'GET',
		success:function(data){
			console.log(data);
			$('#playlistData').append('<div class="row sm-title explore-row-title explore-row-title-left">MY PLAYLIST</div>');
			

			if(data.playlist[0].playlist_detail.length == 0)
			{
				$('#playlistData').append("<div class='row'>"+
					"<div class='col-lg-2'>"+
						"<span style='color:#FFCC33'>"+data.playlist[0].playlist_name+"</span>"+
					"</div>"+
				"</div>"	
				);
				$('#playlistData').append(
					"<div class='col-lg-offset-1 col-lg-4 no-song'>"+
						"<div class='row'>"+
							"<span><i class='glyphicon glyphicon-remove-circle' style='font-size:30px'></i></span>"+
						"</div>"+
						"<div class='row'>"+
							"<span>No Song Now</span>"+
						"</div>"+
						"<div class='row'>"+
						"<span>Click the star icon to save song to your playlist</span> "+
						"</div>"+
					"</div>"
				);

			}else{

				$('#playlistData').append("<div class='row'>"+
					"<div class='col-lg-2'>"+
						"<span class='playlist-detail-text'>"+data.playlist[0].playlist_name+"</span>"+
					"</div>"+
					"<div class='col-lg-2'>"+
						"<span class='playlist-detail-text'>"+data.playlist[0].playlist_content+" song(s) </span>"+
					"</div>"+
				"</div>"	
				);
				$('#playlistData').append("<div class='row'>"+
					"<div class='col-lg-1'>"+
						"<a href='#/' class='playlist-text' onclick='playlistPlay("+data.playlist[0].playlist_id+")'><i class='glyphicon glyphicon-play'></i> Play All</span>"+
					"</div>"+
					"<div class='col-lg-2'>"+
						"<a href='#/'  class='playlist-text' onclick='playlistQueque("+data.playlist[0].playlist_id+")'><i class='glyphicon glyphicon-plus'></i> Add to Play Queue</span>"+
					"</div>"+
				"</div>"	
				);
				for (var i = 0; i < data.playlist[0].playlist_detail.length; i++) {
						$('#playlistData').append("<div class='row'>"+
						
						"<div class='col-lg-3'>"+
						"<span class='playlist-detail-title'>"+(i+1)+". </span>"+
							"<span class='playlist-detail-title'>"+data.playlist[0].playlist_detail[i].song.song_title+"</span>"+
						"</div>"+
						"<div class='col-lg-2'>"+
							"<span class='playlist-detail-title'>"+data.playlist[0].playlist_detail[i].song.album.artist.artist_name+"</span>"+
						"</div>"+
						"<div class='col-lg-2'>"+
							"<a href='#/' class='playlist-text' onclick='playlistDetailDelete("+data.playlist[0].playlist_detail[i].playlist_detail_id+")'><span class='glyphicon glyphicon-trash'></span></a>"+
						"</div>"+
					"</div>"	
					);
				};
				
			}
		}

	});
		
		
	
	$.ajax({
		url:'../public/html/modal/playlist_detail.html',
		method:'GET',
		success:function(data){
			$('#playlistData').append(data);
		}
	});

}

function playlistEdit(id){
	playlistEditId=id;
	$('#playlistEdit').modal();
	$('.modal-backdrop').removeClass("modal-backdrop"); 
}

function playlistSubmitEditName(){
	/*onsole.log(playlistEditListenerId);
	console.log($('#playlistEditName').val());*/
	$('#playlistEdit').modal();
	$('.modal-backdrop').removeClass("modal-backdrop"); 
	
	if($('#playlistEditName').val()==''){
		toaster("Playlist name must be filled")
	}else{
	var edtplaylist={
		playlist_edit_id:playlistEditId,
		playlist_new_name:$('#playlistEditName').val()
	};

	$.ajax({
		url: api+'playlist/edit' ,
		method:'POST',
		data : edtplaylist,
		success:function(data){
			changePage('main','playlist');
		}
	});

	//Clearing
	$('#playlistEditName').val("");
	playlistEditListenerId=0;
	}
}

function playlistDel(id){
	//console.log(id);
	$("#playlistDeleteModal").modal();
    $("#playlistDeleteModal1").click(function(){
    	$.ajax({
		url: api+'playlist/delete/'+id ,
		method:'GET',
		success:function(data){
			console.log(data);
			changePage('main','playlist');
		}
		});
    });
	
}

function playlistDetailDelete(id){
	console.log(id);
	$("#playlistDetailDeleteModal").modal();
    $("#playlistDetailDeleteModal1").click(function(){
    	$.ajax({
		url: api+'playlist/detail/delete/'+id ,
		method:'GET',
		success:function(data){
			//console.log(data);
			changePage('main','playlist');
		}
	});
    });
	
}
function playlistQueque(id){

	$.ajax({
		url: api+'playlist/detail/'+ id,
		method:'GET',
		async:false,
		success:function(data){
			if(currentQueque.song.length==0){
				for (var i = 0; i < data.playlist[0].playlist_detail.length; i++) {

				currentQueque.song.push(

			    {id: id_array , song_id: data.playlist[0].playlist_detail[i].song_id,song_title: data.playlist[0].playlist_detail[i].song.song_title,artist_id:data.playlist[0].playlist_detail[i].song.album.artist.artist_id,artist_name:data.playlist[0].playlist_detail[i].song.album.artist.artist_name}

				);
				id_array++;
				};

				getMusicData(currentQueque.song[musicPointer].song_id);
			}
			else{
				
				for (var i = 0; i < data.playlist[0].playlist_detail.length; i++) {

				currentQueque.song.push(

			    {id: id_array , song_id: data.playlist[0].playlist_detail[i].song_id,song_title: data.playlist[0].playlist_detail[i].song.song_title,artist_id:data.playlist[0].playlist_detail[i].song.album.artist.artist_id,artist_name:data.playlist[0].playlist_detail[i].song.album.artist.artist_name }

				);
				id_array++;
				};
				
			}
			
			
		}
		});

}

function playlistPlay(id){
	$.ajax({
		url: api+'playlist/detail/'+ id,
		method:'GET',
		async:false,
		success:function(data){
			console.log(data);
				var playCurrentArray=-1;
				for (var i = 0; i < data.playlist[0].playlist_detail.length; i++) {
					if(playCurrentArray==-1){
						 playCurrentArray=id_array;
					}
				currentQueque.song.push(

			    {id: id_array , song_id: data.playlist[0].playlist_detail[i].song_id,song_title: data.playlist[0].playlist_detail[i].song.song_title,artist_id:data.playlist[0].playlist_detail[i].song.album.artist.artist_id,artist_name:data.playlist[0].playlist_detail[i].song.album.artist.artist_name }

				);
				id_array++;
				};
				musicPointer=playCurrentArray;
				$('#song').attr("autoplay",true);
				getMusicData(currentQueque.song[musicPointer].song_id);
				
			
			
			
		}
		});

	
}