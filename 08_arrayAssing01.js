const fruits_seasonal = ["Banana", "Orange", "Mango", "WaterMelon"];

console.log(`---------- STEP 1 ----------`);
var firstItem = fruits_seasonal[0];
var lastItem = fruits_seasonal[fruits_seasonal.length - 1];
console.log(`The first element of array is : ${firstItem}`);
console.log(`The last element of array is : ${lastItem}`);


console.log(`---------- STEP 2 ----------`);
fruits_seasonal.unshift("Papaya");
console.log(`Adding 'Papaya' before 'Banana' the array will be :${fruits_seasonal}`);


console.log(`---------- STEP 3 ----------`);
const deleteElement = fruits_seasonal.splice(3,1);
console.log(`The removed element is : ${deleteElement}`);
console.log(`After removing 'Mango' array will be : ${deleteElement}`);


console.log(`---------- STEP 4 ----------`);
fruits_seasonal.push("Pineapple");
console.log(`Inserting 'Pineapple' at the last position :`);
console.log(fruits_seasonal);


console.log(`---------- STEP 5 ----------`);
const addElement = fruits_seasonal.splice(3,0,"Dragon Fruit");
console.log(`Inserting 'Dragon Fruit' before 'Watermelon' the array will be :`);
console.log(fruits_seasonal);


console.log(`---------- STEP 6 ----------`);
const index = fruits_seasonal.indexOf("Orange");
fruits_seasonal[index] = "Kiwi";
console.log(`After replacing 'Orange' with 'Kiwi' the array will be :`);
console.log(fruits_seasonal);


console.log(`---------- STEP 7 ----------`);
console.log(fruits_seasonal);
const arr2 = fruits_seasonal.slice(1,5);
console.log(`The elements starting from index 1 to 4`);
console.log(arr2);


console.log(`---------- STEP 8 ----------`);
const array4 = fruits_seasonal.slice(fruits_seasonal.length - 3);
console.log(`Last 3 elements from the array: `);
console.log(array4);


