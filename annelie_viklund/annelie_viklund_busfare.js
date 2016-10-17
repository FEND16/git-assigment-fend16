function busfare(K){
	var t = 0;//varibael som sparar antalet loopar
	var b = 0;
	var a = K; // variabel med startvärde K men som kan minskas för varje loopning
	while (K > b){
		t++;
		if (a > 500 ){ //kontrollerar först om vi kan sätta in 500 utan att slösa mer än 50
			b = b + 500;
			a = a - 500;
		}else if (a >= 200 || a >= 150 ){//annars sätter vi in en mindre summa
			b = b + 200;
			a = a - 200;		
		}else if (a >= 0){//eller en ännu mindre
			b = b + 100;
			a = a - 100;	
		}
	}
	b = b - K; //för att få fram överskottet av transaktionerna
console.log("Du utförde " + t + " st transaktioner");
if (b !== 0){
		console.log("Tyvärr gick "+ b + " kronor till spillo. Trevlig resa! ");
	}else{
		console.log("Inga pengar gick till spillo! Trevlig resa!");
	}
}

var K = busfare(850);
var K = busfare(1800);