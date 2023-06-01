const initialState = {
    pokemons: [
        {
          id: 1,
          name: "bulbasaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 7,
          weight: 69,
          hp: 45,
          attack: 49,
          defense: 49,
          speed: 45,
          types: ["grass", "poison"],
        },
        {
          id: 2,
          name: "ivysaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          height: 10,
          weight: 130,
          hp: 60,
          attack: 62,
          defense: 63,
          speed: 60,
          types: ["grass", "poison"],
        },
        {
          id: 3,
          name: "venusaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
          height: 20,
          weight: 1000,
          hp: 80,
          attack: 82,
          defense: 83,
          speed: 80,
          types: ["grass", "poison"],
        },
        {
          id: 4,
          name: "charmander",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          height: 6,
          weight: 85,
          hp: 39,
          attack: 52,
          defense: 43,
          speed: 65,
          types: ["fire"],
        },
        {
          id: 5,
          name: "charmeleon",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
          height: 11,
          weight: 190,
          hp: 58,
          attack: 64,
          defense: 58,
          speed: 80,
          types: ["fire"],
        },
        {
          id: 6,
          name: "charizard",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          height: 17,
          weight: 905,
          hp: 78,
          attack: 84,
          defense: 78,
          speed: 100,
          types: ["fire", "flying"],
        },
        {
          id: 7,
          name: "squirtle",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          height: 5,
          weight: 90,
          hp: 44,
          attack: 48,
          defense: 65,
          speed: 43,
          types: ["water"],
        },
        {
          id: 8,
          name: "wartortle",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
          height: 10,
          weight: 225,
          hp: 59,
          attack: 63,
          defense: 80,
          speed: 58,
          types: ["water"],
        },
        {
          id: 9,
          name: "blastoise",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
          height: 16,
          weight: 855,
          hp: 79,
          attack: 83,
          defense: 100,
          speed: 78,
          types: ["water"],
        },
        {
          id: 10,
          name: "caterpie",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
          height: 3,
          weight: 29,
          hp: 45,
          attack: 30,
          defense: 35,
          speed: 45,
          types: ["bug"],
        },
        {
          id: 11,
          name: "metapod",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
          height: 7,
          weight: 99,
          hp: 50,
          attack: 20,
          defense: 55,
          speed: 30,
          types: ["bug"],
        },
        {
          id: 12,
          name: "butterfree",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
          height: 11,
          weight: 320,
          hp: 60,
          attack: 45,
          defense: 50,
          speed: 70,
          types: ["bug", "flying"],
        },
      ],
    allPokemons: [],
    detail: {},
    types: [],
  };

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return { ...state };
    }
  };

  export default rootReducer;