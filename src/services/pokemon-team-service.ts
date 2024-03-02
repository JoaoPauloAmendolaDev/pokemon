import { NotFoundError } from '@/errors/not-found-error';
import { fetchPokemonData } from '@/utils/populateUtil';
import { createUserTeam,deleteUserTeamById } from '@/services/team-service';
import pokemonTeamRepository from '@/repositories/pokemon-team-repository';
import { Prisma } from '@prisma/client';

export async function createTeam(team: string[], owner: string) {
  let pokemonsTeamEntries: Prisma.pokemon_teamUncheckedCreateInput[] = [];
  let teamId;

  teamId = await createUserTeam(owner);
   try {
    for (let i = 0; i < team.length; i++) {
      let pokedexId = await fetchPokemonData(team[i]);

      console.log(pokedexId)
      pokemonsTeamEntries.push({
        pokemon_id: pokedexId,
        team_id: teamId,
      });
    }

    await pokemonTeamRepository.saveMany(pokemonsTeamEntries);
  } catch (error) {
    await deleteUserTeamById(teamId);
    throw new NotFoundError('Um ou mais Pokémons não foram encontrados.');
  }
  return teamId;
}
