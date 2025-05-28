import React from 'react';
import { CalendarIcon } from './icons/CalendarIcon';
import { LocationIcon } from './icons/LocationIcon';

export const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 via-sky-900/30 to-slate-900 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Decorative background pattern or image could go here */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 animate-pulse">
          AI Workshop
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Gain hands-on experience to utilize AI for enhancing your daily life, personal projects, and business endeavors.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 mb-12">
          <div className="flex items-center text-slate-300 text-lg">
            <CalendarIcon className="w-7 h-7 mr-3 text-sky-400" />
            <span>June 7th (Saturday) @ 1:00 PM</span>
          </div>
          <div className="flex items-center text-slate-300 text-lg">
            <LocationIcon className="w-7 h-7 mr-3 text-sky-400" />
            <span>Washington Education Institute</span>
          </div>
        </div>
        <p className="text-slate-400 text-md mb-4">
          15405 SE 37th St, Bellevue, WA 98006
        </p>
        <p className="text-lg font-semibold text-emerald-300 mb-12 animate-bounce">
          Free event – register now to reserve your seat!
        </p>
        {/* The "Register Now" button that was previously here has been removed.
            The registration section can be accessed by scrolling down or through a navigation link if one existed.
        */}
      </div>
    </section>
  );
};
