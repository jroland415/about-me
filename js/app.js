'use strict';

//user responses will be changed to upper case for consistency in conditional statements
var guessAge = prompt('Am I over 40? Please enter Y or N.');
guessAge = guessAge.toUpperCase();

if(guessAge === 'Y') {
  alert('Not yet...I am 34 years old.');
} else if(guessAge === 'N') {
  alert('You are correct. I am only 34 years old.');
} else {
  alert('Please enter Y or N.');
}

var guessSiblings = prompt('Do I have any siblings? Please enter Y or N.');
guessSiblings = guessSiblings.toUpperCase();

if(guessSiblings === 'Y') {
  alert('You are correct. I have a younger brother.');
} else if(guessSiblings === 'N') {
  alert('Incorrect. I have a younger brother.');
} else {
  alert('Please enter Y or N.');
}