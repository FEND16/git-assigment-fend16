

//Prompt som frågar vilken summa du vill resa för

var travelCost = prompt('Hur mycket ska du åka för?');
//Transaktions räknare som börjar på 0 för varje sedel summa som läggs till för att få den önskade summan. 
//Det vill säga räknar hur många 500, 200 100 kr som behövs för att få den önskade inmatade summan.
var transactionsFive = 0;
var transactionsTwo = 0;
var transactionsOne = 0;
//Array med värden som kan sättas in på kortet i taget för att få summan man vill ha på kortet.
var transactionValues = [100,200,500];
// busFare funktionen
function busFare() {
//Kollar först om summan man slagit in är större än max gränsen på kortet, om så är fallet så får man börja om.
    if (travelCost > 10000) {
        console.log("Maxbelopp är 10000 starta om och försök igen");
        return; 
    }

 console.log("Vald summa att föra in på kortet: " + travelCost + "kr"); //Skriver ut inmatade summan

// If satsen kollar om inmatade summan delat på 500 går jämt ut. eller om summan är större än 400.
//Det vill säga att den kollar 500 lappar.
    if(Math.floor(travelCost / transactionValues[2]) !== 0 || travelCost > 400 ){
     //Kollar travelCost / 500 och avrundar ner och ger 
     //nytt värde till transactionFive dvs lägger till en transaktion av 500kr
     //och drar bort från travelCost.
     
      transactionsFive =  Math.floor(travelCost / transactionValues[2]);
      travelCost = travelCost - transactionValues[2] * transactionsFive;
        //Kollar hur högt värdet på travelCost är för tillfället och kollar om det behövs läggas in ytterligare
        // 500 lappar. 
      if(travelCost > 400 && travelCost < 500){
        transactionsFive++;
        return;
      }
    }

// If satsen kollar om inmatade summan delat på 200 går jämt ut. eller om summan är större än 100 och mindre än 400.
// 200 lappar.

    if(Math.floor(travelCost / transactionValues[1]) !== 0 ||travelCost > 100 && travelCost < 400){
        //Kollar värde på travelCost / 200 och avrundar ner och ger 
        //nytt värde till transactionsTwo 
        //och drar bort från travelCost.
        transactionsTwo =  Math.floor(travelCost / transactionValues[1]);
        travelCost = travelCost - transactionValues[1] * transactionsTwo;
        //Kollar värdet på travelCost för tillfället och kollar om det behövs läggas till 
        // ytterligare 200 lappar.
      if(travelCost > 100 && travelCost < 400){
        transactionsTwo++;
        return;

      }
    }

// If satsen kollar om inmatade summan delat på 100 går jämt ut. eller om summan är större än 0 och mindre än 400.
// 100 lappar.

    if(Math.floor(travelCost / transactionValues[0]) !== 0 || travelCost > 0 && travelCost < 100){
       //Kollar värde på travelCost / 100 och avrundar ner och ger 
       //nytt värde till transactionsOne 
       //och drar bort från travelCost.
        transactionsOne =  Math.floor(travelCost / transactionValues[0]);
        travelCost = travelCost - transactionValues[0] * transactionsOne;
        //Kollar värdet på travelCost och kör ifsatsen OM vilkoret stämmer
        //Vilket då adderar ytterligare en transaktion.
      if(travelCost > 0 && travelCost < 100){
        transactionsOne++;
        return;
      }
    }
  }
// Kallar på funktionen
busFare();

// Loggar ut Antal transaktioner per valör
// och totlala antalet gjorda transaktioner.
console.log("Antal transaktioner per 500kr " + transactionsFive);
console.log("Antal transaktioner per 200kr " + transactionsTwo);
console.log("Antal transaktioner per 100kr " + transactionsOne);
console.log('Totalt antal transaktioner: ' + (transactionsOne + transactionsTwo + transactionsFive));


