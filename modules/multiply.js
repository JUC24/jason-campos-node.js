const chalk = require("chalk");

function multiply(num1, num2){
  let result = num1 * num2
  return chalk.blue('the result is: ', result)
}

module.exports = {multiply};