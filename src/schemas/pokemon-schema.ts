import Joi from 'joi';

export const pokemonSchema = Joi.object({
  name: Joi.string().required(),
  weight: Joi.number().required(),
  height: Joi.number().required(),
  pokedex_id: Joi.number().required()
});
