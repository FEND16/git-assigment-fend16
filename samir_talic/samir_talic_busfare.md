#Inlämningsuppgift - pseudokod lösning

##START

declare function busfare with 1 paramiter(price of trip).

 	declare an variabel which hold number of transactions.
	
	round up price of trip to nearest 100 and save it to variabel.
	
	declare variabel which hold the amount wich was added with rounding up.
 
 	check how meny 500 goes in rounded price of trip and declare variabel(howMeny500) which hold this amount
	
		if howMeny500 > 0
		
			amount of transaction = amount of transaction + howMeny500
			rounded price of trip = rounded priceof trip - howMeny500*500
				

	check how meny 200 goes in rounded price of trip and declare variabel(howMeny200) which hold this amount
	
		if howMeny200 > 0
 	
				amount of transaction = amount of transaction + howMeny200
				rounded price of trip = rounded priceof trip - howMeny200*200
				
	
	check how meny 100 goes in rounded price of trip and declare variabel(howMeny100) which hold this amount
	
		if howMeny100 > 0
		
				amount of transaction = amount of transaction + howMeny100
				rounded price of trip = rounded priceof trip - howMeny100*100
				
	log out amount wich was added with rounding up.
			
	return amount of transactions
				
end of function
	
	
##STOP		
	
		
	
  
