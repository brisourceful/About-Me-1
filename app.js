'use strict';
// THE FIRST LINE SHOULD ALWAYS BE...'use strict'

var takeQuiz = confirm('Hello, would you like to take a short quiz about me Chris?');

if(takeQuiz) {
  console.log('Awesome! Lets get started!');
  document.write('<h1>Awesome! Lets get started!</h1>');
} else {
    // console.log('Too bad starting anyway!');
    // document.write('<h1>Too bad starting anyway!</h2>');
}

while (takeQuiz) {
  // first question if user clicks ok
  var yesNo = 'Please answer with a Y or N. \n';
  var askA = 'Do I have a dog?';
  var answer = prompt(yesNo + askA).toUpperCase();
  // while (answer != 'Y' && answer != 'N') {
  //   var answer = prompt(answer + ' Is not a valid input. Please type either a Y or N').toUpperCase();
  // }

  if(answer === 'Y') {
    console.log('Sorry I do not have a dog.');
    document.write(askA + '<h2>Sorry I do not have a dog.</h2>');
  } else {
    console.log('You are correct! I do not have a dog.');
    document.write(askA + '<h2>You are correct!</h2>');
  }

  // Q #2
  var askB = 'Am I older than 40?';
  answer = prompt(yesNo + askB);

  if(answer === 'Y') {
    console.log('Shame on you! Not quite.');
    document.write(askB + '<h3>Shame on you! Not quite.</h3>');
  } else {
    console.log('That\'s right, not there yet!');
    document.write(askB + '<h3>That\'s right, not there yet!</h3>');
  }

  // Q #3
  var askC = 'Do I like pizza?';
  answer = prompt(yesNo + askC).toUpperCase();

  if (answer === 'Y') {
    console.log('Hell yes I do! It does not like me however.');
    document.write(askC + '<h4>Hell yes I do! It does not like me however.</h4>');
  } else {
    console.log('Come on! Who doesn\'t like pizza?');
    document.write(askC + '<h4>Come on! Who doesn\'t like pizza?</h4>');
  }

  // Q #4
  var askD = 'Do I like to gamble?';
  var answer = prompt(yesNo + askD).toUpperCase();

  if (answer === 'Y') {
    console.log('No I do not!');
    document.write(askD + '<h5>No I do not!</h5>');
  } else {
    console.log('Right it\'s bad enough all of the money that leaves my possession and I get something.');
    document.write(askD + '<h5>Right it\'s bad enough all of the money that leaves my possession and I get something.</h5>');
  }

  // Q #5
  var askE = 'Is it true that i have been to the moon?';
  var answer = prompt(yesNo + askE).toUpperCase();

  if(answer === 'Y') {
    console.log('I wish! 12 people have been on the moon and no one since 1972.');
    document.write(askE + '<h6>I wish! 12 people have been on the moon and no one since 1972.</h6>');
  } else {
    console.log('Yup you are right only 12 people  have been on the moon and I am not one.');
    document.write(askE + '<h6>Yup you are right only 12 people  have been on the moon and I am not one.</h6>');
  }

  // Q #6 pick a number
  var userNum = prompt('I am thinking of a number between 1 and 20.' /*'\nYou have ' /*+ tries*/);

  for (var i = 0; i < 4; i++) {
    var myNum = 13;
    userNum = parseInt(userNum);
    //console.log(typeof userNum);
    if(userNum !== myNum) {
      if(i !== 3) {
        console.log('I\'m sorry ' + userNum + ' is not the number I was thinking of.'/*\nYou have ' + tries + 'more tries.'*/);
        userNum = prompt('I\'m sorry ' + userNum + ' is not the number I was thinking of.' /*'\nYou have '+ tries + 'more tries.'*/);
      }
    } else {
      console.log('You are correct! I was thinking about ' + userNum + '.');
    }
  }
  takeQuiz = confirm('Try again?');
}

// done...print the page
