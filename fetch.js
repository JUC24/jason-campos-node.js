const axios = require('axios');

async function fetchPokemon(numero) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos del Pokémon:', error);
    throw error;
  }
}

async function obtenerDatosPokemon(numero) {
  try {
    if (numero < 1 || numero > 898) {
      throw new Error('Número de Pokémon inválido');
    }
    const pokemonData = await fetchPokemon(numero);
    const nombre = pokemonData.name;
    const tipos = pokemonData.types.map(type => type.type.name);
    
    console.log('Nombre:', nombre);
    console.log('Tipos:', tipos);
  } catch (error) {
    console.error(error.message);
  }
}

obtenerDatosPokemon(25)