

var word = "Javascript";

for ( let index = 0; index<word.length; index++ ) {
    const element = word.charAt(index);
    console.log(element);
}

console.log(`WAP to count the char a`);
var word = "Javascript";
var count = 0;
for (index = 0; index<word.length; index++ ) {
    var char = word.charAt(index);
    if(char == 'a'){
        count = count+1;
    }  
}
console.log(`Char a count is : ${count}`);
