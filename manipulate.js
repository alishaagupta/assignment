// Take input 
let input = require('./input');
let calculatePrice = require('./price_calculation')

let input_length = input.length;
let sum = 0 ;

for(var i=0 ; i < input_length; i++){

   let current_price = calculatePrice(input[i])
   sum = sum + current_price
   console.log(input[i].item , + ' ', current_price)

}

console.log('total,', sum)