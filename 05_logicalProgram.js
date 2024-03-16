

// Write a FE(Function Expression) with one argument... "javaScript", "I am here"
// Inside the FE check whether given word is even or odd.

var result = function(word){
    var result = word.length%2 == 0 ? "Even" : "Odd";
    console.log(`Given word ${word} is with  ${result} length`);
}
result("Javascript");
result("I am hero");

console.log(`----------------------------------------`);
// FE to check whether number is multiple of 3 or not

var multiple = function (num){
    var result = num % 3 == 0 ? "YES" : "NO";
    console.log(`Given number ${num} is multiple of 3 : ${result}`);
}
multiple(9);
multiple(11);