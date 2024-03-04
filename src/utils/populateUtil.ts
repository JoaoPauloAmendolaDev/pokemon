import axios, { AxiosResponse } from 'axios';
import pokemonRepository from '@/repositories/pokemon-repository'; 
import Pokemon from '@/models/pokemon';
import { NotFoundError } from '@/errors/not-found-error';

interface PokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export async function fetchPokemonData(pokemonName: string) {
  const existingPokemon = await pokemonRepository.getByName(pokemonName);

  if (existingPokemon) {
    return existingPokemon.pokedex_id;
  } else {
    try {
      return await getPokemonFromInternet(pokemonName);
    } catch (error) {
      throw new NotFoundError();
    }
  }
}

async function getPokemonFromInternet(pokemonName: string) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    let pokemon = toPokemon(response);
    await pokemonRepository.save(pokemon);
    return pokemon.pokedex_id;
  } catch (error) {
    throw new NotFoundError(`Pokemon: ${pokemonName} Not Found`);
  }
}

function toPokemon(response: AxiosResponse<PokemonResponse>) {
  const { data } = response;

  return new Pokemon({
    pokedex_id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
  });
}
