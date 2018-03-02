var activeSong ;
//Plays the song. Just pass the id of the audio element.



function play(id){
    //Sets the active song to the song being played.  All other functions depend on this.
    activeSong = document.getElementById(id);
    //Plays the song defined in the audio tag.
    activeSong.play();
    
    //Calculates the starting percentage of the song.
    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;
    
    //Fills out the volume status bar.
    document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}
//Pauses the active song.
function pause(){
    activeSong.pause();
}

//Does a switch of the play/pause with one button.
function playPause(id){


    //Sets the active song since one of the functions could be play.
    activeSong = document.getElementById(id);

    if($('#song').attr("src")!=null){

    
    //Checks to see if the song is paused, if it is, play it from where it left off otherwise pause it.
    if (activeSong.paused){
         document.getElementById("songPlayPause").className = "pause";
         document.getElementById("album").className = "start-rot";
         document.getElementById('songPlayPause').src= window.location.origin+"/picture/musicplayer/pause.png";
         activeSong.play();
         
    }else{
    	document.getElementById("songPlayPause").className = "play";
    	document.getElementById("album").className = "stop-rot";
    	document.getElementById('songPlayPause').src= window.location.origin+"/picture/musicplayer/play.png";
    	
        activeSong.pause();
    }

    }

}
function musicStart(){
    document.getElementById("songPlayPause").className = "pause";
    //document.getElementById("album").className = "stop-rot";
    document.getElementById('songPlayPause').src= window.location.origin+"/picture/musicplayer/pause.png";
    $('#album').addClass("start-rot");
}

function musicStop(){
    document.getElementById("songPlayPause").className = "play";
    //document.getElementById("album").className = "stop-rot";
    document.getElementById('songPlayPause').src= window.location.origin+"/picture/musicplayer/play.png";
        
        

    document.getElementById('playhead').style.marginLeft = 0+ "px";
    document.getElementById('trackProgress').style.width = 0+ "px";
    $('#album').removeClass("start-rot");
}
//Updates the current time function so it reflects where the user is in the song.
//This function is called whenever the time is updated.  This keeps the visual in sync with the actual time.
function updateTime(){
	var activeSong = document.getElementById('song');
    var currentSeconds = (Math.floor(activeSong.currentTime % 60) < 10 ? '0' : '') + Math.floor(activeSong.currentTime % 60);
    var currentMinutes = Math.floor(activeSong.currentTime / 60);
    //Sets the current song location compared to the song duration.
    document.getElementById('songTime').innerHTML = currentMinutes + ":" + currentSeconds + ' / ' + Math.floor(activeSong.duration / 60) + ":" + (Math.floor(activeSong.duration % 60) < 10 ? '0' : '') + Math.floor(activeSong.duration % 60);

    //Fills out the slider with the appropriate position.
    var percentageOfSong = (activeSong.currentTime/activeSong.duration);
    var percentageOfSlider = document.getElementById('songSlider').offsetWidth * percentageOfSong;
    
    //Updates the track progress div.
    
    if(Math.round(percentageOfSlider)>10)
    {
    	document.getElementById('playhead').style.marginLeft = Math.round(percentageOfSlider) - 10 + "px";
    	document.getElementById('trackProgress').style.width = Math.round(percentageOfSlider) + "px";
    }
    activeSong.onended = function() {
    //alert("The audio has ended");
    musicStop();
    document.getElementById('songTime').innerHTML = "0:00" + ' / ' + Math.floor(activeSong.duration / 60) + ":" + (Math.floor(activeSong.duration % 60) < 10 ? '0' : '') + Math.floor(activeSong.duration % 60);
    
    //Loop or Shuffle Validation
    if(loopStatus==0){
        var rand=Math.floor((Math.random() * id_array));
        musicPointer=rand;
        console.log(rand);
        console.log(loopStatus);
        console.log(id_array);
    }else{
        musicPointer++;
    }
    
    //console.log(musicPointer);
         if(musicPointer==id_array){
            console.log("cant la");
            musicPointer-=1;
            $('#song').attr("autoplay",false);
            getMusicData(currentQueque.song[musicPointer].song_id);
           
        }
        else{
             getMusicData(currentQueque.song[musicPointer].song_id);
        }
   
    };

    /*if(activeSong.currentTime==activeSong.duration){
        document.getElementById("songPlayPause").className = "play";
        //document.getElementById("album").className = "stop-rot";
        document.getElementById('songPlayPause').src= window.location.origin+"/picture/musicplayer/play.png";
        
        

        document.getElementById('playhead').style.marginLeft = 0+ "px";
        document.getElementById('trackProgress').style.width = 0+ "px";
        document.getElementById('songTime').innerHTML = "0:00" + ' / ' + Math.floor(activeSong.duration / 60) + ":" + (Math.floor(activeSong.duration % 60) < 10 ? '0' : '') + Math.floor(activeSong.duration % 60);
        console.log(musicPointer);
        musicPointer++;
        console.log(musicPointer);
        if(!currentQueque.song[musicPointer].song_id){
            console.log("cant la");
        }
        
    }*/
//changeMusic(currentQueque.song[musicPointer].song_id);
        
        //console.log(currentQueque);
        //console.log(musicPointer);

    
    
    
}
function volumeUpdate(number){
    //Updates the volume of the track to a certain number.
    activeSong.volume = number / 100;
}
//Changes the volume up or down a specific number
function changeVolume(number, direction){
    //Checks to see if the volume is at zero, if so it doesn't go any further.
    if(activeSong.volume >= 0 && direction == "down"){
        activeSong.volume = activeSong.volume - (number / 100);
    }
    //Checks to see if the volume is at one, if so it doesn't go any higher.
    if(activeSong.volume <= 1 && direction == "up"){
        activeSong.volume = activeSong.volume + (number / 100);
    }
    
    //Finds the percentage of the volume and sets the volume meter accordingly.
    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeSlider = document.getElementById('volumeMeter').offsetHeight * percentageOfVolume;
    
    document.getElementById('volumeStatus').style.height = Math.round(percentageOfVolumeSlider) + "px";
     document.getElementById('volumehead').style.height = Math.round(percentageOfVolumeSlider) + "px";
}
//Sets the location of the song based off of the percentage of the slider clicked.
function setLocation(percentage){

	var activeSong = document.getElementById('song');
    activeSong.currentTime = activeSong.duration * percentage;
}
/*
Gets the percentage of the click on the slider to set the song position accordingly.
Source for Object event and offset: http://website-engineering.blogspot.com/2011/04/get-x-y-coordinates-relative-to-div-on.html
*/
function setSongPosition(obj,e){
    //Gets the offset from the left so it gets the exact location.
    var songSliderWidth = obj.offsetWidth;
    var evtobj=window.event? event : e;
    clickLocation =  evtobj.layerX - obj.offsetLeft;
    
    var percentage = (clickLocation/songSliderWidth);
    //Sets the song location with the percentage.
    //console.log(percentage);
    setLocation(percentage);

}

//Set's volume as a percentage of total volume based off of user click.
function setVolume(percentage){
    activeSong = document.getElementById('song');
    console.log(percentage);
    activeSong.volume =  percentage;
    
    //var percentageOfVolume = activeSong.volume / 1;
    //var percentageOfVolumeSlider = document.getElementById('volumeMeter').offsetHeight * percentageOfVolume;
    
    //document.getElementById('volumeStatus').style.height = Math.round(percentageOfVolumeSlider) + "px";
    //document.getElementById('volumehead').style.marginTop = Math.round(percentageOfVolumeSlider) + "px";
}

//Set's new volume id based off of the click on the volume bar.
function setNewVolume(obj,e){
    var volumeSliderHeight = obj.offsetHeight;
    var evtobj = window.event? event: e;
    clickLocation = evtobj.layerY - obj.offsetTop;
    
    var percentage = (clickLocation/volumeSliderHeight);
    console.log(percentage);
    setVolume(percentage);
}
//Stop song by setting the current time to 0 and pausing the song.
function stopSong(){
    activeSong.currentTime = 0;
    activeSong.pause();
}

//Set favorite button 
function setFavorite(){

        var img = document.getElementById('favoriteImage').src;
        if (img.indexOf('favorite1')!=-1) {
            document.getElementById('favoriteImage').src = window.location.origin+"/picture/musicplayer/favorite.png";
        }
         else {
         	document.getElementById('favoriteImage').src  =  window.location.origin+"/picture/musicplayer/favorite1.png";
           
       }

    

}
//Volume Hide & Unhide
function volumeHide()
{
    //Slide Logic Starts Here

    var img = document.getElementById('volumeImage').src;
        if (img.indexOf('volume1')!=-1) {
            document.getElementById('volumeImage').src = window.location.origin+"/picture/musicplayer/volume.png";
              $( ".VolumeSlider" ).hide();
              $( "#range-container" ).hide();
        }
         else {
            document.getElementById('volumeImage').src  =  window.location.origin+"picture/musicplayer/volume1.png";
              $( ".VolumeSlider" ).show();
              $( "#range-container" ).show();
           
       }
  
}

function showValue(value)
{
    value/=100;
    
    setVolume(value);
   
}

//Shuffle Hide & Unhide
function shuffleLoop(){
    //Slide Logic Starts Here
     var img = document.getElementById('shuffleImage').src;

        if (img.indexOf('shuffle1')!=-1) {
            document.getElementById('shuffleImage').src = window.location.origin+"/picture/musicplayer/shuffle.png";
         
              $( ".shuffleBar" ).hide();
              $( "#shuffle-container" ).hide();
             
        }
        else if(img.indexOf('loop1')!=-1){

             document.getElementById('shuffleImage').src = window.location.origin+"/picture/musicplayer/loop.png";
         
              $( ".shuffleBar" ).hide();
              $( "#shuffle-container" ).hide();
        }

         else {
            if(img.indexOf('shuffle')!=-1){
                 document.getElementById('shuffleImage').src  =  window.location.origin+"/picture/musicplayer/shuffle1.png";
            }else{
            document.getElementById('shuffleImage').src  =  window.location.origin+"/picture/musicplayer/loop1.png";
            }
            $( ".shuffleBar" ).show();
            $( "#shuffle-container" ).show();

         
             
       }    
     
}

function changeLoop(){
    var img = document.getElementById('shuffleImage').src;
                if(img.indexOf('shuffle')==-1){
                    $('#shuffleImage').attr('src',window.location.origin+"/picture/musicplayer/shuffle.png");
                    $('#loop').attr('src',window.location.origin+"/picture/musicplayer/loop.png");

                    loopStatus=0;
                   
                    
                }else{
                    $('#shuffleImage').attr('src',window.location.origin+"/picture/musicplayer/loop.png");
                    $('#loop').attr('src',window.location.origin+"/picture/musicplayer/shuffle.png");
                    loopStatus=1;

                    
                    
                }

                    $( ".shuffleBar" ).hide();
              $( "#shuffle-container" ).hide();
              console.log(loopStatus);
            }

//previous song
function previousSong(){
	document.getElementById('playhead').style.marginLeft = 0+ "px";
    document.getElementById('trackProgress').style.width = 0+ "px";
    var activeSong = document.getElementById('song');
    if($('#song').attr("src")!=null){
    if((musicPointer-1)==-1)
    {
        //console.log("biji satu");
        activeSong.pause();
        activeSong.currentTime = 0;
        musicStop();
        $('#song').attr("autoplay",false);
    }else{
        musicPointer-=1;
        $('#song').attr("autoplay",true);
        getMusicData(currentQueque.song[musicPointer].song_id);
    }

    }
}

//next song
function nextSong(){
	document.getElementById('playhead').style.marginLeft = 0+ "px";
    document.getElementById('trackProgress').style.width = 0+ "px";
    var activeSong = document.getElementById('song');
    if($('#song').attr("src")!=null){
    if((musicPointer+1)==id_array)
    {
        //console.log("biji");
        activeSong.pause();
        activeSong.currentTime = 0;
        musicStop();
        $('#song').attr("autoplay",false);
    }else{
        musicPointer+=1;
        $('#song').attr("autoplay",true);
        getMusicData(currentQueque.song[musicPointer].song_id);
    }

    }
}

function quequePlay(){
    //console.log("quequePlay");
   if(currentQueque.song.length==0){
        $('#quequePlayContent').html("No Song in Queque Play");
    }else{
         $('#quequePlayContent').html("");
        for (var i = 0 ; i < currentQueque.song.length; i++) {
        $('#quequePlayContent').append('<div class="row">'+
                '<div class="col-md-5"><span>'+(i+1)+'. </span> <a href="#/" class="playlist-text" onclick="exploreSongInfo('+currentQueque.song[i].song_id+')">'+currentQueque.song[i].song_title+'</a></div>'+
                '<div class="col-md-3"><a href="#/" class="playlist-text" onclick="exploreArtistInfo('+currentQueque.song[i].artist_id+')" >'+currentQueque.song[i].artist_name+'</a></div>'+
                '<div class="col-md-2"><a href="#/" class="playlist-text" onclick="getMusicData('+currentQueque.song[i].song_id+')" ><i class="glyphicon glyphicon-play"></i> Play</div>'+
                '<div class="col-md-2"><a href="#/" class="playlist-text" onclick="deleteItemCurrentQueque('+i+')" ><i class="glyphicon glyphicon-trash"> </i> Delete</a> </div>'+

                        
                            
                        '</div>');
    };
    }
   

    if( $('#quequePlay').hasClass("hidden")){
        $('#quequePlay').removeClass("hidden");
    }else{
        $('#quequePlay').addClass("hidden");
    }
    
}
function emptyQueque(){
    currentQueque={song:[]};
    musicPointer=0;
    id_array=0;
    //console.log(currentQueque);
    quequePlay();
}
function deleteItemCurrentQueque(pos){
    
    
        currentQueque.song.splice(pos,1);
        id_array--;
        for (var i = pos; i < id_array; i++) {
           
            currentQueque.song[i].id=currentQueque.song[i].id-1;
        };
        quequePlay();
        console.log(currentQueque);
}
