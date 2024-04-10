//rest Parameters.

function add(n1, n2,...values){
    console.log(n1, n2);
    console.log(values);

}
add(5, 6, 7, 8, 10, 11);

// Function with default parameter/argument value.
function division(n1, n2=1){
    console.log(n1/n2);
}
division(2,5);
division(7);

