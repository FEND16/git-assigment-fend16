Pseudokod inlämningsuppgift - GIT, 161017
======


**Program fylla på busskort** 

Då sidan läses in får användaren ange kostnaden för aktuell resa. Denna
summa skickas med då funktionen för att starta programmet anropas.
Programmet skall ladda på busskortet genom så få transaktioner som möjligt
och endast 3 transaktionsbelopp finns tillgängliga, 500kr, 200kr och 100kr.

### Problemlösning

1. Start
2. Läsa in pris för resan.
3. Skapa en räknare för hur många transaktioner som gjorts, startar på 0.
4. Sätter biljettpris till 0.
5. Repetera följande serie av steg så länge biljettpriset är större än priset för resan:
_Går igenom 3 olika villkor/vägval för att addera korrekt transaktionsbelopp till biljettpris. Räknar upp transaktioner med 1._ 
6. Returnerar antalet transaktioner som gjorts.




````
pris för resan ← input (pris för din resa)

ALGORITM LADDABUSSKORT ( pris för resan ){

    transaktioner ← 0;
    biljettpris ← 0;

    FOR (som körs så länge bussbiljetten är mindre än priset för resan) {
        DO
        IF (som kontrollerar att priset för resan ej överstiger 10' och att användaren angett en siffra){

        }
        ELSE {
            IF (biljettpriset + 500kr är mindre el lika med priset för resan + 100kr){
                biljettpris ← biljettpris+500kr
            }
            ELSE IF (biljettpriset + 201kr är mindre el lika med priset för resan + 100kr){
                biljettpris ← biljettpris+200kr
            }
            ELSE IF (biljettpriset + 101kr är mindre el lika med priset för resan + 100kr){
                biljettpris ← biljettpris+100kr
            }
        }
    För varje varv i loopen räknas transaktioner upp med 1.
    }
    return transaktioner 
}

laddaBussKort( pris för resan )

```












