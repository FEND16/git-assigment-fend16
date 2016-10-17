# Bus fare assignment

__MEMO__
> pengar 10000 SEK </br>
> laddar kortet varje gång 500, 200 eller 100</br>
> fortsätt tills att pengarna tar slut</br>

```pseudo
  START
  
    CHECK how much Bus fare is
    WHILE (Bus fare is less than balance)
    
      WHILE Bus fare is (more than 500kr.)
          CHARGE 500 kr. as many time as possible
          SUBTRACT 500 kr. from balance after every charge
          ADD 1 to the total number of Transactions after every charge
      END WHILE
       
      move to next loop

      WHILE Bus fare is (less than 500 & more than 200)
          CHARGE 200 as many time as possible
          SUBTRACT 200 from balance after every charge
          ADD 1 to the total number of Transactions after every charge
      END WHILE
      
      move to next loop

      WHILE Bus fare is (less than 200 and more than 100)
          CHARGE 100 as many time as possible
          SUBTRACT 100 from balance after every charge
          ADD 1 to the total number of Transactions after every charge
      
      END WHILE

  END WHILE
```
