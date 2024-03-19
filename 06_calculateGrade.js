// Grade Calculation.
// Pass or fail ==> marks<=34 fail... else pass
// Marks greater than equal 35 and less than 55 --> Grade C
// Marks greater than equal 55 and less than 75 --> Grade B
// Marks greater than equal 75 and less than 100 --> Grade A

var marks = 80;
if (marks<35) {
    console.log(`Failed. marks: ${marks}`);
} else {
    // console.log(`Congratulations ... Passed. Marks: ${marks}`);
    if (marks >= 35 && marks< 55) {
         console.log(`Congratulations. Marks: ${marks}Grade : C`);
    } else {
        if (marks >= 55 && marks<75) {
            console.log(`Congratulations. Marks: ${marks} Grade : B`);
        } else {
            if (marks >= 75 && marks<100) {
                console.log(`Congratulations. Marks: ${marks}Grade : A`);
            } else {
                console.log(`Invalid Marks Percentage.`);
            }
        }
    }
}