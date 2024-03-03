import { ConflictError } from '@/errors/conflict-error';
import teamRepository from '@/repositories/team-repository';

export async function createUserTeam(owner: string) {
  try {
    let { id } = await teamRepository.create(owner);
    return id;
  } catch (error) {
    throw new ConflictError('Usuário já existente');
  }
}

export async function getAllTeams() {
    const teams = await teamRepository.getAllTeams();
  
    const formattedTeams = teams.reduce<{ [key: string]: { owner: string; pokemons: any[]; } }>((acc, team) => {
      acc[team.id.toString()] = { 
        owner: team.owner,
        pokemons: team.pokemons.map((pokemon_team) => ({
          id: pokemon_team.pokemon.id,
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
