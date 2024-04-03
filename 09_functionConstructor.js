// Function Constructor -- >It is less used . 

function Person(name, city, age){
    this.name = name;
    this.city = city;
    this.age = age;
}

//prototype is blueprint of object
Person.prototype.country = "Bharat";


const jenny = new Person("Jenny", "Pune", 23);
console.log(`${jenny.name} ${jenny.city} ${jenny.age} ${jenny.country}`);

const bill = new Person("Bill", "Mumbai", 25);
console.log(`${bill.name} ${bill.city} ${bill.age} ${bill.country}`);

const elon = new Person("Elon", "Banglore", 29);
console.log(`${elon.name} ${elon.city} ${elon.age} ${elon.country}`);

const stew = new Person("Stew", "Chennai", 32);
console.log(`${stew.name} ${stew.city} ${stew.age} ${stew.country}`);

//instanceOF
const result = bill instanceof Person;
console.log(result);


const array = [2, 4, 6, 8];
array.push(7);
console.log(array);




