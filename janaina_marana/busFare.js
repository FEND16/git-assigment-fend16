function busFare(cost) {
    var balance = 0;
    var transaction = 0;
    var currentCost = cost; 
    
    //är cost mer än 100000, så console logga meddelande.
    //annars, kallas functionen som räcknar balance och transaction
    cost > 10000 ? console.log("måste vara mindre än 10000") : calcTransactions();
    
    function calcTransactions() {
        while(cost > balance){
        /*
        om temp är 100 eller mindre - ladda med 100.
        om temp är mer än 100 eller mindre än 400 - ladda med 200.
        Upp till 400, ladda med 200
        Från 400, är det mer kost effektiv att ladda med 500.
        Om temp är mer än 400 - ladda med 500.
        Loopen kör tills balace är samma som eller höger än cost.
        
        currentCost räcknar hur mycket pengar saknas
        */
            if(currentCost <= 100) {
                balance += 100; //lägg 100 till balance
                transaction += 1; //räcknar en transaction
                currentCost = currentCost - 100; //uppdatera temp
            } else if(currentCost > 100 && currentCost <= 400){
                balance += 200;
                transaction += 1;
                currentCost = currentCost - 200;
            } else {
                balance += 500;
                transaction += 1;
                currentCost = currentCost - 500;
            }      
        }
    }
    return transaction;  //returnera antalet transactioner    
}
var numTransactions = busFare(prompt("Åka för? "));
console.log("Antal trasactioner: " + numTransactions);
