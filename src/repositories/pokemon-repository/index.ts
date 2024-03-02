import { prisma } from "@/config";
import { pokemon } from "@prisma/client";

async function getByName(name: string): Promise<pokemon> {
  const pokemon = await prisma.pokemon.findFirst({
    where: {
      name,
    },
  });

  return pokemon;
}

async function save(pokemon: pokemon){
  await prisma.pokemon.create({
    data: pokemon
  },
  )
}

const teamRepository = {
    getByName,
    save

}

export default teamRepository;