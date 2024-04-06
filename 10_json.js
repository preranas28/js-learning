//JSON.parse()
//JSON.stringify() : Convert an object to JSON

let person = {
    name: 'John',
    city: "Pune",
    experience: 10,
    isMarried : true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        street : "Wakad",
        city : "Pune" 
    }
}
//JSON is global object.

console.log(`Type of person is: ${typeof person}`);
const result = JSON.stringify(person);
console.log(`Type of after conversion is : ${typeof result}`);
console.log(result);


const personJSON = `
{
    "name": "John",
    "city": "Pune",
    "experience": 10,
    "isMarried": true,
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "address": {
      "street": "Wakad",
      "city": "Pune"
    }
  }`;
console.log(`-----------------Convert JSON to Object------------------------`);
const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);




 