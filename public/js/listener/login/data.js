/* Province data*/

$.ajax({
      url : api+'province',
      method : "GET",
      success : function(Data)
      {
       
      var i=0;
       for (i = 0; i < Data.province.length; i++)
       {
          $('#provincereg').append("<option value="+ Data.province[i].province_id +">"+ Data.province[i].province_name + "</option>");
       }
      }

    });

/* Province data ends*/

/* City data*/
$('#provincereg').change(function () {
     
  var select = $( '#provincereg option:selected' ).val();
 
  if(select!=='')
  {
    
    $('#cityreg').prop('disabled', false);
    $.ajax({
    url: api+'city/' +select ,
    method : "GET",
    success : function(Data){
       var i=0;
       $('#cityreg').empty();
       $('#cityreg').append('<option value="">-- City --</option>');
       for (i = 0; i < Data.city.length; i++)
       {

          $('#cityreg').append("<option value="+ Data.city[i].city_id +">"+ Data.city[i].city_name + "</option>");
       }
    }

}); 
    
  }
  else
  {
    $('#cityreg').prop('disabled','disabled');
  }

  });

/* City data ends*/

