let data = require('./dataset');


// Get Original and discounted price in case of Buy X Get Y
function getPriceBogo(item){

    let item_data = data.productPriceList[item.name];

    let width = item_data.Discount[0] + item_data.Discount[1];

    let factor = Math.floor(parseInt(item.quantity) / width) ;

    let remainder = parseInt(item.quantity)% width

    totalPrice = factor* item_data.Price * item_data.Discount[0] + remainder* item_data.Price

    let priceArr = getPriceArray(totalPrice, item.quantity, item_data.Price)


    return priceArr ;
    
}

function getPriceDiscount(item){

    let itemData = data.productPriceList[item.name];
    let totalPrice = itemData.Price ;

    let discount = checkItemDiscount(item) ;

    totalPrice = itemData.Price - (discount/100)* itemData.Price

    totalPrice= totalPrice* parseInt(item.quantity)

    let priceArr = getPriceArray(totalPrice, item.quantity, itemData.Price)

    return priceArr ;
}

function getPriceArray(totalPrice, quantity, itemPrice){

    return [totalPrice, parseInt(quantity) * itemPrice]
}

function checkItemDiscount(item){
    
    let itemData = data.productPriceList[item.name];
    let discount = itemData.Discount;

    if(data.subcategoryList[itemData.Subcategory].Discount > itemData.Discount){
        discount= data.subcategoryList[itemData.Subcategory].Discount
    }
    if(data.categoryList[itemData.Category].Discount > discount){
        discount= data.categoryList[itemData.Category].Discount
    }

    return discount;
}
function getItemPrice(item){

    if((data.productPriceList[item.name] == undefined)){
        return [0,0];
    }else{
        if(data.productPriceList[item.name]['Discount_type'] === 'bogo'){

            return getPriceBogo(item);
        }else{

            return getPriceDiscount(item);
        }
    }
}

module.exports = getItemPrice