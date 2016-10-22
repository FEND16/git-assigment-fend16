/* Frågar användaren hur mycket den vill fylla på kortet och ger ett värde till variablen k*/

var k = prompt("Hur mycket vill du ladda kortet med mannen? Max 10 lax och du kan endast fylla på med hunching, två hundra eler röding.");


/* Uträknar hur många transaktioner */
var trans = 0;
/* Uträknar totala summan påfyllat */
var total = 0;
/* Används för att kolla ifall k nått 0 än */
var noll = 0;

/* När k är större än total */
while (total < k) {
  /* Ska den ifall det värdet är större än 500 addera 500 till totala summan och dra den summan från k och lägger till en transaktion */
  if (total + 500 <= k) {

    total = total + 500;
    k = k - 500;
    trans++;
  }
  /* Samma fast med 200 */
  else if (total + 200 <= k || k === 150) {

    total = total + 200;
    k = k - 200;
    trans++;
  }
  /* Samma fast med hundra */
  else if (total + 100 <= k || k === 50) {

    total = total + 100;
    k = k - 100;
    trans++;
  }


};

/* Printar ut till consolen hur mycket som finns kvar i k, detta var för att underlätta saker för mig under kodningen */
console.log(k);

/* Ifall k inte nått 0 än så körs denna tills k når noll och gör i princip samma som den ovanstående loopen. */
while (k > noll) {

  if (k > 499 || k > 549) {

    total = total + 500;
    k = k - 500;
    trans++;
  } else if (k > 199 || k > 149) {

    total = total + 200;
    k = k - 200;
    trans++;
  } else if (k > 99 || k > 49) {

    total = total + 100;
    k = k - 100;
    trans++;
  }


};


/* Visar hur många transaktioner som gjorts, inte något som behövs nödvändigtvis men kan vara intressant att se */
console.log("Antal transaktioner:" + " " + trans);
/* Visar värdet på variabeln total vilket är i princip är värdet som fylls i prompten när koden körts klart från k*/
console.log("Hur mycket du fyllde på:" + " " + total);
/* Återigen bara för att underlätta för mig under kodningen */
console.log(k);

