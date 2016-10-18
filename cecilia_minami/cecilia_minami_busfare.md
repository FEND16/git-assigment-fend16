## Pseudokodning

>**Problem**<p>
>Du ska köpa ett busskort. Det är ett kort som du laddar med pengar, därefter kan du åka på kortet tills pengarna tagit slut. 
>Du får endast kan ladda kortet med 500, 200 eller 100 kr i taget. 
>Du vill utföra så några transaktioner som möjligt, men inte tanka på mer pengar än nödvändigt.

>Om du ska åka för 800 kronor ska du alltså först ladda med 500, sen med 200, därefter med 100 kr. 
>Om du däremot ska åka för 850 kronor ska du först ladda med 500 och därefter ladda med 200 två gånger. 
>Visserligen går 50 kronor till spillo, men det är ändå det bästa alternativet.

* Hur mycket ska kortet laddas med?
* Om pengar är 850 kr 
* Hur många 500 kr kan kortet laddas med?
* Går det att lägga till 500 till?
* Om inte, går det att lägga till 200?
* Om inte, går det att lägga till 100?
* Vad blir skillnaden mellan pengarna och och det som finns på kortet?
* Skillnaden skickas vidare till nästa stycke i koden

var pengar = 850;<br />
var transaktion = 0;<br />
var kortet = 0;<br />
var resultatet = 0;<br />

så länge pengar är större än det som finns på kortet så ska loopen köras<br />
resultatet = pengar minus det som finns på kortet<br />

Om pengarna är <= 500<br />
lägg till pengar på kortet<br />
ta bort pengar från resultatet<br />
transaktion++;<br />

om pengarna är mellan 200 och 500<br />
lägg till pengar på kortet<br />
ta bort pengar från resultatet<br />
transaktion++;<br />

om pengarna är mellan 0 och 100<br />
lägg till pengar på kortet<br />
ta bort pengar från resultatet<br />
transaktion++;<br />

visa hur många transaktioner som behövs