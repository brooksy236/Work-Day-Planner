$(document).ready(function() {
})
const localeSettings = {};
dayjs.locale(localeSettings);
//----------Date and Time display----------------
var today = dayjs();
$("#currentDay").text(today.format("dddd DD MMMM YYYY HH:mm a"));      

//-----------function for the containers---------
// I used an array of objects because I couldn't get dayjs to work properly in 24hour mode while having the display as 12hour.
var hoursLog = [
    {index: 9, time: "9AM"},
    {index: 10, time: "10AM"},
    {index: 11, time: "11AM"},
    {index: 12, time: "12PM"},
    {index: 13, time: "1PM"},
    {index: 14, time: "2PM"},
    {index: 15, time: "3PM"},
    {index: 16, time: "4PM"},
    {index: 17, time: "5PM"}
];

for (var i = 0; i < hoursLog.length; i++) {

    // This block creates each hour block
    
    $('#parent').append(`<div class="row time-block" id="${hoursLog[i].time}"><div class="col-1 hour"> ${hoursLog[i].time} </div><textarea id="textEntry" type="text" class="col-10 description"> </textarea><button id="save" class="col-1 saveBtn d-flex"> <i class="bi bi-floppy2-fill"></i> </button></div>`) 
    
    // $('.time-block').each('id', hoursLog[i].time)
//------Colour the blocks according to the time-------------

var now = dayjs().format('H'); //Use this to compare to the string in the hour block
if (hoursLog[i].index == now){
    $('.description').eq(i).addClass("present")
} else if (hoursLog[i].index < now) {
    $('.description').eq(i).addClass("past")
} else if (hoursLog[i].index > now) {
    $('.description').eq(i).addClass("future")
}
}

//----------------Local Storage---------------------------

$('.saveBtn').on('click', function(){
    var hourText = $(this).siblings('.description').val()
    var hourBlock = $(this).parent().attr('id')    
    localStorage.setItem(hourBlock, hourText)
})

var textInput = document.getElementById("textEntry");
var saveBtn = document.getElementById('save')

// I couldn't get this part to loop like the rest so had to write each line individually.

$('#9AM .description').val(localStorage.getItem('9AM'))
$('#10AM .description').val(localStorage.getItem('10AM'))
$('#11AM .description').val(localStorage.getItem('11AM'))
$('#12PM .description').val(localStorage.getItem('12PM'))
$('#1PM .description').val(localStorage.getItem('1PM'))
$('#2PM .description').val(localStorage.getItem('2PM'))
$('#3PM .description').val(localStorage.getItem('3PM'))
$('#4PM .description').val(localStorage.getItem('4PM'))
$('#5PM .description').val(localStorage.getItem('5PM'))
