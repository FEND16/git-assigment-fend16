Busfare!

###Pseudokod där jag tar mig an komunaltrafikens förunderliga värld:

```
Start

Funktion som räknar ut hur många transaktioner som görs när en resenär behöver fylla på
sin biljett för en viss reskostnad

Resenären anger resans kostnad. Den får inte överstiga 10000 kr. 

Antalet transaktioner är från början = 0.
Biljettsaldo är från början = 0.

Reskortet kan fyllas på med summorna 500, 200 resp 100 kr.
Vi vill att programmet ska genomföra så få transaktioner som möjligt samt att slutsaldot 
på biljetten ska överskrida reskostnaden med så lite som möjligt. 

Loop som adderar pengar till resenärens biljett.
WHILE(Resans kostnad är större än Kortsaldo och kostnaden är mindre än 10000)
	IF  (kortsaldo + 500 är mindre eller lika med Resans kostnad + 100) 
			kortsaldo= korsaldo +500 
	
	ELSE IF (Kortsaldo + 200 <= (Resekostnad + 100 ))
			kortsaldo = kortsaldo + 200

	ELSE IF (kortsaldo + 100 <= (resekostnad + 100))
			kortsaldo = kortsaldo + 100
      
      Varje gång loopen körs räknas antalet transaktioner upp med 1. 

Funktionen returnerar antalet transaktioner. 

Slut
