var note = 0;

function  minimumTransactions(){

	var kronor = prompt("Please enter your money: " );
    //var kronor = 1800;

	while ( kronor > 99){

		if( kronor > 500 && kronor % 500!=0){
			note++;
			kronor = kronor-500;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);
		}

		else if (kronor > 500 && kronor % 500 ==0){
			note++;
			kronor = kronor-500;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);
			
		}

		else if (kronor == 500 && kronor % 500 ==0){
			note++;
			kronor = kronor-500;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);
		
		}

		else if(kronor > 200 && kronor % 200 !=0){
			note++;
			kronor = kronor-200;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);

		}

		else if (kronor > 200 && kronor % 200 ==0){
			note++;
			kronor = kronor-200;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);
		}

		else if (kronor == 200 && kronor % 200 ==0){
			note++;
			kronor = kronor-200;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);
		}

		else if (kronor > 100 && kronor % 100 !=0){
			note++;
			kronor = kronor-100;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);
		}

		else if (kronor > 100 && kronor % 100 ==0){
			note++;
			kronor = kronor-100;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);
		}

		else if (kronor == 100 && kronor % 100 ==0){
			note++;
			kronor = kronor-100;
			console.log("Reduce value is : " + kronor );
			console.log("Number of tarnsactions : " + note);
		}
		//return note;
		
		/*else if(kronor > 50 && kronor % 50 !=0){
			note++;
			kronor = kronor-50;
			console.log("Reduce value is : " + kronor );
			
		}

		else if (kronor > 50 && kronor % 50 ==0){
			note++;
			kronor = kronor-50;
			console.log("Reduce value is : " + kronor );
		
		}

		else if (kronor == 50 && kronor % 50 ==0){
			note++;
			kronor = kronor-50;
			console.log("Reduce value is : " + kronor );
			
		}

		else if(kronor > 20 && kronor % 20 !=0){
			note++;
			kronor = kronor-20;
			console.log("Reduce value is : " + kronor );

		}

		else if (kronor > 20 && kronor % 20 ==0){
			note++;
			kronor = kronor-20;
			console.log("Reduce value is : " + kronor );
		
		}

		else if (kronor == 20 && kronor % 20 ==0){
			note++;
			kronor = kronor-20;
			console.log("Reduce value is : " + kronor );
			
		}*/
	}
	console.log("Total Number of tarnsactions : " + note );
	

}
minimumTransactions();
