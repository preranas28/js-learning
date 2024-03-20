let arrayNumbers = [ 2,4,1,7,9,8];
console.log(arrayNumbers);

console.log(`--------Total length of elements--------`);
console.log(`${arrayNumbers.length}`);


console.log(`--------Accessing array elements--------`);
const element0 = arrayNumbers[0];
console.log(`0th element is : ${element0}`);
console.log(`3rd index elements from array: ${arrayNumbers[3]}`);


console.log(`--------Accessing array last elements--------`);
console.log(`Accessing last element using length property`);
const len = arrayNumbers.length;
console.log(arrayNumbers[len - 1]);


console.log(`------Update Elements--------`);
arrayNumbers[2] = 200;
console.log(arrayNumbers);



console.log(`----------includes()----------`);
console.log(arrayNumbers.includes(7));
console.log(arrayNumbers.includes(100));


console.log(`--------indexOf()---------`);
console.log(arrayNumbers.indexOf(7));
console.log(arrayNumbers.indexOf(700));


console.log(`----------Traversing an array----------`);
const arrayNums = [2,4,1,7,9,8];
for (let index = 0; index < arrayNums.length-1; index++) {
    const element = arrayNums[index]; 
    console.log(element);
}


console.log(`----------Traversing an array in reverse----------`);
let word ="";
for (let index = arrayNums.length-1; index>=0 ; index--) {
    const element = arrayNums[index];
    word = word + ',' + element;
    console.log(element);
}
console.log(word);







