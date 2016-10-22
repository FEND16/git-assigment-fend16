var k = 0; // k som i kronor!? Ändrar aldrig värdet på k efter som det inte är det som det frågas efter, men är värdet som finns i busskortet
var amount = Number(prompt("Hur mycket vill du ladda med? Max 10 000 Min 100")); // för att ta reda på hur mycket vi ska ladda kortet med.

// får inte laddas med mer än 10 000 samt att den ska laddas med ett belopp som är större än 100
if (amount <= 100 || amount > 10000){
	while (amount <= 100 || amount > 10000) 
	{
		amount = Number(prompt("Kom igen! Ge mig ett värde mellan 100 - 10 000"));
	}
}

function busFare(argument1,argument2) {
	// Differansen för att veta hur stort belopp att fylla med
	var compare = argument1 - argument2;
	//  variablen som konsolloggas samt håller koll på antal varv i loopen
	var counter = 0;
	// en loop for att se hur många belopp kortet ska fyllas
	while (compare > 0)
	{
		if (compare >= 500) // alla värden i compare över 500 läggs det på 500
		{
			compare -= 500; // värdet på kortet ökar vilket leder till att differansen minskar
			counter++; // ökar med 1
		}
		else if(compare > 100 && compare < 500) // värdet är mellan 100 - 500 så fyller vu upp med 200
		{
			compare -= 200; // värdet på kortet ökar vilket leder till att differansen minskar
			counter++; // ökar med 1
		}
		else // om compare värde är mindre än eller lika med 100 så fylls kortet
		{
			compare -= 100; // värdet på kortet ökar vilket leder till att differansen minskar
			counter++; // ökar med 1
		}
	}
	return console.log("Antal transaktioner: " + counter);
}

busFare(amount, k);