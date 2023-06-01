const chalk = require("chalk");

function substract(num1, num2){
  let result = num1 - num2
  return chalk.yellowBright('the result is: ', result)
}

module.exports = {substract};
