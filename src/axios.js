import axios from "axios";

export const axiosPokemonList = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100"
});
