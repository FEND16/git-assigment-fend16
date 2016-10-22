## Pseudokod busskort problem

START
    currentCost = cost
    If cost > 10000
        print ""måste vara mindre än 10000"
    else
        while cost is less than balance
            Check and pdate currentCost everytime we top up
            if currentCost <= 100
                balance += 100
                currentCost = currentCost - 100
            else if currentCost > 100 and < 400
                balance += 200
                currentCost = currentCost - 200
            else
                balance += 500
                currentCost = currentCost - 500
END