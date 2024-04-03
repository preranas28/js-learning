// File name : 09_classStudent.js
// Student
// data member : rollNumber , name, division
//member function : getDetails()
// create 3 objects from student.
console.log(`---------- Student Details ----------`);


class Student {
    rollNumber
    name
    division

    constructor(rollNumber, name, division){   // constructor is special method
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
   }
   getDetails(){
    console.log(`Student Details-->Roll Number: ${this.rollNumber}, Name: ${this.name}, Divison: ${this.division}`);
   }
}

const jenny1 = new Student(201, "Jenny", "A");
jenny1.getDetails();
const john = new Student(202, "John", "B");
john.getDetails();
const steve = new Student(203, "Steve", "C");
steve.getDetails();





