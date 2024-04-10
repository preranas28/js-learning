const arrayNumbers = [20, 1, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`---------------- STEP 1 ----------------`);
const arrayNew = arrayNumbers.map((currentValue) =>{
    return currentValue+10;
});
console.log(arrayNew);

console.log(`---------------- STEP 2 ----------------`);
const arrayCube = arrayNumbers.map((currentValue) =>{
    return currentValue*currentValue*currentValue;
});
console.log(arrayCube);

console.log(`---------------- STEP 3 ----------------`);
const arrayNew1 = arrayNumbers.map((currentValue, index) =>{
    return currentValue+index;
});
console.log(arrayNew1);
