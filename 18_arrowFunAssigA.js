console.log(`---------- Step 1 ----------`);
let show = () => {
    console.log(`Good Morning, Today is Monday`);
}
show();


console.log(`---------- Step 2 ----------`);
let mul = (n1, n2, n3=1) => console.log(`Multiplication is: ${n1*n2*n3}`);

mul(5, 5, 2);
mul(10, 4);


console.log(`---------- Step 3 ----------`);
let addition = (num1, num2, num3, num4, num5) => {
    let result = num1 + num2 + num3 + num4 + num5;
    return result; 
}
let squareResult = addition(100, 100, 200, 349, 759)
console.log(`The addition is : ${squareResult}`);

let squareResult1 = addition("I am", " learning", " ES6", " features", " in depth.");
console.log(`The result of concatenation is : ${squareResult1}`);




