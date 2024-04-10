
let person = {
    name: "Prerana",
    city: "Pune",
    experience: 10,
    pin: 431202
}
// Object destructuring
// const name = person.name;
// let city = person.city;
// let myPin = person.pin;

// INSTEAD OF WRITING ABOVE LINES WRITE BELOW ONE
//Object destructing with default value.
let {name, city, pin, isMarried= true} =person;
 console.log(`name: ${name}, city: ${city}, pin: ${pin} isMarried: ${isMarried}`);

// Array destructuring - Extract the values from object

const array = ["Jenny", "Bill", "Stew"];
// let element0 = array[0];
// let element1 = array[1];
// let element2 = array[2];

// while using array destructuring we have to use square brackets.
let [element0, element1, element2, element4= "Elon"]=array;
console.log(`element0: ${element0}, element1: ${element1}, element2: ${element2} element4: ${element4}`);
