//Michael Carter
//1304
//Project 2


//Variables
var bandNames = [ "Between the Buried and Me", "Opeth", "Dream Theatre"],
	minutesPerBand = [30, 60, 60];
	
if ( haveTicket = true) {
	console.log( "You may enter the concert with your ticket.");
}
else {
	console.log( "I'm sorry, but you may not enter the concert without a ticket.");
};
	

var watchBand = function( whatBand ){
	var bandName = bandNames[whatBand],
		minutesThisBand = minutesPerBand[bandNumber];
	console.log( bandName + " will be playing for " + minutesThisBand + " tonight." );
	for (var minutes = 0; minutes < minutesThisBand; minutes += 10 ) {
		var minutesRemain = minutesThisBand - minutes;
	console.log( bandName + " has " + minutesRemain + " minutes left to play.");
	}
	console.log( bandName + " has finished playing for the night.");
};

for (bandNumber = 0; bandNumber < bandNames.length; bandNumber++) {
	watchBand(bandNumber);
};