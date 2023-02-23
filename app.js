const sum = (a, b) => {
    return a + b
}

console.log(sum(7,3)); 

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    let valueInYens = valueInEuro * 127.9; 
    return valueInYens;
}

const fromYenToPound = function(valueInYens){
    let valueInEuro = valueInYens / 127.9; 
    let valueInPounds = valueInEuro * 0.8;  
    return valueInPounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
