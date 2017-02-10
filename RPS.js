
var wins = {
  total:0,
  add: function(newWin) {
    this.total += newWin;
  }
};
var loss = {
  total:0,
  add: function(newLoss) {
    this.total += newLoss;
  }
};
var tie = {
  total:0,
  add: function(newTie) {
    this.total += newTie;
  }
};
//var play = true;
var play = confirm('Would you like to play ROCK, PAPER, SCISSORS?');
//Starting while loop if player clicks 'OK'
while(play) {
  var computerChoice = Math.random();
  var userChoice;
  if (computerChoice < 0.34) {
    computerChoice = 'rock';
  }
  else if(computerChoice <= 0.67) {
    computerChoice = 'paper';
  }
  else {
    computerChoice = 'scissors';
  }
  var userChoice = prompt('Please choose rock, paper, or scissors...');
  while (userChoice.toLowerCase() != 'rock' && userChoice.toLowerCase() != 'paper' && userChoice.toLowerCase() != 'scissors') {
    var userChoice = prompt('\'' + userChoice + '\'' + ' Is not a valid input. Input rock, paper or scissors!');
  }
  //Start of compare function
  var compare = function(userChoice, computerChoice) {
  // Runs until a valid Input is entered
  /*while (userChoice.toLowerCase() != 'rock' && userChoice.toLowerCase() != 'paper' && userChoice.toLowerCase() != 'scissors') {
  var userChoice = prompt('\'' + userChoice + '\'' + ' Is not a valid input. Input rock, paper or scissors!');
  }*/
    if(userChoice === computerChoice) {
      tie.add(1);
      return 'The result is a tie! \n\nPlease try again.';
    }
    else if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
        wins.add(1);
        return 'YOU WIN!\n\nPlay again?';
      } else {
        loss.add(1);
        return 'COMPUTER WINS!\n\nPlay again?';
      }
    }
    else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        wins.add(1);
        return 'YOU WIN!\n\nPlay again?';
      }
      else {
        loss.add(1);
        return 'COMPUTER WINS\n\nPlay again?!';
      }
    }
    else if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        wins.add(1);
        return 'YOU WIN!\n\nPlay again?';
      }
      else {
        loss.add(1);
        return 'COMPUTER WINS!\n\nPlay again?';
      }
    }
  };
  play = confirm('You: ' + userChoice + '\nComputer: ' + computerChoice + '\n' + (compare(userChoice, computerChoice)) + '\nWins: ' + wins.total + '\nLosses: ' + loss.total + '\nTies: ' + tie.total);
}
