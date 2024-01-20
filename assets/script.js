
//----------Date and Time display----------------
var today = dayjs();
$("#currentDay").text(today.format("dddd DD MMMM YYYY hh:mm A"));      

//-----------function for the containers---------
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var hourDiv = document.ge
// var currentHour = ;

 
for (i = 0; i < hours.length; i++) 

$('#parent').append(`
    <div class="row time-block">
      <div class="col-2 hour"> ${hours[i]} </div>
      <textarea class="col-8 description"> </textarea>
      <button class="col-2 saveBtn d-flex"> </button>
    </div>
  `) 

  
// function insert() {
    
     
    // $('#parent').append('<div class=row time-block><div class=col-2 hour>')
    //  $('#parent').append('div').addclass('row time-block')
    //  var timeBlock = $('<div>'); 
    // timeBlock.addClass('row time-block');
    // var hourDiv = $('<div>');
    // timeBlock.add(hourDiv.addClass('col-2 hour'));
    // var descriptionDiv = $('<div>');
    // descriptionDiv.addClass('col-8 description');
    // }}
    
    //$('.container').add('div').addClass('example');
// ------------------Testing---------------------


// var hour = 
// dayjs().hour(10).format("H A")



//------Use this for the hours

//As with the other getters for durations, dayjs.duration().hours() gets the hours (0 - 23).
// dayjs.duration().asHours() gets the length of the duration in hours.