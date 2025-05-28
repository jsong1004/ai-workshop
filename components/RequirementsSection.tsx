
import React from 'react';
import { LaptopIcon } from './icons/LaptopIcon';

export const RequirementsSection: React.FC = () => {
  return (
    <section id="requirements" className="mt-12 mb-4 bg-slate-800/60 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-slate-700 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 flex items-center justify-center">
        <LaptopIcon className="w-8 h-8 mr-3 text-sky-400" />
        Requirements
      </h2>
      <div className="text-center">
        <p className="text-xl text-slate-200 font-semibold mb-2">
          Bring Your Own Laptop <span role="img" aria-label="laptop"></span>
        </p>
        <p className="text-slate-400">
          We don't provide or lend laptops for this workshop. Please ensure you have a personal laptop to participate fully in the hands-on sessions.
        </p>
      </div>
    </section>
  );
};
