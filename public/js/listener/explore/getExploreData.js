function exploreData(){
	//slider-ads
$.ajax({
	url:api+'explore/getsliderads',
	method:'GET',
	success:function(data){
		console.log(data);
		if(data.content.length!=0){
			$('#slider-ads').append('<div class="item active">'+
	        '<img src="'+api+data.content[0].slider_ads_picture+'"  width="460" height="345">'+
	      '</div>');

		for (var i = 1; i < data.content.length; i++) {
			$('#slider-ads').append('<div class="item">'+
        '<img src="'+api+data.content[i].slider_ads_picture+'"  width="460" height="345">'+
      '</div>');
		};
		}else{

		}
	}
});
	//Hot Artist
$.ajax({
	url:api+'explore/gethotartist',
	method:'GET',
	success:function(data){
		console.log(data);
		for (var i = 0; i <6; i++) {
			$('#exploreHotArtist').append('<a href="#/artist" onclick="exploreArtistInfo('+data.content[i].artist_id+')"><div class="col-md-2">'+

          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px;" src="'+api+data.content[i].artist_picture+'">'+
          	'<div class="glassy">'+
          	'<span style="">'+data.content[i].artist_name+'</span>'+
          	'</div>'+
        	'</div></a>');
		};
		
	}
});
	//New Release
$.ajax({
	url:api+'explore/getnewrelease',
	method:'GET',
	success:function(data){
		console.log(data);
		for (var i = 0; i < 6; i++) {
			$('#exploreNewRelease').append('<a href="#/album" onclick="exploreAlbumInfo('+data.content[i].album_id+')"> <div class="col-md-2">'+
          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px" src="'+api+data.content[i].album_picture+'">'+
          	'<div class="glassy">'+
          	'<span>'+data.content[i].album_title+'</span>'+
          	'</div>'+
          	'<div class="glassy">'+
          	'<span>'+data.content[i].artist.artist_name+'</span>'+
          	'</div>'+
        	'</div></a>');
		};
		
	}
});
	//Recommended Album
$.ajax({
	url:api+'explore/getrecommendedalbum',
	method:'GET',
	success:function(data){
		console.log(data);
		for (var i = 0; i < 6; i++) {
			$('#exploreRecommendedAlbum').append('<a href="#/album" onclick="exploreAlbumInfo('+data.content[i].album_id+')"> <div class="col-md-2">'+
          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px;" src="'+api+data.content[i].album.album_picture+'">'+
          	'<div class="glassy">'+
          	'<span>'+data.content[i].album.album_title+'</span><br>'+
          	'<span>'+data.content[i].album.artist.artist_name+'</span>'+
          	'</div>'+
          	
        	'</div></a>');
		};
		
	}
});

		//Top Chart
$.ajax({
	url:api+'explore/gettopchart',
	method:'GET',
	success:function(data){
		console.log(data);
		for (var i = 0; i < 6; i++) {
			$('#exploreTopChart').append('<a href="#/album" onclick="exploreSongInfo('+data.content[i].song_id+')"> <div class="col-md-2">'+
          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px;" src="'+api+data.content[i].album_picture+'">'+
          	'<div class="glassy">'+
          	'<span>'+data.content[i].song_title+'</span><br>'+
          	'<span>'+data.content[i].artist_name+'</span>'+
          	'</div>'+
          	
        	'</div></a>');
		};
		
	}
});

}


function exploreArtistInfo(id){
	console.log(id);
	

	changePage('main','artistdata');
	ArtistAlbums(id);
	
	/*setTimeout(function(){ 
		ArtistAlbums(id);
	 }, 500);
	*/
	
	
}
function exploreAlbumInfo(id){
	console.log(id);
	changePage('main','artistdata');
	
	
	AlbumDetail(id);
	
	

}

function exploreSongInfo(id){
	console.log(id);
	changePage('main','artistdata');
	
	
	songDetail(id);
	
	

}
function seeMore(menu){
	console.log(menu);
	$('.explore').html("");
	$('.explore').html('<div class="row sm-title explore-row-title explore-row-title-left"></div>'+
		'<div class="row sm-data"></div>');

	
	switch(menu){
		case 1: 
			$('.sm-title').html("HOT ARTISTS");
			$.ajax({
			url:api+'explore/gethotartist',
			method:'GET',
			success:function(data){
				console.log(data);
				for (var i = 0; i < data.content.length; i++) {
				$('.sm-data').append('<a href="#/artist" onclick="exploreArtistInfo('+data.content[i].artist_id+')"><div class="col-md-2">'+
	          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px;" src="'+api+data.content[i].artist_picture+'">'+
	          	'<div class="glass">'+
	          	'<span style="color:white">'+data.content[i].artist_name+'</span>'+
	          	'</div>'+
	        	'</div></a>');
					};
					
				}
			});
		break;
		case 2: 
			$('.sm-title').html("NEW RELEASES");
			$.ajax({
				url:api+'explore/getnewrelease',
				method:'GET',
				success:function(data){
					console.log(data);

					for (var i = 0; i < data.content.length; i++) {

						$('.sm-data').append('<a href="#/album" onclick="exploreAlbumInfo('+data.content[i].album_id+')"> <div class="col-md-2">'+
			          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px;" src="'+api+data.content[i].album_picture+'">'+
			          	'<div class="glass">'+
			          	'<span style="color:white">'+data.content[i].album_title+'</span>'+
			          	'</div>'+
			        	'</div></a>');
					};
					
				}
			});
		break;
		case 3: 
			$('.sm-title').html("RECOMMENDED ALBUMS");
			$.ajax({
				url:api+'explore/getrecommendedalbum',
				method:'GET',
				success:function(data){
					console.log(data);
					//$('.sm-data').addClass("");
					for (var i = 0; i < data.content.length; i++) {
						$('.sm-data').append('<a href="#/album" onclick="exploreAlbumInfo('+data.content[i].album_id+')"> <div class="col-md-2" style="margin-left:2.8%">'+
			          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px;" src="'+api+data.content[i].album.album_picture+'">'+
			          	'<div class="glass">'+
			          	'<span style="color:white">'+data.content[i].album.album_title+'</span>'+
			          	'</div>'+
			        	'</div></a>');
					};
					
				}
			});
		break;
		case 4: 
			$('.sm-title').html("TOP CHARTS");
			$.ajax({
				url:api+'explore/gettopchart',
				method:'GET',
				success:function(data){
					console.log(data);
					if(data.content.length<10){
						for (var i = 0; i < data.content.length; i++) {
						$('.sm-data').append('<a href="#/album" onclick="exploreSongInfo('+data.content[i].song_id+')"> <div class="col-md-2"  style="margin-left:2.8%">'+
						'<div class="glass-chart">'+
						(i+1)+	
						'</div>'+
			          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px" src="'+api+data.content[i].album_picture+'">'+
			          	'<div class="glass">'+
			          	'<span style="color:white">'+data.content[i].song_title+'</span>'+
			          	'<br>'+
			          	'<span style="color:white">'+data.content[i].artist_name+'</span>'+
			          	'</div>'+
			        	'</div></a>');
					};
					}
					else{
						for (var i = 0; i < 10; i++) {
						$('.sm-data').append('<a href="#/album" onclick="exploreSongInfo('+data.content[i].song_id+')"> <div class="col-md-2"  style="margin-left:2.8%">'+
						'<div class="glass-chart">'+
						(i+1)+	
						'</div>'+
			          	'<img class="img-responsive img-thumbnail" style="width:160px;height:160px" src="'+api+data.content[i].album_picture+'">'+
			          	'<div class="glass" style="height:60px">'+
			          	'<span style="color:white;height:200px">'+data.content[i].song_title+'</span>'+
			          	'<br>'+
			          	'<span style="color:white">'+data.content[i].artist_name+'</span>'+
			          	'</div>'+
			        	'</div></a>');
					};
					}
					
					
				}
			});
		break;
	}


}

