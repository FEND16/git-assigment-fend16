var saldo         =  0; // Deklarera variabeln Saldo
var topUp         =  0; //Deklararer varieblen topUp som visar hur mkt du sak resa för
var topUpKoll     =  topUp; // dekklarerar variabeln topUpKoll, som är en variabel för att spara på hur mycket som personen vill åka för
var transaktioner =  0; // deklararer variabeln transaktioner för att spara hur många transaktioner som gjorts

/* Självaste Bussfare funktionen, tar med argunment saldoIS & topUpIS
(namnen på argumenten är desamma som på global scope men använder IS på
slutet för att de ska vara enkelt att koppla ihop)
*/
function start(){
   topUp  =  document.getElementById("topUp").value;

      while (isNaN(topUp)) { // kollar så topUp är en siffra och inte en sträng, och sedan ber om att kunden skall slå in en siffra ifall det är en sträng
         alert( topUp + "är inte en siffra.");
         topUp = prompt("Ange hur mycket din resa kostar;");
      }
      
      while (topUp > 9999) {
         alert( topUp + " Det kommer tyvärr bli för dyrt för dig. Köp en resa för mindre än 10000kr");
         topUp = prompt("Ange hur mycket din resa kostar;");
      }

   topUpKoll = topUp;
   bussFare(saldo, topUp);

}

function bussFare(saldoIS, topUpIS){
         if (topUpIS <= 0) {
         document.getElementById("kop").innerHTML = "Du valde att åka för <b>" +  topUpKoll + "kr</b>.<br>Vilket gjorde att vi genomförde <b>" +  transaktioner +"st</b> transaktioner på totalt <b>" + saldo + "kr.</b>" + "<br>Och du har <b>" + (saldo - topUpKoll) + "kr</b> kvar på ditt busskort.";

         topUp           =     0;
         topUpKoll       =     0;
         transaktioner   =     0;
         saldo           =     0;

         }

         else if (topUpIS >= 500 ){
            saldo = saldo + 500;
            topUp = topUp - 500;
            transaktioner++;
            bussFare(saldo, topUp);
         }

        else if (topUpIS >= 200) {
            saldo = saldo + 200;
            topUp = topUp - 200;
            transaktioner++;
            bussFare(saldo, topUp);
         }

        else if (topUpIS > 0 ){
            saldo = saldo + 100;
            topUp =  topUp - 100;
            transaktioner++;
            bussFare(saldo, topUp);
         }
}
