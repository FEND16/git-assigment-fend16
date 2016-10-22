var budget = 10000;
var cost = 0;
var transaction = cost;

var price = prompt("Hur mycket vill du ladda busskortet med?");

function busFare(cost){
	return transaction;
}	
while(price >= cost){
	cost = cost + 500;
	}
	if(price < 500 && price > 200 && price > 100){
		cost = cost + 200;
		}
	else if(price < 500 && price < 200){
			cost = cost + 100;
		}
busFare();

var transaction = busFare();
console.log("Antal transaktioner: " + transaction);

