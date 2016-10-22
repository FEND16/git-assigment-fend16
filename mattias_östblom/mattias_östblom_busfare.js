function busFare(cost) {
    //Funktionen räknar inte antalet transaktioner om man inte matar in ett nummer
    if (typeof cost !== "number") {return "Du måste mata in ett nummer";}
    //Funktionen räknar inte antalet transaktioner om man inte matar in ett nummer som är större än 0
    if (cost <= 0) {return "Du måste mata in ett nummer som är större än 0";}
    //Deklarerar och tilldelar saldot av vårt bankkonto
    var accountBalance = 10000;
    //Kollar så att inte kontot övertraseras
    if (cost > accountBalance) {return "Transaktionen gick tyvärr inte att genomföra. Du har bara " + accountBalance + " kronor på ditt bankkonto";}
    //Om ett nummer över 0 är inmatat och kostnaden inte är högre än vårt saldo så börjar vi räkna transaktioner
    else {
        //Deklarerar variabeln som ska räkna våra transaktioner
        var transactions;
        //Kostnaden loopas igenom så länge den är högre än 400 kronor
        //För att få minsta antalet transaktioner vill vi komma in i loopen om kostnaden är mellan 400 och 500 kronor och inte bara om den är över 500
        //Antalet transaktioner ökar då med 1
        for (transactions = 0; cost > 400; transactions++) {
            //Drar av 500 på beloppet för varje gång loopen körs eftersom kortet max kan dras med 500 kronor
            cost -= 500;
        }
        //Om vår återstående kostnad är minst 100 kronor så loopas den igenom ytterligare
        //Här vill vi komma åt alla återstående kostnader mellan 100-200 kronor
        //Antalet transaktioner fortsätter öka med 1
        var numberOfTransactions = function(remainingCost) {
            for (transactions; remainingCost > 100; transactions++) {
                //Drar av 200 från beloppet för varje gång loopen körs
                //Detta gör så att vi får minsta möjliga antalet transaktioner för återstående belopp över 100 kronor
                remainingCost -= 200;
            }
            //Om vårt återstående kostnad är minst 0 kronor så forstätter det loopas igenom
            //Här vill vi komma åt alla återstående belopp upp till 100 kronor
            //Antalet transaktioner forstätter öka med 1
            (function() {
                for (transactions; remainingCost > 0; transactions++) {
                    //Drar av 100 från det resterande beloppet varje gång loopen körs
                    //Detta ger oss minsta möjliga antalet transaktioner för återstående belopp upp till 100 kronor
                    remainingCost -= 100;
                }
            })(remainingCost);
        };
        //Kallar på den intre funktionen för att få rätt antal transaktioner
        numberOfTransactions(cost);
        //Retunerar det slutgiltiga antalet transaktioner
        return "Antal dragningar på ditt kort: " + transactions;
    }
}
//Skicka in valfritt värde för att se svaret loggas i konsolen
console.log(busFare(612));
