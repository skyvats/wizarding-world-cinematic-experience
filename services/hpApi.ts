
import { Character } from '../types';

export const fetchAllCharacters = async (): Promise<Partial<Character>[]> => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await response.json();
    return data.map((item: any) => ({
      id: item.id,
      name: item.name,
      house: item.house || 'None',
      patronus: item.patronus || 'Unknown',
      actor: item.actor || 'Unknown',
      image: item.image || `https://picsum.photos/seed/${item.id}/400/600`,
      wand: {
        wood: item.wand?.wood || 'Unknown',
        core: item.wand?.core || 'Unknown',
        length: item.wand?.length ? `${item.wand.length} inches` : 'Unknown',
        flexibility: 'Unknown'
      },
      appearances: [],
      abilities: [],
      signatureSpells: ['expelliarmus'], // Fallback
    }));
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    return [];
  }
};
