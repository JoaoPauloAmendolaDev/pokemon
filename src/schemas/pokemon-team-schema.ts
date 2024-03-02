import Joi from 'joi';

export const pokemonTeamCreationSchema = Joi.object({
  owner: Joi.string()
    .required()
    .trim()
    .regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/) // Permitir nomes compostos e evitar números e caracteres especiais
    .min(3)
    .max(30),
  pokemons: Joi.array()
    .items(
      Joi.string()
        .trim()
        .required()
        .regex(/^[A-Za-z]+$/), //evitar números e caracteres especiais,
    )
    .min(1)
    .max(6)
    .required(),
});
