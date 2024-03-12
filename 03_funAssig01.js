console.log("--------------- Assingment 1 ---------------");
console.log("---------- Step 1 ----------");

function show(){
    console.log("Hey.. Good morning");
}
show();

function show1(){
    console.log("My name is Prerana");
}
show1();


console.log("---------- Step 2 ----------");

function personalDetails(fname, lname, cname){
    console.log("First Name:", fname);
    console.log("Last Name:", lname);
    console.log("College Name:", cname);
}
personalDetails("Prerana", "Sarode", "SIBMT");


console.log("---------- Step 3 ----------");

function swap(n1, n2){
    
    console.log ("Before Swap:" ,n1, n2);
    var temp = n1;       //temporary variable
    n1= n2;
    n2 = temp; 
    console.log ("After Swap:",n1, n2);
    
}
swap("Virat", "Anushka");
swap (1000, 2000);

console.log("---------- Step 4 ----------");

function addThreeValues(n1, n2, n3){
    console.log("Arguments: " , n1 , n2, n3);
    var result = n1+n2+n3;
    console.log("Addition of three values is:" , result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello ", "Good ", "Morning ");

