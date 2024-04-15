// FIRST CLASS CITIZENS  (imp for interview)

//1. Function Expression
console.log(`----- Function Expression -----`);
let add = function(){
    console.log(`Inside add function...`);
}
add();

//2. Callback
console.log(`---------- Callback ----------`);
function greet(callbacks ){
    console.log(`Good Morning`);
    callbacks();
}
let saySomething = function(){
    console.log(`How are you....`);
}
greet(saySomething);

//3. Function can return another function.
console.log(`-----Function can return another function-----`);
function show(){
    console.log(`Inside show Function...`);
    let display = function(){
        console.log(`Inside display....`);    
    }
    return display;
}
//show();
let result = show();
result();


