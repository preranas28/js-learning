
//7
function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;
        }
        
    }
    return true;
}
const result = isPrime(7); 
console.log(`Is 7 prime  number: ${result}`);

const result2 = isPrime(12); 
console.log(`Is 12 prime  number: ${result2}`);

const result3 = isPrime(2087); 
console.log(`Is 2087 prime  number: ${result3}`)


console.log(`------------------------------------------------`);

// const array = [3, 9, 7, 6, 19, 29, 53];



// function spaceCount(str) {
//     return str.split(' ').length - 1;
// }


// const sentence = "Revision is the mother of success";
// console.log(spaceCount(sentence)); 


function isPrime(num){
    for (let index = 2; index < num; index++) {
      if (num%index==0) {
       return false;
      } 
    }
    return true;
   }

   const array=[3,9,7,6,19,29,53];
   var count=0;
   for(let i=0;i<array.length;i++){
    let num=array[i];
    const result = isPrime(num);
    if(result==true){
        count++;
    }
   }
   console.log(`Count Prime numbers : ${count}`);

console.log(`-----------------------------------------------`);

function spaceCount(str) {
    var totalNumberOfSpaces = 0;
    var sentence = str;
    var length = sentence.length;
    
    for (let index = 0; index < length; index++) {
        if(sentence.charAt(index)==' ')
        {
            totalNumberOfSpaces++;
        }
    }

    return totalNumberOfSpaces;
}

var str1 = "Revision is the mother of success";
let result1 = spaceCount(str1);
console.log(`Total no of spaces available in string "${str1}" are ::${result1} `);
var str2 = "Javascript is the language of internet world";
let result4 = spaceCount(str2);
console.log(`Total no of spaces available in string "${str2}" are ::${result4} `);














