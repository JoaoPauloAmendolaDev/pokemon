export default class Pokemon {
    pokedex_id: number;
    name: string;
    height: number;
    weight: number;
  
    constructor({ pokedex_id, name, height, weight }: { pokedex_id: number; name: string; height: number; weight: number }) {
      this.pokedex_id = pokedex_id;
      this.name = name;
      this.height = height;
      this.weight = weight;
    }
  }
  