/*
var travelCost = prompt("Hur mycket vill du resa för?");


function busFare() {
var count = 0;

    var cost1 = 500;
    var cost2 = 200;
    var cost3 = 100;
/*
    var five = travelCost / cost1;
    var two = travelCost / cost2;
    var one = travelCost / cost3;


    if (travelCost > 10000) {
        console.log("Maxbelopp är 10000 starta om och försök igen");
    }
    else if (travelCost % cost1 === 0) 
    {

        console.log("Sätt in " + cost1 + " kr " + five + " gång(er) ");
    }
    else if (travelCost % cost1 !== 0) {
             //console.log(cost1 %  )
    }
    */

 //   while (travelCost >= 100) {

/*    }

    

}

busFare(850);*/


var travelCost = prompt("Hur mycket vill du resa för?");

function busFare(cost) {

    var transactions = 0;

    var fiveHundred = 500;
    var twoHundred = 200;
    var oneHundred = 100;

    if (travelCost > 10000) {
        return console.log("Maxbelopp är 10000 starta om och försök igen");
    }

    if(Math.floor(travelCost / fiveHundred) !== 0){
      transactions = Math.floor(travelCost / fiveHundred);
      travelCost -= fiveHundred * transactions;
      console.log(travelCost);

      if(Math.floor(travelCost / twoHundred) !== 0){
        var intermediateTransaction = Math.floor(travelCost / twoHundred);
        transactions += intermediateTransaction;
        travelCost -= twoHundred * intermediateTransaction;
        console.log(travelCost);
      }

      if(Math.floor(travelCost / oneHundred) !== 0){
        var intermediateTransaction = Math.floor(travelCost / oneHundred);
        transactions += intermediateTransaction;
        travelCost -= oneHundred * intermediateTransaction;
        console.log(travelCost);
      }

    }
    console.log('Rest av travelCost '+ travelCost);
    console.log('Antal transaktioner: '+ transactions);
  }

busFare();
