// Input Dataset

let productPriceList = {
    "Apple" : {"Price" : 50, "Discount": [3,1], "Discount_type" :"bogo", "Criteria": "Kg", "Subcategory" : "Fruits", "Category" :"Produce"},
    "Orange" : {"Price" : 80, "Discount": 20,"Discount_type" : "flat", "Criteria": "Kg", "Subcategory" : "Fruits", "Category" :"Produce"},
    "Potato" : {"Price" : 30, "Discount": [5,2],"Discount_type" :"bogo", "Criteria": "Kg", "Subcategory" : "Veg", "Category" :"Produce"},
    "Tomato" : {"Price" : 70, "Discount": 10,"Discount_type" : "flat", "Criteria": "Kg", "Subcategory" : "Veg", "Category" :"Produce"},
    "Cow Milk" : {"Price" : 50, "Discount": [3,1],"Discount_type" :"bogo", "Criteria": "lt", "Subcategory" : "Milk", "Category" :"Dairy"},
    "Soy Milk" : {"Price" : 40, "Discount": 10,"Discount_type" :"flat", "Criteria": "lt", "Subcategory" : "Milk", "Category" :"Dairy"},
    "Cheddar" : {"Price" : 50, "Discount": [2,1], "Discount_type" :"bogo","Criteria": "Kg", "Subcategory" : "Cheese", "Category" :"Dairy"},
    "Gouda" : {"Price" : 80, "Discount": 10,"Discount_type" :"flat", "Criteria": "Kg", "Subcategory" : "Cheese", "Category" :"Dairy"}
}

let subcategoryList = {
    "Fruits" : {"Discount": 18},
    "Veg": {"Discount": 5},
    "Milk": {"Discount": 20},
    "Cheese": {"Discount": 20}
}

let categoryList= {
    "Produce" : {"Discount": 10},
    "Dairy": {"Discount": 15}
}

module.exports = {
    productPriceList: productPriceList,
    subcategoryList: subcategoryList,
    categoryList: categoryList
}
