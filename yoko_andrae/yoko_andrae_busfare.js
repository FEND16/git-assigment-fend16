//funktion som skickar busfare
function busfare (price) {
    
    //variablerna för att lagra värde, "hur mycket har kortet laddats" och "hur mycket mer behöver att laddas",
    //och för att räkna transaktioner
    var chargedAmount = 0;
    var needToCharge = price - chargedAmount;
    var transaction = 0;
    
    //om priset går över 10000SEK retunerar texten "You cannot charge enough"
    while (price <= 10000) {
        
        //charging start: loopar medan kortet behöver laddas upp med pengar
        while (needToCharge > 0) {
            
            //Här laddar 500 lapp och värden lagras om till variablerna för att jämföras vidare  
            if (needToCharge > 400 && needToCharge <= 10000){
                needToCharge -= 500;
                transaction++;
                chargedAmount += 500;
            
            //laddar 200 lapp när det behövs
            } else if (needToCharge > 100 && needToCharge <= 400){
                needToCharge -= 200;
                transaction ++;
                chargedAmount += 200;
            
            //laddar 100 lapp när det behövs
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