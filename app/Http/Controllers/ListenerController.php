<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use View;
use App\Http\Requests;

class ListenerController extends Controller
{
	/*Listener*/
	
	/*Explore*/
	public function explore()
	{
	    return Response::json(array('body' => View::make('listener.explore.explore')->render(), 'title' => 'Success'));
	}


	/*Album*/
	public function artistData(){
		return Response::json(array('body' => View::make('listener.artist.artist')->render(), 'title' => 'Success'));
	}

	/*Search*/
	public function searchData(){
		return Response::json(array('body' => View::make('listener.search.search')->render(), 'title' => 'Success'));
	}

	/*Playlist*/
	public function playlistData(){
		return Response::json(array('body' => View::make('listener.playlist.playlist')->render(), 'title' => 'Success'));
	}

	/*Profile*/
	public function getProfile()
	{

		return Response::json(array('body' => View::make('listener.profile.profile')->render(), 'title' => 'Success'));
	}

}

