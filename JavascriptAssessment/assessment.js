//testing node.js on sublime.
console.log("Hello World!");

// Qutestion 1 - Simple Adding
// Using the JavaScript language, have the function SimpleAdding (num) add up all the numbers from 1 to num. For the test cases, 
// the parameter  num will be any number from 1 to 1000.

function SimpleAdding (num) {
	var sum = 0;
	var i = 0;
	
	while(i <= num)	{
		sum += i;
		i++;
	}
	return sum;
}
//testcase1
console.log(SimpleAdding(1000));

// Question 2 - First Reverse
// Using the JavaScript language, have the function FirstReverse (str) take the str parameter 
// being passed and return the string in reversed order.

function FirstReverse (str) {
	var p = str.length;
	var resposta = [];
	while(p!=0){
		p--;
		resposta.push(str.charAt(p));
	}
	return resposta.join("");
}
//testcase2
console.log(FirstReverse("Hello World!"));

// Question 3 - Vowel Count
// Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return 
// the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for 
// this challenge.

function VowelCount (str) {
	var count = 0;
	var i = 0;
	while (i < str.length){
		if (str.charAt(i) === "a" || 
			str.charAt(i) === "e" || 
			str.charAt(i) === "i" || 
			str.charAt(i) === "o" || 
			str.charAt(i) === "u" ||
			str.charAt(i) === "A" ||
			str.charAt(i) === "E" || 
			str.charAt(i) === "I" || 
			str.charAt(i) === "O" || 
			str.charAt(i) === "U") 
			count++;
		i++;
	}
	return count;
}
//testcase3
console.log(VowelCount("All cows eat grass"));


// Question 4: Loop a Triangle
// Write a program that makes seven calls to console.log to output the following triangle.
 
// #
// ##
// ###
// ####
// #####
// ######
// #######
function questionFour(){
	for(var i =1; i<=7; i++){
		for(var j=0; j<i; j++)
			process.stdout.write("#");
	console.log("");
	}
}
//testcase4
questionFour();


function foo(){
	var a = 10;
	function bar(){
		a++;
	}
	bar();
	console.log(a);
}
foo();
