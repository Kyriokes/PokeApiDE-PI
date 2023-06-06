import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  GET_TYPES,
  POST_POKEMON,
  FILTERED_BY_TYPES,
  SET_ITEMS_PER_PAGE,
  SET_PAGE,
  SET_TOTAL_PAGES,
} from "./action-type";

const initialState = {
  pokemons: [],
  detail: {},
  types: [],
  pokemon:{},
  fPokemonsByTypes: [],
  pagination: {
    thisPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 12,
    currentPageItems: [],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case GET_POKEMON_DETAIL:
      return { ...state, detail: action.payload };
    case SEARCH_POKEMON:
      return { ...state, pokemon: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case POST_POKEMON:
      return { ...state, pokemons: action.payload };
    case FILTERED_BY_TYPES:
      return { ...state, fPokemonsByTypes: action.payload };
    case SET_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, thisPage: action.payload },
      };
    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, itemsPerPage: action.payload },
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        pagination: { ...state.pagination, totalPages: action.payload },
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
