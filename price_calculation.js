let data = require('./dataset');


function getItemPrice(req){


    let item_data = data.product_price_list[req.item];


    if(item_data == undefined) {
        return
    }

    let item_price = item_data.Price;

    let discount = item_data.Discount ;
    let total_price = item_data.Price ;

    if(!Array.isArray(discount)){

       
        if(data.subcategory_list[item_data.Subcategory].Discount > item_data.Discount){
            discount= data.subcategory_list[item_data.Subcategory].Discount
        }

        if(data.category_list[item_data.Category].Discount > discount){
            discount= data.category_list[item_data.Category].Discount
        }

        total_price = item_data.Price - (discount/100)* item_data.Price

        total_price= total_price* req.quantity

        return total_price ;
       

    }else{
     
   

        let width = item_data.Discount[0] + item_data.Discount[1];


        let factor = Math.floor(req.quantity / width) ;


        let remainder = req.quantity% width

        total_price = factor* item_data.Price * item_data.Discount[0] + remainder* item_data.Price


        return total_price;
    }


}


module.exports = getItemPrice