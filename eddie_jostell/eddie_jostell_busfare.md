

### Pseudokod För BusFare.

**START**
```
**Calculate BusFare.**

var travelCost = prompt("Hur mycket vill du resa för?");

Väljer att lägga in till exempel 800 kr

Biljett automaten kan bara lägga på pengar med 500, 200 eller 100 kr i taget.

Välj minst antal möjiga transaktioner för att sätta in pengarna på busskortet.

function busFare() {
 
OM travelCost > 10000 = "Kortet tar inte mer pengar, försök med en mindre summa!"
Funktionen stannar och man måste börja om.

OM travelCost < 10000 = Accepteras den valda summan som visas upp.

OM Math.floor(800 / 500 inte är noll) eller är större än 400
Checkar hur många gånger 500 går i 800 och avrundar ner.
Gör en transaktion av 500 lapp 
travelCost = 800 - 500 * 1 = 300

OM travelCost > 400 && travelCost < 500
Gör ytterligare en transaktion av en 500 lapp
travelCost = 300 vilket gör att den hoppar vidare.

OM Math.floor(300 / 200 inte är noll eller om 300 > 100 och < 400)
Check hur många gånger 200 går i 300 och avrundar ner.

En transaktion av en 200 lapp görs.
travelCost = 300 - 200 * 1 = 100

OM travelCost > 100 && travelCost < 400
Gör ytterligare en transaktion av en 200 lapp.
travelCost = 100 vilket gör att den hoppar vidare.

OM Math.floor(100 / 100 inte är noll eller om 100 > 100 && 100 < 100)
Checkar hur många gånger 100 / 100 vilket är = 1
En transaktion av en 100 lapp görs.

travelCost = 0
sista if satsen stämmer inte och körs ej.
Funktionen är klar och resultatet loggas ut.
}

busFare();

Logga ut hur många transaktioner per 500, 200, 100 lappar och hur många transaktioner det blev totalt.

```
**STOP**

