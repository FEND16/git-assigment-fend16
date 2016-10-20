
##START
  
 - Enter Pass Type
      - IF BussPass < 10000
        - Enter Money
        - Count Transaction = 1
          - IF 
            - entered money < BussPass
               - Do
                 - Enetr More Money
                 - Count Transaction ++
               - While(Money<BussPass)
         - ELSE
             - Already Filled
     -  ELSE
         - Can't Fill more than 10,000.
              
##STOP
