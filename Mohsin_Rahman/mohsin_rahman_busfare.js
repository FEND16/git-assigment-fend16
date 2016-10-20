

function travelCard(){
  var bussPass = parseInt(prompt("Enter type of buss pass"));
console.log(" <strong>Card Type: </strong>" + bussPass + "<br>");

if(bussPass<10000)
{
 var money =  parseInt(prompt("Enter Money"));
 console.log("<strong>Money:</strong> " + money);

  var count =1;
   console.log(" <strong>Transactions: </strong>" + count);
  if(money < bussPass)
    
    {
      doMore();
       function  doMore(){

      do{
       var moneyAgain =  parseInt(prompt("Enter Money Again"));
      
      money = money + moneyAgain;


      console.log( "<br>" );

      console.log("<strong>Money: </strong>" + money);
      
          count++;
      console.log(" <strong>Transactions: </strong>" + count);
      } 
      while(money < bussPass)
    
      }
      }
  else{
    
    console.log("<strong>Already Filled</strong>" + "<br>");
  }

  }

  else
  {
    
    console.log(" <strong>You can not fill more than 10,000 </strong>" + "<br>");
  }
      
}

travelCard();