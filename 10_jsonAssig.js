const personJSON = `
{
"name": "Aleix Melon",
"id": "E00245",
"role": ["Dev", "DBA"],
"age": 23,
"doj": "11-12-2019",
"married": false,
"address": {
"street": "32, Laham St.",
"city": "Innsbruck",
"country": "Austria"
},
"referred-by": "E0012"
}`;




const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);

// personJSON.role[personJSON.role.length- 1];

console.log(personObject.role[0]);
console.log(personObject.name.split(" ")[1]);
console.log(personObject.doj.split("-")[2]);


