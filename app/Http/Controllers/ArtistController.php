<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use View;
use App\Http\Requests;

class ArtistController extends Controller
{
	/*Artist Section*/
	

	/*Profile*/
	public function artist_profile(){
		return View('artist/main/profile');
	}

	/*Upload Music*/
	public function uploadMusic()
	{
		return View('artist/upload/upload_music');
	}
	public function addSong(){
		return View('artist/upload/add_song');
	}

	/*Manager*/
	public function manageMusic()
	{
		return View('artist/manager/manage');
	}
	public function manageAlbumMusic()
	{
		return View('artist/manager/manage_album');
	}

	/*Monitor*/
	public function monitorMusic()
	{
		return View('artist/monitor/monitor');
	}
}

