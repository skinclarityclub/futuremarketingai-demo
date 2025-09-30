import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

/**
 * Breadcrumbs - Navigation breadcrumb component
 * 
 * Automatically generates breadcrumbs based on current route.
 * Provides visual hierarchy and quick navigation.
 */
export const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  // Route label mapping
  const routeLabels: Record<string, string> = {
    '/': 'Home',
    '/explorer': 'Explorer',
    '/dashboard': 'Dashboard',
    '/calculator': 'Calculator',
  };

  // Generate breadcrumb items from current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split('/').filter(Boolean);
    
    if (paths.length === 0) {
      return [{ label: 'Home', path: '/' }];
    }

    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];
    
    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      breadcrumbs.push({
        label: routeLabels[currentPath] || path.charAt(0).toUpperCase() + path.slice(1),
        path: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        
        return (
          <React.Fragment key={crumb.path}>
            {index > 0 && (
              <span className="text-text-muted">/</span>
            )}
            {isLast ? (
              <span className="text-accent-primary font-semibold" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;