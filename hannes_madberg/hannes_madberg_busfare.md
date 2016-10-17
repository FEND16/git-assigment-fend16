# Pseudocode for busfare

Går bara att göra transaktioner med

500

200

100

Max värde på PENGAR = 10000

## START

1. skapa funktion BUSFARE
2. deklarera variabeln PENGAR i funktionen som promptar användaren att skriva in hur mycket pengar den vill åka för
3. runda upp PENGAR till närmaste 100-tal.
4. deklarera variabeln TRANSAKTIONER och sätt värdet till 0, detta blir räknaren.
5. loopa så länga PENGAR > 0
  5. om PENGAR > 10000, skriv ut att det är för mycket pengar
  5. annars om pengar >= 500
    5. pengar -= 500
    5. öka TRANSAKTIONER++
  5. annars om pengar >= 200
	5. pengar -= 200
	5. öka TRANSAKTIONER++
  5. annars om pengar >= 100
	5. pengar -= 100
	5. öka TRANSAKTIONER++
  5. returnera i en alert "antal transaktioner: " och lägg till TRANSAKTIONER.

## SLUT