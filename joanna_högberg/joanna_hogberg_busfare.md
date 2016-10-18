Pseudokod inlämningsuppgift - GIT, 161017
======


**Problemlösning** 

Då sidan läses in får användaren ange kostnaden för aktuell resa. Denna
summa skickas med då funktionen för att starta programmet anropas.
Programmet skall ladda på busskortet genom så få transaktioner som möjligt
och endast 3 transaktionsbelopp finns tillgängliga, 500kr, 200kr och 100kr.

### Program fylla på busskort

1. Start
2. Läsa in pris för resan.
3. Skapa en räknare för hur många transaktioner som gjorts, startar på 0.
4. Sätter biljettpris till 0.
5. Repetera följande serie av steg så länge biljettpriset är större än priset för resan:

> Går igenom 3 olika villkor/vägval för att addera korrekt transaktionsbelopp till biljettpris.
> Räknar upp transaktioner med 1. 

6. Returnerar antalet transaktioner som gjorts.




````
function laddaBussKort( _pris för resan_ ){

    var transaktioner = 0;
    var biljettpris = 0;

    for-loop(som körs så länge bussbiljetten är mindre än priset för resan) {
        if-sats(som kontrollerar att priset för resan ej överstiger 10' och att användaren angett en siffra){

        }
        else{
            if(biljettpriset + 500kr är mindre el lika med priset för resan + 100kr){
                500kr adderas till biljettpriset;
            }
            else if(biljettpriset + 201kr är mindre el lika med priset för resan + 100kr){
            200kr adderas till biljettpriset;
            }
            else if(biljettpriset + 101kr är mindre el lika med priset för resan + 100kr){
            100kr adderas till biljettpriset;
            }
        }
    För varje varv i loopen räknas transaktioner upp med 1.
    }
    Antalet transaktioner returneras då bussbiljetten är högre än priset för resan.  
}

```












