console.log("--------Assingment 2-------");
console.log("--------Step 1-------");

var sweety = "Sweety";
var cutie= "Cutie";
console.log ("========before Swap ========");
console.log ("Sweety:", sweety , "Cutie:", cutie);

console.log ("=========After Swap ========");
var temp = sweety;       //temporary variable
sweety= cutie;
cutie = temp; 
console.log ("Sweety:", sweety , "Cutie:",cutie);

console.log("--------Step 2--------");
var num1= 100;
var num2= 200;
var num3= 300;
console.log("====Before Swap====");
console.log("num1:", num1, "num2:", num2, "num3:", num3);

console.log("=====After Swap====");
var temp1= num1;
num1= num2;
num2= num3;
num3 = temp1;
console.log("num1:", num1, "num2:", num2, "num3:", num3);