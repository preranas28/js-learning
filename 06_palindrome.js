
//madam  nayan   radar  amma  mam  level  dad  mom  nitin

function isPalindrome(word){
    const arrayChars = word.split("");
    arrayChars.reverse();
    const reverseWord = arrayChars.join("");
    const result = reverseWord == word;
    return result;
}
var result = isPalindrome("madam");
console.log(`is word 'madam' Palindrome: ${result}`);

var result2 = isPalindrome("nitin");
console.log(`is word 'nitin' Palindrome: ${result2}`);

var result3 = isPalindrome("hello");
console.log(`is word 'hello' Palindrome: ${result3}`);


