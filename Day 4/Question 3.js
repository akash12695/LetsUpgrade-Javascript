//Imagine you are going out to do some grocery shopping.So you have an array called shoppingList with all the products you want to buy.Now that you are inside of the shop, you have a basket with all the products from your list, but you want toadd a few more.Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add somenew products into it.

let shoppingList = ["Chips", "Soap", "Drinks"]

let shoppingBasket = [...shoppingList, "kitchen products", "Cloths", "Dairy products"]
console.log(shoppingBasket)