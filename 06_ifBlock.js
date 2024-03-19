var marriageCheck = function (age, candidateName) {
    if (age>= 21) {
        console.log(`You are eligible for marriage : Age- ${age} Name- ${candidateName}`);
    }
}
marriageCheck(23, "Bill");
marriageCheck(21, "Stew");
marriageCheck(20, "Elon");
console.log(`-------------------------------`);




var marriageEligibility = function (age, candidateName, gender) {
    if (age>= 21 && gender=="Male") {
        console.log(`Eligible: Age- ${age} Name- ${candidateName}`);
    }
    
}
marriageEligibility(23, "Bill", "Male");
// marriageEligibility(21, "Jenny" , "Female");
marriageEligibility(20, "Elon" , "Male");


console.log(`-------------------------------`);