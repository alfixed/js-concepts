// data types
console.log(typeof null);           // null
console.log(typeof undefined);      // undefined
console.log(typeof true);           // boolean
console.log(typeof 0);              // number
console.log(typeof 'JavaScript');   // string
console.log(typeof Math);           // object
console.log(typeof (Symbol('JS'))); // symbol
 

// string conversions
let language = 'JavaScript';
if (language) {
  console.log('The best language is: ', language);
}

// boolean conversions '', 0, null, undefined, NaN, false
console.log(Boolean(''));             // false
console.log(Boolean('Hello'));        // true
console.log(Boolean(' '));            // true
console.log(Boolean('0'));            // true
console.log(Boolean(0));              // false
console.log(Boolean(null));           // false
console.log(Boolean([]));             // true
console.log(Boolean({}));             // true
console.log(Boolean(function() {}));  // true

// strings and numbers
console.log(1 + '2');       // string 12
console.log('' + 1 + 0);    // string 10
console.log('' - 1 + 0);    // number -1
console.log('3' * '8')      // number 24
console.log(4 + 10 + 'px'); // string 14px
console.log('px' + 5 + 10); // string px510
console.log('42' - 40);     // number 2
console.log('42px' - 2);    // NaN
console.log(null + 2);      // number 2
console.log(undefined + 5); // NaN

// == vs ===
console.log(2 == '2');            // true
console.log(2 === '2');           // false
console.log(undefined == null);   // true
console.log(undefined === null);  // false
console.log('0' == false);        // true
console.log('0' == 0);            // true
console.log(0 == 0);              // true

// offtop
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0);     // true
console.log('' == []);    // true
console.log('' == {});    // false
console.log(0 == []);     // true
console.log(0 == {});     // false
console.log(0 == null);   // false

