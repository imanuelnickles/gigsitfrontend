 function toaster(message){
          var x = document.getElementById("snackbar");
          var y = document.getElementById("snackmsg");
          y.innerHTML=message;
          // Add the "show" class to DIV
          x.className = "show";

          // After 3 seconds, remove the show class from DIV
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  function toasters(message){
  			var x = document.getElementById("snackbar-success");
          var y = document.getElementById("snackmsgs");
          y.innerHTML=message;
          // Add the "show" class to DIV
          x.className = "show";

          // After 3 seconds, remove the show class from DIV
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }