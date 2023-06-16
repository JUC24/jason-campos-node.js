const chalk = require('chalk');

function formatPokemon(nombre, tipo1, tipo2) {
  if (!nombre || !tipo1) {
    throw new Error('Datos de Pokémon incompletos');
  }

  let formatText = chalk.yellow(`El Pokémon ${nombre}`);

  if (tipo1 && tipo2) {
    formatText += chalk.yellow(` es de tipo ${tipo1} y ${tipo2}`);
  } else if (tipo1) {
    formatText += chalk.yellow(` es de tipo ${tipo1}`);
  }

  console.log(formatText);
}

formatPokemon("Bulbasur","grass", "poison")