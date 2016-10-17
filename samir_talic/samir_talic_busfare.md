#Inlämningsuppgift - pseudokod lösning#


declare function busfare with 1 paramiter(price of trip).

 	declare an variabel which hold amount of transactions.
 
 	check how meny 500 goes in price of trip and declare an variabel(howMeny500) which hold this amount
	
		if howMeny500 > 0
		
			amount of transaction = amount of transaction + howMeny500
			price of trip = priceof trip - howMeny500*500
				

	check how meny 200 goes in price of trip and declare an variabel(howMeny200) which hold this amount
	
		if howMeny200 > 0
 	
				amount of transaction = amount of transaction + howMeny200
				price of trip = priceof trip - howMeny200*200
				
	
	check how meny 100 goes in price of trip and declare an variabel(howMeny100) which hold this amount
	
		if howMeny200 > 0
		
				amount of transaction = amount of transaction + howMeny100
				price of trip = priceof trip - howMeny100*100
	
	If price of trip > 0
	
		amount of transactions ++
		
	return amount of transactions
				
end of function
	
	
				
	
		
	
  
