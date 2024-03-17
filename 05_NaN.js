var a = 0;
var b = 0;
var result = a/b;
console.log(`a divide by b is : ${result}`);
console.log(`Type of --> ${typeof result}`);




console.log(`---------------------------------------`);
console.log(`  `);

var n1 = "10";
console.log(`Value of n1 is ${n1} and its type is ${typeof n1}`);

console.log(`--------------- Type Conversion---------------`);

var n2 = +n1;
console.log(`Value of n1 is ${n2} and its type is ${typeof n2}`);

var num1 = "100";
var num2 = 100;
console.log(`Equality check ${num1 == num2}`);  //Implicit Conversion. (automatically)
console.log(`Equality check ${num1 === num2}`);  // === checks datatype also. 

console.log(`Addition is ${num1 + num2}`);

console.log(`Operation : ${true +1}`); //true get convert in 1  it is called ad implicit conversion (automatic conversion)

// Explicit conversion means manual conversion.

var n3 = "100";
var result = Number(n3);
console.log(`n3: type : ${typeof n3}, result : ${result} , type: ${typeof result}`);


var n4 = "My Love";
var result = Number(n4);
console.log(`n4: type : ${typeof n4}, result : ${result} , type: ${typeof result}`);


var n5 = 200;
var result = String(n5);
console.log(`n5: type : ${typeof n5}, result : ${result} , type: ${typeof result}`);


var n6 = true;
var result = Number(n6);
console.log(`n6: type : ${typeof n6}, result : ${result} , type: ${typeof result}`);


var n7 = "70";
var result = Boolean(n7); //Non zero number always return "true" in boolean type
console.log(`n7: type : ${typeof n7}, result : ${result} , type: ${typeof result}`);




