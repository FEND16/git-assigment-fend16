function busfare (price) {
    
    var chargedAmount = 0;
    var needToCharge = price - chargedAmount;
    var transaction = 0;
    

    while (price <= 10000) {
        
        while (needToCharge > 0) {
        
            if (needToCharge > 400 && needToCharge <= 10000){
                needToCharge -= 500;
                transaction++;
                chargedAmount += 500;
            
            
            } else if (needToCharge > 100 && needToCharge <= 400){
                needToCharge -= 200;
                transaction ++;
                chargedAmount += 200;
            
            } else if (needToCharge > 0 && needToCharge <= 100){
                needToCharge -= 100;
                transaction ++;
                chargedAmount += 100;
            }
    
        }
        
        return "Bus Fare: " + price + " SEK" + "\nTransaction: " + transaction + "\nYou have charged: " + chargedAmount + " SEK";
    } 
    
    return "You cannot charge enough."
    
}

console.log(busfare(1790));