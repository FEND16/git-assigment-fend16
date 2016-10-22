var summaTotal = prompt("How much do you wanna travel for?"); //Sätter ett värde på summaTotal
var temporarySum = summaTotal; //Sätter summaTotal som ett temporärt värde

var count500 = 0; //variabler som lagrar antar transaktioner
var count200 = 0;
var count100 = 0;
var countRest = 0;
            
    if (summaTotal > 10000){
        if(!alert("Maximun travel charge is 10000, please try again")){window.location.reload();} //Startar om Prompt om nummret e ogiltigt
            }

            while(temporarySum != 0) //Loopar denna tills det blir 0 i tempSum
            {
                if(temporarySum-500 >= 0)  //tittar om summan är över 500 och tar då bort 500 och lagrar 1 i count500
                {
                    temporarySum -= 500;
                    count500++;
                }
                else if(temporarySum - 200 >= 0) //tittar om summan är över 200 och tar då bort 200 och lagrar 1 i count200
                {
                    temporarySum -= 200;
                    count200++;
                }
                else if(temporarySum - 100 >= 0) //tittar om summan är över 100 och tar då bort 100 och lagrar 1 i count100
                {
                    temporarySum -= 100;
                    count100++;
                }
                else
                {
                    countRest = temporarySum;
                    temporarySum = 0;
                }
            }
   
    if(countRest > 0) //Omvandlar 100 uppot vid ojämt nummer
        {
            count100++;
        }
        
document.write(summaTotal + " split into: </br>");
document.write(count500 + " 500 bill(s) </br>");
document.write(count200 + " 200 bill(s) </br>");
document.write(count100 + " 100 bill(s) </br>");
//document.write(countRest + " left over </br>");
//document.write(summaTotal);