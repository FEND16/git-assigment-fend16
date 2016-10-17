# Bussresa
___

Biljettpriset `K` är **max** 10000  
Möjliga transaktioner är 500, 200, 100. Gör så **få** transaktioner som möjligt.  
Spara antal transaktioner (*så många gånger som loopen körs*) i en variabel `t`

Gör en `funktion` som kontrollerar om busskortets värde `b` innehåller mängden pengar som biljettpriset `K` kräver, annars sätt in pengar  
I `funktionen`, skapa en `loop`  
Skapa en variabel `a` som har samma startvärde som `K`  
Så länge `K` är större än `b`   
`t` ökas med 1 
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

