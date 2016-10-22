// läs in hur mycket personen vill tanka kortet
var prompt = prompt("Tanka ditt kort 100-10000 deneros: ");
// variabeln som räknar transaktioner
var transa = 0;

var peng = parseInt(prompt);

function transak(){

// om peng är mindre än 100 eller större än 10000 så får man inte ladda på.
if (peng < 100 || peng > 10000) {
	console.log("Ajaj nu blev det lite fel");
	return;
}
	// kör while loopen så länge peng är större än 0.
	while (peng > 0){
		//om peng är större än 400 ta bort 500 och lägg till 1 på transa variabeln
		if (peng > 400){
			peng -= 500;
			transa++;
			// om peng är lika med 200 eller större och mindre eller lika med 400 ta bort 200 och lägg till 1 till transa variabeln
		} else if (peng >= 200 && peng <= 400){
			peng -= 200;
			transa++;
		} 
		// om peng är större än 100 och är mindre eller lika med 200 ta bort 200 och lägg till på transa variabeln.
		else if (peng > 100 && peng <= 200){
			peng -= 200;
			transa++;
		} 
		// om peng är mindre eller lika med 100 ta bort 100 och lägg till på transa varaibeln.
		else if (peng <= 100){
			peng -= 100;
			transa++;
		}
	}
}

// kör funktionen och console logga transa variabeln.
transak();
console.log("Antal transaktioner: " + transa);
