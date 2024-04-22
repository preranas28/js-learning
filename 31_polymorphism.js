
class Calculation{
    constructor() {

    }
    add(num1, num2){
        console.log(num1 + num2);
    }

    add(num1, num2, num3){
        if (arguments.length == 2) {
            console.log(num1 + num2);
        }
        if (arguments.length == 3) { 
            console.log(num1 + num2 + num3);
        }
        if (arguments.length == 1)  {
            console.log(num1);
        }
        
    }
}

const cal = new Calculation();
cal.add(10, 20);
cal.add(30, 30, 70);
cal.add(2);
cal.add(2, 3, 4, 5, 6);



class Person{       //Parent class or Super Class.
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    personDetails(){
        console.log(`Person Details is Name: ${this.name}, Age: ${this.age}`);
    }
}

class Man extends Person{      // Child class or Sub class or Derived Class.
    constructor(gender, canDeliverKid, manName, manAge ){
        super(manName, manAge);   // To invoke Parent Class Constructor
        this.gender = gender;
        this.canDeliverKid = canDeliverKid;
    }
    manDetails(){ 
        console.log(`Man Details is Gender: ${this.gender}, CanDeliverKid: ${this.canDeliverKid}, Name: ${this.name}, Age: ${this.age}`);
    }

}

const manBill = new Man("Male", false, "Bill", 25);
manBill.manDetails();



// const manElon = new Man("Male", false, "elon", 45);
// manElon.manDetails();
// manBill. personDetails();






