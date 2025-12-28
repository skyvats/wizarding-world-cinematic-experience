
import React, { useState } from 'react';
import { SPELLS } from '../constants';
import { useAudio } from './AudioProvider';

export const SpellsArchive: React.FC = () => {
  const { playSound } = useAudio();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Charm', 'Curse', 'Transfiguration', 'Hex', 'Jinx'];

  const filteredSpells = SPELLS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                          s.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || s.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-12 pb-32 px-6 animate-fade-in-up">
      <div className="max-w-[1200px] mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-white/10 pb-12 gap-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-black font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Spell Archive</h1>
            <p className="text-gray-400 text-xl max-w-2xl font-light">Explore the ancient incantations, charms, and hexes. Master the magic within.</p>
          </div>
          <span className="material-symbols-outlined text-8xl text-white/5 rotate-12 hidden md:block">menu_book</span>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">search</span>
              <input 
                type="text"
                placeholder="Search for a spell by name or effect..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-16 bg-background-card border border-white/10 rounded-2xl pl-16 pr-6 text-lg focus:ring-0 focus:border-primary transition-all outline-none"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { playSound('click'); setFilter(cat); }}
                className={`px-6 h-16 rounded-2xl font-bold text-xs tracking-widest whitespace-nowrap transition-all border ${
                  filter === cat 
                    ? 'bg-primary text-magical-dark border-primary' 
                    : 'bg-background-card text-gray-400 border-white/10 hover:border-white/30'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Spells Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpells.map((spell) => (
            <div 
              key={spell.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-background-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(244,202,37,0.15)] hover:-translate-y-2 cursor-pointer"
            >
              <div 
                className="h-56 w-full bg-cover bg-center relative" 
                style={{ backgroundImage: `url('${spell.imageUrl || 'https://picsum.photos/seed/' + spell.id + '/800/600'}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{spell.type}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8 pt-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors font-serif">{spell.name}</h3>
                  <span className="material-symbols-outlined text-gray-700 group-hover:text-primary transition-colors text-3xl">{spell.icon}</span>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">{spell.incantation}</p>
                <p className="text-gray-400 text-md leading-relaxed line-clamp-3">{spell.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
