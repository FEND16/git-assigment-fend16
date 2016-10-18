//Global variabel som läser in priset för resan då sidan läses in
var cash = Number(prompt("Ange pris för din resa:"));

//Funktion för att räkna ut antalet transaktioner. Parameter = pris för aktuell resa
function busFare(k) {

    var trans = 0;
    var ticket = 0;

    //for-loop som körs så länge vårt biljettpris är 
    for (var i = ticket; i <= k; i++) {
        //if-sats för att kontrollera att priset för resan ej överstiger 10'/användaren ej anger ett tal, 
        //isf avbryts loopen annars körs else-satsen
        if (k >= 10000 || isNaN(k)) {
            return; //Lämnar funktionen om priset för resan överstiger
        } else {
            //villkor för att räkna upp biljettpris genom så få transaktioner som möjligt
            //Programmet har tillgång till 3 olika transaktionsbelopp: 500kr, 200kr samt 100kr
            if (ticket + 500 <= (k + 100)) {
                ticket += 500;

            } else if (ticket + 201 <= (k + 100)) {
                ticket += 200;

            } else if (ticket + 101 <= (k + 100)) {
                ticket += 100;

            } else {
                break;
            }
        }
        trans++;
    }


    // console.log("The total amount for your ticket will be: " + ticket + ". You needed: " + trans +
    //     " transactions for this fare. The amount left on your card efter this fare is: " + -(k - ticket) + "kronor");

    return trans;

}


busFare(cash); //Anropar funktionen busFare för att starta programmet