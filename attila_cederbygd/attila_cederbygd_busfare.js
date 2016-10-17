
var busfareTransCalc = function(K){
	var cost = K;
	// valörer
	var x = 500;
	var y = 200;
	var z = 100;
	var bills = [y ,z, x];
	// sortera valörer högst till lägst
	bills.sort(function(a, b){return b-a;});
	// räknare för transaktioner
	var tCount = 0;

	for (var i = 0; i < bills.length; i++) {
		// Hur många gånger går valören på kostnaden?
		console.log((Math.floor(cost / bills[i])) + ' av valören ' + bills[i]);

		// Räknaren += antalet valören går på kostnaden
		tCount += Math.floor(cost / bills[i]);

		// Resten av divisionen dras av från kostnaden
		console.log('Resten av divisionen ' + cost + ' / ' + bills[i] + ' = ' + cost % bills[i]);
		cost = cost % bills[i];
		console.log('Summa: ' + cost);
		if(cost === 0){
			break;
		} else {
			var remainder = cost;
		}
		//console.log(tCount);
	}
	if(cost > 0){
		console.log('Rest: ' + cost);
	}
	return 'Antal transaktioner: ' + tCount;
};

var userInput = Number(prompt('Åka för?'));
console.log(busfareTransCalc(userInput));

