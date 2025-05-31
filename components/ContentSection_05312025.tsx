import React from 'react';
import { PresentationIcon } from './icons/PresentationIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/60 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-slate-700 backdrop-blur-sm flex flex-col h-full">
    
    <h3 className="text-2xl font-semibold mb-4 text-sky-300">{title}</h3>
    <div className="text-slate-400 leading-relaxed space-y-4">{description}</div>
  </div>
);

const PresentationsDescription = () => (
  <>
    <p>
      Transform from amateur slides to professional presentations that captivate audiences and drive results. In this power-packed module, you'll discover how AI can become your creative partner, turning complex ideas into stunning visual stories that resonate with your audience.
    </p>

    <h4 className="text-xl font-semibold text-sky-400 mt-6 mb-3">Your Journey to Presentation Mastery:</h4>
    <ul className="space-y-3">
      <li>
        <span role="img" aria-label="magnifying glass">🔍</span> <strong>Intelligent Research &amp; Discovery</strong> - Uncover hidden insights and compelling data points that will make your presentations unforgettable, while AI does the heavy lifting of research across multiple sources.
      </li>
      <li>
        <span role="img" aria-label="writing hand">✍️</span> <strong>Crafting Irresistible Narratives</strong> - Learn the secret formula for presentation scripts that hook your audience from the first slide and keep them engaged until your final call-to-action.
      </li>
      <li>
        <span role="img" aria-label="lightning">⚡</span> <strong>Instant Presentation Generation</strong> - Watch in amazement as AI transforms your raw ideas into polished presentation frameworks in minutes, not hours.
      </li>
      <li>
        <span role="img" aria-label="target">🎯</span> <strong>Precision Content Refinement</strong> - Master advanced techniques for fine-tuning every element—from headline impact to visual hierarchy—ensuring your message hits the mark every time.
      </li>
      <li>
        <span role="img" aria-label="bar chart">📊</span> <strong>Dynamic Infographic Creation</strong> - Convert complex data into eye-catching infographics that tell stories at a glance and make your presentations social media-ready.
      </li>
      <li>
        <span role="img" aria-label="globe">🌐</span> <strong>One-Click Landing Page Magic</strong> - Seamlessly transform your presentation into a professional landing page that works 24/7 to promote your ideas or business.
      </li>
      <li>
        <span role="img" aria-label="rocket">🚀</span> <strong>Multi-Format Export Mastery</strong> - Learn to package your content for any platform—from boardroom presentations to social media campaigns to client proposals.
      </li>
    </ul>

    <h4 className="text-xl font-semibold text-sky-400 mt-6 mb-3"><span role="img" aria-label="tools">🛠️</span> Your AI-Powered Creative Arsenal:</h4>
    <div>
      <h5 className="text-lg font-semibold text-cyan-400 mb-2">Content Generation Powerhouses:</h5>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><strong>Google Gemini</strong> - Your research assistant and creative brainstorming partner.</li>
        <li><strong>Claude</strong> - Your sophisticated writing coach and content strategist.</li>
      </ul>
    </div>
    <div className="mt-3">
      <h5 className="text-lg font-semibold text-cyan-400 mb-2">Presentation Creation Platform:</h5>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><strong>Gamma.app</strong> - The revolutionary AI-first presentation tool that turns ideas into beautiful, interactive presentations with zero design experience required.</li>
      </ul>
    </div>

    <h4 className="text-xl font-semibold text-sky-400 mt-6 mb-3"><span role="img" aria-label="light bulb">💡</span> Real-World Impact:</h4>
    <p>
      By the end of this module, you'll have created a complete presentation ecosystem—from initial concept to final delivery—that you can immediately use to win clients, engage audiences, or launch your next big idea. No more staring at blank slides or struggling with design—just powerful, professional presentations that get results.
    </p>
  </>
);

export const ContentSection: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
        What You'll Master
      </h2>
      <div className="flex justify-center px-4"> {/* Centering container with horizontal padding */}
        <div className="w-full md:max-w-2xl lg:max-w-3xl"> {/* Adjusted max width for potentially longer content */}
          <FeatureCard
            icon={<PresentationIcon className="w-8 h-8" />}
            title="🎨 Creating Presentation & Marketing Materials That Convert"
            description={<PresentationsDescription />}
          />
        </div>
      </div>
    </section>
  );
};
