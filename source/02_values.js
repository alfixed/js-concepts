let a = 42;
let b = a;
b++
console.log('a', a);
console.log('b', b);

let c = [1, 2, 3];
let d = c; // c.concat();
d.push(4);

let e = [1, 2, 3, 4];

console.log('c', c);
console.log('d', d);


console.log(c === d); // true
console.log(c === e); // false
