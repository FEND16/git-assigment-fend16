# PSEUDO Bus fare

###MEMO

<<<<<<< HEAD
> laddar kortet varje gång 500, 200 eller 100
> laddar så några som möjligt, och inte tanka på mer pengar än nödvändigt

```Pseudo
WHILE Need-To-Be-Charged Amount (= BusFare - Charged Amount) > 0, continue loop

    IF 400 < Need-To-Be-Charged Amount <= 10000
        Add 500 to Charged Amount
        Add 1 to transaction
        Subtract 500 from Need-To-Be-Charged Amount

    ELSE IF 100 < Need-To-Be-Charged Amount <= 400
        Add 200 to Charged Amount
        Add 1 to transaction
        Subtract 200 from Need-To-Be-Charged Amount

    ELSE IF 0 < Need-To-Be-Charged Amount <= 100
        Add 100 to Charged Amount
        Add 1 to transaction
        Subtract 100 from Need-To-Be-Charged Amount

END LOOP when Need-To-Be-Charged Amount comes down to 0 or less

RETURN the number of transactions & how much you have paid
    

```
=======
```pseudo
  START
  
    Check how much Bus fare is
    
    WHILE Bus fare is less than balance
    move to charging stage
    
        //Charging start - starting from 500 bills
        IF Bus fare is more than or equal to 500
            Charge 500 as many times as possible
            Subtract amount for this stage from balance
            Add the number of Transactions for this stage
        END IF

        move to next stage - charging with 200 bills

        IF Bus fare is less than 500 & more than or equal to 200
            Charge 200 as many times as possible
            Subtract amount for this stage from balance
            Add the number of Transactions for this stage
        END IF

        move to next stage - charing with 100 bills

        IF Bus fare is less than 200 & more than or equal to 100
            Charge 100 as many times as possible
            Subtract amount for this stage from balance
            Add the number of Transactions for this stage

        END IF
        //End charging

    END WHILE
  
    RETURN the number of transactions and balance
  
 END
```
>>>>>>> cb5badb... Update yoko_andrae_busfare.md
