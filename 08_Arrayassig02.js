const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2 , 11];

console.log(`---------- STEP 1 ---------- `);
console.log(`Total elements available :`);
console.log(`${arrayNumbers.length}`);


console.log(`---------- STEP 2 ---------- `);
const totalArr = arrayNumbers[0];
console.log(`The first element of the array is:`);
console.log(totalArr);
console.log(`The last element of the array is:`);
const lastArr = arrayNumbers[arrayNumbers.length - 1];
console.log(lastArr);


console.log(`---------- STEP 3 ---------- `);
const thirdLast = arrayNumbers[arrayNumbers.length -3];
console.log(`Third Last Element of the array is:`);
console.log(thirdLast);


console.log(`---------- STEP 4 ---------- `);
console.log(`All even numbers using for of loop:`);
const evenNum = [];
for (const num of arrayNumbers) {
    if (num % 2 === 0) {
        evenNum.push(num);
    }
}
console.log(evenNum);


console.log(`---------- STEP 5 ---------- `);
console.log(`All odd numbers using for of loop:`);
const oddNum = [];
for (const num of arrayNumbers) {
    if (num % 2 !== 0) {
        oddNum.push(num);
    }
}
console.log(oddNum);



console.log(`---------- STEP 6 ---------- `);
console.log(`Find all even positioned elements and sum of it`);
let sum1 = 0;
for (const index in arrayNumbers) {
    if (index %2 === 0) {
        console.log(arrayNumbers[index]);  
        sum1 += arrayNumbers[index];
    }
}
console.log(`Sum of all even positioned elements is: ${sum1}`);



console.log(`---------- STEP 7 ---------- `);
console.log(`Find all odd positioned elements and sum of it`);
let sum2 = 0;
for (const index in arrayNumbers) {
    if (index %2 !== 0) {
        console.log(arrayNumbers[index]);  
        sum2 += arrayNumbers[index];
    }
}
console.log(`Sum of all odd positioned elements is: ${sum2}`);



console.log(`---------- STEP 8 ---------- `);
console.log(`Sum of all elements from arrayNumbers`);
let sum3 = 0;
for (const element of arrayNumbers) {
    sum3 = sum3 + element;  
}
console.log(`Sum of an array: ${sum3}`);



console.log(`---------- STEP 9 ---------- `);
console.log(`Find all numbers which are multiple of 5`);
const multiple = [];
for (const num of arrayNumbers) {
    if (num % 5 === 0) {
        multiple.push(num);
    }
}
console.log(multiple);



console.log(`---------- STEP 10 ---------- `);
console.log(`Is 115 available in array ?`);
console.log(arrayNumbers.includes(115));



console.log(`---------- STEP 11 ---------- `);
console.log(`Is 23 available in array ?`);
console.log(arrayNumbers.includes(23));


console.log(`---------- STEP 12 ---------- `);
console.log(`Insert numbers--> 55,66 at index 3`);
const addEle = arrayNumbers.splice(3, 1, 55,66);
console.log(addEle);
console.log(arrayNumbers);


console.log(`---------- STEP 13 ---------- `);
console.log(`Delete 3 elements starting from index 4`);
const deleteEle = arrayNumbers.splice(4, 3);
console.log(`Deleted elements are ${deleteEle}`);
console.log(`Array after deletion is:`);
console.log(arrayNumbers);


