function getOptionData(){
	/* Province data*/

$.ajax({
      url : api+'province',
      method : "GET",
      async:false,
      success : function(Data)
      {
       
      var i=0;
       for (i = 0; i < Data.province.length; i++)
       {
          $('#provincereg').append("<option value="+ Data.province[i].province_id +">"+ Data.province[i].province_name + "</option>");
       }
      }

    });

/* Province data ends*/

/* City data*/
$('#provincereg').change(function () {
     
  var select = $( '#provincereg option:selected' ).val();
 
  if(select!=='')
  {
    
    $('#cityreg').prop('disabled', false);
    $.ajax({
    url: api+'city/' +select ,
    method : "GET",
    async:false,
    success : function(Data){
       var i=0;
       $('#cityreg').empty();
       $('#cityreg').append('<option value="">-- City --</option>');
       for (i = 0; i < Data.city.length; i++)
       {

          $('#cityreg').append("<option value="+ Data.city[i].city_id +">"+ Data.city[i].city_name + "</option>");
       }
    }

}); 
    
  }
  else
  {
    $('#cityreg').prop('disabled','disabled');
  }

  });

/* City data ends*/

}

function animateInput(){
	$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})
}

function profileData(){

$.ajax({
	url:api+'profile/'+userId ,
	method:'GET',
	async:false,
	beforeSend:function(){
		animateInput();
	},
	success:function(data){
		console.log(data);
		getOptionData();
		var date = new Date(data.user.listener_bod);
		var convertedDate=date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2)  ;
		if(data.user.listener_picture==null || data.user.listener_picture==''){
			$('#listenerPicture').attr("src","http://orig08.deviantart.net/5e82/f/2015/165/e/c/icon_person_by_ninjavdesign-d8x96sl.png");
		}else{
			$('#listenerPicture').attr("src",api+data.user.listener_picture);
		}
		
		$('#listenerUsername').val(data.user.userid.username);
		$('#listenerEmail').val(data.user.userid.email);
		$('#listenerGender').val(data.user.gender);
		$('#listenerBOD').val(convertedDate);

		$('#provincereg').val(data.user.location.province_id);
		$('#provincereg').change();
		$('#cityreg').val(data.user.location.city_id);

	},
	complete:function(data){

	}
});





}

function listenerProfileChange(){
	console.log("bahaha");
	//get data and validation start here
	var fd = new FormData();
	var err=0;


		var lnp=$('#listenerNewPassword').val();
		var newusername =$('#listenerUsername').val();
		var gender=$('#listenerGender').val();
		var bod=$('#listenerBOD').val();
		var province=$('#provincereg').val();
		var city=$('#cityreg').val();

	if(newusername==''){
		
		toaster("Username must be filled");
	}else if(gender==''){
		toaster("Gender must be choosen");
	}else if(bod==''){
		toaster("Birth of Date must be filled");
	}else if(city==''){
		toaster("City must be choosen");
	}else{
		var listenerPicture=document.getElementById('listenerFilePicture');
		if(listenerPicture!=null){
			fd.append('listenerPicture',listenerPicture.files[0]);
		}

		fd.append('userId',userId);
		fd.append('listenerUsername',newusername);
		fd.append('listenerGender',gender);
		fd.append('listenerBOD',bod);
		fd.append('listenerProvince',province);
		fd.append('listenerCity',city);

		if(lnp!=null){
				var lcnp=$('#listenerNewConfirmPassword').val();
				if(lnp.localeCompare(lcnp)!=0){
					// toast error
					toaster("Password and confirm password not same");
				}else{
					// get old password and new password
					//fd.append('listenerOldPassword',lop);
					fd.append('listenerNewPassword',lnp);
					$.ajax({

						  url: api+'profileEdit',
						  type: 'POST',
						  data: fd,
						  processData: false,
						  contentType: false,
						  success: function(data){
						  		$('#userProfile').html("");
						  		$('#userProfile').append('<i class="glyphicon glyphicon-user"></i> '+newusername);

						  		changePage('main','profile');
						  		toasters("Success updated profile");
						  }
					}); 
				}
			}else{
				$.ajax({

					  url: api+'profileEdit',
					  type: 'POST',
					  data: fd,
					  processData: false,
					  contentType: false,
					  success: function(data){
					  		$('#userProfile').html("");
					  		$('#userProfile').append('<i class="glyphicon glyphicon-user"></i> '+newusername);

					  		changePage('main','profile');
					  		toaster("Success updated profile");
					  }
				}); 


			}
	}

/*	if($('#listenerUsername').val()!=''){
		//User Data
		
		
		
		var lnp=$('#listenerNewPassword').val();
		var newusername =$('#listenerUsername').val();
		var gender=$('#listenerGender').val();
		var bod=$('#listenerBOD').val();
		var province=$('#provincereg').val();
		var city=$('#cityreg').val();


		//Province & City
		if(city!=null){
		
		}else{
			err=1;
			toaster("City must be choosen");
		}
			//Password Data
			
		
	}else{
		// toast error
		err=1;
		toaster("Username must be filled");
	}
	
	if(err==0){


	
	}*/
	//console.log($('#listenerUsername').val());
}
