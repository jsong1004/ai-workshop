
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} AI Workshop. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Startup Consulting Inc. | 1100 NE Campus Pkwy #200, Seattle, WA 98105
        </p>
      </div>
    </footer>
  );
};
