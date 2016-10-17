

### Pseudokod För BusFare.

**START**
```
**Calculate BusFare.**

var travelCost = prompt("Hur mycket vill du resa för?");
Biljett automaten kan bara lägga på pengar med 500, 200 eller 100 kr i taget.
function busFare() {
   var cost1 = 500
   var cost2 = 200;
   var cost3 = 100;

OM travelCost > 10000 = "Kortet tar inte mer pengar, försök med en mindre summa!"
OM travelCost < 10000
Välj minst antal möjiga transaktioner för att sätta in pengarna på busskortet.
}

busFare();
```
**STOP**

Problem 

funktionen ska ta ut hur många gånger det behövs 
för att fylla på ett "busskort" som ska innehålla en viss
summa tex 500kr då behövs 1 transaktion på 500kr.

Men ska man fylla på med tex 800kr så måste flera
transaktioner göras. 500 + 200 + 100.