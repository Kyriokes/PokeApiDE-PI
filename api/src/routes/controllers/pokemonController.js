const { Pokemon, Type } = require("../../db");
const axios = require('axios');

const getPokemons = async () =>{
  //trae de la base de datos
  const dbPokemons = await Pokemon.findAll()
  //trade de la api
  
  const apiPokemons = (await axios.get("https://pokeapi.co/api/v2/pokemon")).data.results;
  // const apiPokemonsUrl = apiPokemons.map( async (element) => {
  //   const data = (await axios.get(element.url))
  //   const dataF = data.data
  //   return { name:dataF.name }
  // });
  const apiPokemonsUrl = await Promise.all(apiPokemons.map(async (element) => {
    const response = await axios.get(element.url);
    return {
      id:response.data.id,
      name: response.data.name,
      image:response.data.sprites.front_default,
      height:response.data.height,
      weight:response.data.weight,
      types: response.data.types.map(types => types.type.name),
      hp: response.data.stats.find(element => element.stat.name === "hp" ).base_stat, 
      attack: response.data.stats.find(element => element.stat.name === "attack" ).base_stat, 
      defense: response.data.stats.find(element => element.stat.name === "defense" ).base_stat,
      speed: response.data.stats.find(element => element.stat.name === "speed" ).base_stat
    };
  }));
  
  

  // const prueba = (await axios.get("https://pokeapi.co/api/v2/pokemon/1/")).data;
  // const apiPokemonsRaw = cleanArray(apiPokemons)
  //unifica
  // let results = [];
  // //retorna
  // return results.concat(dbPokemons,apiPokemonsUrl)
  return [...dbPokemons,...apiPokemonsUrl]
}

const getPokemonsByName = async () =>{}
const getPokemonId = async () =>{}
const createPokemon = async () =>{}

module.exports = {
  getPokemonsByName,
  getPokemons,
  getPokemonId,
  createPokemon,
};

// const getPokemonsApi = async () => {
//     const api = await axios(
//         "https://pokeapi.co/api/v2/pokemon"
//     )
// }