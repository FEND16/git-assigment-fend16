//Resekostnad:
var resansKostnad= prompt("Hur mycket kostar din resa?");
//Funktionen startar
function resa (){
	var x = 500;
	var y = 200;
	var z = 100;
  
  //Kontrolerar att vi inte försöker köpa en resa för mer än 10k
  if (resansKostnad > 10000)
  {
    console.log ("Den resan är för dyr för detta kort");
  }
  //Kontrollerar om resan går att dela jämnt med 500
  else if (resansKostnad%x===0 )
  {
   // Delar resans kostnad med 500 och skriver sedan ut hur många gånger du måste föra in 500 kr
   var fem= resansKostnad/x;
   console.log ("För in 500 kronor "+fem+" gånger tack" );
 }
 // Utifall att resan EJ går att dela med 500
 else if (resansKostnad%x!==0)
 {
   // Beräknar resten för att kunna tilldela rätt värden senare
   var rest = resansKostnad%x;
   //Om resten är större än 400 men mindre än 500 tilldelas resten 500
   if(rest<x && rest>y*2)
    {rest=500;}
  //Kontrollerar om resten är mindre än 100 och tilldelar isåfall resten värdet 100
  if (rest <= z)
  { rest=100; }
  // Kontrollerar om resten är större än 100 och om den mindre än 200, iståfall tilldelas den 200 
  else if (rest>=y){
   if (rest>z&&rest<y)
    {rest = 200;}
}
// Rest 3 tillser att avrundningen blir korrekt
var rest3 = resansKostnad%x;
var rest2 = rest%y;
if(rest3<x && rest3>y*2)
  {rest3=950;}
if (rest3<y*2 && rest3>z*3)
  {rest3=450;}
if(rest3<y && rest3>z)
  {rest3=150;}
var fem = Math.floor(resansKostnad/x);
var två = Math.floor(rest/y);
var ett = Math.ceil(rest2/z);

if (rest3 === 950){
 fem++;
 två-=2;
 ett--;
}
if (rest3 === 450){
 två++;
 ett-=2;
}
if(rest3 === 150){
 två++;
 ett-=2;

}
console.log ("För in 500 kronor "+fem+" gånger och 200 kronor "+ två+" gånger och 100 kronor "+ett + " gånger tack");
}}

resa();
