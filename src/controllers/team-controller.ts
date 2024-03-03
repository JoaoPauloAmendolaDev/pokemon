import { NotFoundError } from '@/errors/not-found-error';
import { getAllTeams, getOne } from '@/services/team-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAll(__req: Request, res: Response) {
  const teams = await getAllTeams();
  res.status(httpStatus.OK).json(teams);
}

export async function getOneTeam(req: Request, res: Response) {
  const id = req.params.id;
  if (!Number.isInteger(+id)) return res.status(httpStatus.BAD_REQUEST).json({ message: 'id de time inválido' });

  try {
    const team = await getOne(+id);
    res.status(httpStatus.OK).json(team);
  } catch (error) {
    if (error instanceof NotFoundError) res.status(httpStatus.NOT_FOUND).json({ message: 'time não encontrado' });
  }
}
