// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
function minimum(num1, num2) {
	if (num1 < num2) {
		console.log(num1);
	} else {
		console.log(num2);
	}
}
minimum(1, 2);

// 2. Create a new function called minimum3() to find the smallest of three numbers
function minimum3(num1, num2, num3) {
	if (num1 < num2 && num1 < num3) {
		console.log(num1);
	} else if (num2 < num1 && num2 < num3) {
		console.log(num2);
	} else {
		console.log(num3);
	}
}

minimum3(1,2,3);

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(array1) {
	var myTotal = eval(array1.join('+'));
	return myTotal;
}

sum([1, 2, 3, 4]);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
function multiply(array1) {
	var myMultTotal = 1;
	for (var i = 0; i < array1.length; i++) {
		myMultTotal = myMultTotal * array1[i];
	}
	return myMultTotal;
}

multiply([1, 2, 3, 4]);

// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.
var words = ["window", "table", "barstool", "glass", "charger", "outlet"];
function filterSixPlus(words) {
    return words.filter(w => w.length >= 6);
}

console.log(filterSixPlus(words));

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
function convertTemp() {
	var getTemp = prompt("What's the temp?");
	return ((getTemp * 9) / 5) + 32;
}

convertTemp();

// 7. Adding to the code in #2, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.
function convertTemp() {
	var getTemp = prompt("What's the temp?");
	var cOrF = prompt('Would you like C or F?').toUpperCase();
	
	if (cOrF === 'C') {
		return ((getTemp - 32) * 5) / 9;
	} else if (cOrF === 'F') {
		return ((getTemp * 9) / 5) + 32;
	}
}

convertTemp();

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
function countBs(word) {
	var count = 0;
	for (i = 0; i < word.length; i++) {
		if (word.charAt(i) === 'B') {
			count++;
		}
	}
	return count;
}

countBs('Bubbles');


// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
function countChars(word, x) {
	var count = 0;
	for (i = 0; i < word.length; i++) {
		if (word.charAt(i) === x) {
			count++;
		}
	}
	return count;
}

countChars('Bubbles', 'b');

function countChars(word, x) {
	var count = 0;
	for (i = 0; i < word.length; i++) {
		if (word.charAt(i) === word.charAt(x)) {
			count++;
		}
	}
	return count;
}

countChars('Bubbles', 4);

// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
var string = "Soon you will master functions!";
function ohZero(string) {
	 return stringZero = string.replace(/o/g, '0');
}

ohZero(string);
// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"
var stringLatin = "look at my cool function";
function pigLatin(string) {
	var pigArray = [];
	var currentWord = '';
	var returnString = '';
	var ending = '';
	pigArray = string.split('');
	for (i = 0; i < pigArray.length; i++) {
		if ( pigArray[i] === ' ') {
			currentWord += ending;
			returnString = currentWord;
			currentWord = '';
		}
		if ( currentWord === '' && (pigArray[i] === 'a' || pigArray[i] === 'e' || pigArray[i] === 'i' || pigArray[i] === 'o' || pigArray[i] === 'u')) {
			currentWord += pigArray[i];
			ending = 'yay';
		} else {
			currentWord += pigArray[i];
		}
	} return returnString;
}

pigLatin(stringLatin);

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
function bottleSong(numOfBottles) {
	var bottles;
	for (counter = numOfBottles; counter >= 1; counter = counter - 1) 
	{
	    if (counter == 1) {
	        bottles = 'bottle';
	    } else {
	        bottles = 'bottles';
	    }
	    console.log(counter + " " + bottles + " of beer on the wall.");
	    if (counter < numOfBottles) {
	        console.log("");
	        console.log(counter + " " + bottles + " of beer on the wall.");
	    }
	    console.log(counter + " " + bottles + " of beer.");
	    console.log("Take one down.");
	    console.log("Pass it around.");
	    if (counter == 1) {
	        console.log("No more bottles of beer on the wall.");
	    }
	}
}

bottleSong(99);

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

function randomNumberGame() {
	if (parseInt(guess) === randomNumber ) {
	  correctGuess = true;
	} else if ( parseInt(guess) < randomNumber ) {
	  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
	  if (parseInt(guessMore) === randomNumber) {
	      correctGuess = true;
	  }
	} else if ( parseInt(guess) > randomNumber ) {
	   var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
	  if (parseInt(guessLess) === randomNumber) {
	      correctGuess = true;
	  }
	}
	if ( correctGuess ) {
	    console.log('You guessed the number!');
	} else {
	    console.log('Sorry. The number was ' + randomNumber + '.');
	}
}

randomNumber();

// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
