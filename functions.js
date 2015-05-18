/*
* PROBLEM `checkData`: (easy)
* Write a function that takes a string and checks to make sure that the string
* has a length of exactly three. Return true if the string length is three or
* false if it is not three.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/
function checkData(inputString) {
	if(typeof inputString !== 'string') {
		throw 'Invalid Input'
	}

	if(inputString.length === 3) {
		return true;
	}
	else {
		return false;
	}
}

checkData('abc');

/*
* PROBLEM `concatenateArrays`: (easy)
* Write a function that, given two arrays of integers a and b, returns an array
* that is formed by the elements of 'a' followed by the elements of 'b'.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#Example:_Concatenating_two_arrays

function concatenateArrays(a, b) {
	var result = a.concat(b);
	return result;
}

concatenateArrays([1,2,3],[4,5,6]);


/*
* PROBLEM `fixProperNoun`: (easy)
* Proper nouns always begin with a capital letter, followed by small letters.
* Write a function called `fixProperNoun` that takes a potentially improperly
* capitalized proper noun and returns the same noun with the proper
* capitalization.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/
function fixProperNoun(noun) {
    return noun.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

var x = "foo bar";
var y = fixProperNoun(x);
console.log('x = ' + x);   // prints "foo bar"
console.log('y = ' + y);   // prints "Foo Bar"

/*
* PROBLEM `sortLetters`: (easy)
* Write a function called `sortLetters` that returns a string that sorts all 
* the letters from a given string in the alphabetical order.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/
function sortLetters(inputString) {
	var input = inputString.split('');
	input.sort();
	return input.join('');
}


console.log(sortLetters('cherries and apples and bananas'));


/*
* PROBLEM `absVal`: (easy)
* Write a function called `absVal` that return the absolute value of a given 
* integer. Don't use Math.abs(...)
*
* If the input is invalid throw an 'Invalid Input' exception.
*/
function absVal(integer) {
    return (integer ^ (integer >> 31)) - (integer >> 31);
}



/*
* PROBLEM `myMin`: (easy)
* Write a function called `myMin` that takes two integers and returns the
* smaller of the two numbers.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/


function myMin(x,y) {
	return Math.min(x,y);
 }


// function myMin(array) {
// 	var min = array[0];
// 	for (i=0;i<array.length;i++) {
//     	if (array[i] < min) {
//         	min = array[i];
//     	}
// 	}
// 	return min;
// 	}

// console.log(myMin([-1, 3, 6, 2, 56, 32, 5, 80]));


/*
* PROBLEM `myMax`: (easy) - Actual Interview Question
* Write a function called `myMax` that takes an array of integers and returns
* the largest.
*
* If the input is invalid throw an 'Invalid Input' exception.
*
* Insane mode: do this without using a for loop.
*/

function myMax(array) {
	var max = array[0];
	for (i=0;i<array.length;i++) {
    	if (array[i] > max) {
        	max = array[i];
    	}
	}
	return max;
	}

console.log(myMax([3, 6, 2, 56, 32, 5, 80]));


/*
* PROBLEM `getMonth`: (easy)
* Write a function called `getMonth` that maps a given integer to a month.
*
* For example:
* getMonth(1) == 'January'
* getMonth(3) == 'March'
* etc.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

var months = [
	'January', 
	'February', 
	'March', 
	'April', 
	'May', 
	'June', 
	'July', 
	'August', 
	'September', 
	'October', 
	'November', 
	'December'
];


function getMonth(chooseMonth) {
	return months[chooseMonth-1];
}

console.log(getMonth(6));


/*
* PROBLEM `randomElement`: (medium)
* Create a function called `randomElement` that takes an array of values and
* returns one randomly selected value from that array.
*/

var el = [
	1,
	2,
	'test',
	'test2',
	true,
	false
];

function randomElement(array) {
	var rand1 = Math.floor(Math.random()*(el.length));
	return array[rand1];
}

console.log(randomElement(el));

/*
* PROBLEM `studentPairs`: (medium)
* Create a javascript function called `studentPairs` that takes an array of
* student names and returns an array of randomly selected pairs of students
* (array of arrays).
*/

var students = [
	'Bill',
	'Sally',
	'Fred',
	'Alice',
	'Ted',
	'Bob',
	'Kelly',
	'Scott'
];


function studentPairs() {

var pairs = [];

while(students.length >=2) {

var pair =[];

var rand1 = Math.floor(Math.random()*students.length);
pair.push(students.splice(rand1, 1)[0]);

var rand2 = Math.floor(Math.random()*students.length);
pair.push(students.splice(rand2, 1)[0]);

pairs.push(pair);

}

return pairs;

}

console.log(studentPairs(students));



/*
* PROBLEM `sumSquares`: (medium)
* Write a function called `sumSquares` that returns the sum of squares of all
* integers from 1 up to and including a given positive, non-zero integer N.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

function sumSquares() {


	return
}


/* 
* PROBLEM `findMaxDiff`: (medium)
* Given an array of integers, write a function called `findMaxDiff` that finds
* the maximal difference between any two adjacent elements.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `insertDashes`: (medium)
* Write a function called `insertDashes` that transforms a given sentence into
* a new one with dashes between each two consecutive letters.
* For example: insertDashes('abba test') => a-b-b-a t-e-s-t
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/* 
* PROBLEM `mySubstring`mySubstring: (medium)
* Implement a function called `mySubstring` that can output the substring of 
* the given string within specified bounds.
* 
* For example: mySubstring('abcde', 2, 3) === 'cd'
* 
* Don't use String.substring in your solution.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `splitSwap`: (medium)
* Write a function called `splitSwap` that swaps two halves of a given array.
* If the array has an odd number of elements the array should be split in half
* by rounding down the number of elements divided by two.
* 
* For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `smallMultiples`: (medium)
* For given n and k write a function called `smallMultiples` that returns the
* count of the number of multiples of k that are not greater than n.
*
* For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
* greater than 4.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/* 
* PROBLEM `rot13`: (hard)
* Create a function called `rot13` that takes an unencrypted string and returns
* the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
*
* The input should only contain lower-case alphabetic characters. If the input
* is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `derot13`: (hard)
* Create a function called `derot13` that takes a ROT-13 encrypted string and
* returns the decrypted version of that string.
*
* The input should only contain lower-case alphabetic characters. If the input
* is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `rotn`: (hard)
* Create a function called `rotn` that takes an unencrypted string and an
* integer (n) and returns the ROT-N version of that string.
*
* The input should only contain lower-case alphabetic characters. If the input
* is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `findBoth`: (hard)
* Write a function called `findBoth` that takes two arrays of integers a and b 
* returns an array that includes only the elements that appear in both a and b.
* A value should not appear more than once in the returned array.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `countBoth`: (hard)
* Write a function called `countBoth` that takes two arrays of integers a and 
* b. The function should return the number of elements that exist in both a and
* b.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/* 
* PROBLEM `isDiagonalMatrix`: (hard)
* In linear algebra, a square matrix (array of arrays) is called a diagonal 
* matrix if all entries outside the main diagonal are zero (the diagonal from 
* the upper left to the lower right).
* For example:
* [
*   [1, 0, 0],
*   [0, 2, 0],
*   [0, 0, 3]
* ]
* is a diagonal matrix.
*
* [
*   [1, 0, 2],
*   [0, 2, 0],
*   [0, 0, 3]
* ]
* is not a diagonal matrix.
*
* [
*   [1, 0, 0],
*   [0, 2, 0]
* ]
* is not a diagonal matrix.
*
* Write a function called `isDiagonalMatrix` that takes a matrix and returns
* true if the matrix is a diagonal matrix. Otherwise return false.
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `isAnagram`: (hard) - Actual Interview Question
* An anagram is a type of word play, the result of rearranging the letters of a
* word or phrase to produce a new word or phrase, using all the original
* letters exactly once.
*
* Write a function called `isAnagram` that takes two arrays of strings of equal 
* lengths arr1 and arr2. The function should return a new array of the same 
* length as the input with boolean values at each position i. The boolean value
* at position i of the result array should be true if the strings at position i
* in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
* position i of the result array should be false.
*
* For example:
* isAnagram(
* 		['cinema', 'shot', 'aba', 'rain'],
* 		['iceman', 'hots', 'bab', 'train']
* ) === [true, true, false, false];
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/*
* PROBLEM `validateParentheses`: (hard) - Actual Interview Question
* Write a function called `validateParentheses` that takes a string of
* parentheses. The string can contain the following characters repeated any
* number of times in any order: ()[]{}
*
* The function should return true if the parentheses are in a valid order and
* false if they are not. One type of parentheses cannot close before it has
* been opened and one type of parentheses cannot be closed while a different
* type of parentheses is open. All parentheses that are opened must also be
* closed.
*
* For example:
* validateParentheses(']') === false;
* validateParentheses('[') === false;
* validateParentheses('[]') === true;
* validateParentheses('{[]}') === true;
* validateParentheses('([)]') === false;
* validateParentheses('{[(){()}]}') === true;
*
* If the input is invalid throw an 'Invalid Input' exception.
*/

/* 
* PROBLEM `flattenArray`: (hard) - Actual Interview Question
* Write a function called flattenArray that takes an array of any type of
* element, and flattens it, such that any element in the given array that is an
* array is converted to a list of non-arrays. For example:
*
* flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
* === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
*
* If the input is invalid throw an 'Invalid Input' exception.
*
* Insane mode: do this without recursion.
*/



