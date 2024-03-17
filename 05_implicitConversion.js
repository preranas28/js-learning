console.log(`---------- IMPLICIT CONVERSION ----------`);
let result;
// numeric string used with + gives string type  
console.log(`----------Numeric String----------`)
result = '3' + 2;
console.log(`Result of '3' + 2 is : ${result}`);

result = '3' + true;
console.log(`Result of '3' + true is : ${result}`);

result = '3' + undefined;
console.log(`Result of '3' + undefined is : ${result}`);

result = '3' + null;
console.log(`Result of '3' + null is : ${result}`);

// if boolean is used , true is 1 and false is 0.
console.log(`----------Boolean Type----------`);

result = '4' - true;
console.log(`Result of '4'-+ true is : ${result}`);

result = 4 + true;
console.log(`Result of 4 + true is : ${result}`);

result = 4 + false;
console.log(`Result of 4 + false is : ${result}`);

// numeric string used with -, / , * results number type
console.log(`---------- Numreric String used with - / *----------`);

result = '4' - '2';
console.log(`Result of '4' + '2 is : ${result}`);

result = '4' - 2;
console.log(`Result of '4' - 2 is : ${result}`);

result = '4' * 2;
console.log(`Result of '4' * 2 is : ${result}`);

result = '4' / 2;
console.log(`Result of '4' / 2 is : ${result}`);


// Arithmetic operations of undefined with number, boolean or null gives NaN.

console.log(`----------Arithmetic operations of undefined with number, boolean or null gives----------`);

result = 4 + undefined;
console.log(`Result of 4 + undefined is : ${result}`);

result =  4 - undefined;
console.log(`Result of 4 - undefined is : ${result}`);

result = true + undefined;
console.log(`Result of true + undefined is : ${result}`);

result = null + undefined;
console.log(`Result of null + undefined is : ${result}`);

console.log(`---------- Explicit Conversion ----------`);

// string to number
console.log(`--------------- String to number---------------`);

result = Number ('324');
console.log(`Result of Number ('324') is : ${result}`);

result = Number('324e-1');
console.log(`Result of Number ('324e-1') is : ${result}`);

result = Number (true);
console.log(`Result of Number (true) is : ${result}`);

result = Number (false);
console.log(`Result of Number (false) is : ${result}`);

console.log (`----------------------`);

result = Number ('hello');
console.log(`Result of Number ('hello') is : ${result}`);

result = Number (undefined);
console.log(`Result of Number (undefined) is : ${result}`);

result = Number (NaN);
console.log(`Result of Number (NaN) is : ${result}`);

