const readline = require('readline');
const addModule = require('./modules/add');
const subtractModule = require('./modules/subtract');
const multiplyModule = require('./modules/multiply');
const divideModule = require('./modules/divide');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bienvenido a la calculadora.');

function startCalculator() {
  rl.question('Por favor, selecciona una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n', (option) => {
    switch (option) {
      case '1':
        handleOperation(addModule.add);
        break;
      case '2':
        handleOperation(subtractModule.substract);
        break;
      case '3':
        handleOperation(multiplyModule.multiply);
        break;
      case '4':
        handleOperation(divideModule.divide);
        break;
      default:
        console.log('Opción inválida. Por favor, selecciona una opción válida.');
        startCalculator();
        break;
    }
  });
}

function handleOperation(operation) {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      const result = operation(parseFloat(num1), parseFloat(num2));
      console.log(`El resultado es: ${result}`);
      rl.close();
    });
  });
}

startCalculator();