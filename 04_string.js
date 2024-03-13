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
var lengthBeforeTrim = greet.length;
console.log(`${greet} it's length is : ${greet.length} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greetAfterTrim} it's length is : ${lengthAfterTrim}`);

//TOTAL SPACES REMOVED IS..... -->
console.log(`Total spaces removed is ${lengthBeforeTrim-lengthAfterTrim}`);


console.log(`========== includes() ==========`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes(" MoR");  //Case sensitive.
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);


console.log(`========== search() ==========`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);


console.log(`========== slice() ==========`);
var greet = "Good Morning";
var result = greet.slice (3 , 10);  //Starting from index 3 to index 10.
console.log(`Slice is ${result}`);


console.log(`========== split() ==========`);
var greet = "Good Morning";
var resultValue = greet.split(" ");  //Refrence datatype. 
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);


console.log("       ");
//Write a function with name totalWords() with one argument 
//'I am happy Buddy' 
//"I am learning JS the language of internet"
// and this function should return total number of words.

function totalWord(words){
    var result = words.split("");
    var totalWords = result.length;
    return totalWords;
}
var totalWords = totalWord("I am happy buddy");
console.log(` "I am happy Buddy". Total number of words is : ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(` "I am happy Buddy". Total number of words is : ${totalWords}`);

