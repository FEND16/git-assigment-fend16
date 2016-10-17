function busfare(k){
    var addMoney = k;
    var transactions = 0;
    
    while(addMoney > 0){
        if(addMoney >= 500){
            addMoney -= 500;
            transactions++;
        }
        else if(addMoney >= 200){
            addMoney -= 200;
            transactions++;
        }
        else {
            addMoney -= 100;
            transactions++;
        }
    }
    
    return console.log("Åka för? " + k + ". Antal transaktioner: " + transactions);
}

busfare(1800);
