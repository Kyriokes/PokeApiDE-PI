const { Pokemon, Type } = require("../../db");
const axios = require("axios");

function pokeData(poke) {
  //para crear los objetos con la info de los pokemons
  return {
    id: poke.data.id,
    name: poke.data.name,
    image: poke.data.sprites.front_default,
    height: poke.data.height,
    weight: poke.data.weight,
    types: poke.data.types.map((types) => types.type.name),
    hp: poke.data.stats.find((element) => element.stat.name === "hp").base_stat,
    attack: poke.data.stats.find((element) => element.stat.name === "attack")
      .base_stat,
    defense: poke.data.stats.find((element) => element.stat.name === "defense")
      .base_stat,
    speed: poke.data.stats.find((element) => element.stat.name === "speed")
      .base_stat,
  };
}

const getPokemons = async () => {
  //trae de la base de datos
  const dbPokemons = await Pokemon.findAll();
  //trae de la api
  const apiPokemons = (await axios.get("https://pokeapi.co/api/v2/pokemon"))
    .data.results;
  const apiPokemonsUrl = await Promise.all(
    apiPokemons.map(async (element) => {
      const response = await axios.get(element.url);
      return pokeData(response);
    })
  );
  // retorna
  return [...dbPokemons, ...apiPokemonsUrl];
};

const getPokemonsByName = async (PokeName) => {
  let PokemonByName = await Pokemon.findOne({ where: { name: PokeName } });
  if (PokemonByName) {
    return PokemonByName;
  } else {
    PokemonByName = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${PokeName}`
    );
    return pokeData(PokemonByName);
  }
};
const getPokemonId = async (PokeId) => {
  let PokemonByID = 0;
  if (PokeId.length < 6) {
    PokemonByID = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${PokeId}`
    );
    return pokeData(PokemonByID);
  } else {
    PokemonByID = await Pokemon.findOne({ where: { id: PokeId } });
    return PokemonByID;
  }
};

const createPokemon = async ({
  name,
  sprites,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
}) => {
  console.log(name);
  let objPokemon = {
    name,
    sprites,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
  };
  const newPokemon = await Pokemon.create(objPokemon);
  return newPokemon;
};

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
