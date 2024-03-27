const professor = {
    name: "Prerana",
    age: 24,
    college: "MIT- wpu",
    expertise: "Physics",
    university: "SPPU",
    salary: "5LPA",
    degrees : {
        engineering : " CSC", 
        PHD : "Adv Computing",
    },
    certificate : ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
    totalExperience : "14 years"
}
console.log(professor);

console.log(`---------- Modify any existing property and log ---------`);
professor.age = 32;
console.log(professor); 


console.log(`---------- Add new certificate at 2nd index ----------`);
var updCertificate = professor.certificate.splice(1, 1, "Oracle Certificate");
console.log(updCertificate);
console.log(professor); 

console.log(`---------- Last element of array --> certificate ----------`);
var last = professor.certificate[professor.certificate.length - 1];
console.log(last);


console.log(`---------- Log complete object on console ----------`);
console.log(professor);


console.log(`---------- Traverse array --> certificates ----------`);
for(let element of professor.certificate) {
    console.log(element);
}







