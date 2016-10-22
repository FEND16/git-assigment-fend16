//funktion busfare har en parameter k
function busfare(k){
    // Skapar addMoney för att lagra ändringar
    var addMoney = k;
    //transactions är bara till för att kontrollera antalet transaktioner
    var transactions = 0;
    
    //Kör koden om addMoney (k) inte är högre än 10000
    if (addMoney <= 10000){
        //Kör loopen sålänge addMoney är större än 0
        while(addMoney > 0){
            //Om addMoney är lika med eller större än 500 ska 500kr dras
            if(addMoney >= 500){
                addMoney -= 500;
                //Adderar en transaktion
                transactions++;
            }
            //Om värdet är större eller lika med 101 dras 200kr
            else if(addMoney >= 101){
                addMoney -= 200;
                transactions++;
            }
            //Drar 100kr
            else {
                addMoney -= 100;
                transactions++;
            }
        }
    }
    //Loggar hur mycket pengar man ska åka för samt hur många transaktioner som gjorts
    return console.log("Åka för? " + k + ". Antal transaktioner: " + transactions);
}

//Kallar på funktionen busfare. Argumentet är hur många kr man ska åka för (k)
busfare(250);
