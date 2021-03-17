function sayHelloTo(name) {
  const message = 'Hello ' + name;

  return function() {
    console.log(message);
  }
}

const helloToArtem = sayHelloTo('Artem');
helloToArtem();

function createFrameworkManager() {
  const fw = ['Angular', 'React'];
  return {
    print: function() {
      console.log(fw.join(' '));
    },
    add: function(framework) {
      fw.push(framework);
    }
  }
}

const manager = createFrameworkManager();
manager.print();
manager.add('VueJS');
manager.print();

// setTimeout
const fib = [1, 2, 3, 5, 8, 13];

// fib with var
for (var i = 0; i < fib.length; i++) {
  setTimeout(function() {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}

// fib with var and closures
for (var i = 0; i < fib.length; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}

//fib with let
for (let i = 0; i < fib.length; i++) {
  setTimeout(function() {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}
