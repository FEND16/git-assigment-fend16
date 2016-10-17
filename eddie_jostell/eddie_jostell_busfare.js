
var travelCost = prompt("Hur mycket vill du resa för?");
//alert("Du vill sätta in " + travelCost + "kr");
/* var YES = confirm("Vill du göra din transaktion på snabbast möjliga vis?");

 if (YES) {
     busPassTravel();
 }*/

function busFare(cost) {

    var cost1 = 500;
    var cost2 = 200;
    var cost3 = 100;

    var five = travelCost / cost1;
    var two = travelCost / cost2;
    var one = travelCost / cost3;


    if (travelCost > 10000) {
        console.log("Maxbelopp är 10000 starta om och försök igen");
    }
    else if (Math.floor(five)) 
    {

        console.log("Sätt in " + cost1 + " kr " + five + " gång(er) " + 
        cost2 + " kr " + two + " gång(er) " + 
        cost3 + " kr " + one + " gång(er)");
    }



    else if (Math.floor(travelCost / cost2)) {

        console.log("Sätt in 200kr " + two + " gång(er)");
    }
    else if (Math.floor(travelCost / cost3)) {

        console.log("Sätt in 100kr " + one + " gång(er)");
    }

}

busFare();