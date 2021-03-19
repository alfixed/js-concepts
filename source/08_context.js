const person = {
  surname: 'John',
  knows: function(what, name) {
    console.log(`You ${what} knows ${name} ${this.surname}`)
  }
};

const peter = {surname: 'Snow'};

person.knows('all', 'Paul');

person.knows.call(peter, 'nothing', 'Peter');
person.knows.apply(peter, ['nothing', 'Peter']);
person.knows.call(peter, ...['nothing', 'Peter']); // spread
person.knows.bind(peter, 'nothing', 'Peter')();

// ========
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

const mikhael = new Person('Mikhael', '30');

// ========
function logThis(){
  console.log(this);
};

const obj = {num: 42};
logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();


// =========
const animal = {
  legs: 4,
  logThis: function() {
    console.log(this);
  }
}

animal.logThis();

// arrow function
function Cat(color) {
  this.color = color;
  console.log('This', this);
  (() => console.log(' Arrow this', this))();
}

Cat('red');
