function busfare() {
	var pengar = prompt( "Åka för?" );
	/*
		Eftersom programmet bara kan göra transaktioner på 500, 200, 100 så måste PENGAR rundas upp till närmaste 100-tal.
		detta gör jag med Math.ceil( pengar / 100 ) * 100. Math.ceil rundar upp decimaler till närmaste heltal, så först 
		delar jag PENGAR på 100, till decimalform, sedan rundar funktionen upp det till närmaste heltal, varpå jag 
		multiplicerar resultatet med 100 för att få tillbaka det gamla talet upprundat till närmaste 100-tal. Coolt!
	*/
	pengar = Math.ceil( pengar / 100 ) * 100;
	//  Räknaren rransaktioner skall öka efter varje minskning på pengar, så den måste förstås börja på 0.
	var transaktioner = 0;

	/* 
		Så länge pengar är större än 0 så kommer den att minska med tre bestämda värden, om värdet är >= 500 så minskar den
		med 500, >= 200 så minskar den med 200, osv.
	*/
	while ( pengar > 0 ) {
		if ( pengar > 10000 ) {
			return alert( "Fan vad rik, ta taxi istället!" );
		} else if ( pengar >= 500 ) {
			pengar -= 500;
			transaktioner++;
		} else if ( pengar >= 200 ) {
			pengar -= 200;
			transaktioner++;
		} else if ( pengar >= 100 ) {
			pengar -= 100;
			transaktioner++;
		} 
	}
	return alert( "Antal transaktioner: " + transaktioner );
}
busfare();