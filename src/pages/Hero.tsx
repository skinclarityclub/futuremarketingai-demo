import React from 'react';
import { Link } from 'react-router-dom';
import { GlassCard, Button } from '../components';

/**
 * Hero - Landing page with system overview
 * 
 * First layer of the FutureMarketingAI experience.
 * Presents the value proposition and guides users to explore the system.
 */
export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-surface to-bg-dark flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-6xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text animate-fade-in">
          FutureMarketingAI
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto animate-fade-in">
          The Autonomous Marketing Machine from the Future
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in">
          <GlassCard className="p-8 hover-lift">
            <div className="text-5xl font-bold gradient-text-success">312h</div>
            <div className="text-sm text-text-secondary mt-2">Time Saved</div>
          </GlassCard>

          <GlassCard className="p-8 hover-lift">
            <div className="text-5xl font-bold gradient-text">847%</div>
            <div className="text-sm text-text-secondary mt-2">ROI</div>
          </GlassCard>

          <GlassCard className="p-8 hover-lift">
            <div className="text-5xl font-bold gradient-text-secondary">15x</div>
            <div className="text-sm text-text-secondary mt-2">Output</div>
          </GlassCard>
        </div>

        {/* CTA */}
        <div className="mt-12 animate-fade-in">
          <Link to="/explorer">
            <Button variant="primary" size="lg" glow>
              Explore System →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;