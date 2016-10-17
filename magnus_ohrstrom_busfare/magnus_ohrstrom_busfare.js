//Busfare Js

//Funktion för att fylla på saldo på resbiljett

function buyTicket(cost){


//Ticket saldo.
var ticket = 0;

//Antal transaktioner.
var trans = 0;

//Loop som körs tills att saldot för kortet är tillräckligt stort för att täcka reskostnad.
//Kortet ska fyllas på med så få transaktioner som möjligt.
//Programmet kan göra tre olika transaktioner. 500 , 200 samt 100 kr. Transaktionssumman
// ska i slutändan överstiga kostnaden så lite som möjligt. 
//Kostnaden för resan får inte överstiga 10000 kr. 
while(cost > ticket&& cost <=10000)
	{	//Programmet kan göra tre olika transaktioner. 500 , 200 samt 100 kr. Transaktionssumman
		// ska i slutändan överstiga kostnaden så lite som möjligt. 
	if (ticket + 500 <= (cost+100)) 
			{ 
				ticket += 500; 
			}
	
	else if (ticket + 200 <= (cost+ 100))
			{
				ticket += 200;
			}

	else if (ticket + 100 <= (cost + 100))
			{
				ticket +=  100;
			}
	trans ++;
	}
	//returnerar antal transaktioner.
	return "Antal transaktioner: " + trans;
};
// Skriver ut saldo som funktionen returnerar. 
console.log(buyTicket());



