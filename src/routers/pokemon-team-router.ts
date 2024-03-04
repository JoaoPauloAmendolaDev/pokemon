import { Router } from 'express';

import { pokemonTeamCreationSchema } from '../schemas';
import { validateBody } from '../middlewares';
import { pokemonTeamCreation, getAll, getOneTeam } from '@/controllers';

const pokemonTeamRouter = Router();

pokemonTeamRouter.post('/', validateBody(pokemonTeamCreationSchema), pokemonTeamCreation);
pokemonTeamRouter.get('/', getAll);
pokemonTeamRouter.get('/:name', getOneTeam);

export { pokemonTeamRouter };
