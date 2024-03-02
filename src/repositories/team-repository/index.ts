import { prisma } from '@/config';

async function getTeamById(teamId: number) {
  const team = await prisma.team.findUnique({
    where: {
      id: teamId,
    },
    include: {
      pokemons: {
        include: {
          pokemon: true,
        },
      },
    },
  });

  return team;
}

async function create(username: string) {
  return await prisma.team.create({
    data: { username },
  });
}

async function deleteById(id: number){
  return await prisma.team.delete({
    where: {id}
  })
}

const teamRepository = {
  getTeamById,
  create,
  deleteById
};

export default teamRepository;
