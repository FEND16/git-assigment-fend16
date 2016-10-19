//Individuell uppgift - GIT Busticket	

//Skapar en busticket-funktion som tar in en money-parameter: det önskade värdet på busskortet användaren planerar att åka för

function busticket(money){
	var transactions = 0;	//Transactions håller koll på antalet transaktioner som sker. Startvärdet är då 0.		
	var sum = 0;			//Sum håller koll på summan för varje transaktion som sker. Startvärdet är då 0.

//Skapar en while loop som körs sålänge summan för varje transaktion understiger det önskade värdet på busskortet användaren planerar att åka för

while(sum < money){			
	var rest = money - sum;		//rest-variabeln håller koll på skillnaden mellan det önskade värdet på busskortet och summan av laddade pengar 			
	if(rest > 400){				//Om skillnaden mellan busskortets värde och summan av laddade pengar överstiger 400:- laddas kortet med 500:-			
		sum = sum + 500;		
		rest = rest - 500;		//500 "dras av" från det önskade värdet på kortet
		transactions++;
		}
	else if(rest < 400 && rest > 100){	//Om skillnaden mellan busskortets värde och summan av laddade pengar understiger 400:- och					
		sum = sum + 200;				//är lika med eller överstiger 100, laddas kortet med 200:-
		rest = rest - 200;				//200 "dras av" från det önskade värdet på kortet
		transactions++;
		}				
	else if(rest <= 100){				//Om skillnaden mellan busskortets värde och summan av laddade pengar är lika med eller understiger 100:-
		sum = sum + 100;				//laddas kortet med 100:-
		rest = rest - 100;				//100:- "dras av" från det önskade värdet på kortet
		transactions++;
		}
	}
	console.log(transactions);			//Loggar ut antalet transaktioner som skett
}
busticket(1200);						//Kallar på funktionen där jag satt in värdet 1200:- som argument


