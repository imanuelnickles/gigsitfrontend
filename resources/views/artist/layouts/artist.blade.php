<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="../picture/gigsit.ico">
 
    <title>GigsIt for Artist</title>
    

    <!--Plugins-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
 
    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>

    <!-- Styles -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    
    <!--Own Style-->
    <link rel="stylesheet" href="{{ asset('css/login/toaster.css') }}">
    <link rel="stylesheet" type="text/css" href="{!! asset('css/artist/profile.css') !!}">
    <link rel="stylesheet" type="text/css" href="{!! asset('css/artist/manage.css') !!}">
    <link rel="stylesheet" type="text/css" href="{!! asset('css/artist/main/main.css') !!}">



    <script >
    /*Global Var API*/
     var api="https://api.gigsit.id/";
     //var api=window.location.origin + '/gwsv2.0/public/';

            /*Global Var Header*/
    //var header=window.location.origin + '/revisi_gfe/public/';
     var header="https://beta.gigsit.id/";
    var userId;

         if(localStorage.getItem("token"))
      {

       var token=localStorage.getItem("token");

        $.ajax({
          url : api + 'auth/authuser',
          method : "GET",
          async: false,
          headers : {Authorization:'Bearer '+token},
          success : function(Response){
            //console.log(Response);
                //Start Get Data
                if(Response.user.role_id==2){
                    //localStorage.setItem("token","");
                    location.replace(header);
                }
                else{
                    userId=Response.user.user_id;

                   
                    
                
                 }

                //console.log("token valid");
            },
            error : function(){
                location.replace(header+'login');
            }


        });

      
        
      }else{
        location.replace(header+'login');
        
      }

    </script>

   
    <style>
        body {
            font-family: 'Roboto';
        }

        .fa-btn {
            margin-right: 6px;
        }
    </style>
</head>
<body id="app-layout ">
    <nav class="navbar-artist">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand text-color" href="{{ url('/artist/profile') }}">
                    Gigsit for Artist
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->

                <ul class="nav navbar-nav navbar-left text-color">
                    
                    <li><a href="{{ url('artist/profile') }}">Profile</a></li>
                    <li><a href="{{ url('artist/manage') }}">Album Manager</a></li>
                    <li><a href="{{ url('artist/monitor') }}">Monitoring Data Chart</a></li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right logout">
                   <li>
                   <a>
                       <button type="button" class="logout-button" id="artist-logout">Logout</button>
                   </a>
                   
                    </li>
                     <!--    <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                 <span class="glyphicon glyphicon-cog"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <li><a href="{{ url('/artist/upload') }}"><i class="fa fa-btn fa fa-upload"></i>Upload </a></li>
                                <li><a href="{{ url('/artist/manage') }}"><i class="fa fa-btn fa fa-music"></i>Manage Song </a></li>
                                <li><a href="{{ url('/artist/monitor') }}"><i class="fa fa-btn fa fa-line-chart"></i>Monitoring </a></li>
                                <li><a href="{{ url('/artist/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
                            </ul>
                        </li> -->

                   
                    
                </ul>
            </div>
        </div>
    </nav>
    
    @yield('content')

    <div id="snackbar"  style="margin-bottom:-1%;z-index=1000">
    <div class="alert alert-danger" id="snackbs" >
     <i class="fa fa-times-circle"></i>
      &nbsp; 
        <span id="snackmsg"></span>
  </div>
</div>
                
<div id="snackbar-success"  style="margin-bottom:-1%;z-index=1000">
    <div class="alert alert-success" id="snackbs" >
     <i class="fa fa-check"></i>
      &nbsp; 
        <span id="snackmsgs"></span>
  </div>
</div>



    
    <!-- JavaScripts -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <!-- {{-- <script src="{{ elixir('js/app.js') }}"></script> --}} -->
    <script src="{!! asset('js/artist/uploadForm.js') !!}"></script>
    <script src="{!! asset('js/artist/monitor.js') !!}"></script>
     <!--Own Javascript-->
    <script src="{!! asset('js/artist/profile.js') !!}"></script>
    <script src="{!! asset('js/artist/manage.js') !!}"></script>
     <script src="{!! asset('js/artist/main.js') !!}"></script>
     <script  src="{{ asset('js/toaster/toaster.js')}}"></script>



    

</body>
</html>
