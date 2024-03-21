const arrayNumbers = [2, 4, 1, 7, 9, 8];
for (const element of arrayNumbers) {
    console.log(element);
}

console.log(`--------------------------`);

let sum = 0;
for (const element of arrayNumbers) {
    sum = sum + element;  
}
console.log(`Sum of an array: ${sum}`);


console.log(`--------------------------`);

let multiplication = 1;
for (const element of arrayNumbers) {
    multiplication = multiplication * element;    
}
console.log(`Multiplication of an array: ${multiplication}`);

console.log(`----------------------------------------`);

var friendList = ["Jenny", "Bill", "Andy", "Elon"];
for (const element of friendList) {
    console.log(element);
}

// JOIN METHOD
console.log(friendList);
friendList.join(",");
var fri = friendList.join("-");
console.log(fri);
console.log(friendList. join("="));


console.log(`---------------------------------------------------`);
console.log(`Count vowels from the array`)  ;

const word = ["Jenny", "Bill", "Andy", "Elon"];

var wordsJoin = word.join("");
console.log(wordsJoin);
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < wordsJoin.length; index++) {
    let char =wordsJoin.charAt(index);
    let lowerCase = char.toLowerCase();

    if (vowels.includes(lowerCase)) {
        vowelsCount++;
    }
}
console.log(`Total count of vowels: ${vowelsCount}`);














console.log(`----------------------------------------`);

// const string1 = ["Jenny", "Bill", "Andy", "Elon"];
// function countVowels (string){
//     let count = 0;
//        for (const char of string) {
//             if (char === "a" || char==="e"  || char==="i" || char==="o" || char==="u")  {
//             count++;
//             }
//        }
//     return count;
// }
// countVowels();





