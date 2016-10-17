# Uppgift: Busfare

**START**

	Fråga användaren hur mycket hen vill åka för, K kr 
	
	Om K < 0 eller K > 10000 fråga användaren igen
	
	Om K > 0 och K <= 10000

		När (k > 400)	
			Substahera 500 kr, k = k - 500; 
			Lägg till en transaktion, x++

		När (k > 100)	
			Substahera 200 kr, k = k - 200; 
			Lägg till en transaktion, x++

		Om (k > 0 )
			Lägg till en transaktion, x++

		Visa antalet transaktioner

**SLUT***
