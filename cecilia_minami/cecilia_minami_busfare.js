var pengar = prompt("Fyll i hur mycket pengar du vill resa för");  
var transaktion = 0;
var resultat = 0;
var ladda = 0;	

//för att vi ska kunna göra något med koden måste pengarna vi sätter in vara mer än noll		
		while (pengar > ladda){

// i resultat kollar vi hur mycket pengar vi har/har kvar att ladda kortet med
			resultat = pengar - ladda;
/*
i den första if-satsen kollar vi om resultatet(pengar) är högre än 500 kr 
isf laddas kortet med 500 kr samt 500 kr tas bort från resultatet
transaktion plussas på med 1
sedan kollar while-loopen en gång till om vilkoret stämmer
det som finns kvar i resultatet skickas sedan stegvis genom if-satserna
är resultat mer än 500 nu? 
nej, då skickas vi vidare till nästa if-sats osv.
när resultat dvs pengar är slut stannar loopen
*/
			if (resultat >= 500){
			ladda = ladda + 500;  
			resultat = resultat - 500;  
			transaktion ++;
			}
			else if(resultat >= 101 && resultat < 500){
			ladda = ladda + 200;
			resultat = resultat - 200;
			transaktion ++;
		}
			else if(resultat >= 100){
			ladda = ladda + 100;
			resultat = resultat - 100;
			transaktion ++;		
		}
			else if(resultat >= 0){
			ladda = ladda + 100;
			resultat = resultat - 100;
			transaktion ++;		
		}
	};	
	console.log("Antal transaktioner: " + transaktion);
	
		