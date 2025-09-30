import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlassCard, Button, ProgressIndicator } from '../components';

/**
 * Calculator - ROI and impact calculation tool
 * 
 * Final layer where users can calculate potential ROI
 * and visualize the impact of the system.
 */
export const Calculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState(5);
  const [avgSalary, setAvgSalary] = useState(60000);
  const [campaignsPerMonth, setCampaignsPerMonth] = useState(10);

  // Simple ROI calculation
  const timeSaved = teamSize * 40; // hours per month
  const costSavings = (avgSalary / 12 / 160) * timeSaved;
  const productivityGain = campaignsPerMonth * 3; // 3x output
  const totalROI = ((costSavings + productivityGain) / (avgSalary / 12)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-surface to-bg-dark p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            ROI Calculator
          </h1>
          <p className="text-xl text-text-secondary">
            Calculate your potential return on investment
          </p>
        </div>

        {/* Calculator Form */}
        <GlassCard className="p-8 mb-8">
          <div className="space-y-8">
            {/* Team Size */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">
                Marketing Team Size
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-accent-primary"
              />
              <div className="text-text-secondary mt-1">{teamSize} people</div>
            </div>

            {/* Average Salary */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">
                Average Salary (per year)
              </label>
              <input
                type="range"
                min="30000"
                max="150000"
                step="5000"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="w-full accent-accent-primary"
              />
              <div className="text-text-secondary mt-1">
                ${avgSalary.toLocaleString()}
              </div>
            </div>

            {/* Campaigns */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">
                Campaigns per Month
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={campaignsPerMonth}
                onChange={(e) => setCampaignsPerMonth(Number(e.target.value))}
                className="w-full accent-accent-primary"
              />
              <div className="text-text-secondary mt-1">{campaignsPerMonth} campaigns</div>
            </div>
          </div>
        </GlassCard>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <GlassCard className="p-8">
            <h3 className="text-lg font-semibold text-text-secondary mb-2">
              Time Saved
            </h3>
            <div className="text-5xl font-bold gradient-text-success">
              {timeSaved}h
            </div>
            <div className="text-sm text-text-muted mt-2">per month</div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-lg font-semibold text-text-secondary mb-2">
              Cost Savings
            </h3>
            <div className="text-5xl font-bold gradient-text">
              ${Math.round(costSavings).toLocaleString()}
            </div>
            <div className="text-sm text-text-muted mt-2">per month</div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-lg font-semibold text-text-secondary mb-2">
              Productivity Gain
            </h3>
            <div className="text-5xl font-bold gradient-text-secondary">
              {productivityGain}
            </div>
            <div className="text-sm text-text-muted mt-2">campaigns/month</div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-lg font-semibold text-text-secondary mb-2">
              Total ROI
            </h3>
            <div className="text-5xl font-bold gradient-text-success">
              {Math.round(totalROI)}%
            </div>
            <div className="text-sm text-text-muted mt-2">estimated return</div>
          </GlassCard>
        </div>

        {/* ROI Visualization */}
        <GlassCard className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Impact Breakdown</h3>
          <div className="space-y-4">
            <ProgressIndicator
              value={Math.min((timeSaved / 500) * 100, 100)}
              color="success"
              showLabel
              label="Time Efficiency"
            />
            <ProgressIndicator
              value={Math.min((productivityGain / 100) * 100, 100)}
              color="primary"
              showLabel
              label="Campaign Output"
            />
            <ProgressIndicator
              value={Math.min((totalROI / 1000) * 100, 100)}
              color="secondary"
              showLabel
              label="ROI Potential"
            />
          </div>
        </GlassCard>

        {/* CTA */}
        <div className="flex justify-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost">← Back to Dashboard</Button>
          </Link>
          <Button variant="primary" size="lg" glow>
            Get Started →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;