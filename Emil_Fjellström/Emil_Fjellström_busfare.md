# Pseudokod

### Uppgift

Uppgiften går ut på att lada ett busskort med pengar; 100, 200 eller 500kr. ´Med detta ska man förklar den lättaste vägen att fylla på sitt kort.

**Exempel** Du ska fylla på med 800kr, då ska du fylla på med 500 + 200 + 100, för att så minst antal transaktioner samt så jämt ut som det går.

**Exempel** Du ska fylla på med 850kr, då ska du fylla på med 500 + 200 + 200, för att så minst antal transaktioner samt så jämt ut som det går. Visserligen går 50 kronor till spillo, men det är ändå det bästa alternativet.

```javascript

while(temporarySum != 0) //Loopar denna tills det blir 0 i tempSum
            {
                if(temporarySum-500 >= 0)  //tittar om summan är över 500 och tar då bort 500 och lagrar 1 i count500
                {
                    temporarySum -= 500;
                    count500++;
                }
                else if(temporarySum - 200 >= 0) //tittar om summan är över 200 och tar då bort 200 och lagrar 1 i count200
                {
                    temporarySum -= 200;
                    count200++;
                }
                else if(temporarySum - 100 >= 0) //tittar om summan är över 100 och tar då bort 100 och lagrar 1 i count100
                {
                    temporarySum -= 100;
                    count100++;
                }
                else
                {
                    countRest = temporarySum;
                    temporarySum = 0;
                }
            }

    if(countRest > 0) //Omvandlar 100 uppot vid ojämt nummer
        {
            count100++;
        }

```
## Förklaring

Ovan ser vi lite kod som beskriver hur många gånger man måste ta ut pengar. Först i Loopen så tittar den efter hur många x*500kr som får plats i **temporarySum** som är en variabel och fått  sitt värde utav **prompt** funktionen. Efter första if satsen har körst och får värdet **0** så kommer den så vidare med resterande utav **temporarySum** och titta hur många x*200kr det går in i **temporarySum**. Och till slut gör loopen samma grej i fast för hur många x*100kr det får plats. All information lagras i variablarna **count500**, **count200** och **cound100**. resterande som är under 100 kommer att omvandlas upp till 100 och jämnar ut värdet för betalningen.

## Lagring

Värden i koden lagras i variabler.

```javascript

var summaTotal = prompt("How much do you wanna travel for?"); //Sätter ett värde på summaTotal
var temporarySum = summaTotal; //Sätter summaTotal som ett temporärt värde

var count500 = 0; //variabler som lagrar antar transaktioner
var count200 = 0;
var count100 = 0;
var countRest = 0;

```

## Utmatning

Värderna i while loopen som lagrats skriv sedan ut i slutet av koden

```javascript

document.write(summaTotal + " split into: </br>");
document.write(count500 + " 500 bill(s) </br>");
document.write(count200 + " 200 bill(s) </br>");
document.write(count100 + " 100 bill(s) </br>");

```
