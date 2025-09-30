import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GlassCard, Button } from '../components';

/**
 * Explorer - Interactive system exploration layer
 * 
 * Second layer where users can explore system capabilities,
 * view features, and navigate to deeper sections.
 */
export const Explorer: React.FC = () => {
  const features = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Engine',
      description: 'Autonomous campaign planning and optimization',
      icon: '🧠',
      link: '/dashboard',
    },
    {
      id: 'content-gen',
      title: 'Content Generation',
      description: 'Multi-channel content creation at scale',
      icon: '✨',
      link: '/dashboard',
    },
    {
      id: 'analytics',
      title: 'Predictive Analytics',
      description: 'Real-time performance insights and forecasting',
      icon: '📊',
      link: '/dashboard',
    },
    {
      id: 'automation',
      title: 'Marketing Automation',
      description: 'End-to-end campaign execution',
      icon: '⚡',
      link: '/dashboard',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-surface to-bg-dark p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Explore the System
          </h1>
          <p className="text-xl text-text-secondary">
            Discover the autonomous marketing capabilities
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => (
            <GlassCard key={feature.id} className="p-8 hover-lift" hover glow>
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary mb-6">
                {feature.description}
              </p>
              <Link to={feature.link}>
                <Button variant="outline" size="sm">
                  Explore →
                </Button>
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button variant="ghost">← Back to Home</Button>
          </Link>
          <Link to="/calculator">
            <Button variant="primary" glow>
              Calculate ROI →
            </Button>
          </Link>
        </div>

        {/* Nested Content Outlet */}
        <Outlet />
      </div>
    </div>
  );
};

export default Explorer;