import { Request, Response } from 'express';
import { createTeam } from '@/services/pokemon-team-service';
import httpStatus from 'http-status';
import { NotFoundError } from '@/errors/not-found-error';
import { ConflictError } from '@/errors/conflict-error';

export async function pokemonTeamCreation(req: Request, res: Response) {
  const { pokemons, owner } = req.body;

  try {
    let id = await createTeam(pokemons, owner);
    return res.status(httpStatus.OK).json({ message: `Time de Pokémon criado com sucesso. id do time = ${id}` });
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'Pokemon não encontrado' });
    } else if (error instanceof ConflictError) {
      return res.status(httpStatus.CONFLICT).json({ message: 'Usuário já existente' });
    } else {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno do servidor' });
    }
  }
}
