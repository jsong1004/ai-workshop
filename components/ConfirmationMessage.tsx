import React from 'react';
import { RegistrationData } from '../types';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

interface ConfirmationMessageProps {
  details: RegistrationData;
}

export const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ details }) => {
  return (
    <div className="text-center p-6 md:p-10 bg-slate-700/50 rounded-xl shadow-lg border border-green-500/50">
      <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-6" />
      <h3 className="text-3xl font-semibold text-green-300 mb-4">Registration Successful!</h3>
      <p className="text-slate-300 mb-6 text-lg">
        Thank you for registering for the AI Workshop. We've received your details and look forward to seeing you!
      </p>
      <div className="text-left bg-slate-800 p-6 rounded-lg space-y-3 max-w-md mx-auto shadow-inner">
        <p className="text-slate-400"><strong className="text-sky-300">Name:</strong> {details.name}</p>
        <p className="text-slate-400"><strong className="text-sky-300">Email:</strong> {details.email}</p>
        <p className="text-slate-400"><strong className="text-sky-300">AI Experience:</strong> {details.experience}</p>
        <p className="text-slate-400"><strong className="text-sky-300">AI Usage:</strong> {details.usage}</p>
      </div>
      <p className="mt-8 text-slate-400 text-sm">
        An email with your registration details should be sent to the workshop admin. If you have any questions, please contact us.
      </p>
    </div>
  );
};