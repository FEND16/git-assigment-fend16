
// Frågar användaren efter hur mycket hen vill åka för
function promptBusfare(){

	var userInput = 0;

	userInput = prompt("Åka för?");

	if ((userInput > 0) && (userInput < 10000)) {
		busfare(userInput);
	}
	else if (userInput === null){
		console.log("Tack för idag!");
	}
	else {
		promptBusfare();
		} 
}

// Räknar antalet transaktioner och skriver ut dessa
function busfare(k) {

	var a, b, c, x;
	a = 500;
	b = 200;
	c = 100; 
	x = 0;

	console.log("Åka för? " + k);

	while (k > a-100){
		k = k - a;
		x++;
		console.log("500-kronorstransaktion");
	}

	while (k > b-100){
		k = k - b;
		x++;
		console.log("200-kronorstransaktion");
	}

	if (k > 0){
		x++;
		console.log("100-kronorstransaktion");
	}

	console.log("Antal transaktioner: " + x);

	promptBusfare();

}

// Kallar på fuktionen
promptBusfare();
