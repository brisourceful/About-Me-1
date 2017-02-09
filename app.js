'use strict';

var takeQuiz = confirm('Hello, would you like to take a short quiz about me?');

if(takeQuiz) {
  consolelog('Awesome! Lets get started!');
} else {
  consolelog('Too bad starting anyway!');
}

var yesNo = 'Please answer with a Y or N. \n';

var responseA = prompt(yesNo + 'Do I have a dog?');

if(responseA.toUpperCase() === 'Y') {
  consolelog('Sorry I do not have a dog.');
} else {
  consolelog('You are correct!');
}

var responseB = prompt(yesNo + 'Am I older than 40?');

if(responseB.toUpperCase() === 'Y') {
  consolelog('Shame on you! Not quite.');
} else {
  consolelog('Thanks, you are correct!');
}

var respnseC = prompt();

if (respnseC.toUpperCase() === 'Y') {

} else {

}
