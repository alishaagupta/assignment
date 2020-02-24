let product_price_list = {
    "Apple" : {"Price" : 50, "Discount": [3,1], "Criteria": "Kg", "Subcategory" : "Fruits", "Category" :"Produce"},
    "Orange" : {"Price" : 80, "Discount": 20, "Criteria": "Kg", "Subcategory" : "Fruits", "Category" :"Produce"},
    "Potato" : {"Price" : 30, "Discount": [5,2], "Criteria": "Kg", "Subcategory" : "Veg", "Category" :"Produce"},
    "Tomato" : {"Price" : 70, "Discount": 10, "Criteria": "Kg", "Subcategory" : "Veg", "Category" :"Produce"},
    "Cow Milk" : {"Price" : 50, "Discount": [3,1], "Criteria": "lt", "Subcategory" : "Milk", "Category" :"Dairy"},
    "Soy Milk" : {"Price" : 40, "Discount": 10, "Criteria": "lt", "Subcategory" : "Milk", "Category" :"Dairy"},
    "Cheddar" : {"Price" : 50, "Discount": [2,1], "Criteria": "Kg", "Subcategory" : "Cheese", "Category" :"Dairy"},
    "Gouda" : {"Price" : 80, "Discount": 10, "Criteria": "Kg", "Subcategory" : "Cheese", "Category" :"Dairy"}
}

let subcategory_list = {
    "Fruits" : {"Discount": 18},
    "Veg": {"Discount": 5},
    "Milk": {"Discount": 20},
    "Cheese": {"Discount": 20}
}

let category_list= {
    "Produce" : {"Discount": 10},
    "Dairy": {"Discount": 15}
}

module.exports = {
    product_price_list: product_price_list,
    subcategory_list: subcategory_list,
    category_list: category_list
}
// module.exports= subcategory_list;
// module.exports= category_list