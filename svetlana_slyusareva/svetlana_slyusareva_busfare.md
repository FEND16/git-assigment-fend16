# Pseudokod för BusFare

Man kan bara ladda kortet med
1. 500 kr
2. 200 kr
3. 100 kr

Max värde 10 000 kr

**START**

1. Deklarera variabeln _**count**_ som räknar antalet transaktioner och sätt värdet till 0
2. Deklarera variabeln _**userInput**_ som promptar användaren arr skriva in hur mycket pengaranvändaren vill åka för
3. Avrunda värdet som användaren skrivit till närmaste heltal
4. Skapa funktioner _**calculateMinNumber**_ som beräknar det minsta antalet transaktioner
5. Loopa så länga *userInput* > 0
    * Om *userInput* > 10000 returnera console.log för att lämna loopen
    * Om *userInput* >= 500
       * Dividera *userInput* med 500 och öka *count*
       * Beräkna resten av beloppet: userInput - (parseInt(userInput / 500) * 500)
    * Om *userInput* >= 200
       * Dividera *userInput* med 200 och öka *count*
       * Beräkna resten av beloppet: userInput - (parseInt(userInput / 200) * 200)
   * Om *userInput* >= 100
       * Dividera *userInput* med 100 och öka *count*
       * Beräkna resten av beloppet: userInput - (parseInt(userInput / 100) * 100)
6. Consolloggar antal transaktioner

**SLUT**