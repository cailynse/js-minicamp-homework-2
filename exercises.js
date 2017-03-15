//Do not change any of the function names

function getBiggest(x, y) {
	//x and y are integers.  Return the larger integer
	//if they are the same return either one
	if (x > y) {
		return x;
	} else {
		return y;
	}
}

function greeting(language) {
	//return a greeting for three different languages:
	//language: 'German' -> 'Guten Tag!'
	//language: 'English' -> 'Hello!'
	//language: 'Spanish' -> 'Hola!'
	//if language is undefined return 'Hello!'
	if (language === 'German') {
		return 'Guten Tag!';
	} else if (language === 'Spanish') {
		return 'Hola!';
	} else {
		return 'Hello!';
	}
}

function isTenOrFive(num) {
	//return true if num is 10 or 5
	//otherwise return false
	if (num === 10 || num === 5) {
		return true;
	} else {
		return false;
	}
}

function isInRange(num) {
	//return true if num is less than 50 and greater than 20
	if (num < 50 && num > 20) {
		return true;
	} else {
		return false;
	}
}

function isInteger(num) {
	//return true if num is an integer
	//0.8 -> false
	//1 -> true
	//-10 -> true
	//otherwise return false
	//hint: you can solve this using Math.floor
	return Number.isInteger(num);
}

function fizzBuzz(num) {
	//if num is divisible by 3 return 'fizz'
	//if num is divisible by 5 return 'buzz'
	//if num is divisible by 3 & 5 return 'fizzbuzz'
	//otherwise return num
	if (num % 3 === 0 && num % 5 === 0) {
		return 'fizzbuzz';
	} else if (num % 3 === 0) {
		return 'fizz';
	} else if (num % 5 === 0) {
		return 'buzz';
	} else {
		return num;
	}
}

function isPrime(num) {
	//return true if num is prime.
	//otherwise return false
	//hint: a prime number is only evenly divisible by itself and 1
	//hint2: you can solve this using a for loop
	//note: 0 and 1 are NOT considered prime numbers
	if (num > 1) {
		if (num > 2) {
			for (var i = 2; i < num; i++) {
				if (num % i === 0) {
					return false;
				}
				return true;
			}

		}
		return true;
	}
	return false;
}

function returnFirst(arr) {
	return arr[0];
	//return the first item from the array
}

function returnLast(arr) {
	var last = arr.length - 1;
	return arr[last];
	//return the last item of the array
}

function getArrayLength(arr) {
	//return the length of the array
	return arr.length;
}

function incrementByOne(arr) {
	//arr is an array of integers  
	//increase each integer by one
	//return the array
	var newArr = [],
		newInt;
	for (var i = 0; i < arr.length; i++) {
		newInt = arr[i] + 1;
		newArr.push(newInt);
	}
	return newArr;
}

function addItemToArray(arr, item) {
	//add the item to the end of the array
	//return the array
	var newArr = arr;
	newArr.push(item);
	return newArr;
}

function addItemToFront(arr, item) {
	//add the item to the front of the array
	//return the array
	//hint: use the array method .unshift
	var newArr = arr;
	newArr.unshift(item);
	return newArr;
}

function wordsToSentence(words) {
	//words is an array of strings
	//return a string that is all of the words concatenated together
	//spaces need to be between each word
	//example: ['Hello', 'world!'] -> 'Hello world!'
	var newString = words.join(' ');
	return newString;
}

function contains(arr, item) {
	//check to see if item is inside of arr
	//return true if it is, otherwise return false
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return true;
		}
	}
	return false;
}

function addNumbers(numbers) {
	//numbers is an array of integers.
	//add all of the integers and return the value
	var sum = numbers[0];
	for (var i = 1; i < numbers.length; i++) {
		sum = sum + numbers[i];
	}
	return sum;
}

function averageTestScore(testScores) {
	//testScores is an array.  Iterate over testScores and compute the average.
	//return the average
	var numberOfScores = testScores.length,
		sumOfScores = testScores[0],
		averageScore;
	for (var i = 1; i < testScores.length; i++) {
		sumOfScores = sumOfScores + testScores[i];
	}
	averageScore = sumOfScores / numberOfScores;
	return averageScore;
}

function largestNumber(numbers) {
	//numbers is an array of integers
	//return the largest integer
	var largest = numbers[0];
	for (var i = 1; i < numbers.length; i++) {
		if (numbers[i] > largest) {
			largest = numbers[i];
		}
	}
	return largest;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
	getBiggest: getBiggest,
	greeting: greeting,
	isTenOrFive: isTenOrFive,
	isInRange: isInRange,
	isInteger: isInteger,
	fizzBuzz: fizzBuzz,
	isPrime: isPrime,
	returnFirst: returnFirst,
	returnLast: returnLast,
	getArrayLength: getArrayLength,
	incrementByOne: incrementByOne,
	addItemToArray: addItemToArray,
	addItemToFront: addItemToFront,
	wordsToSentence: wordsToSentence,
	contains: contains,
	addNumbers: addNumbers,
	averageTestScore: averageTestScore,
	largestNumber: largestNumber
};
