
var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`------ Original Array ------`);
console.log(arrayNumbers);


console.log(`----- removing last element -----`);
arrayNumbers.pop();
console.log(arrayNumbers);


var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`----- Add an element in the last -----`);
var arrayNumbers = [2, 4, 1, 7, 9, 8];
arrayNumbers.push(100);
console.log(arrayNumbers);


var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`----- Add/Insert an element in the 0th index -----`);
arrayNumbers.unshift(44);
console.log(arrayNumbers);


var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`----- Remove/Delete the 0th index element -----`);
arrayNumbers.shift();
console.log(arrayNumbers);


console.log(`---------- slice()----------`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
const subArray = arrayNumbers.slice(3, 5);  //index 5 get excluded.
console.log(subArray);
const subArrayNew = arrayNumbers.slice(2);
console.log(subArrayNew);


console.log(`---------- Remove or delete, middle elements----------`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
console.log(arrayNumbers);
const deleteElements = arrayNumbers.splice(4, 1);
console.log(deleteElements);
console.log(arrayNumbers);


console.log(`---------- Insert or Add an elements in the middle of the array----------`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
console.log(arrayNumbers);const addElements = arrayNumbers.splice(3, 1, 100);

console.log(addElements);
console.log(arrayNumbers);


console.log(`------------------------------------`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
console.log(arrayNumbers);
arrayNumbers.splice(5, 0, 500, 400);
console.log(arrayNumbers);





