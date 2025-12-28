
import React, { useState, useEffect } from 'react';
import { Character, Spell } from '../types';
import { SPELLS } from '../constants';
import { useAudio } from './AudioProvider';
import { getMagicalInsight, generateCharacterProfile, speakSpell } from '../services/geminiService';

interface CharacterDetailViewProps {
  character: Character;
  onBack: () => void;
}

const HOUSE_COLORS: Record<string, string> = {
  'Gryffindor': 'text-red-500 border-red-500 bg-red-500/10',
  'Slytherin': 'text-green-500 border-green-500 bg-green-500/10',
  'Ravenclaw': 'text-blue-500 border-blue-500 bg-blue-500/10',
  'Hufflepuff': 'text-yellow-500 border-yellow-500 bg-yellow-500/10',
  'None': 'text-primary border-primary bg-primary/10',
};

export const CharacterDetailView: React.FC<CharacterDetailViewProps> = ({ character, onBack }) => {
  const { playSound } = useAudio();
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);
  const [dynamicBio, setDynamicBio] = useState<string[]>([]);
  const [dynamicAbilities, setDynamicAbilities] = useState<string[]>([]);
  const [dynamicSpellIds, setDynamicSpellIds] = useState<string[]>([]);
  const [loadingProfile, setLoadingProfile] = useState(true);

  // CRITICAL: Reset states when character ID changes to prevent stale data
  useEffect(() => {
    window.scrollTo(0, 0);
    setInsight(null);
    setDynamicBio(character.biography || []);
    setDynamicAbilities(character.abilities || []);
    setDynamicSpellIds(character.signatureSpells || []);
    
    const needsLoading = !character.biography || character.biography.length === 0;
    setLoadingProfile(needsLoading);
    
    if (needsLoading) {
      loadFullProfile();
    }
  }, [character.id]);

  const loadFullProfile = async () => {
    const profile = await generateCharacterProfile(character.name);
    setDynamicBio(profile.biography);
    setDynamicAbilities(profile.abilities);
    setDynamicSpellIds(profile.signatureSpells);
    setLoadingProfile(false);
  };

  const fetchInsight = async () => {
    playSound('deep_magic');
    setLoadingInsight(true);
    const text = await getMagicalInsight(character.name);
    setInsight(text);
    setLoadingInsight(false);
  };

  const handleSpeak = async (incantation: string) => {
    playSound('sparkle');
    await speakSpell(incantation);
  };

  const displaySpells = SPELLS.filter(s => dynamicSpellIds.some(ds => ds.toLowerCase() === s.id.toLowerCase()));
  const houseTheme = HOUSE_COLORS[character.house] || HOUSE_COLORS['None'];

  return (
    <div className="min-h-screen bg-background-dark text-white animate-fade-in-up">
      {/* Hero Header */}
      <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-105" 
          style={{ backgroundImage: `url("${character.bannerImage || character.image}")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/30 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 px-6">
          <div className="max-w-[1100px] w-full">
            <button 
              onClick={() => { playSound('page_turn'); onBack(); }}
              className="flex items-center gap-2 text-primary hover:text-white transition-all mb-10 group"
            >
              <span className="material-symbols-outlined transform group-hover:translate-x-[-6px] transition-transform">arrow_back</span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase">The Great Hall Archives</span>
            </button>
            
            <h1 className="text-white text-6xl md:text-9xl font-black leading-none tracking-tight font-serif drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-4">
              {character.name}
            </h1>
            <div className="flex items-center gap-6 mb-8">
               <span className={`px-4 py-1.5 rounded-md border text-xs font-bold tracking-[0.4em] uppercase font-serif ${houseTheme}`}>
                {character.house}
              </span>
              <span className="text-gray-400 text-sm italic font-light">"{character.quote || 'No words recorded'}"</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-5 py-2 rounded-full border border-primary/20 bg-black/40 backdrop-blur-md text-[10px] text-primary-hover uppercase tracking-widest font-bold">
                Portrayed by {character.actor}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1100px] mx-auto px-6 -mt-16 relative z-10 pb-40">
        {/* Core Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24">
          {[
            { label: 'House', value: character.house, icon: 'shield_moon' },
            { label: 'Patronus', value: character.patronus || 'Unknown', icon: 'pets' },
            { label: 'Status', value: character.status || 'Alive', icon: 'auto_awesome' }
          ].map((stat, idx) => (
            <div key={idx} className="parchment magic-border rounded-3xl p-10 group transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">{stat.label}</span>
                <span className="material-symbols-outlined text-primary group-hover:animate-pulse">{stat.icon}</span>
              </div>
              <p className="text-white text-3xl font-bold font-serif tracking-wide">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Bio Column */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-white text-4xl font-bold font-serif mb-10 border-b border-white/5 pb-4">Biography</h2>
              {loadingProfile ? (
                <div className="space-y-6">
                  {[1, 2, 3].map(i => <div key={i} className="h-6 bg-white/5 rounded-lg w-full animate-pulse"></div>)}
                </div>
              ) : (
                <div className="text-gray-300 font-light text-xl leading-relaxed space-y-8 font-body">
                  {dynamicBio.map((para, i) => <p key={i}>{para}</p>)}
                </div>
              )}
            </section>

            <section>
              <h2 className="text-white text-4xl font-bold font-serif mb-10 border-b border-white/5 pb-4">Signature Spells</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displaySpells.length > 0 ? displaySpells.map((spell) => (
                  <div key={spell.id} className="parchment magic-border p-8 rounded-3xl group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white font-serif group-hover:text-primary transition-colors">{spell.name}</h3>
                        <span className="text-[10px] text-primary uppercase font-bold tracking-[0.2em]">{spell.type}</span>
                      </div>
                      <button 
                        onClick={() => handleSpeak(spell.incantation)}
                        className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all"
                      >
                        <span className="material-symbols-outlined">volume_up</span>
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{spell.description}</p>
                  </div>
                )) : (
                  <div className="p-10 border border-dashed border-white/10 rounded-3xl text-center text-gray-500 italic">
                    Magical incantations are still being cataloged...
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-12">
            <div className="parchment magic-border p-10 rounded-[40px] text-center space-y-8">
              <span className="material-symbols-outlined text-primary text-6xl">auto_awesome</span>
              <h3 className="text-white font-bold text-2xl font-serif">Magical Insights</h3>
              <p className="text-gray-500 text-sm italic">Revelio! Discover a hidden truth about this wizard.</p>
              {insight ? (
                <div className="bg-black/40 p-8 rounded-2xl text-gray-200 text-sm leading-relaxed border border-primary/20 text-left">
                  {insight}
                </div>
              ) : (
                <button 
                  disabled={loadingInsight}
                  onClick={fetchInsight}
                  className="w-full py-4 rounded-xl bg-primary text-magical-dark font-black text-xs tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-primary/10 disabled:opacity-50"
                >
                  {loadingInsight ? 'INCANTING...' : 'REVEAL TRUTH'}
                </button>
              )}
            </div>

            <div className="parchment magic-border p-10 rounded-[40px]">
              <h3 className="text-white font-bold text-xl font-serif mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                Wand Core
              </h3>
              <div className="space-y-8">
                {[
                  { k: 'Wood', v: character.wand.wood },
                  { k: 'Core', v: character.wand.core },
                  { k: 'Length', v: character.wand.length },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{item.k}</span>
                    <span className="text-white text-lg">{item.v || 'Unknown'}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="parchment magic-border p-10 rounded-[40px]">
               <h3 className="text-white font-bold text-xl font-serif mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">psychology</span>
                Abilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {dynamicAbilities.map((ab, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5">
                    {ab}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
