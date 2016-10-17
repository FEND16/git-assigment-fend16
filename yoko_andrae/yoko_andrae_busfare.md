# PSEUDO Bus Fare

__MEMO__
> pengar 10000 SEK </br>
> laddar kortet varje gång 500, 200 eller 100</br>
> fortsätt tills att pengarna tar slut</br>

```Pseudo
  START
  
    Check how much Bus fare is
    
    WHILE Bus fare is less than balance
    move to charging stage
    
        //Charging start - starting from 500 bills
        IF Bus fare is more than or equal to 500 THEN
            Charge 500 as many times as possible
            Subtract amount for this stage from balance
            Add the number of Transactions for this stage
        END IF

        move to next stage - charging with 200 bills

        IF Bus fare is less than 500 & more than or equal to 200 THEN
            Charge 200 as many times as possible
            Subtract amount for this stage from balance
            Add the number of Transactions for this stage
        END IF

        move to next stage - charing with 100 bills

        IF Bus fare is less than 200 but not 0 THEN
            Charge 100 as many times as possible until it pays up all amount of bus fare 
            Subtract amount for this stage from balance
            Add the number of Transactions for this stage

        END IF
        //End charging

    END WHILE
  
    RETURN the number of transactions and balance
  
 END
```
