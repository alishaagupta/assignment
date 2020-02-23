/*
 * Data Initialisation
 *
 */

 let data = {
    "category" :[
    {
        "name": "Produce",
        "discount": 10,
        "discount_type": "percent",
        "subcategory": [
            {
            "name":"Fruits",
            "discount" : 18,
            "discount_type": "percent",
            "items": [
                {
                "id": 1,
                "name":  "Apple",
                "price": 50,
                "discount": 3+1,
                "discount_type": "free",
                "criteria": "weight"
                },
                {
                "id": 2,
                "name":  "Orange",
                "price": 80,
                "discount": 20,
                "discount_type": "percent",
                "criteria": "weight"
                }]
            },
            {
            "name":"Veg",
            "discount" : 5,
            "discount_type": "percent",
            "items": [
                {
                "id":3,
                "name":  "Potato",
                "price": 30,
                "discount": 5+2,
                "discount_type": "free",
                "criteria": "weight"
                },
                {
                "id":4,
                "name":  "Tomato",
                "price": 70,
                "discount": 10,
                "discount_type": "percent",
                "criteria": "weight"
                }]
            } 
        ]
    },
    {
        "name": "Dairy",
        "discount": 15,
        "discount_type": "percent",
        "subcategory": [
            {
            "name":"Milk",
            "discount" : 20,
            "discount_type": "percent",
            "items": [
                {
                "id":5,
                "name":  "Cow Milk",
                "price": 50,
                "discount": 3+1,
                "discount_type": "free",
                "criteria": "volume"
                },
                {
                "id":6,
                "name":  "Soy Milk",
                "price": 40,
                "discount": 10,
                "discount_type":"percent",
                "criteria": "volume"
                }
            ]
            }, 
            {
            "name":"Cheese",
            "discount" : 20,
            "discount_type": "percent",
            "items": [
                {
                "id":7,
                "name":  "Cheddar",
                "price": 50,
                "discount": 2+1,
                "discount_type":"free",
                "criteria": "weight"
                },
                {
                "id":8,
                "name": "Gouda",
                "price": 80,
                "discount": 10,
                "discount_type": "percent",
                "criteria": "weight"
                }
            ]
            }
        ]
    }
    ]

  }

  module.exports =data 