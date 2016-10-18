# PSEUDO Bus fare

###MEMO

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