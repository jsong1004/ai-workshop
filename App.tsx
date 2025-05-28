import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ContentSection } from './components/ContentSection';
import { RequirementsSection } from './components/RequirementsSection';
import { RegistrationForm } from './components/RegistrationForm';
import { ConfirmationMessage } from './components/ConfirmationMessage';
import { Footer } from './components/Footer';
import { RegistrationData } from './types';
import { sendRegistrationEmail } from './services/emailService';

const App: React.FC = () => {
  const [registrationDetails, setRegistrationDetails] = useState<RegistrationData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegistrationSubmit = useCallback(async (data: RegistrationData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API call
      await sendRegistrationEmail(data);
      setRegistrationDetails(data);
      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to submit registration. Please try again.");
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ContentSection />
          <RequirementsSection />
          <section id="register" className="mt-16 bg-slate-800/50 p-8 rounded-xl shadow-2xl backdrop-blur-md border border-slate-700">
            <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              Register for the Workshop
            </h2>
            {isSubmitted && registrationDetails ? (
              <ConfirmationMessage details={registrationDetails} />
            ) : (
              <RegistrationForm onSubmit={handleRegistrationSubmit} isLoading={isLoading} />
            )}
            {error && <p className="mt-4 text-center text-red-400">{error}</p>}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;