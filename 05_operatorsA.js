console.log(`--------------- Step 1 ---------------`);
function squareOfWordLength(word){
    var w = word.length;
    console.log(`Length of "${word}" Length: ${w}`);
    console.log(`Square of length of "${word}" is ${w **2}`);
}
squareOfWordLength("Javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log(`--------------- Step 2 ---------------`);

function myFunction() {
    var sentence = " I am Angular Developer";
    var len = sentence.length;
    console.log(`Total Length is: ${len}`);

    var ave = len / 4;
    console.log(`Average is ${ave}`);

    var mul = len * 4;
    console.log(`Multiplication is ${mul}`);
}
myFunction();