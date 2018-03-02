/*Global Var*/
var fileUploadStatus=0;
var messageBag="";

/*Var and Obj for Multiple File*/
var data={};
var totalData=0;

/*Info and Total of Song(s)*/
var info=$("#newRow");
var totalSongs=$("#totalSongs");

/*Check Terms*/
var termStatus=0;


var albumTitle =$('#albumTitle');
var albumPicture=document.getElementById('albumPicture');
var albumPictures=$("#albumPicture");
var songGenre=$('#songGenre');
var songFile=$("#songFile");

/*Validate File by its Name*/
function validateFile(name){
var validExtensions = ['mp3','wav']; 
var fileNameExt = name.substr(name.lastIndexOf('.') + 1);
messageBag="";
 if ($.inArray(fileNameExt, validExtensions) == -1){
         	fileUploadStatus=1;
         	messageBag="Not supported format.";
         	return true;
        }
  else{
  		return false;
  }
}

/*Validate File by its Size*/
function validateSize(size){
	messageBag="";
	if(size>20971520)
	{
		fileUploadStatus=1;
         	messageBag="File size more than 20 MB";
         	return true;
	}
	else{
		return false;
	}
}




/*Information Table Auto Create*/
$("#songFile").change(function(event){
	//Init to Object First
	data={};
	totalData=0;
	
	var input =document.getElementById('songFile');

	//First Loop to Init File Data to Object
	jQuery.each($('#songFile')[0].files, function(i, file) {
  	data['file'+i] = file;
  	totalData++;
	});


	//Print Total of Data and Init Empty for Info	
	totalSongs.html(totalData);
	info.html("");
	console.log(data);
	//Loop for Data Info
	for (var i = 0 ; i < totalData; i++) {
	

	if(validateFile(data['file'+i].name)){
			$("#newRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label>"+messageBag+"</label></td>"
		  	 );

	}
	else if(validateSize(data['file'+i].size)){
		$("#newRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label>"+messageBag+"</label></td>"
		  	 );
		
	}
	else{
		$("#newRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label> <i class='fa fa-btn glyphicon glyphicon-ok'> </i> </label></td>"+
		  	 "<td> <button type='button' class='btn btn-danger btn-md' onclick='deleteFile("+i+")'>&nbsp Delete &nbsp <i class='fa fa-btn glyphicon glyphicon-remove'></button></td>"
		  	 );


}
}



	//Change Disabled Prop Status
	/*
	if(fileUploadStatus==1){
		$("#deleteUpload").prop('disabled', false);
		$("#upload").prop('disabled', false);
	}
	else{
		$("#deleteUpload").prop('disabled', false);
		$("#upload").prop('disabled', true);	
	}
	*/




});

/*Delete File in data's Obj*/
function deleteFile(row)
{
	console.log(row);
	for (var i = row; i < totalData; i++) {
		data['file'+i]=data['file'+(i+1)];
	};
	//delete data['file'+row];
	//Decrease the Total of Data
	totalData--;
	//Print Total of Data and Init Empty for Info	
	totalSongs.html(totalData);
	info.html("");
	console.log(data);
	//Loop for Data Info
	for (var i = 0 ; i < totalData; i++) {
	

	if(validateFile(data['file'+i].name)){
			$("#newRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label>"+messageBag+"</label></td>"
		  	 );

	}
	else if(validateSize(data['file'+i].size)){
		$("#newRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label>"+messageBag+"</label></td>"
		  	 );
		
	}
	else{
		$("#newRow").append(
		  	 "<tr>"+
		  	 "<td ><label>"+(i+1)+".</label></td>"+
		  	 "<td> <label>"+data['file'+i].name+"</label></td>"+
		  	 "<td> <label>"+data['file'+i].size+" bytes</label></td>"+
		  	 "<td> <label> <i class='fa fa-btn glyphicon glyphicon-ok'> </i> </label></td>"+
		  	 "<td> <button type='button' class='btn btn-danger btn-md' onclick='deleteFile("+i+")'>&nbsp Delete &nbsp <i class='fa fa-btn glyphicon glyphicon-remove'></button></td>"
		  	 );


}
}


}


/*Delete Information Table*/
$("#cancelUpload").click(function(){
	/*Resetting Form*/
	/*$("#albumTitle").val("");
	$("#albumPicture").val("");
	$("#songGenre").val("");
	$("#totalSongs").html("0");
	$("#songFile").val("");
	$("#newRow").html("");
	$("#checkTerm").attr('checked', false); // Unchecks it
	termStatus=0;
	$("#progressUpload").html("0%");
	$("#progressUpload").css('width', 0+'%');*/
	/*Reset Error Message*/
	/*$("#albumTitleError").html("");
	$("#albumPictureError").html("");
	$("#genreError").html("");
	$("#songFileError").html("");
	$("#uploadError").html("");*/
	location.replace(header+'artist/manage');

});

$("#checkTerm").change(function(){

	if($("#checkTerm:Checked").val()){
		termStatus=1;//Change Check
	}else{
		termStatus=0;//Change to Uncheck
	}
	
	
});


function validateForm(){
	/*Check All Attributes*/

	$("#albumTitleError").html("");
	$("#albumPictureError").html("");
	$("#genreError").html("");
	$("#songFileError").html("");
	$("#uploadError").html("");

var validates=0;
if(albumTitle.val()=='')
{
	//$("#albumTitleError").html("Title Required");
	toaster("Album title must be filled");
	validates=1;
}
else if(albumPictures.val()=='')
{
	//$("#albumPictureError").html("Picture Required");
	toaster("Album picture must be filled");
	validates=1;
}
else if(songGenre.val()=='')
{
	//$("#genreError").html("Genre must be Selected");
	toaster("Genre must be choosen");
	validates=1;
}
else if(totalData==0){
	//$("#songFileError").html("Song File(s) Required");
	toaster("Song file must be filled");
	validates=1;
}
else if(termStatus==0){
	//$("#uploadError").html("Terms and Condition must be Agreed");
	toaster("Terms and Condition must be agreed");
		validates=1;
}

if(validates==1 || fileUploadStatus==1)
{
	return false;
}else{
	return true;
}

}


/*Upload File Button*/
$("#upload").click(function(e){

/*Assigning Progress Bar & FormData Obj*/
var progressBar = document.getElementById("progressUpload"),
    xhr = new XMLHttpRequest();
var fd = new FormData();  

/*Assign from Form to Variable*/
	//totalSongs = totalData
	//data assign to FormData

if(validateForm()){

	/*Preventing Default*/
e.preventDefault();


/*Assigning from Obj to Form Data*/
fd.append('userId',userId);

fd.append('albumTitle',albumTitle.val()); 
fd.append('albumPicture',albumPicture.files[0]);
fd.append('songGenre', songGenre.val());
fd.append('totalSongs', totalData);

for (var i = 0; i < totalData; i++) {

	fd.append('file'+i, data['file'+i]);
}

/*Check FormData*/
for (var pair of fd.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}

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
  url: api+'upload',
  data: fd,
  processData: false,
  contentType: false,
  success: function(data){
    //Do something success-ish
    //console.log(data);
    //$("#uploadError").html("Success !");
    toasters("Upload success");
    setTimeout(function(){ location.replace(header+'artist/upload'); }, 1000);
    

    //Set Location Header
    
	
  }
});



}
else{
	//Another Condition 
}





/*
var fd = new FormData();  
var input =document.getElementById('albumPicture');
console.log(input.files.length);
fd.append('albumPicture', input.files[0]);


 $.ajax({
        url :  api+'upload',
        method : "POST",
        data : fd,
        processData: false,
        contentType: false,
        success : function(Response){
            
            console.log(Response);
            
        }

     });

*/



});

