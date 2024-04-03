class Person {
    name
    city
    age
    constructor(name, city, age){          //special method
         this.name = name;
         this.city = city;
         this.age = age;
    }
    details(){
        console.log(`Personal Details-->Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}


const jenny = new Person("Jenny", "Pune", 22);
jenny.details();
const bill = new Person("Bill", "Mumbai", 24);
bill.details();

const elon = new Person("Elon", "LA", 38);
elon.details();



console.log(`---------- Traversing array object -----------`);
const array = [jenny, bill, elon];
for (const element of array) {
    element.details();
}
 //instanceOF
const result = elon instanceof Person;
console.log(result);


