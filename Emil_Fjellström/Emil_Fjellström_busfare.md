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

