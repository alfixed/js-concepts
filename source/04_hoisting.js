console.log(sum(5, 40));

function sum (a, b) {
  return a + b;
}

var a;
console.log(a);
a = 40;
console.log(a);

// // ReferenceError
// console.log(b);
// const b = 48; // let
// console.log(b);


// Function Declaration
console.log(square(25));

function square(num) {
  return num ** 2;
}

// Function Expression
var mult = function(num) {
  return num * num;
}

console.log(mult(4));
