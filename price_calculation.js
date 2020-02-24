let data = require('./dataset');


function getPriceBogo(item){

    let item_data = data.product_price_list[item.name];

    let width = item_data.Discount[0] + item_data.Discount[1];

    let factor = Math.floor(parseInt(item.quantity) / width) ;

    let remainder = parseInt(item.quantity)% width

    total_price = factor* item_data.Price * item_data.Discount[0] + remainder* item_data.Price

    let price_arr = []
    price_arr[0] = total_price ;
    price_arr[1] = parseInt(item.quantity)* item_data.Price;

    return price_arr ;
    
}

function getPriceDiscount(item){

    let item_data = data.product_price_list[item.name];

    let discount = item_data.Discount ;
    let total_price = item_data.Price ;

    if(data.subcategory_list[item_data.Subcategory].Discount > item_data.Discount){
        discount= data.subcategory_list[item_data.Subcategory].Discount
    }

    if(data.category_list[item_data.Category].Discount > discount){
        discount= data.category_list[item_data.Category].Discount
    }

    total_price = item_data.Price - (discount/100)* item_data.Price

    total_price= total_price* parseInt(item.quantity)

  
    let price_arr = []
    price_arr[0] = total_price ;
    price_arr[1] = parseInt(item.quantity)* item_data.Price;

    return price_arr ;
}


function getItemPrice(item){

    if((item in data.product_price_list)){
        return 0
    }else{
        if(data.product_price_list[item.name]['Discount_type'] === 'bogo'){

            return getPriceBogo(item);
        }else{

            return getPriceDiscount(item);
        }
    }
}

module.exports = getItemPrice