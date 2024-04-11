// Array of string : it works properly : It sorted alphabetically.

const arrayFrds = ["Stew", "Elon", "Jenny", "Bill"];
console.log(arrayFrds);
console.log(`Sorting Friends name in ascending order:`);
arrayFrds.sort();
console.log(arrayFrds);
console.log(`Sorting Friends name in descending order:`);
arrayFrds.reverse();
console.log(arrayFrds);

console.log(`--------------------------------------------`);

let array = [2, 40, 19, 79, 8, 9];
console.log(array);
console.log(`Custom sorting on array numbers:`);
array.sort((n1, n2) =>{
    return n1>n2 ? 1 : -1;
});
console.log(array);


let arrayNew = [2, 40, 19, 79, 8, 9];
console.log(`Custom sorting on array numbers in descending order:`);
arrayNew.sort((n1, n2) =>{
    return n1>n2 ? -1 : 1;
});
console.log(arrayNew);

// array.reverse();
// console.log(array);




