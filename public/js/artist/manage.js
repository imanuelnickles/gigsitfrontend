$('#add-new-album').click(function(){
	location.replace(header+'artist/upload');
});



var manageSong={};//Localization
var manageSongCounter=0;
var manageAlbum;

function editAlbum(albumId)
{
		// console.log(albumId);
		$.ajax({
			url: api+'artist/manage/table/album/'+albumId,
	  		type: 'GET',
	  		async:false,
	  		success: function(data){
	  				console.log(data);
	  				manageSong={};
	  				for (var i = 0; i < data.album.song_id.length; i++) {
	  					manageSong['song'+i]=data.album.song_id[i];
	  					manageSongCounter++;
	  				};

	  				console.log(manageSong);
	  				manageAlbum=data.album.album_id;
	  				/*$('.manageTitle').html("Song(s)");*/
			  		/*$('.manageAlbums').html('');
			  		$('.manageAlbumsName').html('');
			  		$('.manageAlbumsDetail').html('');*/
			  		$('.manageAlbum').html('');
			  		$('.manageAlbum').append('<div class="row album-detail">'+
			  			'<div class="col-md-5">'+
			  			'<input type="text" class="form-control" id="manageEditNameAlbum" value="'+data.album.album_title+'">'+
			  			'</div>'+
			  			'</div>');
			  		$('.manageButton').append(
			  			
			  			
                        "<div class='col-md-1'>"+
                            "<button type='button' class='btn new-album-button' onclick='saveDetail()'>Submit</button>"+                           
                        "</div>"+
                        "<div class='col-md-1'>"+
                            "<button type='button' class='btn new-album-button' onclick='cancelDetail()'>Cancel</button>"+                           
                        "</div>"+
                        "<div class='col-md-1'>"+
                            "<button type='button' class='btn new-album-button' onclick='addNewSong("+data.album.album_id+",\"" + data.album.album_title + "\")'>Upload New Song</button>"+                           
                        "</div>"
			  		);


			  		//console.log(data);
			  		for (var i = 0 ; i < manageSongCounter; i++) {

			  				$('.manageSong').append(
			  					'<div class="row album-detail">'+
			  						'<div class="col-md-4">'+
			  							'<div class="col-md-1">'+
			  								(i+1)+'.'+
			  							'</div>'+
			  							'<div class="col-md-10">'+
			  								'<input class="form-control" type="text" id="manageEditNameSong'+i+'" value="'+manageSong["song"+i].song_title+'">'+
			  							'</div>'+
			  							
			  						'</div>'+
			  						'<div class="col-md-2">'+
			  							"<button type='button' class='btn new-album-button' onclick='deleteSong("+manageSong["song"+i].song_id+")'>Delete</button>"+  
			  						'</div>'+
			  					'</div>'

			  				);

                           
                            };



                            

                          
			    
			  }
	});

}

/*For Add Song*/
function newFile(){
	
	data={};
	totalData=0;
	var input =document.getElementById('addSongFile');
	var totalNewSongs =$('#totalNewSongs');
	var addSongRow=$('#addSongRow');

	jQuery.each($('#addSongFile')[0].files, function(i, file) {
  	data['file'+i] = file;
  	totalData++;
	});

	//Print Total of Data and Init Empty for Info	
	totalNewSongs.html(" "+totalData);
	addSongRow.html("");
	

	//Loop for Data Info
	for (var i = 0 ; i < totalData; i++) {
	

	if(validateFile(data['file'+i].name)){
			$("#addSongRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label>"+messageBag+"</label></td>"
		  	 );

	}
	else if(validateSize(data['file'+i].size)){
		$("#addSongRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label>"+messageBag+"</label></td>"
		  	 );
		
	}
	else{
		$("#addSongRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label> <i class='fa fa-btn glyphicon glyphicon-ok'> </i> </label></td>"+
		  	 "<td> <button type='button' class='btn btn-danger btn-md' onclick='deleteNewFile("+i+")'>&nbsp Delete &nbsp <i class='fa fa-btn glyphicon glyphicon-remove'></button></td>"
		  	 );


	}
	}
	console.log(data);
}

/*Delete File in data's Obj*/
function deleteNewFile(row)
{
	console.log(row);
	for (var i = row; i < totalData; i++) {
		data['file'+i]=data['file'+(i+1)];
	};
	//delete data['file'+row];
	//Decrease the Total of Data
	totalData--;
	//Print Total of Data and Init Empty for Info	
	$('#totalNewSongs').html(" "+totalData);
	$('#addSongRow').html("");
	
	//Loop for Data Info
	for (var i = 0 ; i < totalData; i++) {
	

	if(validateFile(data['file'+i].name)){
			$("#addSongRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label>"+messageBag+"</label></td>"
		  	 );

	}
	else if(validateSize(data['file'+i].size)){
		$("#addSongRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label>"+messageBag+"</label></td>"
		  	 );
		
	}
	else{
		$("#addSongRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label> <i class='fa fa-btn glyphicon glyphicon-ok'> </i> </label></td>"+
		  	 "<td> <button type='button' class='btn btn-danger btn-md' onclick='deleteNewFile("+i+")'>&nbsp Delete &nbsp <i class='fa fa-btn glyphicon glyphicon-remove'></button></td>"
		  	 );


}
}


}

/*Ends*/
function addNewSong(id,title){
	$('.manageAlbum').html('');
	$('.manageAlbum').html(title);
	$('.manageButton').html('');
	$('.manageButton').append(
			  			
			  			"<div class='col-md-2'>"+
                                                   
                        "</div>"+
                        "<div class='col-md-1'>"+
                            "<button type='button' class='btn new-album-button' onclick='submitAddNewSong("+id+")'>Upload</button>"+                           
                        "</div>"+
                        "<div class='col-md-1'>"+
                            "<button type='button' class='btn new-album-button' onclick='cancelNewSong()'>Cancel</button>"+                           
                        "</div>"
			  		);
	$.ajax({
		url:'../html/add_new_song/addnewsong.html',
		method:'GET',
		success:function(data){
			$('.manageAlbum').append(data);
		}
	});
	//$('.manageAlbum').load("../html/add_new_song/addnewsong.html").prepend(title);
	//$( "<p>Test</p>" ).prependTo( ".manageAlbum" );


	/*console.log(data);
	console.log(id);
	console.log(title);*/
}
function cancelNewSong(){
location.replace(header+'artist/manage');


}
function submitAddNewSong(id){
	
	if(totalData==0){
		toaster("No song file to submit");
	}	
	else if( fileUploadStatus==1){
		toaster("File error can't do submit");
	}
	else if($('#checkTerm').prop("checked")===false){
		toaster("You need to agree with terms and condition");
	}else{
		/*Assigning Progress Bar & FormData Obj*/
		var progressBar = document.getElementById("progressUpload"),
		    xhr = new XMLHttpRequest();
		var fd = new FormData();  

		for (var i = 0; i < totalData; i++) {

			fd.append('file'+i, data['file'+i]);
		}

		fd.append('albumId',id);
		fd.append('totalSongs',totalData);
		/*AJAX Data Transport*/
		$.ajax({
		  xhr: function()
		  {
		    var xhr = new window.XMLHttpRequest();
		    //Upload progress
		    xhr.upload.addEventListener("progress", function(evt){
		      if (evt.lengthComputable) {
		        var percentComplete = evt.loaded / evt.total;
		        var prog=Math.round(percentComplete*100);
		        //Do something with upload progress
		        $("#progressUpload").css('width', prog+'%');
		        $("#progressUpload").html(prog+'%');
		        
		       
		      }
		    }, false);
		    //Download progress (not using this features)
		    xhr.addEventListener("progress", function(evt){
		      if (evt.lengthComputable) {
		        var percentComplete = evt.loaded / evt.total;
		        //Do something with download progress
		        console.log(percentComplete);
		      }
		    }, false);
		    return xhr;
		  },
		  type: 'POST',
		  url: api+'upload/add/song',
		  data: fd,
		  processData: false,
		  contentType: false,
		  success: function(data){
		    //Do something success-ish
		    console.log(data);
		   toasters("Upload success");
		   setTimeout(function(){
		   		location.replace(header+'artist/manage');
		   },3000);
		  }
		});
	}
	
}
function saveDetail(){
	var validate=0;
	//PULL DATA
	for (var i = 0; i < manageSongCounter; i++) {
		if($('#manageEditNameSong'+i).val()!=''){
			manageSong['song'+i].song_title=$('#manageEditNameSong'+i).val();
		}else{
			validate=1;
			
		}
		
	};
	//console.log(manageSong);
	if($('#manageEditNameAlbum').val()=='')
	{
		toaster("Album title must be filled");
	}else if(validate==1){
		toaster("Song(s) title must be filled");
	}else{

		var manageFormData = new FormData(); 

		for (var i = 0; i < manageSongCounter; i++) {
			manageFormData.append('songId'+i,manageSong['song'+i].song_id);
			manageFormData.append('songTitle'+i,manageSong['song'+i].song_title);
		};
		manageFormData.append('albumId',manageAlbum);
		manageFormData.append('albumTitle',$('#manageEditNameAlbum').val());
		manageFormData.append('manageSongCounter',manageSongCounter);

		//NEED CHECKED IN BACKEND BEFORE ASSIGN
		//SENDING WITH AJAX
		$.ajax({
			//SEND 
			url: api+'artist/manage/table/album/update',
			type: 'POST',
			data: manageFormData,
			processData: false,
	  		contentType: false,
	  		async:false,
			success:function(){
				
				toasters("Update success");
				setTimeout(function(){
					//Set Location Header
					location.replace(header+'artist/manage');

				},3000);
				 
			},
			error:function(){
				toaster("Error");
			}


		});


	}
	
	
}
function cancelDetail(){
	location.replace(header+'artist/manage');
}
function deleteSong(id){
	//DO DELETE
	
	
	
    $("#myModal1").modal();
    $("#modalYes1").click(function(){

    	
		$.ajax({
			url: api+'artist/manage/table/song/delete/'+id,
			type :'GET',
			async:false,
			success : function(data){
				toasters("Delete success");
				setTimeout(function(){
					//Set Location Header
					
			 		location.replace(header+'artist/manage');

				},3000);
					
			},
			error:function(){
				toaster("Error");
			}


		});
    });

	
	//SEND TO BACKEND TO DELETE
}

function deleteAlbum(id){
	$("#myModal").modal();
	$("#modalYes").click(function(){
		$.ajax({
			url: api+'artist/manage/table/album/delete/'+id,
			type :'GET',
			async:false,
			success : function(data){
					toasters("Delete success");
					setTimeout(function(){
						//Set Location Header
						
				 		location.replace(header+'artist/manage');

					},3000);
			},
			error:function(){
				toaster("Error");
			}


		});
    });
	
}