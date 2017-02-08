'use strict';

var takeQuiz = confirm('Hello, would you like to take a short quiz about me?');

if(takeQuiz) {
  consolelog('Awesome! Lets get started!');
} else {
  consolelog('Too bad starting anyway!');
}

var responseA = prompt('Please answer with a Y or N... \nDo I have a dog?');

if(responseA.toUpperCase() === 'Y') {
  consolelog('Sorry I do not have a dog.');
} else {
  consolelog('You are correct!');
}
