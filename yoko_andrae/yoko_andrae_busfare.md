# PSEUDO Bus Fare

__MEMO__
> pengar 10000 SEK </br>
> laddar kortet varje gång 500, 200 eller 100</br>
> fortsätt tills att pengarna tar slut</br>

```pseudo
  START
  
    Check how much Bus fare is
    WHILE (Bus fare is less than balance)
    
      WHILE Bus fare is (more than 500)
          Charge 500 as many time as possible
          Subtract 500 from balance after every charge
          Add 1 to the total number of Transactions after every charge
      END WHILE
       
      move to next loop

      WHILE Bus fare is (less than 500 & more than 200)
          Charge 200 as many time as possible
          Subtract 200 from balance after every charge
          Add 1 to the total number of Transactions after every charge
      END WHILE
      
      move to next loop

      WHILE Bus fare is (less than 200 and more than 100)
          Charge 100 as many time as possible
          Subtract 100 from balance after every charge
          Add 1 to the total number of Transactions after every charge
      
      END WHILE

  END WHILE
```
