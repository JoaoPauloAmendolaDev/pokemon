import { Router } from 'express';

import { pokemonTeamCreationSchema } from '../schemas';
import { validateBody } from '../middlewares';
import { pokemonTeamCreation } from '@/controllers';

const pokemonTeamRouter = Router();

pokemonTeamRouter.post('/', validateBody(pokemonTeamCreationSchema), pokemonTeamCreation);

export { pokemonTeamRouter };
