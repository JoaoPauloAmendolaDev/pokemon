import { NotFoundError } from '@/errors/not-found-error';
import { getAllTeams, getOne } from '@/services/team-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAll(__req: Request, res: Response) {
  const teams = await getAllTeams();
  res.status(httpStatus.OK).json(teams);
}

export async function getOneTeam(req: Request, res: Response) {
  const name = req.params.name;

  try {
    const team = await getOne(name);
    res.status(httpStatus.OK).json(team);
  } catch (error) {
    if (error instanceof NotFoundError) res.status(httpStatus.NOT_FOUND).json({ message: 'time não encontrado' });
  }
}
