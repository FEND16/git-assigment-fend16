//Input från användaren för att veta hur mycket hen vill åka för
var k = Number(prompt("Hur mycket ska du åka för?"));
console.log("Du förde in summan: " + k);
//Kallar på funktionen så vi får en output
busFare(k);

function busFare(k) {
//Om värdet överstiger 10 000 så ska inte funktionen köras utan retunera att det är för högt
	if (k > 10000) {
		return console.log("För högt värde. Ange nytt värde längre 10 000.");
	}
//Deklarerar variabler
	var skillnad = 0;
  var konto = 0;
  var antalTransaktioner = 0;
//Loop som höjer upp till närmsta hundratal, med funktionen att minska antalet transaktioner
	if (k % 100 !== 0) {
		while (skillnad + 100 < k) {
				skillnad += 100;
		}
		skillnad = 100 - (k - skillnad);
		k += skillnad;
	}
//Loop som kör genom alla IF statement tills det kommer upp i rätt summa
	while (konto < k) {
//Första IF som kollar om det går att fylla på 500 kr, gör det tills att det inte går längre
		if ((konto + 500) <= k) {
  	   konto += 500;
   	   antalTransaktioner++;
		 }
//Andra IF som kollar om det går att fylla på 200 kr, gör det tills att det inte går längre
    else if ((konto + 200) <= k) {
    	konto += 200;
    	antalTransaktioner++;
		}
////Tredje IF som kollar om det går att fylla på 100 kr, gör det tills att det inte går längre
    else {
    	konto += 100;
    	antalTransaktioner++;
		}
	}
//Här retunerats det som berkäknats
	console.log("Ditt konto laddades till: " + konto);
	return console.log("Antalet transaktioner är: " + antalTransaktioner);
	}
