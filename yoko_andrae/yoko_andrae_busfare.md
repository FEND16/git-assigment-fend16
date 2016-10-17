# PSEUDO Bus Fare

__MEMO__

> laddar kortet varje gång 500, 200 eller 100</br>
> fortsätt tills att pengarna tar slut</br>

```Pseudo
WHILE BusFare - ChargedAmount (= Difference) > 0

    IF 400 < Difference <= 10000
        Charge 500 notes until Difference becomes less than 400
        Add number of transactions
        
    ELSE IF 100 < Difference <= 400
        Charge 200 notes until difference becomes less than 200
        Add number of transactions
        
    ELSE IF 0 < Difference <= 100
    
when Difference comes down to 0 or less END the loop
```
