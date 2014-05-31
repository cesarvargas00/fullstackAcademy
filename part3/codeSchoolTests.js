// var fear = fearGenerated(numPeeps, rainInInches, numSharks);
// var fearMessage;

// if ( fear < 200 ){
//   fearMessage = function(){
//     alert("Fear Level: LOW\nShould be no problem at all...mwahaha.\nStill wanna ride?");
//   };
// } else if (fear > 200 && fear <= 300){
//   fearMessage = function(){
//     alert("Fear Level: MEDIUM\nYou may want to rethink this one, man. MWAHAHA!\nThink you'll make it?");
//   };
// } else if (fear > 300){
// 	fearMessage = function(){
// 	 alert("Fear Level: HIGH\nABANDON ALL HOPE!!\nHave a death wish?");
// 	};
// }
                   

// confirmRide(fearMessage);

// /*//call confirmRide here//*/

// function confirmRide( confirmToGo ){
//   return confirmToGo();
// }


// var numbers = [12,4,3,9,8,6,10,1];
// var results = numbers.map(function(hey){
// 	return hey*2;
// });

// console.log(results);

function buildCoveTicketMaker( transport ) {
	var passengerNumber = 0;
	return function ( name ) {
		passengerNumber++;
		console.log("Here is your transportation ticket via the " + transport + ".\n" +
				"Welcome to the Cold Closure Cove, " + name +"!"+
				"You are passenger #" + passengerNumber);
	}
}

planeMaker = buildCoveTicketMaker("plane");
planeMaker("Cesar");
planeMaker("Coo");