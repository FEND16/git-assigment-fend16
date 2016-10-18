//Inlämningsuppgift GIT
//En prompt öppnas där användaren blir tillfrågad hur stort belopp man vill handla för, värdet sparas ner i variabeln money
var money = prompt('Åka för?','Belopp:');
//Funktionen busfare tar in ett argument, money
function busfare(money) {
	//En transaktionsräknare skapas som ska hålla koll på hur många transaktioner som görs
	var transactionCount = 0;
	//Om köparens pengar är mindre än eller likamed 10.000:- kör funktionen
	if (money <= 10000) {
			//Medans pengarna har högre värde än 0:- kör if-satsen
			while (money > 0) {
				//Om pengarna har högre värde än 400:-
				if (money > 400) {
					//Dras 500:- av från beloppet
					money -= 500;
					//En transaktion läggs till om condition är true
					transactionCount++;
					//Annars om pengarnas värde är högre än 100:- och pengarnas värde är mindre än 400:-
				} else if (money > 100 && money < 400) {
					//Dras 200:- av från beloppet
					money -= 200;
					//En transaktion läggs till om condition är true
					transactionCount++;
					//Annars om pengarnas värde är mindre än eller likamed 100:-
				} else if (money <= 100) {
					//Dras 100:- av från beloppet
					money -= 100;
					//En transaktion läggs till om condition är true
					transactionCount++;
				}
			}
		//Returnerar antal transaktioner som är gjorda
		return 'Antal transaktioner: ' + transactionCount + '.';
	}	else {
		//Annars om pengarnas värde är högre än 10.000:- returneras stringen om att beloppet är för högt
		return 'För högt belopp.';
	}
}
alert(busfare(money));