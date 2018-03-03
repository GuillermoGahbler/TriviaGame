var timer = 0;
var timesUp = 0;
var correct = 0;
var incorrect = 0;
var unchecked = 0;
var time = 25000;
var startString = $('#start')["0"].outerHTML
var questionContainerString = $('.questionContainer')["0"].outerHTML
var answers = ['Italy', '13%', 'Lombardis Pizzeria', 'Pepperoni', 'Michelangelo']


function stoptimer() {
    clearInterval(timer);
    clearTimeout(timesUp);

}

$('body div').html(startString)

$('#start').on('click', function () {
    $('body div').html(questionContainerString)
    timer = setInterval(function () {
        time -= 1000;
        $('#timer').html('You have ' + time / 1000 + ' seconds left')
    }, 1000);

    timesUp = setTimeout(function () {
        stoptimer()
        getResults()
    }, 25000)
    $('#finished').on('click', getResults)
})



function getResults() {
    let pizzaQuestions = $('.pizzaQuestion')
    for (let i = 0; i < pizzaQuestions.length; i++) {
        if (!$(pizzaQuestions[i]).children('input:checked').val()) {
            unchecked++;
        } else if ($(pizzaQuestions[i]).children('input:checked').val() === answers[i]) {
            correct++;
        } else {
            incorrect++;

        }
    }

    $('body div').html('<p> You got ' + correct + ' correct questions! </p>');
    $('body div').append('<p> You got ' + incorrect + ' incorrect questions. </p>');
    $('body div').append('<p>' + unchecked + ' Questions were unanswered </p>');

}