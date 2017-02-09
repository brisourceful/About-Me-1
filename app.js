'use strict';

var takeQuiz = confirm('Hello, would you like to take a short quiz about me?');

if(takeQuiz) {
  console.log('Awesome! Lets get started!');
  document.write('<h1>Awesome! Lets get started!</h1>');
} else {
  console.log('Too bad starting anyway!');
  document.write('<h1>Too bad starting anyway!</h2>');
}

var yesNo = 'Please answer with a Y or N. \n';

var responseA = prompt(yesNo + 'Do I have a dog?');

if(responseA.toUpperCase() === 'Y') {
  console.log('Sorry I do not have a dog.');
  document.write('<h2>Sorry I do not have a dog.</h2>');
} else {
  console.log('You are correct!');
  document.write('<h2>You are correct!</h2>');
}

var responseB = prompt(yesNo + 'Am I older than 40?');

if(responseB.toUpperCase() === 'Y') {
  console.log('Shame on you! Not quite.');
  document.write('<h3>Shame on you! Not quite.</h3>');
} else {
  console.log('That\'s right, not there yet!');
  document.write('<h3>That\'s right, not there yet!</h3>');
}

var respnseC = prompt(yesNo + 'Do I like pizza?');

if (respnseC.toUpperCase() === 'Y') {
  console.log('Hell yes I do! It does not like me however.');
  document.write('<h4>Hell yes I do! It does not like me however.</h4>');
} else {
  console.log('Come on! Who doesn\'t like pizza?');
  document.write('<h4>Come on! Who doesn\'t like pizza?</h4>');
}

var responseD = prompt(yesNo + 'Do I like to gamble?');

if (responseD.toUpperCase() === 'Y') {
  console.log('No I do not!');
  document.write('<h5>No I do not!</h5>');
} else {
  console.log('Right it\'s bad enough all of the money that leaves my possession and I get something.');
  document.write('<h5>Right it\'s bad enough all of the money that leaves my possession and I get something.</h5>');
}

var responseE = prompt(yesNo + 'Is it true that i have been to the moon?');

if(responseE.toUpperCase() === 'Y') {
  console.log('I wish! 12 people have been on the moon and no one since 1972.');
  document.write('<h6>I wish! 12 people have been on the moon and no one since 1972.</h6>');
} else {
  console.log('Yup you are right only 12 people  have been on the moon and I am not one.');
  document.write('<h6>Yup you are right only 12 people  have been on the moon and I am not one.</h6>');
}
