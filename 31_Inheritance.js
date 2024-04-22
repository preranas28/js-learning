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

console.log(`---------------------------------------------------`);

const manElon = new Man("Male", false, "elon", 45);
manElon.manDetails();
manBill. personDetails();






