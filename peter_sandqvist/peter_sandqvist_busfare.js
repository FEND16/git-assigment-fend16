//här skriver användaren in summan man vill fylla på 
var k = prompt("Hur mycket vill du fylla på? Max 10000 och du kan endast fylla på med 100-och 1000-tal.");

//hur många transaktioner som krävs
var transaktioner = 0;
//hur mycket pengar vi har från start
var summa = 0;




while (summa < k) {
    if (summa + 500 <= k) {
        summa = summa + 500; //ökar summa
        transaktioner++; //utför en transaktion
    } else if (summa + 200 <= k || summa === 150) {
        summa = summa + 200;
        transaktioner++;
    } else {
        summa = summa + 100;
        transaktioner++;

    }
}//skriver ut antalet transaktioner
console.log("Antal transaktioner: " + transaktioner);
