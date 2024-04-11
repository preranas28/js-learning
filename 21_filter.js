
let array = [2, 4, 1, 7, 8, 9];
const newArray = array.filter((element) => {
    return element%2 == 0;
});
console.log(newArray);


let arrayMultipleOf3 = [21, 42, 1, 7, 8, 9];
const newArray1 = arrayMultipleOf3.filter((element) => {
    return element%3 == 0;
});
console.log(newArray1);

console.log(`------------------------------------------`);

class Person {
    constructor(name, city, age){          
         this.name = name;
         this.city = city;
         this.age = age;
    }
    details(){
        console.log(`Personal Details-->Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}
const jenny = new Person("Jenny", "Pune", 22);
const bill = new Person("Bill", "Mumbai", 24);
const elon = new Person("Elon", "LA", 38);
const stew = new Person("Stew", "Pune", 58);

const arrayPerson = [jenny, bill, elon, stew];


console.log(`----- Find out all the person from the city mumbai -----`);

const newArray2 = arrayPerson.filter((currentValue)=>{
    return currentValue.city == "Mumbai";
});
newArray2.forEach(element => {
    element.details();
});


console.log(`----- Find out all the person whose age is greater than 35-----`);

console.log(`----- Chaining of operations -----`);
const newArrayAge = arrayPerson.filter((personObj) =>{
    return personObj.age>35;
}).map((element)=>{
    return element.name;
}).forEach((element)=>{
    console.log(element);
});







