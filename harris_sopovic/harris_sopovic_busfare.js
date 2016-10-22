/*  Beräknar minst antal transaktioner för att betala för resan.
	Funktionen kollar biljettpris och kortsaldo, sen fylls kortsaldot på med
	högst tillåtna transaktionsumma tills biljettpris är nått.
	Funktionen returnerar sedan antal transaktioner som gjorts.
*/	

var reseKostnad = 1700;        

console.log("Resans kostnad: " + reseKostnad + "Kr.");
console.log("Antal transaktioner gjorda: " + transaktion());

function transaktion(){
	var kortSaldo = 0;
	var antalTransaktioner = 0;
	var mellanSkillnad = reseKostnad - kortSaldo;
	
		while(kortSaldo < reseKostnad){
		
			if(mellanSkillnad >= 500){
				kortSaldo += 500;		
				mellanSkillnad -= 500;
				antalTransaktioner++;
				}
			else if(mellanSkillnad > 100){
				kortSaldo += 200;		
				mellanSkillnad -= 200;
				antalTransaktioner++;
			}
			else{
				kortSaldo += 100;		
				mellanSkillnad -= 100;
				antalTransaktioner++;
			}	
		}

	return antalTransaktioner;
}