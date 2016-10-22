var fyllapakort = prompt("Fyll i hur mycket du vill fylla på ditt kort med, maxsumman är 10 000? Observera att du endast kan ladda på med 100-tal");
    
    var antalTransaktioner = 0;
    var summa = 0;

function bussbiljett() {

    while (summa < fyllapakort) { 
        if (summa + 500 <= fyllapakort) {   
            summa += 500;
            antalTransaktioner++;
        } else if (summa + 200 <= fyllapakort) { 
            summa += 200;
            antalTransaktioner++;
        } else {
            summa += 100;                            
            antalTransaktioner++;
        }
    }

    return "Antal transaktioner du kommer att behöva göra är " + antalTransaktioner;
}

console.log(bussbiljett());

