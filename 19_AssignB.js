class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this. emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    
    }
    details0(){
        console.log(`Employee-id: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
    }
    details(){
        console.log(` Name: ${this.emp_name}, Company: ${this.emp_company}`);
    }

    details1(){
        console.log(` Name: ${this.emp_name}, Department: ${this.emp_dept}`);
    }
    details2(){
        console.log(` Name: ${this.emp_name}, Company: ${this.emp_company}, Salary: ${this.emp_salary}`);
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayPerson = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`---------------- STEP 1 ---------------`);
arrayPerson.forEach(element => {
    if(element.emp_company=="TCS"){
        element.details();
    }
});

console.log(`--------------- STEP 2 ---------------`);
arrayPerson.forEach(element => {
    if(element.emp_dept=="Finance"){
        element.details1();
    }
});

console.log(`--------------- STEP 3 ---------------`);

arrayPerson.forEach(element => {
    if(element.emp_name.startsWith('R')){
        element.details0();
    }
});


console.log(`--------------- STEP 4 ---------------`);
arrayPerson.forEach(element => {
    if(element.emp_salary>75000){
        element.details2();
    }
});


console.log(`--------------- STEP 5 ---------------`);
arrayPerson.forEach(element => {
    if(element.emp_salary>=50000 && element.emp_dept=="IT"){
        element.details0();
    }
});


console.log(`--------------- STEP 6 ---------------`);
arrayPerson.forEach(element => {
    if(element.emp_company=="Infy"){
        element.details0();
    }
});





