class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this. emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    
    }
    details(){
        console.log(`Employee-id: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`------------ STEP 1 -----------`);

const newArray2 = array.filter((currentValue)=>{
    return currentValue.emp_company == "Wipro";
});
newArray2.forEach(element => {
    element.details();
});

console.log(`----------- STEP 2 -----------`);

const newArray3 = array.filter((currentValue)=>{
    return currentValue.emp_dept == "IT" || currentValue.emp_dept == "HR";
});
newArray3.forEach(element => {
    element.details();
});

console.log(`----------- STEP 3 -----------`);
const newArray4 = array.filter((currentValue)=>{
    return currentValue.emp_id > 50;
});
newArray4.forEach(element => {
    element.details();
});


console.log(`----------- STEP 4 -----------`);
const newArray5 = array.filter((currentValue)=>{
    return currentValue.emp_name.startsWith('A') || currentValue.emp_name.startsWith('V') || currentValue.emp_name.startsWith('M');
});
newArray5.forEach(element => {
    element.details();
});


console.log(`----------- STEP 5 -----------`);
const newArray6 = array.filter((emp)=>{
    return emp.emp_dept;
 });
 console.log(newArray6);
 
 const sumSalary = newArray6.reduce((runningTotal, currentValue)=>{
     return runningTotal + currentValue.emp_salary;
 },0);
 console.log(sumSalary);
 console.log(`Average salary of department is: ${sumSalary/newArray6.length}`);
 

 console.log(`----------- STEP 6 -----------`);
 const newArray7 = array.filter((emp)=>{
    return emp.emp_dept =="IT";
 });
 console.log(newArray7);
 
 const sumSalary1 = newArray7.reduce((runningTotal, currentValue)=>{
     return runningTotal + currentValue.emp_salary;
 },0);
 console.log(sumSalary1);
 console.log(`Average salary from IT department is: ${sumSalary1/newArray7.length}`);
 
 


