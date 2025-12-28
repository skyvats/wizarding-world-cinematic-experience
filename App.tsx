
import React, { useState, useEffect } from 'react';
import { Character, View } from './types';
import { AudioProvider, useAudio } from './components/AudioProvider';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { CharacterDetailView } from './components/CharacterDetailView';
import { SpellsArchive } from './components/SpellsArchive';
import { AboutView } from './components/AboutView';
import { fetchAllCharacters } from './services/hpApi';
import { CHARACTERS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [allCharacters, setAllCharacters] = useState<Partial<Character>[]>([]);

  useEffect(() => {
    const init = async () => {
      const chars = await fetchAllCharacters();
      setAllCharacters(chars);
    };
    init();
  }, []);

  const handleCharacterSelect = (char: Partial<Character>) => {
    // If it's a minimal character from the directory, we'll cast it to Character
    // and the DetailView will handle generating the missing biography.
    setSelectedCharacter(char as Character);
    setCurrentView('character');
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    if (view !== 'character') setSelectedCharacter(null);
  };

  return (
    <AudioProvider>
      <div className="min-h-screen flex flex-col bg-background-dark text-white font-display overflow-x-hidden">
        {/* Magic Particles */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="particle" 
              style={{ 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 8}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                '--random-x': Math.random().toString() 
              } as any}
            ></div>
          ))}
        </div>

        <Header 
          currentView={currentView} 
          onNavigate={handleNavigate} 
          allCharacters={allCharacters} 
          onCharacterSelect={handleCharacterSelect}
        />

        <main className="flex-grow relative z-10">
          {currentView === 'home' && <HomeView onCharacterSelect={handleCharacterSelect} />}
          {currentView === 'character' && selectedCharacter && (
            <CharacterDetailView character={selectedCharacter} onBack={() => handleNavigate('home')} />
          )}
          {currentView === 'spells' && <SpellsArchive />}
          {currentView === 'about' && <AboutView />}
        </main>

        <footer className="relative z-20 w-full border-t border-white/10 bg-[#0d0c09] py-16 px-10 text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {['Privacy', 'Terms', 'AdChoices', 'Cookies'].map((t) => (
              <span key={t} className="text-gray-600 hover:text-primary cursor-pointer transition-colors text-[10px] tracking-widest uppercase font-bold">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 text-primary mb-4">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span className="text-xs font-serif italic">The Magic Never Ends.</span>
          </div>
          <p className="text-gray-700 text-[9px] tracking-widest uppercase">
            © {new Date().getFullYear()} Wizarding World Cinematic Experience. Fan-made project. Made by Akash Ranjan.
          </p>


        </footer>
      </div>
    </AudioProvider>
  );
};

export default App;
