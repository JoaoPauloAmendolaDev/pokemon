import { prisma } from '@/config';
import { pokemon_team } from '@prisma/client';

async function getById(id: number) {
  const pokemon = await prisma.pokemon_team.findFirst({
    where: {
      id,
    },
  });

  return pokemon;
}

async function saveMany(pokemon_team: pokemon_team[]) {
  await prisma.pokemon_team.createMany({
    data: pokemon_team,
  });
}

async function deleteById(id: number) {
  await prisma.pokemon_team.delete({
    where: { id },
  });
}

const teamRepository = {
  getById,
  saveMany,
  deleteById,
};

export default teamRepository;
