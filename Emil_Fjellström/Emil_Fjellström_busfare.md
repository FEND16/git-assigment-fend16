# Pseudokod


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

### Uppgift

Du ska köpa ett busskort. Det är ett kort som du laddar med pengar, därefter kan du åka på kortet tills pengarna tagit slut. Du vet att du ska åka för K kronor, där K ≤ 10000. Att ladda kortet tar sin tid eftersom du endast kan ladda kortet med 500, 200 eller 100 kr i taget. Du har för tillfället bråttom och vill därför utföra så några transaktioner som möjligt, men inte tanka på mer pengar än nödvändigt.

Om du ska åka för 800 kronor ska du alltså först ladda med 500, sen med 200, därefter med 100 kr. Om du däremot ska åka för 850 kronor ska du först ladda med 500 och därefter ladda med 200 två gånger. Visserligen går 50 kronor till spillo, men det är ändå det bästa alternativet.

#### Förklaring

Koden ovan visar en loop som tittar om summan är över 500 och tar då bort 500 och lagrar 1 i count500. Det här gör koden tills tempSum är under 500. Efter det går den över till nästa seg där den tittar hur mångar gånger den kan köra 200 i den resterande temSum. Sen går den över till hut många gånger den kan köra 100. Om det blir rester så kommer då countRest att omvandla uppåt.


