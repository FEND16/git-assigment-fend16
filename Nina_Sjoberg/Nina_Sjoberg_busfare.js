


function busCard(price){ //funktionen tar inputen från användaren som en parameter
	//de olika belopp som man kan sätta in på busskortet:
	var ONEHUNDRED = 100; 
	var TWOHUNDRED = 200;
	var FIVEHUNDRED = 500;

	var busCardValue = 0; //räknar hur mycket värdet på busskortet är uppe i efter varje transaktion som görs = för varje varv i whileloopen.
	var numberOfTransactions = 0; //håller koll på hur många transaktioner som gjorts

	while(busCardValue < price) { //så länge värdet på vårt busskort är mindre än det som användaren vill sätta in så kört whileloopen ett nytt varv
		var sum = price - busCardValue; //kollar hur mycket pengar det är kvar att sätta in på busskortet, vilket förändras efter varje varv loopen körts
		
		if (sum <= ONEHUNDRED) { //om summan som är kvar att sättas in är mindre än eller lika med ONEHUNDRED så ökas busCardValue med 100kr
			busCardValue += ONEHUNDRED; 
		} else if (sum > ONEHUNDRED && sum <= TWOHUNDRED * 2) { //annars, om summan som är kvar att sättas in är större än ONEHUNDRED och mindre än eller lika med 400kr(TWOHUNDRED*2)så ökas busCardValue med 200kr
			busCardValue += TWOHUNDRED;
		} else { //om inget av ovan stämmer är summan kvar att sätta in större än 400kr och då sätter vi in 500kr denna transaktion
			busCardValue += FIVEHUNDRED; 
		}
		numberOfTransactions++; //öka antalet transaktioner med 1
		
	}
	console.log("Antal transaktioner: " + numberOfTransactions); //när whileloopen kört klart och busCardValue kommit upp i det antal som användaren vill sätta in så skrivs numberOfTransactions ut.
}	




var price = prompt("Hur mycket pengar behöver du till resan?"); //användaren får ange i en dialogruta hur mycket pengar som behövs till resan
if(price > 10000){ //om användaren skriver in ett belopp på över 10000kr får hen en ny dialogruta och ombeds skriva in en siffra på nytt
	price = prompt("Skriv in ett tal under 10000");
}
if(isNaN(price)){ //om användaren skriver in något annat än siffror får hen en ny dialogruta och ombeds skriva in en siffra på nytt
	price = prompt("Skriv in en siffra under 10000");
}


busCard(price); //kallar på funktionen busCard, inputen från användaren skickas med som argument till funktionen.














