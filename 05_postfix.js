var a = 5;
var b = a++;
console.log(a); //6
console.log(b); //5

var n1 = 5;
var n2 = n1++ + ++n1 ;
console.log(n1);
console.log(n2);

var a = 4;
var b = a-- +  ++a + ++a + a++;
//       4     4     5      5
console.log(a);
console.log(b);


 