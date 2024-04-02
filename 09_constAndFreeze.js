const person = {
    name: "Prerana",
    city: "Pune",
    experience : 10
}

// // Not allowed
// person = {
//     pin = 12345
// }

console.log(person);
person.city = "Mumbai";   //ref variable
console.log(person);


const address = {
    flatNumber : 1005,
    wing : "B2 Block",
    street: "Wakad"
}
console.log(address);
Object.freeze(address);

address.street = "Hinjewadi"; // o't be reflect the change.
console.log(address);


// in operator
const result = "street" in address ;
console.log(result);

console.log("pin" in address);

// Get the keys from an object
const keys = Object.keys(address);
console.log(keys);


// Get the values from an object
const values = Object.values(address);
console.log(values);







