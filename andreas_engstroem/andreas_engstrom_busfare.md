**START**
* Fråga användaren om hur mycket pengar man vill handla/fylla på med
* Belopp sparas ner i variabel och skickas vidare som argument till funktion
	* Funktionen tar ett argument
	* En variabel ska hålla koll på hur många transaktioner som görs
	* OM beloppet är mindre än eller likamed maxbelopp (10.000:-) kör vi koden
		* MEDANS beloppet är större 0:-
			* OM beloppet är större än 400:-
				* belopp - 500:-
				* En transaktion läggs till
			* ANNARS OM beloppet är större än 100:- och beloppet är mindre än 400:-
				* belopp - 200:-
				* En transaktion läggs till
			* ANNARS OM beloppet är mindre än eller likamed 100:-
				* belopp - 100:-
				* En transaktion läggs till
		* Returnera antal transaktioner genomförda
	* ANNARS
		* Returnera användarens belopp är för högt
* STOPP
