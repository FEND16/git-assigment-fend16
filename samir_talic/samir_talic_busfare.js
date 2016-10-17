//function which calculate how meny transactions you have to make and 
//which amount of money

function busFare(cost){
	
//variabel which hold amount of transactions.
var transactions = 0;
	
//check how meny 500 goes in price of trip and declare an variabel which hold //this amount
var howMeny500 = 0;
	
//retriving number of 500 in price of trip
howMeny500 = Math.floor(cost/500);
	

		//checking if our price of trip retain any 500 amounts 	
		if (howMeny500 > 0){
			
			
			//increasing number of transactions by number of 500 in our price //of trip
			transactions = transactions + howMeny500;
			
			
			//decreasing price of trip
			cost = cost - howMeny500*500;
			
			
			console.log(transactions + " * 500");
			console.log("left " + cost);
			
		}
				

//check how meny 200 goes in price of trip and declare an variabel which hold //this amount
var howMeny200 = 0;
	
//retriving number of 500 in price of trip
howMeny200 = Math.floor(cost/200);
	
		//checking if our price of trip retain any 500 amounts 	
		if (howMeny200 > 0){
			
			
			//increasing number of transactions by number of 200 in our price //of trip
			transactions = transactions + howMeny200;
			
			
			//decreasing price of trip
			cost = cost - howMeny200*200;
			
			console.log(transactions + " * 200");
			console.log("left " + cost);
			
		}
				
	
//check how meny 100 goes in price of trip and declare an variabelwhich hold //this amount
var howMeny100 = 0;
	
//retriving number of 500 in price of trip
howMeny100 = Math.floor(cost/100);
	
		//checking if our price of trip retain any 100 amounts 	
		if (howMeny100 > 0){
			
			
			//increasing number of transactions by number of 100 in our price //of trip
			transactions = transactions + howMeny100;
			
			
			//decreasing price of trip
			cost = cost - howMeny100*100;
			
			console.log(transactions + " * 100");
			console.log("left " + cost);
		}
	
//Checking if our price of trip still containing funds after our checks of //containing 500, 200 or 100
	
	if (cost > 0){
	
		transactions = transactions + 1;
	}
	
	

return transactions;
}


console.log("Total number of transactions : " + busFare(850));