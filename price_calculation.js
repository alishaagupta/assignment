let data = require('./dataset');


// Get Original and discounted price in case of Buy X Get Y
function getPriceBogo(item){

    let item_data = data.product_price_list[item.name];

    let width = item_data.Discount[0] + item_data.Discount[1];

    let factor = Math.floor(parseInt(item.quantity) / width) ;

    let remainder = parseInt(item.quantity)% width

    totalPrice = factor* item_data.Price * item_data.Discount[0] + remainder* item_data.Price

    let priceArr = getPriceArray(totalPrice, item.quantity, item_data.Price)


    return priceArr ;
    
}

function getPriceDiscount(item){

    let item_data = data.product_price_list[item.name];
    let totalPrice = item_data.Price ;

    let discount = checkItemDiscount(item) ;

    totalPrice = item_data.Price - (discount/100)* item_data.Price

    totalPrice= totalPrice* parseInt(item.quantity)

    let priceArr = getPriceArray(totalPrice, item.quantity, item_data.Price)

    return priceArr ;
}

function getPriceArray(totalPrice, quantity, itemPrice){

    return [totalPrice, parseInt(quantity) * itemPrice]
}

function checkItemDiscount(item){
    
    let item_data = data.product_price_list[item.name];
    let discount = item_data.Discount;

    if(data.subcategory_list[item_data.Subcategory].Discount > item_data.Discount){
        discount= data.subcategory_list[item_data.Subcategory].Discount
    }
    if(data.category_list[item_data.Category].Discount > discount){
        discount= data.category_list[item_data.Category].Discount
    }

    return discount;
}
function getItemPrice(item){

    if((data.product_price_list[item.name] == undefined)){
        return [0,0];
    }else{
        if(data.product_price_list[item.name]['Discount_type'] === 'bogo'){

            return getPriceBogo(item);
        }else{

            return getPriceDiscount(item);
        }
    }
}

module.exports = getItemPrice