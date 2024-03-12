//Write a Program to swap variable values using third variable.

console.log ("WAP to swap variable values using third variable");
var n1 = 100;
var n2= 200;
console.log ("========before Swap ========");
console.log ("n1:", n1 , "n2:", n2);

console.log ("=========After Swap ========");
var temp = n1;       //temporary variable
n1= n2;
n2 = temp; 
console.log ("n1:", n1 , "n2:",n2);
console.log ("temp:", temp);

console.log("------------------------------");
var cityOne = "Pune";
var cityTwo = "Mumbai";

function swap(one, two){
    console.log("Before Swap");
    var temp = one;
    one = two;
    two = temp;
    console.log("After Swap");
    console.log(one, two);
}
var cityOne = "Pune";
var cityTwo = "Mumbai";
swap(cityOne, cityTwo);


