const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`----------Even Index Elements ----------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
}

console.log(`-----Sum an array elements-----`); 
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   const element = arrayNumbers[index];
   sum = sum + element;
}
console.log(`Sum of an array is : ${sum}`);


console.log(`-----Multiplication an array elements-----`); 
let mul = 1;
for (let index = 0; index < arrayNumbers.length; index++) {
   const element = arrayNumbers[index];
   mul = mul * element;
}
console.log(`Multiplication of an array is : ${mul}`);


console.log(`----------Odd Index Elements ----------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 1) {
        const element = arrayNumbers[index];
        console.log(element);
    }
}


console.log(`-----Multiplication of an odd array elements-----`); 
let mulOdd = 1;
for (let index = 0; index < arrayNumbers.length; index++) {
   const element = arrayNumbers[index];
   if (index % 2 == 1) {
    mulOdd = mulOdd * element;
   }
  
}
console.log(`Multiplication of an array is : ${mulOdd}`);







