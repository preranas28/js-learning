const person = {
    name: "Prerana",
    city: "Pune",
    experience : 10
}

// Cloning an object using spread operator
const personClone = {...person}
console.log(person);

personClone.name = "Elon";   //deep clone 
console.log(personClone);

 // Cloning an object using Object.assign()
 console.log(`--Cloning an object using Object.assign()--`);
 const cloneObject = Object.assign({}, person);
console.log(cloneObject);


// Merging an object
const personGK = {
    name: "Prerana S",
    city: "Pune",
    experience : 10
}

console.log(`---Merging an object----`);
const address = {
    flatNumber : 1005,
    wing : "B2 Block",
    street: "Wakad"
}

const mergeObject = Object.assign({}, personGK, address); 
console.log(`----mergedObject-----`);
console.table(mergeObject);
console.log(`------ personGK------`);
console.table(personGK);
