
//1. Arrow Function with no arguments and no return value.
let show = () => {
    console.log(`Inside Show....`);
}
show();


//2. Arrow Function with arguments and no return value.
let add = (n1, n2) => console.log(`Addition is: ${n1+n2}`);

add(4, 10);


//3. Arrow Function with arguments and return value.
let square = (num) => {
    let result = num * num;
    return result; 
}
let squareResult = square(5)
console.log(squareResult);






