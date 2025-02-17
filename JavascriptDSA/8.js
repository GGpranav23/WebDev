/*** Sorting of an Array ***/

// Sorting a normal array 

let a = [3,4,5,25,85,324,222]
let sortedArray = a.sort((x,y) => x - y);
console.log(sortedArray);


// If x is smaller, keep it before y.
// If x is larger, move it after y.


// Sorting an array of Object 

const products = [
    {name: "Wireless Mouse", price: 19.99, instock: true},
    {name: "Keyboard", price: 49.99, instock: false},
    {name: "Monitor", price: 129.99, instock: true},
    {name: "USB Cable", price: 5.99, instock: true}

]

let sortedProducts = products.sort((a,b) => a.price - b.price)
console.log(sortedProducts);



/*** Destructuring ***/

const [{name: FirstProductName, price: FirstProductPrice, instock: FirstProductinStock}] = products
console.log(FirstProductName);


const product = {name: "Keyboard", price: 49.99, instock: false};
const {name, price, instock} = product
console.log(name, price, instock);


/*** Flattening Array: Reduces the dimension of an array***/

let nestedArray = [
    [
        [
            [
                [
                    [
                        [
                            [1, 2], [3, 4]
                        ],
                        [
                            [5, 6], [7, 8]
                        ]
                    ],
                    [
                        [
                            [9, 10], [11, 12]
                        ],
                        [
                            [13, 14], [15, 16]
                        ]
                    ]
                ],
                [
                    [
                        [
                            [17, 18], [19, 20]
                        ],
                        [
                            [21, 22], [23, 24]
                        ]
                    ],
                    [
                        [
                            [25, 26], [27, 28]
                        ],
                        [
                            [29, 30], [31, 32]
                        ]
                    ]
                ]
            ]
        ]
    ]
];

let SingleDimensionArray = nestedArray.flat(Infinity);      // Reduces the nested array to a single dimension array
console.log(SingleDimensionArray);

let twoDimensionArray = nestedArray.flat(2);                // Reduces the nested array to a two dimension array
console.log(twoDimensionArray);
