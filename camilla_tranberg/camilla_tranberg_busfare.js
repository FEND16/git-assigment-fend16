
// Funktion som kollar om inmatat värde är mellan 1 och 10000 samt stoppar vid avbryt
function promptBusfare(){

	var userInput = 0;
	userInput = prompt("Åka för?");

	// Om värdet är mellan 1 och 10 000
	if ((userInput > 0) && (userInput <= 10000)) {
		busfare(userInput);
	}
	// Om avbryt
	else if (userInput === null){
		console.log("Tack för idag!");
	}
	// Fråga igen om ogiltigt värde
	else {
		promptBusfare();
		} 
}

// Funktion som räknar antalet transaktioner och skriver ut dessa
function busfare(k) {

	var a, b, c, x;
	a = 500;
	b = 200;
	c = 100; 
	x = 0;

	console.log("Åka för? " + k);

	// Så länge inmatat värde är större än 400 ska 500 dras av
	while (k > a-100){
		// Drar bort 500 kr
		k = k - a;
		// Lägger till en transaktion
		x++;
		console.log("500-kronorstransaktion");
	}

	// Så länge inmatat värde är större än 100 ska 200 dras av
	while (k > b-100){
		// Drar bort 200 kr
		k = k - b;
		// Lägger till en transaktion
		x++;
		console.log("200-kronorstransaktion");
	}

	//Om kvarvarande summa är mer än 0 dras 100 av
	if (k > 0){
		// Lägger till en transaktion
		x++;
		console.log("100-kronorstransaktion");
	}

	console.log("Antal transaktioner: " + x);

	// Gör om förfrågningen
	promptBusfare();

}

promptBusfare();
