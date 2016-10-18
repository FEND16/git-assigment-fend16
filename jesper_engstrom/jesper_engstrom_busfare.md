# Övning Busfare
### Pseudokod Jesper Engström

* Funktionen busfare tar ett argument k (kronor resan kostar) som är max 10000
* k räknas sedan ner i 500, 200 och 100 kr intervall (saldot på kortet ökar i samma takt).
* För varje gång något dras från k räknas antalet transaktioner upp med ett.
* När ```k == 0``` bryts funktionen och vi kan resa.

---

#### START
**Kalla på** funktionen: <br><br>
&nbsp;&nbsp;&nbsp;**Om** ```k > 10000```<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returnera** att summan är för hög. <br>
&nbsp;&nbsp;&nbsp;**Annars:**<br>
&nbsp;&nbsp;&nbsp;**Så länge** ```k > 0``` pågår den yttre loopen <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Så länge** det kan dras 500 från k <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Dra 500 kr från k* <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Räkna upp transaktioner med 1* <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Så länge** det kan dras 200 från k <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Dra 200 kr från k* <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Räkna upp transaktioner med 1* <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Så länge** det kan dras 100 från k <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Dra 100 kr från k* <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Räkna upp transaktioner med 1* <br>
<br>
**Logga ut** antalet transaktioner.

#### STOP

---

###Uppdatering:
Efter några försök inser jag att funktionen måste förbättras. Problem:
* Bussfärder som inte kostar jämna hundratal fastnar i en evighetsloop eftersom 100 inte kan dras från 50 t.ex.
* Funktionen måste kunna fatta smartare beslut: <br>
&nbsp;&nbsp;- Ladda på mer än vi reser för om det leder till färre transaktioner (dvs ```k < 0```).<br>
&nbsp;&nbsp;- Dra ```200``` om det återstår 150, istället för ```2 * 100```
* För många upprepningar i kod, borde kunna bli en egen funktion.

---


#### START
**Kalla på** funktionen: <br><br>
&nbsp;&nbsp;&nbsp;```array[500, 200, 100]```<br>
&nbsp;&nbsp;&nbsp;```index i```<br>
&nbsp;&nbsp;&nbsp;**Så länge** ```k < 10000 && k > 0``` pågår den yttre loopen <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Kalla på** den inre funktionen: <br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Så länge** ```array[i]``` kan dras från k **eller** ```array[i]``` gör att vi precis "går ut" (```k == mellan 0 och -99```) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Subtrahera k med ```array[i]```*<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Räkna upp transaktioner med 1* <br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Räkna upp** ```i``` <br><br>
**Logga ut** antalet transaktioner.

#### STOP
