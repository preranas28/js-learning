const bankSbi = {
     branch: "Kothrud",
     IFSC: "SBI23456",
     accountNum: "123456",
     branchManager: "Prerana Sarode"
}
console.log(bankSbi);

const bankLocation = {
    street:"karve road",
    city: "Pune",
    pin: "4443334"
}
console.log(bankLocation);

const cloneObject = Object.assign(bankSbi, bankLocation);
console.log(`This is clone of bankSbi and bankLocation`);
console.table(cloneObject);


const rateOfInterest = {
    homeLoanInterest: "9.5%",
    personalLoanInterest: "8.5%",
    dueInterest: "1.5%"
}
const sbiDetails = {

}

const mergeObject = Object.assign(sbiDetails, bankSbi, bankLocation, rateOfInterest); 
console.table(mergeObject);
console.log(`-------`);
console.table(sbiDetails);


console.log(`Traversing merge array`);
for (const index in  sbiDetails){
    console.log(sbiDetails[index]);
}






