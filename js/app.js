'use strict';

//user responses will be changed to upper case for consistency in conditional statements
var guessAge = prompt('Am I over 40? Please enter Y or N.');
guessAge = guessAge.toUpperCase();

if(guessAge === 'Y') {
  alert('Not yet...I am 34 years old.');
} else if(guessAge === 'N') {
  alert('You are correct. I am only 34 years old.');
} else {
  alert('Your response is invald. You should have entered Y or N.');
}

var guessSiblings = prompt('Do I have any siblings? Please enter Y or N.');
guessSiblings = guessSiblings.toUpperCase();

if(guessSiblings === 'Y') {
  alert('You are correct. I have a younger brother.');
} else if(guessSiblings === 'N') {
  alert('Incorrect. I have a younger brother.');
} else {
  alert('Your response is invalid. You should have entered Y or N.');
}

var guessFirstWord = prompt('Was \'mama\' my first word? Please enter Y or N.');
guessFirstWord = guessFirstWord.toUpperCase();

if(guessFirstWord === 'Y') {
  alert('You guessed incorrectly. My first word was \'fry\'.');
} else if(guessFirstWord === 'N') {
  alert('You guessed correctly. My first word was \'fry\'.');
} else {
  alert('Your response is invalid. You should have entered Y or N.');
}

var guessMoves = prompt('Have I moved more than 5 times in my life? Please enter Y or N.');
guessMoves = guessMoves.toUpperCase();

if(guessMoves === 'Y') {
  alert('Correct. I have moved 15 times.');
} else if(guessMoves === 'N') {
  alert('That is incorrect. I have moved 15 times.');
} else {
  alert('Your response is invalid. You should have entered Y or N.');
}

var guessFood = prompt('Is chocolate the most addictive food in my life? Please enter Y or N.');
guessFood = guessFood.toUpperCase();

if(guessFood === 'Y') {
  alert('Incorrect. Recently, I have learned that cheese is my greatest food addiction.');
} else if(guessFood === 'N') {
  alert('Correct! Cheese tops my list of addictive foods.');
} else {
  alert('Your response is invalid. You should have entered Y or N.');
}
