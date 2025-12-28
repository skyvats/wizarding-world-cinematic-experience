
import { GoogleGenAI, Modality, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface CharacterProfile {
  biography: string[];
  abilities: string[];
  signatureSpells: string[];
}

export const getMagicalInsight = async (characterName: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a wizard historian. Provide a short (2-3 sentence) fascinating, slightly unknown, or "magical" fact about ${characterName} from the Wizarding World. Use a storytelling tone.`,
    });
    return response.text || "The archives are currently sealed.";
  } catch (error) {
    return "A magical disruption occurred.";
  }
};

export const generateCharacterProfile = async (characterName: string): Promise<CharacterProfile> => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a detailed magical profile for the Harry Potter character: ${characterName}. Include a 3-paragraph biography, a list of 4 magical abilities, and a list of 3 signature spell IDs (use lowercase names like 'expelliarmus', 'lumos', 'sectumsempra', or common names if they aren't in standard list).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            biography: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Three detailed paragraphs about the character's life."
            },
            abilities: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Four specific magical talents or traits."
            },
            signatureSpells: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Three spells most associated with them."
            }
          },
          required: ["biography", "abilities", "signatureSpells"]
        }
      }
    });
    
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Profile Gen Error:", error);
    return {
      biography: ["The history of this individual is shrouded in mystery."],
      abilities: ["Unknown Magic", "Stealth", "Mystery"],
      signatureSpells: ["lumos"]
    };
  }
};

export const speakSpell = async (incantation: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Speak this wizarding incantation with power, authority, and a slight ethereal echo: ${incantation}!` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Charon' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const bytes = decodeBase64(base64Audio);
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const audioBuffer = await decodeAudioData(bytes, ctx, 24000, 1);
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      source.start();
    }
  } catch (error) {
    console.error("TTS Error:", error);
  }
};

function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}
