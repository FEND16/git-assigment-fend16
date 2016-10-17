# PSEUDO Bus fare

###MEMO
> pengar 10000 SEK </br>
> laddar kortet varje gång 500, 200 eller 100</br>
> fortsätt tills att pengarna tar slut</br>

```pseudo
  START
  WHILE bus fare < balance
  
    WHILE (bus fare % 500) > 500
      add 1 to Transaction
    END WHILE
      move to next WHILE

    WHILE (bus fare % 200) > 200
      add 1 to Transaction
    END WHILE
      move to next WHILE

    WHILE (bus fare % 100) > 100
      add 1 to Transaction
    END WHILE
   
  END WHILE
```
