//Lägg in pengar i variabler som vi sen använder för att jämföra hur mycket pengar som finns kvar efter transaktioner
var money = prompt("Hur mycket mycket pengar har du?");

//parsa till int eftersom det skrivs in som en sträng
money = parseInt(money);
var transactions = 0;
function leastTransactions(){

	//Kolla om de har mindre än 100 eller mer är 10k
	if(money > 10000 || money < 100){
		alert("du har antingen för lite eller för mycket pengar");
		return;
	}
	//sålänge pengar är större än 0 kör vi och kollar alla möjliga fall av pengar så att du ska utföra så få transaktioner som möjligt
	while(money > 0)
	{	
		//om pengar är större eller lika med 500 ELLER om pengar är större än eller lika med 401 tar vi minus 500 och lägger till en transaktion
		if(money >= 500 || money >= 401){
			money = money - 500;
			transactions++;

			//liknande som ovan, kollar om pengar är större eller lika med 200 ELLER om pengar är större än 101, då ska vi ta bort 200
		}else if (money >=200 || money > 101){
			money = money -200;
			transactions++;
		}
		//om pengar är mindre eller likamed 400 ska vi också ta bort 200 samt lägga till en transaktion
		else if(money <= 400){
			money = money - 200;
			transactions++;
		}
		//om pengar är större eller lika med 100 och mindre än eller lika med 200 så ska vi ta bort 100 och lägga till en transaktion
		else if(money >= 100 && money <=200){
			money = money - 100;
			transactions++;
		}
		//om pengar är exakt 100 tar vi bort 100 och lägger till en transaktion
		else if(money === 100){
			money = money - 100;
			transactions++;
		}
	}
	//visa hur många transaktioner du behöver göra
	alert("Du behöver göra: " + transactions + " transaktioner");
}
leastTransactions();


