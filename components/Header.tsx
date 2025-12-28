
import React from 'react';
import { View, Character } from '../types';
import { useAudio } from './AudioProvider';
import { CharacterMenu } from './CharacterMenu';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
  allCharacters: Partial<Character>[];
  onCharacterSelect: (char: Partial<Character>) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, allCharacters, onCharacterSelect }) => {
  const { playSound } = useAudio();

  const handleNav = (view: View) => {
    playSound('sparkle');
    onNavigate(view);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 border-b border-white/10 bg-[#181711]/90 backdrop-blur-md">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => handleNav('home')}
      >
        <span className="material-symbols-outlined text-primary text-3xl group-hover:animate-pulse">auto_awesome</span>
        <h2 className="text-white text-lg font-bold tracking-[0.2em] uppercase font-serif hidden sm:block">Wizarding World</h2>
      </div>
      
      <nav className="flex items-center gap-4 md:gap-10">
        <div className="hidden md:flex items-center gap-10">
          {[
            { id: 'home', label: 'Home' },
            { id: 'spells', label: 'Spells' },
            { id: 'about', label: 'About' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id as View)}
              className={`text-sm font-medium tracking-widest transition-all duration-300 relative py-1 ${
                currentView === item.id 
                  ? 'text-primary' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label.toUpperCase()}
              {currentView === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_8px_rgba(244,202,37,0.8)]"></span>
              )}
            </button>
          ))}
        </div>

        <CharacterMenu characters={allCharacters} onSelect={onCharacterSelect} />
      </nav>

      <button className="hidden sm:block bg-primary hover:bg-yellow-400 text-magical-dark px-6 py-2 rounded font-bold text-xs tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(244,202,37,0.3)]">
        HOGWARTS
      </button>
    </header>
  );
};
