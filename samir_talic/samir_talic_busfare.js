function busFare(cost){
	
//variabel which hold amount of transactions.
var transactions = 0;

//rounding up price of trip to nearest 100
var upperCost = Math.ceil(cost/100)*100;
	
//amount which was added with rounding up
var addedAmount = upperCost - cost;

//check how meny 500 goes in price of trip and declare an variabel which hold //this amount
var howMeny500 = 0;
	
//retriving number of 500 in price of trip
howMeny500 = Math.floor(upperCost/500);
	
		//checking if our price of trip retain any 500 amounts 	
		if (howMeny500 > 0){
						
			//increasing number of transactions by number of 500 in our price //of trip
			transactions = transactions + howMeny500;
						
			//decreasing price of trip
			upperCost = upperCost - howMeny500*500;
			
		}
				
//check how meny 200 goes in price of trip and declare an variabel which hold //this amount
var howMeny200 = 0;
	
//retriving number of 200 in price of trip
howMeny200 = Math.floor(upperCost/200);
	
		//checking if our price of trip retain any 500 amounts 	
		if (howMeny200 > 0){
						
			//increasing number of transactions by number of 200 in our price //of trip
			transactions = transactions + howMeny200;
						
			//decreasing price of trip
			upperCost = upperCost - howMeny200*200;
						
		}				
	
//check how meny 100 goes in price of trip and declare an variabelwhich hold //this amount
var howMeny100 = 0;
	
//retriving number of 100 in price of trip
howMeny100 = Math.floor(upperCost/100);
	
		//checking if our price of trip retain any 100 amounts 	
		if (howMeny100 > 0){
						
			//increasing number of transactions by number of 100 in our price //of trip
			transactions = transactions + howMeny100;
						
			//decreasing price of trip
			upperCost = upperCost - howMeny100*100;
			
			console.log(transactions + " * 100");
			console.log("left " + upperCost);
		}
console.log("You got " + addedAmount + " left for next trip");
return transactions;
}


console.log("Total number of transactions : " + busFare(695));

