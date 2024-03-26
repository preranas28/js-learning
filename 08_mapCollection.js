let arrayMarks = [90, 56, 45, 72, 80, 84];

let mapStudentMarks = new Map();
mapStudentMarks.set("Elon", 90);   //it is set method
mapStudentMarks.set("Stew", 56); 
mapStudentMarks.set("Jenny", 45); 
mapStudentMarks.set("Ratan", 72);
mapStudentMarks.set("Andy", 80);
mapStudentMarks.set("Larry", 84);  

mapStudentMarks.set("Ratan", 99); //Adding duplicate key
mapStudentMarks.set("Prerana", 45);    //Adding duplicate value


console.log(mapStudentMarks ); 
console.table(mapStudentMarks);

const jennyMarks = mapStudentMarks.get("Jenny");
console.log(`Jenny Marks: ${jennyMarks}`);


const isAvailable = mapStudentMarks.has("Larry"); 
console.log(`is key "Larry" available: ${isAvailable}`);

 
console.log(`Is key "Sundar" Available: ${mapStudentMarks.has("Sundar")}`);


const totalElements = mapStudentMarks.size;
console.log(`Size of Map or Total elements in the map is : ${totalElements}`);


mapStudentMarks.delete("Andy");
console.table(mapStudentMarks);
 

console.log(mapStudentMarks.keys());
console.log(mapStudentMarks.values());

console.log(`---------- Keys() and values() method --------------------`);

const keys = mapStudentMarks.keys();
for (const iterator of keys) {
    console.log(iterator);
}

const values = mapStudentMarks.values();
for (const iterator of values ) {
    console.log(iterator);
}


console.log(`---------- Traversing Map ----------`);

const keysMap = mapStudentMarks.keys();
for (const key of keysMap) {
    const value = mapStudentMarks.get(key);
    console.log(`Student name :${key} and marks :${value}`);
}



