// let
let a = 'Variable a';
let b = 'Variable b';

{
  a = 'New Variable a';
  let b = 'Local Variable b';

  console.log('Scope A', a);
  console.log('Scope B', b);
}

console.log('A', a);
console.log('B', b);

// const
const PORT = 8080;
// PORT = 2000; // Error

const array = ['JavaScript', 'is', 'Awesome'];
array.push('!');
array[0] = 'JS';
console.log(array);
// array = ''; // Error

const obj = {};
obj.name = 'Temp';
console.log(obj);

delete obj.name;

console.log(obj);

// obj = ''; // Error
