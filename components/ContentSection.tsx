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

const VisualContentDescription = () => (
  <>
    <p>
      Transform your creative vision into stunning visual content with cutting-edge AI tools. In this comprehensive module, you'll master the art of generating professional-quality images, videos, and audio content that captivates audiences and drives engagement across all platforms.
    </p>

    <h4 className="text-xl font-semibold text-sky-400 mt-6 mb-3">Your Journey to Visual Content Mastery:</h4>
    <ul className="space-y-3">
      <li>🎨 <strong>Advanced Image Generation</strong> - Master the art of creating photorealistic images, artistic illustrations, and brand-specific visuals using AI prompting techniques that produce exactly what you envision.</li>
      <li>🎬 <strong>Professional Video Creation</strong> - Generate cinematic-quality videos with realistic motion, perfect lighting, and professional production values—all from simple text descriptions.</li>
      <li>🎵 <strong>Dynamic Audio Integration</strong> - Create compelling soundtracks, professional voice-overs, and atmospheric audio that perfectly complements your visual content.</li>
      <li>⚡ <strong>Rapid Content Production</strong> - Transform ideas into polished visual content in minutes, not days—scaling your creative output without sacrificing quality.</li>
      <li>🎯 <strong>Brand-Consistent Visuals</strong> - Develop signature visual styles and maintain brand consistency across all your generated content using advanced prompting strategies.</li>
      <li>🌟 <strong>Creative Enhancement Techniques</strong> - Learn advanced editing, upscaling, and refinement methods to elevate your AI-generated content to professional standards.</li>
      <li>📱 <strong>Multi-Platform Optimization</strong> - Generate content optimized for every platform—from social media posts to marketing campaigns to entertainment content.</li>
      <li>🚀 <strong>Workflow Automation</strong> - Build efficient content creation pipelines that allow you to produce high-volume, high-quality visual content consistently.</li>
    </ul>

    <h4 className="text-xl font-semibold text-sky-400 mt-6 mb-3"><span role="img" aria-label="tools">🛠️</span> Your AI-Powered Creative Arsenal:</h4>
    <div>
      <h5 className="text-lg font-semibold text-cyan-400 mb-2">🎥 Video Generation Powerhouses:</h5>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><strong>Google Veo 2</strong> - Generate professional-quality videos with realistic scenes, smooth motion, and cinematic production values</li>
        <li><strong>Kling</strong> - Advanced video creation with dynamic motion, complex scenes, and professional-grade visual effects</li>
        <li><strong>InVideo</strong> - Transform concepts into engaging video content with automated editing and seamless visual integration</li>
      </ul>
    </div>
    <div className="mt-3">
      <h5 className="text-lg font-semibold text-cyan-400 mb-2">🖼️ Image Generation Masters:</h5>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><strong>Google Imagen</strong> - Create stunning, high-resolution images with photorealistic quality and artistic flexibility</li>
        <li><strong>Advanced Prompting Techniques</strong> - Master the art of crafting prompts that generate exactly the visuals you need</li>
      </ul>
    </div>
    <div className="mt-3">
      <h5 className="text-lg font-semibold text-cyan-400 mb-2">🎵 Audio Production Suite:</h5>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><strong>AI Voice Generation</strong> - Create natural-sounding narration in multiple languages, tones, and styles</li>
        <li><strong>Background Music Creation</strong> - Generate custom soundtracks and atmospheric audio that enhances your visual content</li>
        <li><strong>Audio Enhancement Tools</strong> - Professional mixing and mastering for crystal-clear, engaging audio experiences</li>
      </ul>
    </div>
    <div className="mt-3">
      <h5 className="text-lg font-semibold text-cyan-400 mb-2">⚙️ Content Enhancement Tools:</h5>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><strong>Upscaling & Refinement</strong> - Transform good content into exceptional content with AI-powered enhancement</li>
        <li><strong>Style Transfer & Editing</strong> - Apply artistic styles and make precise adjustments to perfect your creations</li>
        <li><strong>Batch Processing</strong> - Scale your content creation with automated workflows and bulk generation</li>
      </ul>
    </div>

    <h4 className="text-xl font-semibold text-sky-400 mt-6 mb-3"><span role="img" aria-label="light bulb">💡</span> Real-World Creative Impact:</h4>
    <ul className="list-disc list-inside pl-4 space-y-2">
      <li><strong>Professional Image Creation</strong> – Generate any visual you can imagine with photorealistic quality</li>
      <li><strong>Cinematic Video Production</strong> – Create full-length videos with professional motion and visual effects</li>
      <li><strong>Custom Audio Content</strong> – Produce voice-overs and soundtracks that rival professional studios</li>
      <li><strong>Brand Visual Libraries</strong> – Build comprehensive collections of on-brand visual assets</li>
      <li><strong>Content Scaling Systems</strong> – Automated workflows for high-volume content production</li>
      <li><strong>Multi-Format Mastery</strong> – Create content optimized for every platform and use case</li>
    </ul>
    <p className="mt-4 font-bold">
      Transform from content consumer to content creator extraordinaire—generating unlimited, professional-quality visual and audio content that captivates audiences and builds your brand presence across every digital platform.
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
            title="🎬 AI-Powered Image & Video Generation Mastery"
            description={<VisualContentDescription />}
          />
        </div>
      </div>
    </section>
  );
};
