import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  GET_TYPES,
  POST_POKEMON,
  FILTERED_BY_TYPES,
} from "./action-type";
import store from "./store";


export const getPokemons = () => {
  return async function (dispatch) {
    const apiPokemon = await axios.get("http://localhost:3001/pokemon/");
    const pokemon = apiPokemon.data;
    dispatch({ type: GET_POKEMONS, payload: pokemon });
  };
};

export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/pokemon/${id}`);
    const pokemon = response.data;
    dispatch({ type: GET_POKEMON_DETAIL, payload: pokemon });
  };
};

export const searchPokemon = (name) => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/pokemon?name=${name}`);
    const pokemon = response.data;
    dispatch({ type: SEARCH_POKEMON, payload: pokemon });
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/type`);
    const types = response.data;
    dispatch({ type: GET_TYPES, payload: types });
  };
};

export const createPokemon = (form) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/pokemon", form);
    const newPokemon = response.data;
    dispatch({ type: POST_POKEMON, payload: newPokemon });
  };
};

export const typeFilter = (value) =>{
  const tFPokemons = store.getState().Pokemons
  tFPokemons.filter(pokemon => pokemon.types.some(element => element === value))
  return {type: FILTERED_BY_TYPES , payload: tFPokemons}
}