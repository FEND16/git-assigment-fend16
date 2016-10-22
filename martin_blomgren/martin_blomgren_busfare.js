//Skapar en funktion som jag valt att kalla busfare som tar ett argument. I detta fall heter parametern price
function busfare(price){
	//trans sparar värdet som visar hur många transaktioner användaren bör göra
	//som ökas i if-sattsen
	//parametern price sparas i amount
	var trans = 0;
	var amount = price;
	//skapar variablarna a,b,c som sparar hundralapparna skall användas
	var a = 100
	var b = 200
	var c = 500

//skapar en if-satts för att hålla koll så användaren inte överskrider maxbelopp på 10 000
//loopen körs så länge användaren inte har för mycket på kortet
	if (amount <= 10000){
		while (amount > 0){

			if (amount >= c){ 			//500, amount större än värdet? skicka med en femhundring
				amount -= c;
				trans ++;				// trans ++ ökar så vi kan hålla koll på hur många transaktioner som behöver utföras
				}
			else if (amount >= 101){	//200, är det mer än 101 som behövs? släng med tvåhundra
				amount -= b;
				trans ++;
				}
			else{						//100, annars skickar vi med användaren en hundring
				amount -= a;
				trans ++;
				}
		}
	}
		//returnerar price för att se hur mycket vi valt att ta ut samt transaktionerna som behövs
		return console.log("Du har valt att åka för: " + price + " så du behöver göra: " + trans + " transaktioner");
}
//kallar på funktionen busfare och tar ett argument från användaren
busfare(750);