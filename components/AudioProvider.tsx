
import React, { createContext, useContext, useCallback } from 'react';

type SoundType = 'whoosh' | 'sparkle' | 'chime' | 'deep_magic' | 'page_turn';

const SOUND_URLS: Record<SoundType, string> = {
  whoosh: 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3', // Magical spell whoosh
  sparkle: 'https://assets.mixkit.co/active_storage/sfx/2012/2012-preview.mp3', // Celestial sparkle
  chime: 'https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3', // Light chime
  deep_magic: 'https://assets.mixkit.co/active_storage/sfx/2014/2014-preview.mp3', // Low resonant magic
  page_turn: 'https://assets.mixkit.co/active_storage/sfx/1103/1103-preview.mp3', // Paper sound
};

interface AudioContextType {
  playSound: (type: SoundType) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const playSound = useCallback((type: SoundType) => {
    const audio = new Audio(SOUND_URLS[type]);
    audio.volume = 0.35;
    audio.play().catch(() => {});
  }, []);

  return (
    <AudioContext.Provider value={{ playSound }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
};
