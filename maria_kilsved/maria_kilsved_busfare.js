function calc(number) {
	// Variabler för räkning av antalet inmatningar:
	var a = 0;
	var b = 0;
	var c = 0;

	// Variabel som sparar ursprungliga värdet på number:
	var save = number;

	// Antalet 500
	while (number >= 500) {
		number -= 500;
		a++;
	}

	// Antalet 200
	while (number >= 200) {
		number -= 200;
		b++;
	}

	// Antalet 100
	while (number > 0) {
		number -= 100;
		c++;
	}

	// Returnering av en sträng
	return save + " kr >> " + (a + b + c) + " inmatningar  (" + a + " x 500  " + b + " x 200  " + c + " x 100)";
}