
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString()
let getItemPrice = require('./price_calculation');
var data = {}

const customer = getCustomerName(input.split("\n")[0].split(" "));

let finalList = [];

let inputList = input.split("\n")[1].split(", ");

//Parse the text file to get products.

inputList.forEach(item => {

  let a = splitValue(item, item.lastIndexOf(" "))
  let b = a.split(",")

  let produce = {}
  produce.name = b[0];
  produce.quantity = b[1];
  finalList.push(produce);
});



let sum = 0;
let discountAmount = 0;
 data.items = []
// Fetch price of products

finalList.forEach(item => {
 

  let itemDetail = getItemPrice(item);
  sum = sum + itemDetail[1];
  discountAmount = discountAmount + itemDetail[0];
  item.amount = itemDetail[0];

  data.items.push(item)


});


// Get the customer name
function getCustomerName(line) {
  buys_index = line.indexOf("buys");
  let name = "";
  for (i = 1; i < buys_index; i++) name = name + " " + line[i];
  return name.trim();
}

function splitValue(value, index) {
   return value.substring(0, index) + "," + value.substring(index);
}



data.Customer = customer ;
data.discountAmount = discountAmount;
data.savings = sum - discountAmount ;
data.sum = sum ;

console.log('invoice data ', data)
loadTable(data);

function loadTable(data){
   let calculated_total = 0;

   window.document.getElementById('Customer').innerHTML = data.Customer
   window.document.getElementById('discount').innerHTML = data.final_discount
   window.document.getElementById('total').innerHTML = data.total
   insert_Row()
   
   function insert_Row(){
   for (var i = 0; i < data.items.length; i++) {
   var x=document.getElementById('pricing').insertRow(i+1);
   var a = x.insertCell(0);
   var b = x.insertCell(1);
   var c = x.insertCell(2);
   calculated_total = calculated_total + data.items[i].amount;
   a.innerHTML=data.items[i].name;
   b.innerHTML=data.items[i].quantity;
   c.innerHTML=data.items[i].amount;
   }
   }
   document.getElementById('calculated_total').innerHTML = calculated_total;
   }
   





module.exports = loadTable




