import { prisma } from "@/config";
import { pokemon } from "@prisma/client";

type PokemonCreateInput = {
  name: string;
  pokedex_id: number;
  height: number;
  weight: number;
};

async function getByName(name: string): Promise<pokemon> {
  const pokemon = await prisma.pokemon.findFirst({
    where: {
      name,
    },
  });

  return pokemon;
}

async function save(pokemon: PokemonCreateInput){
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