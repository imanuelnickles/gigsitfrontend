<!DOCTYPE html>
<body class="full">
<head>
  
 <title>Gigsit</title>
 <link rel="icon" href="picture/gigsit.ico">

<!--AJAX Script-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>


<!--Fonts-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
<style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Roboto:300);
</style>


<!-- Bootstrap -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<!-- CSS -->
<link rel="stylesheet" href="{{ asset('css/login/login.css') }}">



<!--CSS Plugins-->
<link rel="stylesheet" href="{{ asset('css/login/the-big-picture.css') }}">
<link rel="stylesheet" href="{{ asset('css/login/toaster.css') }}">



<!--Token Checker-->
<script type="text/javascript">
/*Global Var API*/
  var api="https://api.gigsit.id/";
//var api=window.location.origin + '/gwsv2.0/public/';
  //var api=window.location.origin + '/gwsv1.0/public/';
/*Global Var Header*/
 //var header=window.location.origin + '/revisi_gfe/public/';
  var header="https://beta.gigsit.id/";
if(localStorage.getItem("token"))
  {

   var data={
        token : localStorage.getItem("token")
      };
    $.ajax({
      url : api + 'auth/authuser',
      method : "GET",
      async:false,
      headers : {Authorization:'Bearer {'+data.token+'}'
      
      },
      success : function(Response){
                      
          location.replace(header);
            }

       });    
  }

</script>
<!--Token Checker Ends-->
<style type="text/css">
  
  /*
             *  STYLE 1
             */

            #style-1::-webkit-scrollbar-track
            {
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
              border-radius: 10px;
              background-color: #F5F5F5;
            }

            #style-1::-webkit-scrollbar
            {
              width: 12px;
              background-color: #F5F5F5;
            }

            #style-1::-webkit-scrollbar-thumb
            {
              border-radius: 10px;
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
              background-color: #555;
            }

</style>

</head>
<body id="style-1">

<nav class="navbar ">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"> <img src="{{ asset('css/listener/picture/logo.png') }}"></a>
    </div>
    <ul class="nav navbar-nav navbar-right login-register-hover">
    
      <li><a href="{{ url('/login')}}" class="login-register">LOGIN</a></li>
      <li><a href="{{ url('/register')}}" class="login-register">REGISTER</a></li> 
      
    </ul>
  </div>
</nav>


<div class="container">

  <!-- <div class="row row-centered">
    <div class="col-md-12">
      <img src="{{ asset('css/listener/picture/logo.png') }}">
    </div>
    <div class="col-md-12">
      <span class="slogan">Discover Your Music as Easy as <br>Turning Back Your Palm</span>
    </div>
  </div> -->


    <div class="login-page" style="min-height:355px">
     
          
      
      <div class="form" >
     
          @yield('content')

        
      </div>



    </div>
 
    
 

</div>

<div class="container-fluid"  style="padding:0 7% 0 7%">
      
         <div class="row row-centered">
      
   

      <ul class="col-md-12 list-inline">
        <li class="pull-left "><a  href="#">About Us</a></li>
        <li class="pull-left"><a href="#">FAQ</a></li>
        <li class="pull-left"><a href="#">Privacy Policy</a></li>

        <li  class="social-center" ><a href="http://www.facebook.com/gigsit"><i  class="fa fa-facebook-square"></i></a></li>
        <li class="social-center"><a href="http://www.instagram.com/gigsitid"><i class="fa fa-instagram"></i></a></li>
        <li class="social-center"><a href="http://www.twitter.com/gigsitid"><i class="fa fa-twitter"></i></a></li>

        <li class="pull-right"><a href="#">Help & Contact</a></li>
        <li class="pull-right"><a href="#">Term & Conditions</a></li>    

      </ul>

    


    </div>

    </div>


<!-- The actual snackbar -->
<div id="snackbar"  style="margin-bottom:3%;z-index=1000">
    <div class="alert alert-danger" id="snackbs" >
     <i class="fa fa-times-circle"></i>
      &nbsp; 
        <span id="snackmsg"></span>
  </div>
</div>
                
<div id="snackbar-success"  style="margin-bottom:3%;z-index=1000">
    <div class="alert alert-success" id="snackbs" >
     <i class="fa fa-check"></i>
      &nbsp; 
        <span id="snackmsgs"></span>
  </div>
</div>

</body>

<script>
   $(document).ready(function(){

    $(document).bind('keypress',pressed);
});

function pressed(e)
{
    if(e.keyCode === 13)
    {
          $('#submit').click();
          $('#create').click();
        //put button.click() here
    }
}
</script>


<!-- Scripts -->
<script type="text/javascript" src="{{ asset('js/toaster/toaster.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/listener/login/animate.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/listener/login/data.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/listener/login/transport.js')}}"></script>



</html>