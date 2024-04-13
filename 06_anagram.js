// silent , listen

const isAnagram = (firstWord, secondWord) =>{
    const firstSortedWord= firstWord.split("").sort().join("");
    const secondSortedWord = secondWord.split("").sort().join("");
    return firstSortedWord == secondSortedWord;
}
let result = isAnagram("silent", "listen");
console.log(`Given words or string are anagram: ${result}`);
// e i l n s t   -> alphabetically

let result1 = isAnagram("such", "much");
console.log(`Given words or string are anagram: ${result1}`);

