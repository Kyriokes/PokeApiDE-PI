const {
  getPokemonsByName,
  getPokemons,
  getPokemonId,
  createPokemon,
} = require("../controllers/pokemonController");

//------- GET | /pokemons && GET | /pokemons/name?="..."
const getPokemonHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      //si nombre existe se le pide al controller que busque en db y en api
      const pokemonByName = await getPokemonsByName(name);
      if (pokemonByName) {
        return res.json(pokemonByName);
      } else {
        return res.send(`${name} no fue encontrado`);
      }
    } else {
      // sino dame todo
      const allPokemons = await getPokemons();
      return res.json(allPokemons);
    }
  } catch (error) {
    //manejo si hay un error
    return res.status(400).send({ error: error.message });
  }
};

//-------  GET | /pokemons/:idPokemon
const getPokemonIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    // pido a la db o a la api si id.length<5 el pokemon por id
    const pokemonId = await getPokemonId(id);
    if (pokemonId.length === 0) { // reviso q sea un id valido
      return res.send("No puede ser 0");
    } else {
      return res.json(pokemonId);
    }
  } catch (error) {
    //manejo si hay un error
    return res.status(400).send({ error: error.message });
  }
};

//-------  POST | /pokemons
const createPokemonHandler = async (req, res) => {
  const { name, sprites, hp, attack, defense, speed, height, weight } =
    req.body;
  try {
    const newPokemon = await createPokemon(
      name,
      sprites,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    );
    res.send(`Un ${newPokemon.name} salvaje ha aparecido`);
  } catch (error) {
    //manejo si hay un error
    return res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getPokemonHandler,
  getPokemonIdHandler,
  createPokemonHandler,
};
