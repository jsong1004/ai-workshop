
import React, { useState } from 'react';
import { RegistrationData, AIExperienceLevel } from '../types';

interface RegistrationFormProps {
  onSubmit: (data: RegistrationData) => void;
  isLoading: boolean;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit, isLoading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState<AIExperienceLevel>(AIExperienceLevel.NO_EXPERIENCE);
  const [usage, setUsage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!usage.trim()) newErrors.usage = "Please describe how you are using AI or plan to.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ name, email, experience, usage });
    }
  };

  const commonInputClasses = "w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors placeholder-slate-400";
  const errorTextClasses = "text-red-400 text-sm mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={commonInputClasses}
          placeholder="e.g. Jane Doe"
        />
        {errors.name && <p className={errorTextClasses}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={commonInputClasses}
          placeholder="e.g. jane.doe@example.com"
        />
        {errors.email && <p className={errorTextClasses}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-slate-300 mb-1">Your Experience with AI</label>
        <select
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value as AIExperienceLevel)}
          className={commonInputClasses}
        >
          {Object.values(AIExperienceLevel).map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="usage" className="block text-sm font-medium text-slate-300 mb-1">How are you using AI (or plan to)?</label>
        <textarea
          id="usage"
          value={usage}
          onChange={(e) => setUsage(e.target.value)}
          rows={4}
          className={commonInputClasses}
          placeholder="Describe your current or planned AI usage..."
        />
        {errors.usage && <p className={errorTextClasses}>{errors.usage}</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Register Now'
          )}
        </button>
      </div>
    </form>
  );
};
