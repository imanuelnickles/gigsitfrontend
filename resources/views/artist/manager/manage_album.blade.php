@extends('artist.layouts.artist')


<!-- Main Content -->
@section('content')
<div class="container">
	<!--MANAGE SONG COMPONENTS-->
    <div class="row ">
        <div class="col-md-12 col-md-offset-1">
        
            <div class="panel panel-default">

            	<div class="panel-heading ">
                    SONG(s)
                </div>
                <div class="panel-body ">
                    <div class="row manageSongs"></div>
                    <div class="row manageSongsName"></div>
                    <div class="row manageSongsDetail"></div>
                </div>

            </div>
            
        </div>
    </div>

</div>
@endsection
