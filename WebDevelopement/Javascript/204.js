// Creating Objects 


// 1st Method 
let obj = {name: "Pranav", id: 102, location: "Mumbai"}
console.log(obj);


// 2nd Method 

let newObject = new Object()
newObject.name = "Malhar";
newObject.schoolName = "Padua";
newObject.id = 102;

console.log(newObject);

// 3rd method 

function ObjectCreation(i, n ,s){
    this.name = n;
    this.id = i;
    this.salary = s;
}

const Object22 = new ObjectCreation(102, "Nishant", 122000)
console.log(Object22);


// Accessing the Object 

console.log(Object22.name)
console.log(Object22["id"]);

// Modifying 
Object22.salary = 0
console.log(Object22);

// Creating a new Key: Value pair
Object22.newMobile = "IQOO"
console.log(Object22);

// Delete

delete Object22.newMobile
console.log(Object22);


