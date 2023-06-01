const chalk = require("chalk");

function add(num1, num2){
  let result = num1 + num2
  return chalk.red('the result is: ', result)
}

module.exports = {add};