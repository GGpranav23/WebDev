const products = [
    {name: "Wireless Mouse", price: 19.99, instock: true},
    {name: "Keyboard", price: 49.99, instock: false},
    {name: "Monitor", price: 129.99, instock: true},
    {name: "USB Cable", price: 5.99, instock: true}

]



/***Normal "for" loop ***/ 

// for(let i = 0; i < products.length; i++){
//     console.log(products[i].name)
// }



/*** for.....of Loop ***/ 

// for(const product of products){
//     console.log(product.name)
// }



/*** forEach (Specifically only for an array) ***/

// products.forEach((element) => console.log(element.name));




/*** map: returns an array ***/

// let newProducts = products.map((product) => product.name);
// console.log(newProducts);