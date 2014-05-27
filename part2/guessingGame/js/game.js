
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

	//if no lifes, GAME OVER, son.
	if (lifes > 0) {
		//do some validation wheter it is a number. Maybe not here.
		//TODO

		//checks if user already tried dat number.
		//TODO

		//do some validation wheter the number is between 1 and 100.
		if(number <= 0 || number > 100) {
			console.log("Number must be between 1 and 100!");
			return 0; //must... get... out... function.......
		}

		//Checks if win.
		if ( theNumber === number) {
			console.log("You won!!")
			return 0; //bye function.
		}


		//if didnt win, help the player.
		else {

			//says if its hot or cold.
			if (Math.abs(theNumber - number) < 15) {
				console.log("Hot!");
			}
			else {
				console.log("Cold!");
			}

			//says if it should be smaller or higher.
			if (theNumber - number < 0) {
				console.log("try a smaller number...");
				}
			else {
				console.log("try a higher number...")
			}

			//nice try?
			lifes--;
		}
	} else {
		//no lifes? GAME OVER!!!
		console.log("Game Over, man.");
		return 0;
	}
}