function busfare(k) {
	var ticket = k; 									//denna variabel lagrar k:s ingångsvärde (eftersom k minskar)
	var balance = 0;									//lagrar saldot på kortet (ökar)
	var trans = 0;										//lagrar antalet transaktioner
	var i = 0;											//index till arrayen
	var sumArray = [500,200,100];						//arrayen lagrar de belopp vi kan ladda på.
	console.log("Du ska resa för " + k + "kr");

	if (k > 10000) {
		console.log("beloppet är för högt!");
	}
	else {
		while (balance < ticket){						//vi kan resa om saldot på kortet är högre än resekostnaden = den yttre loopen bryts
				charge(sumArray[i]);					//Här kallar jag på den inre funktionen för ett element i taget
				i++;
		}  
		console.log("Antal transaktioner: " + trans);	//här loggas den yttre funktionen ut.
	}

	function charge(sum) {
		while (k >= sum || (k - sum < 0 && k - sum > -99)) { 		//den inre loopen körs så länge summan kan dras från k ELLER om summan gör
			k -= sum; balance += sum;								//att vi kan resa (UTAN att vi bränner för mycket pengar i onödan)
			trans++;												//För varje gång adderas en transaktion
			console.log("Laddade på " + sum + " kr. Saldo: " + balance);
		}
	}
}

busfare(852);													//här talar man om vad resan kostar :)														