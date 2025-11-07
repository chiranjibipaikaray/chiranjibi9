import { useEffect, useState } from 'react';

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div
      className={`fixed inset-0 bg-slate-900 flex items-center justify-center z-50 transition-opacity duration-500 ${
        isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-8 animate-fade-in">
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-slate-700 rounded-lg"></div>

          {/* Spinning ring with glow */}
          <div className="absolute inset-0 border-4 border-transparent border-t-emerald-400 border-r-emerald-400 rounded-lg animate-spin drop-shadow-[0_0_8px_#34d399]"></div>

          {/* Inner logo */}
          <div className="absolute inset-2 flex items-center justify-center">
            <span className="text-2xl font-bold text-emerald-400 animate-pulse">C•P</span>
          </div>
        </div>

        {/* Loading text with fade animation */}
        <p className="text-slate-400 font-mono text-sm tracking-widest animate-pulse">Initializing...</p>
      </div>
    </div>
  );
};

export default Loader;
