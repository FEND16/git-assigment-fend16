# Bus fare assignment

WHILE BusFare - ChargingAmount (= "Difference") > 0
    IF "Difference" is between 401 and 10000
        Charge 500 notes untill difference becomes less than 401
        Add number of transactions
    ELSE IF "Difference" is between 200 and 499
        Charge 200 notes untill difference becomes less than 200
        Add number of transactions
    ELSE IF "Difference" is between 1 and 199
when "Difference" comes to 0 or less END the loop