import { ConflictError } from '@/errors/conflict-error';
import { NotFoundError } from '@/errors/not-found-error';
import teamRepository from '@/repositories/team-repository';

export async function createUserTeam(owner: string) {
  try {
    let { id } = await teamRepository.create(owner);
    return id;
  } catch (error) {
    throw new ConflictError('Usuário já existente');
  }
}

export async function getOne(id: number) {
  try {
    let team = await teamRepository.getTeamById(id);

    let transformedPokemons = normalizePokemonList(team)
    return {
      owner: team.owner,
      pokemons: transformedPokemons,
    };
  } catch (error) {
    throw new NotFoundError('time não encontrado');
  }
}

export async function getAllTeams() {
  const teams = await teamRepository.getAllTeams();

  const formattedTeams = teams.reduce<{ [key: string]: { owner: string; pokemons: any[] } }>((acc, team) => {
    acc[team.id.toString()] = {
      owner: team.owner,
      pokemons: team.pokemons.map((pokemon_team) => ({
        id: pokemon_team.pokemon.pokedex_id,
        name: pokemon_team.pokemon.name,
        weight: pokemon_team.pokemon.weight,
        height: pokemon_team.pokemon.height,
      })),
    };
    return acc;
  }, {});

  return formattedTeams;
}

export async function deleteUserTeamById(id: number) {
  await teamRepository.deleteById(id);
}

function normalizePokemonList(team: any){
  return team.pokemons.map((pokemonTeam: any) => ({
    id: pokemonTeam.pokemon.pokedex_id,
    name: pokemonTeam.pokemon.name,
    height: pokemonTeam.pokemon.height,
    weight: pokemonTeam.pokemon.weight,
  }));
}
