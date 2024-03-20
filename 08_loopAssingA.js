console.log(`---------- Step 1 -----------`);
const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
    let char =word.charAt(index);
    let lowerCase = char.toLowerCase();

    if (vowels.includes(lowerCase)) {
        vowelsCount++;
    }
}
console.log(`Total count of vowels: ${vowelsCount}`);



console.log(`---------- Step 2 -----------`);

let sum=0;
for (let index = 0; index < 5; index++) {
    sum = sum + index * index * index; 
}
console.log(`The sum of cube of numbers from 1 to 5 is ${sum}`);


console.log(`---------- Step 3 -----------`);

console.log(`Here are only odd positioned chars:`);
function oddPositionedChars(word){
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index%2 !=0 && element!="") {
            console.log(element);
        }
        
    }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be your UI IT champ");
