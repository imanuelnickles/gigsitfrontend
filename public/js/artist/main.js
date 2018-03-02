$.ajax({
    url : api+'artist/profile/'+userId,
    method :"GET",
    async:false,
        success : function(data)
            {
              var pic_path="";
              var bio="";
               $('#artistUsername').val(data.artist.userid.username);
               $('#artistEmail').html(data.artist.userid.email);
               $('#artistBandName').html(data.artist.artist_name);

               if(data.artist.artist_picture==null)
               {
                  pic_path="http://orig08.deviantart.net/5e82/f/2015/165/e/c/icon_person_by_ninjavdesign-d8x96sl.png";
                }else{
                        pic_path=api+data.artist.artist_picture;
                     }

                $('#artistPic').attr('src', pic_path);
                          

                if(data.artist.artist_bio==null)
                {
                  bio="No Data";
                }
                else{
                  bio=data.artist.artist_bio;
                }

               $('#artistBio').html(bio);
            }       
                                          
});



                 /*Fourth AJAX*/
                        $.ajax({
                        url : api+'artist/manage/table/'+userId,
                        //data : data1,
                        method :"GET",
                        async:false,
                        success : function(Mods)
                        {
                            console.log(Mods);

                            for (var i = 0 ; i < Mods.album.album.length; i++) {

                                $('.manageAlbum').append(
                                    "<div class='col-md-2' style='margin-bottom:50px;text-align:center'>"+
                                     "<div class='row'>"+   
                                     "<img class='img-responsive img-thumbnail' style='width:100px;height:100px' src='"+api+Mods.album.album[i].album_picture+"'>"+
                                      "</div>"+

                                      "<div class='row'>"+   
                                       
                                        Mods.album.album[i].album_title+
                                      "</div>"+

                                      "<div class='row edit-delete-album'>"+   
                                        "<button class='btn new-album-button' onclick='editAlbum("+Mods.album.album[i].album_id+")'>Edit</button>"+
                                       
                                      "</div>"+

                                      "<div class='row edit-delete-album'>"+
                                      "<button class='btn new-album-button' onclick='deleteAlbum("+Mods.album.album[i].album_id+")'>Delete</button>"+   
                                       /* "<a href='#/albumDetail' class='detailAlbum' style='cursor:pointer;' onclick='detailAlbum("+Mods.album[i].album_id+")'>Delete</a>"+*/
                                      "</div>"+

                                      

                                    "</div>"
                                );
               
                                


                               
                                
                                
                            };

                            

                            /*$('#bodok').attr('src',Mods.album[0].album_picture);
                            $('.manageAlbumTitle>span').html(Mods.album[0].album_title);
                            $('.manageAlbumGenre>span').html(Mods.album[0].genre);

                            $('.manageAlbumTableData').html("<tr><td>"+Mods.album[0].song_id[0].song_title+"</td></tr>");
                           console.log(Mods.album[0]);*/

                           
                        }

                        
                        });
                 /*End of Fourth AJAX*/

/*Fourth AJAX*/
                        $.ajax({
                        url : api+'artist/manage/table/'+userId,
                        //data : data1,
                        method :"GET",
                        async:false,
                        success : function(Mods)
                        {
                            console.log(Mods);

                            for (var i = 0 ; i < Mods.album.album.length; i++) {

                                $('#albumMonitor').append(
                                    "<div class='col-md-2' style='margin-bottom:50px;text-align:center'>"+
                                     "<div class='row'>"+   
                                     "<img class='img-responsive img-thumbnail' style='width:100px;height:100px' src='"+api+Mods.album.album[i].album_picture+"'>"+
                                      "</div>"+

                                      "<div class='row' onclick='albumProvince("+Mods.album.album[i].album_id+")' style='cursor:pointer'>"+   
                                       
                                        Mods.album.album[i].album_title+
                                      "</div>"+

                                 

                                      

                                    "</div>"
                                );
               
                                


                               
                                
                                
                            };

                            

                            /*$('#bodok').attr('src',Mods.album[0].album_picture);
                            $('.manageAlbumTitle>span').html(Mods.album[0].album_title);
                            $('.manageAlbumGenre>span').html(Mods.album[0].genre);

                            $('.manageAlbumTableData').html("<tr><td>"+Mods.album[0].song_id[0].song_title+"</td></tr>");
                           console.log(Mods.album[0]);*/

                           
                        }

                        
                        });
                 /*End of Fourth AJAX*/
/*Log Out*/
$('#artist-logout').click(function(){
      localStorage.setItem("token","");
      location.replace(header+'login');
});
