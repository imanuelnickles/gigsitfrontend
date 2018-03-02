<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


/*

Route::get('/', function () {
    return view('welcome');
});

*/

/*Login & Register*/
Route::get('/login', "HomeController@Login");
Route::get('/register', "HomeController@Register");
Route::get('/forgotpassword', "HomeController@forgotPassword");
/*Main Frame Loads*/
Route::get('/','HomeController@index');

//Route::get('/forgotpassword','MailController@forgot');


/*Listener Section*/

/*Explore*/
Route::get('/explore', "ListenerController@explore");

/*Profile*/
Route::get('/profile','ListenerController@getProfile');

/*Album*/
Route::get('/artistdata','ListenerController@artistData');

/*Search*/
Route::get('/search','ListenerController@searchData');

/*Playlist*/
Route::get('/playlist','ListenerController@playlistData');




/*Artist Section*/


/*Profile*/
Route::get('/artist/profile','ArtistController@artist_profile');

/*Upload Music*/
Route::get('/artist/upload','ArtistController@uploadMusic');
Route::get('/artist/add/song','ArtistController@addSong');

/*Manager*/
Route::get('/artist/manage','ArtistController@manageMusic');
Route::get('/artist/manage/album','ArtistController@manageAlbumMusic');

/*Monitor*/
Route::get('artist/monitor','ArtistController@monitorMusic');