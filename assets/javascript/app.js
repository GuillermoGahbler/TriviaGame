var timer = 0;
var timesUp = 0;
var questionContainerString = $('.questionContainer')["0"].outerHTML
// console.log(questionContainerString);
// this will console.log all changes as they happen
var startSting = $('#start')["0"].outerHTML

var answers = ['Italy', '13%', 'Lombardis Pizzeria', 'Pepperoni', 'Michelangelo']

var time = 25000;


function stoptimer() {
    clearInterval(timer);
    clearTimeout(timesUp);

}

$('body div').html(startSting)
$('#start').on('click', function () {
    $('body div').html(questionContainerString)
    timer = setInterval(function () {
        time -= 1000;
        $('#timer').html('You have ' + time / 1000 + ' seconds left')
    }, 1000);

    timesUp = setTimeout(function () {
        stoptimer()
    }, 25000)

})

function getResults() {
 let pizzaQuestions =  $('.pizzaQuestion')    
}