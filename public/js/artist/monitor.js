//Google Chart
google.charts.load('current', {'packages':['corechart','bar']});


var provinceData={data:[]};
var chartData;

function albumProvince(id){
	$('#albumMonitor').html('');
	$.ajax({
		url:api+'monitor/'+id,
		method:'GET',
		async:false,
		success:function(data){
			console.log(data);
			//GLOBAL VAR
			chartData=data;
			for (var i =0; i < data.monitor.song_id.length; i++) {
				for (var j =0; j < data.monitor.song_id[i].activity.length; j++) {
					//console.log(data.monitor[i].activity[j].listener.location.province.province_name);
					var pid=data.monitor.song_id[i].activity[j].listener.location.province.province_id;
					var province_name=data.monitor.song_id[i].activity[j].listener.location.province.province_name;
					var get=0;

					/*for (var k = 0; k < provinceData.data.length; k++) {

					};
*/

					if(provinceData.data.length==0){
						provinceData.data.push(

						    {id: pid , name: province_name ,total : 1}

							);
						get=1;
					}else{

					for (var k = 0; k < provinceData.data.length; k++) {
							if(provinceData.data[k].id===pid){
								provinceData.data[k].total=provinceData.data[k].total+1;
								get++;
							}
						};
					}

					if(get==0){
						provinceData.data.push(

						    {id: pid , name: province_name ,total : 1}

							);
					}
					





					
				};
			};
			$('#albumMonitor').html(data.monitor.album_title);
			$('#albumMonitor').append('<div class="row row-centered"><div class="col-md-10 col-md-offset-1"><div id="province" style="padding-top:40px;padding-bottom:40px" ></div></div></div>');
			 google.charts.setOnLoadCallback(drawStuffs);

				   function drawStuffs() {
				   	var data = new google.visualization.DataTable();
				   	data.addColumn('string', 'Province');
				   	data.addColumn('number', 'Total');
				   	data.addColumn('number', 'ID');
				   	//data.addColumn({type:'string', role:'style'} );
				   	
       /* var data = new google.visualization.arrayToDataTable([
          ['Opening Move', 'Percentage','Bunda'],
          ["King's pawn (e4)", 115,50],
          ["Queen's pawn (d4)", 31,1],
          ["Knight to King 3 (Nf3)", 12,1],
          ["Queen's bishop pawn (c4)", 10,1],
          ['Other', 3,1]
        ]);*/
		
		for (var i = 0; i< provinceData.data.length; i++) {
			var n=[provinceData.data[i].name,  {v: provinceData.data[i].total, f: provinceData.data[i].total+' listener'},{v:provinceData.data[i].id}];
			data.addRows([n]);
			
		};
		/*data.addRows([
          ['Mike',  {v: 10000, f: '$10,000'}],
          ['Jim',   {v:8000,   f: '$8,000'}],
          ['Alice', {v: 12500, f: '$12,500'}],
          ['Bob',   {v: 7000,  f: '$7,000'}]
        ]);*/

        var options = {
          
          width: 600,
          legend: { position: 'none' },
          chart: { 
          	title: 'Music Distribution Result Chart'


                   },
          bars: 'vertical', // Required for Material Bar Charts.
          axes: {
           	
          },
          bar: { groupWidth: "90%" }
		  

        };
		var view = new google.visualization.DataView(data);
		view.setColumns([0,1]);
		//var view = new google.visualization.DataView(data);
        var chart = new google.charts.Bar(document.getElementById('province'));
          function selectHandler() {
	   /* var selectedItem = chart.getSelection()[0];
	    if (selectedItem) {
	      var value = data.getValue(selectedItem.row, selectedItem.column);
	      alert('The user selected ' + value);
	    }*/
	    /*var selection = chart.getSelection();
      alert('That\'s column no. '+selection[0].column);*/
      var selection = chart.getSelection();
  //var message = '';

  /*for (var i = 0; i < selection.length; i++) {
    var item = selection[i];
    if (item.row != null && item.column != null) {
      message += '{row:' + item.row + ',column:' + item.column + '}';
    } else if (item.row != null) {
      message += '{row:' + item.row + '}';
    } else if (item.column != null) {
      message += '{column:' + item.column + '}';
    }
  }
  if (message == '') {
    message = 'nothing';
  }
  alert('You selected ' + message);*/
  var param;
  param=data.getValue(chart.getSelection()[0].row, 2);
  detailChart(param);
  
  }
google.visualization.events.addListener(chart, 'select', selectHandler);
		//view.setColumns([0,2]);
        chart.draw(view, options);
         
   		 }

			
		}

	});
}

var listened=0; //Times of Song Listener in One Album
		var genderData={data:[
								{gender:'Male' ,total : 0}, //Object No.0
								{gender:'Female' ,total : 0} //Object No.1
						]}; //Data for Gender Pie Chart 
		var ageData={data:[
							{age: '<15',total : 0}, //Object No.0
							{age: '15-20' ,total : 0},//Object No.1
							{age: '21-25' ,total : 0},//Object No.2
							{age: '26-30' ,total : 0},//Object No.3
							{age: '>30' ,total : 0},//Object No.4
						]}; //Data for Age Range Coloumn Bar
		var songData={data:[]};//Data for Top Song Coloumn Bar
		var cityData={data:[]};//Data for Top City Coloumn Bar

		//Date (Now)
		var now=new Date().getFullYear();

function detailChart(param){
		
		

		//
		var provinceNameParam='';
		for (var i =0; i < chartData.monitor.song_id.length; i++) {
				for (var j =0; j < chartData.monitor.song_id[i].activity.length; j++) {
					
					var province_temp=chartData.monitor.song_id[i].activity[j].listener.location.province.province_id;
					


					if(province_temp==param){
						provinceNameParam=chartData.monitor.song_id[i].activity[j].listener.location.province.province_name;
						//Temp
						var gender_temp=chartData.monitor.song_id[i].activity[j].listener.gender;
						var song_temp=chartData.monitor.song_id[i].song_title;
						var song_status=0;
						var city_temp=chartData.monitor.song_id[i].activity[j].listener.location.city.city_name;
						var city_status=0;
						

						var age_temp=new Date(chartData.monitor.song_id[i].activity[j].listener.listener_bod).getFullYear();
						var diff=now-age_temp;

						/*Start Scope for Get genderData*/
						if(gender_temp==="Male"){
							genderData.data[0].total+=1;
						}else{
							genderData.data[1].total+=1;
						}
						

						/*End Scope for Get genderData*/

						/*Start Scope for Get ageData*/
						
							//Date Validation
							if(diff<15){
								ageData.data[0].total+=1;
							}else if(diff >=15 && diff <=20){
								ageData.data[1].total+=1;
							}else if(diff >=21 && diff <=25){
								ageData.data[2].total+=1;
							}else if(diff >=26 && diff <=30){
								ageData.data[3].total+=1;
							}else{
								ageData.data[4].total+=1;
							}

						
						/*End Scope for Get ageData*/

						/*Start Scope for Get songData*/
							if(songData.data.length==0){
								songData.data.push(

							    {song:song_temp ,total : 1}

								);
								song_status=1;
							}else{

							for (var k = 0; k < songData.data.length; k++) {
									if(songData.data[k].song===song_temp){
										songData.data[k].total+=1;
										song_status=1;
									}
								};
							}

							if(song_status==0){
								songData.data.push(

							    {song:song_temp ,total : 1}

								);
							}
						/*End Scope for Get songData*/

						/*Start Scope for Get cityData*/
							if(cityData.data.length==0){
								cityData.data.push(

							    {city:city_temp ,total : 1}

								);
								city_status=1;
							}else{

							for (var k = 0; k < cityData.data.length; k++) {
									if(cityData.data[k].city===city_temp){
										cityData.data[k].total+=1;
										city_status=1;
									}
								};
							}

							if(city_status==0){
								cityData.data.push(

							    {city:city_temp ,total : 1}

								);
							}
						/*End Scope for Get cityData*/
						listened++; //Increment for Listened
					}
				}
				
			}
	console.log(listened);
	console.log(genderData);
	console.log(ageData);
	console.log(songData);
	console.log(cityData);
	drawDetailChart(provinceNameParam);
}

function drawDetailChart(provinceNameParam){
	$('#albumMonitor').html('');
	$('#albumMonitor').html('<div class="row ">'+
								'<div class="col-md-4">'+
									
										provinceNameParam+
									
									
								'</div>'+

							'</div>'+

							'<div class="row ">'+
								'<div class="col-md-4">'+
									
									
										'<div id="songListened">'+listened+' time songs listened</div>'+
									
								'</div>'+

							'</div>'+

							'<div class="row">'+
							'<div class="col-md-6"><div id="genderChart" style="" ></div></div>'+
							'<div class="col-md-6"><div id="ageChart" style="" ></div></div>'+
							
							'</div>'+
							'<div class="row ">'+
							'<div class="col-md-6"><div id="songChart" style="margin-top:30px;" ></div></div>'+
						
							'</div>'+
							'<div class="row ">'+
							'<div class="col-md-6"><div id="cityChart" style="margin-top:30px;" ></div></div>'+
							
							'</div>');

						  google.charts.setOnLoadCallback(drawGender);
						  google.charts.setOnLoadCallback(drawSong);
						  google.charts.setOnLoadCallback(drawAge);
						  google.charts.setOnLoadCallback(drawCity);
						  //drawGender
					      function drawGender() {

					        var dataGender = google.visualization.arrayToDataTable([
					          ['Gender', 'Total'],
					          ['Male',     genderData.data[0].total],
					          ['Female',       genderData.data[1].total]
					          
					        ]);

					        var options = {
					          title: 'Gender',
					          width: 340,
	         				

					        
					        };

					        var gender = new google.visualization.PieChart(document.getElementById('genderChart'));

					        gender.draw(dataGender, options);
					      }

					      	//drawAge
						    function drawAge() {
					           var dataAge = google.visualization.arrayToDataTable([
					         ['Age', 'Total'],
					         ['<15', ageData.data[0].total],            
					         ['15-20', ageData.data[1].total],            
					         ['21-25', ageData.data[2].total],
					         ['26-30', ageData.data[3].total ],
					         ['<30', ageData.data[4].total ],  
					      ]);

					        var options = {
					          title: 'Age Range',
					          width: 340,
					          legend: { position: 'none' },
					          chart: { title: 'Age Range',
					                   subtitle: '' },
					          bars: 'horizontal', // Required for Material Bar Charts.
					          axes: {
					            x: {
					              0: { side: 'top', label: 'Total'} // Top x-axis.
					            }
					          },
					          bar: { groupWidth: "90%" }
					        };

					        var age= new google.charts.Bar(document.getElementById('ageChart'));
					       	age.draw(dataAge, options);
					      };

					       //drawSong
						    function drawSong() {
					        var dataSong = new google.visualization.DataTable();
							dataSong.addColumn('string', 'Song');
							dataSong.addColumn('number', 'Total');
							for (var i = 0; i< songData.data.length; i++) {
							

							dataSong.addRows([[songData.data[i].song,  {v: songData.data[i].total}]]);
							
							};
								

					          var options = {
					          title: 'Top Songs',
					          width: 715,
					          legend: { position: 'none' },
					          chart: { title: 'Top Songs',
					                   subtitle: '' },
					          bars: 'horizontal', // Required for Material Bar Charts.
					          axes: {
					            x: {
					              0: { side: 'top', label: 'Total'} // Top x-axis.
					            }
					          },
					          bar: { groupWidth: "90%" }
					        };

					        var chart= new google.charts.Bar(document.getElementById('songChart'));
					       	chart.draw(dataSong, options);
					      };

					      

					      //drawCity
						    function drawCity() {
					           var dataCity = new google.visualization.DataTable();
							dataCity.addColumn('string', 'City');
							dataCity.addColumn('number', 'Total');
							for (var i = 0; i< cityData.data.length; i++) {
							

							dataCity.addRows([[cityData.data[i].city,  {v: cityData.data[i].total}]]);
							
							};

					        var options = {
					          title: 'Top City',
					          width: 715,
					          legend: { position: 'none' },
					          chart: { title: 'Top City',
					                   subtitle: '' },
					          bars: 'horizontal', // Required for Material Bar Charts.
					          axes: {
					            x: {
					              0: { side: 'top', label: 'Total'} // Top x-axis.
					            }
					          },
					          bar: { groupWidth: "90%" }
					        };

					        var city = new google.charts.Bar(document.getElementById('cityChart'));
					       	city.draw(dataCity, options);
					      };


}