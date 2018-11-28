'use strict';

var userName = prompt('Hello! What is your name?');
alert('Let\'s play a guessing game, ' + userName + '!');
console.log('Username: ' + userName);

//user responses will be changed to upper case for consistency in conditional statements
var guessAge = prompt('Am I over 40 years old? Please enter Y or N.');
guessAge = guessAge.toUpperCase();
console.log('Am I over 40? : ' + guessAge);

if(guessAge === 'Y') {
  alert('Not yet...I am 34 years old.');
} else if(guessAge === 'N') {
  alert('You are correct. I am only 34 years old.');
} else {
  alert('Your response is invald. You should have entered Y or N.');
}

var guessSiblings = prompt('Do I have any siblings? Please enter Y or N.');
guessSiblings = guessSiblings.toUpperCase();
console.log('Do I have siblings? : ' + guessSiblings);

if(guessSiblings === 'Y') {
  alert('You are correct. I have a younger brother.');
} else if(guessSiblings === 'N') {
  alert('Incorrect. I have a younger brother.');
} else {
  alert('Your response is invalid. You should have entered Y or N.');
}

var guessFirstWord = prompt('Was \'mama\' my first word? Please enter Y or N.');
guessFirstWord = guessFirstWord.toUpperCase();
console.log('First word was \'mama\'? : ' + guessFirstWord);

if(guessFirstWord === 'Y') {
  alert('You guessed incorrectly. My first word was \'fry\'.');
} else if(guessFirstWord === 'N') {
  alert('You guessed correctly. My first word was \'fry\'.');
} else {
  alert('Your response is invalid. You should have entered Y or N.');
}

var guessTravel = prompt('Have I ever lived in another country? Please enter Y or N.');
guessTravel = guessTravel.toUpperCase();
console.log('Ever lived in another country? : ' + guessTravel);

if(guessTravel === 'Y') {
  alert('Correct. I lived in Japan for 3 years.');
} else if(guessTravel === 'N') {
  alert('That is incorrect. I lived in Japan for 3 years.');
} else {
  alert('Your response is invalid. You should have entered Y or N.');
}

var guessFood = prompt('Is chocolate the most addictive food in my life? Please enter Y or N.');
guessFood = guessFood.toUpperCase();
console.log('Is chocolate most addictive? : ' + guessFood);

if(guessFood === 'Y') {
  alert('Incorrect. Recently, I have learned that cheese is my greatest food addiction.');
} else if(guessFood === 'N') {
  alert('Correct! Cheese tops my list of addictive foods.');
} else {
  alert('Your response is invalid. You should have entered Y or N.');
}

for(var i = 0; i < 4; i++) {
  var guessMoves = prompt('How many times have I moved in my life?');
  guessMoves = parseInt(guessMoves);
  console.log('How many moves? : ' + guessMoves);
  if(guessMoves === 15) {
    alert('That\'s correct! Good guess!');
    break;
  } else if(guessMoves < 15) {
    alert('That guess is too low. Try again.');
  } else if(guessMoves > 15) {
    alert('That guess is too high. Try again.');
  } else {
    alert('Not a valid guess. Try again.');
  }
}

var statesLived = ['virginia', 'north carolina', 'nebraska', 'georgia', 'maryland'];

for(var i = 0; i < 6; i++) {
  var guessStatesLived = prompt('Guess a state where I have lived \(besides Washington\).').toLowerCase();
  console.log('States lived in? : ' + guessStatesLived);
  for(var j = 0; j < statesLived.length; j++) {
    if(guessStatesLived === statesLived[j]) {
      alert('That is correct. I have lived in Virginia, North Carolina, Nebraska, Georgia and Maryland.');
      var guessTruth = true;
      break;
    }
  }
  if(guessTruth === true) {
    break;
  } else {
    alert('That response is incorrect or invalid. Please try again.');
  }
}
alert('I have lived in Virginia, North Carolina, Nebraska, Georgia and Maryland.');
