
console.log(`--------------- STEP 1 ---------------`);
class Vehicle{
    company
    model
    color
    cc
    weight
    constructor(company, model, color, cc, weight){          //special method
        this.company= company;
        this.model = model;
        this.color = color;
        this.cc = cc;
        this.weight = weight;
   }
   details(){
       console.log(`Company Name: ${this.company}, Model name: ${this.model}, Color: ${this.color}, CC: ${this.cc}`);
   }
}

const honda = new Vehicle("Honda", "Activa", "Black", "100cc", "100kg");
honda.details();

const tata = new Vehicle("Tata", "Nexon", "White", "400cc", "500kg");
tata.details();

const marutiSuzuki = new Vehicle("Maruti", "Wagon R", "350cc", "300kg");
marutiSuzuki.details();


console.log(`--------------- Traversing array object ----------------`);
const arrayOfVehicles= [honda, tata, marutiSuzuki];
for (const element of arrayOfVehicles) {
    element.details();
    console.log(`---------------------------------------------------------------------`);
}


console.log(`------------------ STEP 2 ----------------------`);


class College{
    name
    address
    city
    pin
    collegeCode
    constructor(name, address, city, pin, collegeCode){          //special method
        this.name= name;
        this.address = address;
        this.city = city;
        this.pin = pin;
        this.collegeCode = collegeCode;
        
   }
   display(){
       console.log(`College Name: ${this.name},College Address: ${this.address} College City: ${this.city} College Pin: ${this.pin} College Code: ${this.collegeCode}`);
   }

}

const mit = new College("MIT", "Kothrud","Pune", 444321, "MIT556")
mit.display();

const dyp = new College("D Y Patil", "Akurdi", "Pune", 443220, "DYP233");
dyp.display(); 

const sinh = new College("Sinhagad Institute","Vadgaon", "Pune", 444356, "SIN544");
sinh.display();

