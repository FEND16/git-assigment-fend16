//användaren matar in en kostnad att åka för
var kostnad = prompt("hur mycket vill du åka för? 100-10000");
function buss(kostnad){
  var count = 0;
  //kollar om användaren försöker ladda mer än 10000
  if(kostnad > 10000)
    console.log("Du har inte råd för att åka för så mycket :(");
  //Loopar minsta antalet gånger för att få kostnad ned till 0,
  //håller koll på antalet transaktioner med var count 
  while (kostnad > 0){
    //kollar hur mycket kostnaden är och subtraherar med 500 om kostnad >= 500
    if (kostnad > 400){
      kostnad = kostnad - 500;
      count++;
    }
    // -200 om kostnad är större an 100 och mindre än 400
    else if (kostnad > 100 && kostnad < 400){
      kostnad = kostnad - 200;
      count++;
    }
    // -100 om kostnad är större an 0 och <= 100
    else if (kostnad > 0 && kostnad <= 100){
      kostnad = kostnad - 100;
      count++;
    }
  }
//Skriver ut antalet transaktioner som behövs
console.log("Antal transaktioner: " + count);
}
buss(kostnad);