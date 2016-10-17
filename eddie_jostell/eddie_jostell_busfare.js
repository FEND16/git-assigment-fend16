
var travelCost = prompt("Hur mycket vill du resa för?");

function busPassTravel() {

    var cost1 = 500;
    var cost2 = 200;
    var cost3 = 100;

    var five = travelCost / cost1;
    var two = travelCost / cost2;
    var one = travelCost / cost3;


    if (travelCost > 10000) {
        console.log("Maxbelopp är 10000 starta om och försök igen");
    }
    else if (travelCost % cost1 === 0) {

        console.log("Sätt in 500kr " + five + " gång(er)");
    }
   
    else if (travelCost % cost2 === 0) {

        console.log("Sätt in 200kr " + two + " gång(er)");
    }
    else if (travelCost % cost3 === 0) {

        console.log("Sätt in 100kr " + one + " gång(er)");
    }

}

busPassTravel();