var voteEligibility = function(age){
    if (age==0 || age<0 || age>130) {
        console.log(`Invalid Data`);
    } else {
        if (age< 18) {
            console.log(`Not eligible for vote`);
        } else {
            console.log(`eligible vote`);
        }
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);


