# Obligatorisk inlämningsuppgift - GIT

Denna uppgift består av två steg och ska lösas individuellt. 

**Steg 1** består av lösa ett problem med hjälp av pseudokod **och** skriva en lösning i JavaScriptkod. Detta för att visa att du kan använda dig utav problemlösningsmetoder som vi har gått igenom under kursens gång sedan applicera lösningen för att få fungerande kod. 

**Steg 2** består utav att du ska ladda upp din lösning på GitHub via git för att visa att du kan använda dig utav git samt GitHub.

## Steg 1: Problemlösning

Du ska lösa nedanstående problem genom att först skriva lösningen i pseudokod i ett **MarkDown-dokument** (`.md`) så att det ska kunna läsa enkelt på github. [Använd här gärna tydlig markup som ni fick träna er på i en tidigare uppgift](https://github.com/FEND16/programmeringsmetodik/blob/master/exercises/10_git_commands.md#använda-markdown). Du ska även utföra lösningen i JavaScript så att du får körbar kod som du sparar i en `js`-fil. Om du gör lösningen med hjälp av en flowchart så skickar du med din flowchart i form av en `.png`-fil. Instruktioner om hur du skickar in din lösning finns i steg 2.

### Problem 

Du ska köpa ett busskort. Det är ett kort som du laddar med pengar, därefter kan du åka på kortet tills pengarna tagit slut. Du vet att du ska åka för K kronor, där K ≤ 10000. Att ladda kortet tar sin tid eftersom du endast kan ladda kortet med 500, 200 eller 100 kr i taget. Du har för tillfället bråttom och vill därför utföra så några transaktioner som möjligt, men inte tanka på mer pengar än nödvändigt.

Om du ska åka för 800 kronor ska du alltså först ladda med 500, sen med 200, därefter med 100 kr. Om du däremot ska åka för 850 kronor ska du först ladda med 500 och därefter ladda med 200 två gånger. Visserligen går 50 kronor till spillo, men det är ändå det bästa alternativet.

Skriv en funktion som beräknar det minsta antalet transaktioner du behöver göra för att åka buss med de pengar du har:
```bash
Körningsexempel 1: 

Åka för? 850 

Antal transaktioner: 3

Körningsexempel 2: 

Åka för? 1800 

Antal transaktioner: 5
```

**Din JavaScript-kod som du skickar med ska vara kommenterad där du förklarar kortfattat vad din lösning gör.**

## Steg 2: Git & GitHub

Du ska även visa att du kan använda dig utav git samt GitHub. När du är färdig med att lösa problemet ovan ska du sedan ladda upp lösningen på _GitHub_ enligt instruktionerna nedan.

* Du ska ladda upp din lösning genom att __forka__ detta repository och klona ner ditt forkade repository till din dator så att du jobbar lokalt med dina filer. 
* Din lösning ska ligga i en **ny mapp** som heter **firstname_lastname** där du byter ut **firstname** till ditt förnamn och **lastname** till ditt efternamn.

* I denna mapp ska det finnas två filer som följer samma mönster:
    * `firstname_lastname_busfare.js`
    * `firstname_lastname_busfare.md`
    * (`firstname_lastname_busfare.png`)

* `.js`-filen ska innehålla din färdiga kod och `.md`-filen ska innehålla din pseudokod samt om du har gjort en flowchart ska den vara i form av en `.png`.

* Du ska sedan pusha upp dina ändringar till ditt forkade repository och göra en *Pull Request* till detta original-repository.

* Luta dig nu tillbaka och vänta på att jag ska acceptera din pull request och att du då är färdiga med uppgiften.

