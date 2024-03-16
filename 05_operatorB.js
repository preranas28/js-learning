console.log('---------- STEP 1 ----------');

function greaterNumber(num1 , num2){
    var result = num1 > num2 ? "Yes" : "No";
    console.log(`${num1} is greater than ${num2} : ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log('---------- STEP 2 ----------');
function isEvenOrOddNum (num){
    var result = num%2 == 0 ? "Even Number" : "Odd Number";
    console.log(`${num} is ${result}.`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);


console.log('---------- STEP 3 ----------');

var result = function(word){
    var result = word.length%2 == 0 ? "Even" : "Odd";
    console.log(`Given word ${word} is with  ${result} length`);
}
result("Javascript");
result("developer");
result("Google");
