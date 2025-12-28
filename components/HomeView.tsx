
import React from 'react';
import { CHARACTERS } from '../constants';
import { Character } from '../types';
import { useAudio } from './AudioProvider';

interface HomeViewProps {
  onCharacterSelect: (char: Character) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onCharacterSelect }) => {
  const { playSound } = useAudio();

  const handleSelect = (char: Character) => {
    playSound('whoosh');
    onCharacterSelect(char);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 w-full h-[700px] z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/70 to-transparent z-10"></div>
        <img 
          alt="Hogwarts" 
          className="w-full h-full object-cover object-top animate-fog opacity-40 scale-110" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRtjhDZvPzPneqXWY1bHQrfF9wIfmL0UUD6ub2QGfOZJwwPyTHLoQXRj9uLtwUG7eukvG6bWsF5kLYMAzAr1WavXw-e3uoD23H0l2JTnKXrOvMadLdtRia20g9mq-5-BtoNiGbUuitU3R5_NQTMd1JJOvN-SJP2XFJUa6d2LL7k7oJ7dSEbkSJb_JQtdwBPT8ESuE1C6F6fxHitkciHVNGWJXdPFw8oLhzaBVg8l2a-KN8oJZB5O1UcuYWjK3v7JMt1mfyzqtRg9hM" 
        />
        <div className="fog-layer"></div>
      </div>

      <main className="relative z-20 flex-grow flex flex-col items-center justify-start pt-32 pb-32 px-4 md:px-8">
        <div className="text-center max-w-5xl mb-24 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">Mischief Managed</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tight font-serif drop-shadow-2xl">
            LEGENDS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">OF MAGIC</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light font-body italic">
            "We’ve all got both light and dark inside us. What matters is the part we choose to act on."
          </p>
        </div>

        {/* Featured Grid */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {CHARACTERS.map((char) => (
            <div 
              key={char.id}
              onClick={() => handleSelect(char)}
              onMouseEnter={() => playSound('chime')}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-background-card/20 backdrop-blur-md transition-all duration-700 hover:scale-105 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(244,202,37,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
              <img 
                alt={char.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src={char.image} 
              />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-center transform transition-all duration-500 group-hover:-translate-y-4">
                <h3 className="text-white font-bold text-2xl tracking-wide group-hover:text-primary transition-colors font-serif mb-2">{char.name}</h3>
                <span className="text-primary/70 text-[9px] uppercase tracking-[0.3em] font-bold">{char.house}</span>
                <div className="h-0.5 w-0 bg-primary mx-auto mt-4 transition-all duration-700 group-hover:w-12"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
