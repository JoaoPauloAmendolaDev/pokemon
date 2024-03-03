import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function getById(id: number) {
  const pokemon = await prisma.pokemon_team.findFirst({
    where: {
      id,
    },
  });

  return pokemon;
}

async function saveMany(pokemon_team: Prisma.pokemon_teamUncheckedCreateInput[]) {
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
