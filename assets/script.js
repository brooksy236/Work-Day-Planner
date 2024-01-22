$(document).ready(function() {
})

//----------Date and Time display----------------
var today = dayjs();
$("#currentDay").text(today.format("dddd DD MMMM YYYY hh:mm A"));      

//-----------function for the containers---------
var hoursLog = ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"];

// var currentHour = ;

for (var i = 0; i < hoursLog.length; i++) {

$('#parent').append(`
<div class="row time-block">
<div class="col-1 hour"> ${hoursLog[i]} </div>
<textarea class="col-10 description"> </textarea>
<button class="col-1 saveBtn d-flex"> <i class="bi bi-floppy2-fill"></i> </button>
</div>
`) 

//------Colour the blocks according to the time-------------

var now = dayjs().format('hA'); //Use this to compare to the string in the hour block
if (hoursLog[i] === now){
    $('.description').eq(i).addClass("present")
} else if (hoursLog[i] <= now) {
    $('.description').eq(i).addClass("past")
} else if (hoursLog[i] >= now) {
    $('.description').eq(i).addClass("future")
}
}

console.log(now)












// ------------------Testing---------------------



// $.each(hoursLog, function(i, val){
//     if (val == $(hour.text)) {
//         $('textarea').addClass('present');

//     }    
// })


// $(hoursLog[i]).addClass('present');   
// console.log(hoursLog[0]);
// console.log(today);


// const hourDescription = $('textarea');
// var hours = $('.hours').text(today.format("hh"));
// console.log(hours)

// var duration = dayjs.duration


// duration.get('hours');

// var time = dayjs(today).toString();
// $.each( [ "a", "b", "c" ], function( i, l ){
    //     alert( "Index #" + i + ": " + l );
    //   });
    
    // if ($(hoursLog[i]) == now) {
    //     $('textarea').addClass('present');}
    
// if (hoursLog[i] == ) {

// }
  
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


// var hour = 
// dayjs().hour(10).format("H A")



//------Use this for the hours

//As with the other getters for durations, dayjs.duration().hours() gets the hours (0 - 23).
// dayjs.duration().asHours() gets the length of the duration in hours.