
import React, { useState, useRef, useEffect } from 'react';
import { Character } from '../types';
import { useAudio } from './AudioProvider';

interface CharacterMenuProps {
  characters: Partial<Character>[];
  onSelect: (char: Partial<Character>) => void;
}

export const CharacterMenu: React.FC<CharacterMenuProps> = ({ characters, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { playSound } = useAudio();
  const menuRef = useRef<HTMLDivElement>(null);

  const filtered = characters.filter(c => 
    c.name?.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 50);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = window.innerWidth < 768 ? 'hidden' : '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => { setIsOpen(!isOpen); playSound('chime'); }}
        className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all group"
      >
        <span className="material-symbols-outlined text-primary text-lg sm:text-xl">menu_book</span>
        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-primary uppercase hidden xs:block">The Directory</span>
      </button>

      {isOpen && (
        <div className="fixed md:absolute top-0 md:top-full left-0 md:left-auto right-0 mt-0 md:mt-4 w-full md:w-[350px] h-full md:h-auto max-h-screen md:max-h-[600px] bg-background-card border-b md:border border-white/10 md:rounded-3xl shadow-2xl backdrop-blur-3xl z-[100] flex flex-col overflow-hidden animate-fade-in-up">
          {/* Mobile Header */}
          <div className="p-6 md:hidden flex justify-between items-center border-b border-white/5">
             <h3 className="text-primary font-serif font-bold text-xl uppercase tracking-widest">Wizards List</h3>
             <button onClick={() => setIsOpen(false)} className="material-symbols-outlined text-gray-500">close</button>
          </div>

          <div className="p-6 border-b border-white/5">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-sm">search</span>
              <input 
                autoFocus
                type="text"
                placeholder="Search the wizarding world..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/60 border border-primary/20 rounded-xl pl-12 pr-4 py-3 text-sm focus:border-primary outline-none text-white placeholder-gray-600"
              />
            </div>
          </div>

          <div className="flex-grow overflow-y-auto py-4 px-2 scrollbar-thin">
            {filtered.map(char => (
              <div 
                key={char.id}
                onClick={() => { playSound('whoosh'); onSelect(char); setIsOpen(false); }}
                className="mx-2 px-4 py-3 hover:bg-primary/5 cursor-pointer flex items-center gap-4 group rounded-xl border-b border-white/0 hover:border-primary/10 transition-all"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
                   <img src={char.image} alt={char.name} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-md font-bold text-gray-200 group-hover:text-primary transition-colors font-serif">{char.name}</span>
                  <span className="text-[9px] text-gray-600 uppercase tracking-widest">{char.house}</span>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="p-12 text-center text-gray-500 text-xs italic space-y-2">
                <span className="material-symbols-outlined text-4xl block mb-2 opacity-20">history_edu</span>
                No wizard found in the records.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
