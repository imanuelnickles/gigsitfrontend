/* Login */
  $('#submit').click(function(e)
    {
      if($('#email').val()=='')
      {
          toaster("Email must be filled");
      }else if($('#password').val()==''){
          toaster("Password must be filled");
      }else{

      e.preventDefault();
      var data={
        email: $('#email').val(),
        password: $('#password').val()
      };
     $.ajax({
        url :  api+'auth/login',
        method : "POST",
        data : data,
        success : function(Response){
            console.log(Response);
            localStorage.setItem("token", Response.token);

             $.ajax({
                  url : api+'auth/authuser',
                  method : "GET",
                  async:false,
                  headers : {Authorization:'Bearer '+Response.token},
                  success : function(Data){

                        if(Data.user.role_id==1){
                          location.replace(header+'artist/profile');
                        }else{
                          location.replace(header);
                        }
                    },
                  error:function(){
                    location.replace(header+'login');
                  }


                });
            
        },
        error:function(a,b,c){
          if(a.status==501){
            toaster(a.responseText.substr(1,a.responseText.length-2));
          }
          else{
            toaster("Invalid email or password");
          }
        }

     });

      }

    });

/* Login ends*/

/*Re-setting the registration form*/
$('#listener-register').click(function(){
  $("#agree-button").attr("checked",false);
});
$('#artist-register').click(function(){
  $("#agree-button").attr("checked",false);
});

/* Register */
    $('#create').click(function(e)
    {
      if($('#listener-register').hasClass("active")){
      //Listener Register
          if($('#usernamereg').val()=='')
      {

        toaster("Username must be filled");

      }else if($('#emailreg').val()==''){

        toaster("Email must be filled");

      }else if($('#passreg').val()==''){

        toaster("Password must be filled");

      }else if($('#bodreg').val()==''){

        toaster("Birth of Date must be filled");

      }else if($('#genderreg').val()==''){

        toaster("Gender must be chosen");

      }else if($('#provincereg').val()==''){

        toaster("Province must be chosen");

      }else if($('#cityreg').val()==''){

        toaster("City must be chosen");

      }else if($("#agree-button").prop("checked")===false){

        toaster("You need to agree with terms & condition");

      }else{

      e.preventDefault();
      var data={
        username: $('#usernamereg').val(),
        email: $('#emailreg').val(),
        password: $('#passreg').val(),
        bod:$('#bodreg').val(),
        roleID: $('#rolereg').val(),
        gender: $('#genderreg').val(),
        province: $('#provincereg').val(),
        city:$('#cityreg').val()
      };
      
      
     $.ajax({
        url :  api+'listener/register',
        method : "POST",
        data : data,
        success : function(Response){
            
            
            location.replace(header+'login');
        },
        error:function(a,b,c){
          toaster("Data not valid");
        }

     });

        
      }
    }else{
        //Artist Register
        console.log("artist");
        if($('#artistusernamereg').val()=='')
      {

        toaster("Username must be filled");

      }else if($('#artistbandreg').val()==''){

        toaster("Band name must be filled");

      }else if($('#artistemailreg').val()==''){

        toaster("Email must be filled");

      }else if($('#artistpassreg').val()==''){

        toaster("Password must be filled");

      }else if($("#agree-button").prop("checked")===false){

        toaster("You need to agree with terms & condition");

      }else{

      e.preventDefault();
      var data={
        username: $('#artistusernamereg').val(),
        band:$('#artistbandreg').val(),
        email: $('#artistemailreg').val(),
        password: $('#artistpassreg').val(),
        
      };
      
      
     $.ajax({
        url :  api+'artist/register',
        method : "POST",
        data : data,
        success : function(Response){
            
            
            location.replace(header+'login');
        },
        error:function(a,b,c){
          toaster("Data not valid");
        }

     });

        
      }
        
      }
      /*if($('#usernamereg').val()=='')
      {

        toaster("Username must be filled");

      }else if($('#emailreg').val()==''){

        toaster("Email must be filled");

      }else if($('#passreg').val()==''){

        toaster("Password must be filled");

      }else if($('#genderreg').val()==''){

        toaster("Gender must be chosen");

      }else if($('#provincereg').val()==''){

        toaster("Province must be chosen");

      }else if($('#cityreg').val()==''){

        toaster("City must be chosen");

      }else{

      e.preventDefault();
      var data={
        username: $('#usernamereg').val(),
        email: $('#emailreg').val(),
        password: $('#passreg').val(),
        roleID: $('#rolereg').val(),
        gender: $('#genderreg').val(),
        province: $('#provincereg').val(),
        city:$('#cityreg').val()
      };
      
      
     $.ajax({
        url :  api+'auth/register',
        method : "POST",
        data : data,
        success : function(Response){
            
            
            location.replace(header+'login');
        },
        error:function(a,b,c){
          console.log();
        }

     });

        }*/

    });

/* Register ends*/

/*Forgot Password*/
$('#submitForgotPassword').click(function(e){
  if($('#emailForgotPassword').val()==null || $('#emailForgotPassword').val()==''){
    toaster("E-mail must be filled");
  }else{
    var data={
      email:$('#emailForgotPassword').val()
    };
    $.ajax({
      url:api+'forgot',
      method:'POST',
      data:data,
      success:function(msg){
        //console.log(msg);
         toaster(msg.message);
         
        setTimeout(function(){
          location.replace(header+'login');
        },3000);
       
      }
    });
  }
});