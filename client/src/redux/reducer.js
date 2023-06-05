import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  GET_TYPES,
  POST_POKEMON,
  FILTERED_BY_TYPES
} from "./action-type";

const initialState = {
  pokemons: [],
  allPokemons: [],
  detail: {},
  types: [],
  fPokemonsByTypes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case GET_POKEMON_DETAIL:
      return { ...state, detail: action.payload };
    case SEARCH_POKEMON:
      return { ...state, pokemons: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case POST_POKEMON:
      return { ...state, pokemons: action.payload };
    case FILTERED_BY_TYPES:
      return { ...state, fPokemonsByTypes: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
