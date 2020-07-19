import axios from "axios";
import {
  getPokemonStart,
  getPokemonSuccess,
  getPokemonFail
} from "../actions/index";
const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
const getData = " https://pokeapi.co/api/v2/pokemon/";

const getImageUrlApi = id =>
  `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

const transformInput = async pokeArray => {
  const transformedArray = pokeArray.map(pokemon => ({
    id: pokemon.data.id,
    name: pokemon.data.name
  }));
  const resp = transformedArray.map(async item => ({
    ...item,
    image: await axios.get(getImageUrlApi(item.id), {
      responseType: "blob",
      timeout: 30000
    })
  }));
  const arrayOfPokemon = await Promise.all(resp);

  return arrayOfPokemon;
};

export const fetchPokemonList = () => async dispatch => {
  dispatch(getPokemonStart());
  try {
    const response = await axios.get(baseUrl);
    if (response.status !== 200) {
      dispatch(getPokemonFail());
    } else {
      const res = response.data.results.map(item =>
        axios.get(`${getData}${item.name}`)
      );
      const arrayOfPokemon = await Promise.all(res);

      const pokemonFinalArray = await transformInput(arrayOfPokemon);
      // const res11 = await Promise.all(transformInput(arrayOfPokemon));
      dispatch(getPokemonSuccess(pokemonFinalArray));
    }
  } catch (error) {
    console.log(error);
    dispatch(getPokemonFail());
  }
};
