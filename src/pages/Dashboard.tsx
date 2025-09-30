import React from 'react';
import { Link } from 'react-router-dom';
import { GlassCard, Button, TabNavigation, ProgressIndicator } from '../components';

/**
 * Dashboard - Interactive analytics and control center
 * 
 * Third layer featuring real-time metrics, campaign management,
 * and system controls.
 */
export const Dashboard: React.FC = () => {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-text-primary">System Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-text-secondary mb-2">Active Campaigns</h3>
              <div className="text-4xl font-bold gradient-text">24</div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-text-secondary mb-2">Total Reach</h3>
              <div className="text-4xl font-bold gradient-text-success">1.2M</div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-text-secondary mb-2">Conversion Rate</h3>
              <div className="text-4xl font-bold gradient-text-secondary">8.4%</div>
            </GlassCard>
          </div>

          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">System Performance</h3>
            <div className="space-y-4">
              <ProgressIndicator value={87} color="primary" showLabel label="AI Processing" />
              <ProgressIndicator value={92} color="success" showLabel label="Content Generation" />
              <ProgressIndicator value={78} color="secondary" showLabel label="Campaign Optimization" />
            </div>
          </GlassCard>
        </div>
      ),
    },
    {
      id: 'campaigns',
      label: 'Campaigns',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-text-primary">Active Campaigns</h2>
          <p className="text-text-secondary">Campaign management interface coming soon...</p>
        </div>
      ),
    },
    {
      id: 'analytics',
      label: 'Analytics',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-text-primary">Analytics Dashboard</h2>
          <p className="text-text-secondary">Advanced analytics and insights coming soon...</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-surface to-bg-dark p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Command Center
          </h1>
          <p className="text-xl text-text-secondary">
            Monitor and control your autonomous marketing operations
          </p>
        </div>

        {/* Dashboard Content */}
        <TabNavigation tabs={tabs} variant="pills" className="mb-12" />

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Link to="/explorer">
            <Button variant="ghost">← Back to Explorer</Button>
          </Link>
          <Link to="/calculator">
            <Button variant="primary" glow>
              Calculate ROI →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;