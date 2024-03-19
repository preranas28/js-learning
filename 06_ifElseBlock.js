

var person= "Raman";
var age = 17;

// Voting age should be min greater than equal 18.
if (age>=18) {
    console.log(`Yes. Please Vote. Age- ${age}, Name- ${person}`);
} else {
    console.log(`Sorry. Please try next year. Age- ${age}, Name- ${person}`);
}


console.log(`------------------------------`);

function vote (person, age){
    if (age>=18) {
        console.log(`Yes. Please Vote. Age- ${age}, Name- ${person}`);
    } else {
        console.log(`Sorry. Please try next year. Age- ${age}, Name- ${person}`);
    }
}
vote("Jenny", 34);
vote("Bill", 14);
vote("Elon", 18);






 