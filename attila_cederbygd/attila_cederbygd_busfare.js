
var busfareTransCalc = function(K){
	var cost = K;
	// valörer
	var x = 500;
	var y = 200;
	var z = 100;
	var bills = [y ,z, x];
	// sorterar valörer högsta till lägsta
	bills.sort(function(a, b){return b-a;});
	// räknare för antal transaktioner
	var tCount = 0;

	while(cost > 0){ // yttre loop
		for (var i = 0; i < bills.length; i++) { // inre loop för varje valör
			// Om valören är delbar med summan skriv ut
			if(Math.floor(cost / bills[i]) > 0 ){
				// Valören delat med kostnaden
				console.log((Math.floor(cost / bills[i])) + ' av valören ' + bills[i]);

				// Räknaren adderas med antalet gånger valören går på kostnaden
				tCount += Math.floor(cost / bills[i]);

				// Kostnaden blir resten av divisionen
				cost = cost % bills[i];
				//console.log('Resten av divisionen ' + cost + ' / ' + bills[i] + ' = ' + cost % bills[i]);
				//console.log('Summa: ' + cost);
			}
		}
		if(cost > 0){
			console.log('Det blev en rest: ' + cost);
			cost += K;
			tCount = 0; 
			console.log('Resten adderat med den ursprungliga summan: ' + cost);
			console.log('-- resettar inre loopen--');
		}
	}
	//console.log('Rest: ' + cost);
	return 'Antal transaktioner: ' + tCount;
};

var userInput = Number(prompt('Åka för?'));
console.log(busfareTransCalc(userInput));

