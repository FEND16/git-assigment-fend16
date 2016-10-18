//Frågar användaren om pengar som man har åka med
var userInput = parseInt(prompt("Åka för?"));
//Input och räknar antalet transaktioner
var count = 0;
//Avrundar till närmaste heltal för att beräkna lättare
userInput = Math.ceil(userInput/100) * 100;


//Kallar på funktionen
calculateMinNumber();

//Funktion som beräknar det minsta antalet transaktioner
function calculateMinNumber(){
  while(userInput > 0) {
    if(userInput > 10000) {
    //skriver return för att gå ut från while-loop
    return console.log("Du har så många pengar. Kanske ska flyga någonstans istället");
    }
    else if(userInput >= 500) {
      //Beräknar första del av transaktioner och sparar i count variabel.
      count += parseInt(userInput / 500);
      //Beräknar resten av beloppet för att vi kan försätta räkna transaktioner.
      userInput = userInput - (parseInt(userInput / 500) * 500);
    }
    else if(userInput >= 200) {
      //Gör samma sak 
      count += parseInt(userInput / 200);
      userInput = userInput - (parseInt(userInput / 200) * 200);
    }
    else if(userInput >= 100) {
      count += parseInt(userInput / 100);
      userInput = userInput - (parseInt(userInput / 100) * 100);
    }
  }
}

console.log("Antal transaktioner: " + count);