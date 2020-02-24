
// Take input
let input = require("./input");
let getItemPrice = require('./price_calculation');

const customer = getCustomerName(input.split("\n")[0].split(" "));
let finalList = [];

let inputList = input.split("\n")[1].split(", ");

inputList.forEach(item => {


  let a = splitValue(item, item.lastIndexOf(" "))
  let b = a.split(",")

  let produce = {}
  produce.name = b[0];
  produce.quantity = b[1];
  finalList.push(produce);
});

let sum = 0;
let finalDiscount = 0;
finalList.forEach(item => {
 

  let itemDetail = getItemPrice(item);
  sum = sum + itemDetail[0];
  finalDiscount = finalDiscount + itemDetail[1];
  item.amount = itemDetail[0]
  console.log('itemm ', item)
});

function getCustomerName(line) {
  buys_index = line.indexOf("buys");
  let name = "";
  for (i = 1; i < buys_index; i++) name = name + " " + line[i];
  return name.trim();
}

function splitValue(value, index) {
   return value.substring(0, index) + "," + value.substring(index);
}


console.log("Customer:", customer);

console.log("total,", sum);
console.log('final discount ', finalDiscount)