var GAME_OVER = false; //game over var
var theNumber = generateRandom(); //random number
var lifes = 5; //Amount of permitted guesses before GAME_OVER
var guesses = []; // What the user tried so far.

function generateRandom () {
	return Math.round(Math.random() * 100 + 1);
}

function resetGame(){
	GAME_OVER = true;
	theNumber = generateRandom();
	lifes = 5;
	guesses	= [];
}

function play(number){
	//do some validation wheter it is a number. Maybe not here.
}