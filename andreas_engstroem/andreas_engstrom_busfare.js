//Inlämningsuppgift GIT
//Funktionen transaction anropas och en prompt öppnas där användaren blir tillfrågad hur stort belopp man vill handla för
var money = transaction(prompt('Åka för?','Belopp:'));
//Funktionen transaction tar in ett argument, belopp
function transaction(money) {
	//En array skapas med 3 olika belopp man kan fylla på sitt sl-kort med
	var topUpAmounts = [500, 200, 100];
	//Variabeln transactionCount skapas som ska hålla koll på hur många transaktioner som görs
	var transactionCount = 0;
	//Om användarens belopp är mindre än eller likamed maxbelopp (10.000:-) körs funktionen
	if (money <= 10000) {
		//For-loopen kollar längden på arrayens index så länge i är mindre än arrayens index längd
		for (var i = 0; i < topUpAmounts.length; i++) {
			//En ny variabel skapas som håller nuvarande index värde på array
			var topUpAmount = topUpAmounts[i];
			/* Om beloppet är högre eller likamed första index värde på arrayen kör vi koden innanför while,
			annars testar vi nästa värde i arrayens index */
			while (money >= topUpAmount) {
				//Användarens pengar subtraheras med nuvarande index värde och sparas i variabel money
				money -= topUpAmount;
				/* Om beloppet har subtraherats med något av arrayens index värde lägger
				vi till en transaktion på variabel transactionCount */
				transactionCount++;
			}
		}
		//Returnerar hur många transaktioner funktionen har gjort
		return 'Antal transaktioner: ' + transactionCount + '.';
	}	else {
		//Returnerar om användarens belopp är högre än maxbelopp (10.000:-) avslutas funktionen
		return 'För högt belopp.';
	}
}
//Popup skriver ut funktionen på skärmen
alert(money);