$('#updateBtn').click(function(e){
	
	var updateImg=document.getElementById('updateImg');
/*	var updateBio=$('#artistBio').val();*/
	var updateUsername=$('#artistUsername').val();

	/*Assigning Progress Bar & FormData Obj*/
	var xhr = new XMLHttpRequest();
	var fd = new FormData();  
	var password=$('#artistNewPassword').val();
	var confirmpassword=$('#artistConfirmNewPassword').val();

	if(updateUsername==''){
		toaster("Username must be filled");
	}else{
			e.preventDefault();
			if(password!=''){
				
				if(password.localeCompare(confirmpassword)==0){
					fd.append('updatePassword',password); 
					fd.append('updateImg',updateImg.files[0]);
					fd.append('updateUsername',updateUsername)
					/*fd.append('updateBio',updateBio); */
					fd.append('userId',userId);

						$.ajax({
							url: api+'artist/update/profile',
					  		type: 'POST',
					  		data: fd,
					  		processData: false,
					        contentType: false,
					        async:false,
							  success: function(data){

							  	//Set Location Header
							  	toasters("Update success");
							  	setTimeout(function(){
							  		location.replace(header+'artist/profile');
							  	},3000);
							  	
							    
							  }
					});

					
				}else{
					toaster("Password and Confirm Password not same");
				}
			}
			else{
	fd.append('updateImg',updateImg.files[0]);
	fd.append('updateUsername',updateUsername)
	/*fd.append('updateBio',updateBio); */
	fd.append('userId',userId);

		$.ajax({
			url: api+'artist/update/profile',
	  		type: 'POST',
	  		data: fd,
	  		processData: false,
	        contentType: false,
	        async:false,
			  success: function(data){

			  	//Set Location Header
			  	toasters("Update success");
			  	setTimeout(function(){
			  		location.replace(header+'artist/profile');
			  	},3000);
			  	
			    
			  }
	});


		}
	}


});