**START**

* Fråga användaren om hur mycket pengar man vill fylla på sl-kort med
* Belopp sparas ner i variabel och skickas vidare som argument till funktion
	* Funktionen håller en array med 3 olika belopp som går att fylla på med
	* En variabel ska hålla koll på hur många transaktioner som görs
	* **OM** användarens belopp är mindre än eller lika med maxbelopp (10.000:-) kör vi koden
		* **FOR** kollar längden på arrayen
		* En variabel sparar nuvarande belopp som FOR loopar igenom
		* **MEDANS** användarens pengar är större eller likamed nuvarande belopp i arrayen
			* Användarens belopp - nuvarande belopp i array
			* En transaktion läggs till
		* Returnera antal transaktioner genomförda
	* **ANNARS**
		* Returnera användarens belopp är för högt
		
**STOPP**
