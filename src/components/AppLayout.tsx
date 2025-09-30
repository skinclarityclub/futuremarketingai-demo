import React from 'react';
import { Breadcrumbs, NavigationProgress } from './';

interface AppLayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
  showProgress?: boolean;
}

/**
 * AppLayout - Main layout wrapper with breadcrumbs and progress
 * 
 * Provides consistent layout structure across all pages.
 * Includes navigation breadcrumbs and progress indicator.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  showBreadcrumbs = true,
  showProgress = true,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-surface to-bg-dark">
      {/* Header with Navigation Tools */}
      {(showBreadcrumbs || showProgress) && (
        <header className="glass-card-subtle border-b border-border-primary sticky top-0 z-30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {showBreadcrumbs && <Breadcrumbs />}
              {showProgress && <NavigationProgress />}
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;