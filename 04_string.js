var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total Numbers of chars: " + totalChars);

var characterAT0 = greet.charAt(0);
console.log("Character at index 0 is: " + characterAT0);

var characterAT6 = greet.charAt(6);
console.log("Character at index 6 is: " + characterAT6);

var characterAT11 = greet.charAt(11);
console.log("Character at index 11 is: " + characterAT11);

var sentence = "When you join meeting you have to keep silence and pay attention and give full focus on what sir taught";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars - 1);
console.log("Last char is:",lastChar);

console.log("==========IndexOf()==========");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M:", indexOfM);


console.log("========== concat() ==========");
var firstName = "Prerana ";
var lastName = "Sarode";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);


console.log("========== replace() ==========");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace String is : ${afterReplace}`);


console.log(`========== toUpperCase() ==========`);
var greet = "Good Morning";
const afterUpperCase = greet.toUpperCase(greet);
console.log(`${greet} in upper case is : ${afterUpperCase}`);


console.log(`========== toLowerCase() ==========`);
var greet = "Good Morning";
const toLowerCase = greet.toLowerCase(greet);
console.log(`${greet} in lower case is : ${toLowerCase}`);


console.log(`========== trim() ==========`);
var greet = "    Good Morning  ";
console.log(`${greet} it's length is : ${greet.length} `);

var len = greet.length;
greet.trim();
console.log(len);
