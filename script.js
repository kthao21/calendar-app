// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//displays today's date
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

//current hour
var currentHour = dayjs().format('HH');
console.log(currentHour);

//past hour
var pastHour = today.subtract(1, 'hour');
console.log(pastHour);

//future hour
var futureHour = today.add(1, 'hour');
console.log(futureHour);

//using DOM to grab the text area
var textArea = $('textarea');

//using DOM manipulation to grab the hour element
var divEl = $('#hour');
var textContent = divEl.textContent;


//adding color to the textarea element depending if its present/past/future
if (pastHour < textContent) {
    $('textarea').addClass('past');
} else if (futureHour > textContent) {
    $('textarea').addClass('future')
} else if (currentHour === textContent) {
    $('textarea').addClass('present');
}

//saves text content to the targeted hour
$('.saveBtn').on("click", function() {
    var textInput = $(this).siblings('.description').val();
    var hourInput = $(this).parent().attr('id');
    localStorage.setItem(hourInput, textInput);

    var savedValue = localStorage.getItem(hourInput);
    console.log(savedValue);
})


  