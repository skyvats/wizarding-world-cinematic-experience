
export interface Spell {
  id: string;
  name: string;
  incantation: string;
  type: 'Charm' | 'Curse' | 'Hex' | 'Jinx' | 'Transfiguration';
  description: string;
  icon: string;
  imageUrl?: string;
}

export interface Wand {
  wood: string;
  core: string;
  length: string;
  flexibility: string;
}

export interface Character {
  id: string;
  name: string;
  house: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | 'None';
  houseColor: string;
  patronus: string;
  status: 'Alive' | 'Deceased' | 'Unknown';
  quote: string;
  actor: string;
  biography: string[];
  wand: Wand;
  appearances: string[];
  abilities: string[];
  signatureSpells: string[];
  image: string;
  bannerImage: string;
}

export type View = 'home' | 'character' | 'spells' | 'about';
