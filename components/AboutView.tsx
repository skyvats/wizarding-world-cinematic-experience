
import React from 'react';

export const AboutView: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 animate-fade-in-up">
      <div className="max-w-[800px] w-full bg-background-card border border-white/10 rounded-[40px] p-12 relative overflow-hidden">
        {/* Magic glow background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center gap-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl group-hover:bg-primary/50 transition-all"></div>
            <img 
              src="https://picsum.photos/seed/wizard/200/200" 
              alt="Developer Avatar" 
              className="w-40 h-40 rounded-full border-4 border-primary relative z-10 p-1 bg-background-dark object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black font-serif text-white tracking-wide">THE ARCHITECT</h1>
            <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Senior Magic Engineer</p>
          </div>

          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
            Crafting digital experiences that bridge the mundane and the magical. Specializing in high-end React interfaces and AI-driven storytelling.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'GitHub', icon: 'code', url: '#' },
              { label: 'LinkedIn', icon: 'person', url: '#' },
              { label: 'Portfolio', icon: 'terminal', url: '#' },
              { label: 'Email', icon: 'mail', url: '#' }
            ].map((link, i) => (
              <a 
                key={i}
                href={link.url}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="text-sm font-bold tracking-widest text-gray-200">{link.label.toUpperCase()}</span>
              </a>
            ))}
          </div>

          <div className="pt-12 border-t border-white/10 w-full flex flex-col items-center gap-4">
            <p className="text-gray-500 text-[10px] tracking-[0.5em] uppercase">Built with magic and React 18</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm animate-pulse">auto_awesome</span>
              <span className="text-gray-400 font-serif text-xs">Mischief Managed.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
