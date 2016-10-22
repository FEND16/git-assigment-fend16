# Bussresa
___

Biljettpriset `K` är **max** 10000  
Möjliga transaktioner är 500, 200, 100. Gör så **få** transaktioner som möjligt.  
Spara antal transaktioner (*så många gånger som loopen körs*) i en variabel `t`  
Fråga användaren hur mycket biljetten `K` kostar

Gör en `funktion` som kontrollerar om busskortets värde `b` innehåller mängden pengar som biljettpriset `K` kräver, annars sätt in pengar   
Skapa en variabel `a` som har samma startvärde som `K`  
`t` ökas med 1 
  *  **Om** `K` > 10000
     * Alert: För stort belopp
     * Fråga användaren igen om nytt biljettpris  

I `funktionen`, skapa en `loop` som körs så länge `K` är större än `b`  
  * **Om** `a` är större än 500  
    * sätt in 500 i `b`  
    *  `a` minskas med 500  
  * **annars om** `a` större än/lika med 200 *eller* större än/lika med 150  
    *  sätt in 200 i`b`  
	*   `a` minskas med 200  
  * **annars om** `a` är större än/lika med 0  
    * sätt in 100 i `b`    
    * `a` minskas med 100    

Subtrahera `K`från `b`


Skriv ut hur många transaktioner `t`som krävdes och hur mycket pengar som gick eller inte gick till spillo (överskottet av `b`)  
Res och använd pengarna

Ny biljett, nya transaktioner, *loopa* igen

![buss pic](http://salenfjallen.se/wp-content/uploads/2014/12/bus.jpg)
