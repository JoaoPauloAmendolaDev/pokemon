import { getAllTeams } from '@/services/team-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAll(__req: Request, res: Response) {
  const teams = await getAllTeams();
  res.status(httpStatus.OK).json(teams);
}
