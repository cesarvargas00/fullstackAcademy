
$(document).ready(function(){
	$("#remainingGuesses").html(lifes + " guesses remainining.");
	//attach button click to function play with number on the input
	$("#submitGuess").on("click",function(event) {
		play($("#inputNumber").val());
	});
	//attach button to function resetGame()
	$("#playAgain").on("click",function(event) {
		resetGame();
	});
});

var theNumber = generateRandom(); //random number
var lifes = 5; //Amount of permitted guesses before GAME OVER
var guesses = []; // What the user tried so far.

function generateRandom () {
	//this function generates a random number between 1 & 100.
	return Math.round(Math.random() * 100 + 1);
}

function resetGame(){
	//self explanatory
	theNumber = generateRandom();
	lifes = 5;
	guesses	= [];
}

function play(number){
	//main play function :D yayy
	var intNumber = parseInt(number);
	var feedback = "";
	//if no lifes, GAME OVER, son.
	if (lifes > 0) {
		//do a small validation wheter it is a number.
		if(isNaN(intNumber)){
			$("#feedback").html("Must choose a number between 1 and 100!");
			console.log("Must choose a number between 1 and 100!");
			return 0;
		}

		//checks if user already tried dat number.
		//if not, push to guesses array.

		if (guesses.indexOf(intNumber) > -1) {
			$("#feedback").html("You already tried that one...");
			console.log("You already tried that one...");
			return 0;//cya, folks!
		} else {
			guesses.push(intNumber);
		}

		//do some validation wheter the number is between 1 and 100.
		if(number <= 0 || intNumber > 100) {
			$("#feedback").html("Number must be between 1 and 100!");
			console.log("Number must be between 1 and 100!");
			return 0; //must... get... out... function.......
		}

		//Checks if win.
		if ( theNumber === parseInt(intNumber)) {
			$("#feedback").html("YOU WON!!!");
			console.log("You won!!")
			$("#submitGuess").prop("disabled",true);
			$("#hint").prop("disabled",true);
			return 0; //bye function.
		}


		//if didnt win, help the player.
		else {

			//says if its hot or cold.
			if (Math.abs(theNumber - intNumber) < 15) {
				feedback = "Hot!";
				console.log("Hot!");
			}
			else {
				feedback = "Cold!";
				console.log("Cold!");
			}

			//says if it should be smaller or higher.
			if (theNumber - intNumber < 0) {
				$("#feedback").html(feedback + " Try a smaller number...");
				console.log("try a smaller number...");
				}
			else {
				$("#feedback").html(feedback + " Try a higher number...");
				console.log("try a higher number...")
			}

			//nice try?
			lifes--;
			$("#remainingGuesses").html(lifes + " guesses remainining.");
			if (lifes === 0) {
				$("#feedback").html("GAME OVER, PAL!");

			}
		}
	} else {
		//no lifes? GAME OVER!!!
		console.log("Game Over, man.");
		return 0;
	}
}
