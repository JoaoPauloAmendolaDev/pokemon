import { prisma } from '@/config';

async function getTeamById(teamId: number) {
  const team = await prisma.team.findUnique({
    where: {
      id: teamId,
    },
    select: {
      owner: true,
      pokemons: {
        select: {
          pokemon: {
            select: {
              pokedex_id: true,
              name: true,
              height: true,
              weight: true,
            },
          },
        },
      },
    },
  });

  return team;
}

async function getAllTeams() {
  return await prisma.team.findMany({
    include: {
      pokemons: {
        include: {
          pokemon: true,
        },
      },
    },
  });
}

async function create(owner: string) {
  return await prisma.team.create({
    data: { owner },
  });
}

async function deleteById(id: number) {
  return await prisma.team.delete({
    where: { id },
  });
}

const teamRepository = {
  getTeamById,
  getAllTeams,
  create,
  deleteById,
};

export default teamRepository;
