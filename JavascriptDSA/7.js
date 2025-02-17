/*** Map ***/

const products = [
    {name: "Wireless Mouse", price: 19.99, instock: true},
    {name: "Keyboard", price: 49.99, instock: false},
    {name: "Monitor", price: 129.99, instock: true},
    {name: "USB Cable", price: 5.99, instock: true}

]

// let product = products.map((element) => element.name)
// console.log(product)

// let revisedPrices = products.map(product => product.price = product.price + 10)
// console.log(revisedPrices);






/*** Filter Method: It is used to filter values from an array and return the new filtered array ***/

// const inStockOrNot = products.filter((element) => element.instock)
// console.log(inStockOrNot);







/*** Reduce Method: Reduces array to a single value***/

const priceOfProducts = products.reduce((total,product) => total + product.price, 0)       // "total" is the accumulator and "0" is the initial value of accumulator 
console.log(priceOfProducts.toFixed(2));                         // toFixed() method rounds off the value upto decimals you pass in as arguments
