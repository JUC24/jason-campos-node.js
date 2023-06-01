const chalk = require("chalk");

function divide(num1, num2){
  let result = num1 / num2
  return chalk.white('the result is: ', result)
}

module.exports = {divide};