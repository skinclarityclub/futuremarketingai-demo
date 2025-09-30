import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'subtle';
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

/**
 * GlassCard - Reusable glassmorphism card component
 * 
 * @param children - Content to display inside the card
 * @param className - Additional Tailwind classes
 * @param variant - Glass effect intensity: 'default' | 'strong' | 'subtle'
 * @param hover - Enable hover lift effect
 * @param glow - Enable glow effect
 * @param onClick - Click handler (makes card interactive)
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  glow = false,
  onClick,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'glass-card',
    strong: 'glass-card-strong',
    subtle: 'glass-card-subtle',
  };
  
  const interactiveClasses = onClick ? 'cursor-pointer' : '';
  const hoverClasses = hover ? 'hover-lift' : '';
  const glowClasses = glow ? 'shadow-glow hover:shadow-glow-lg' : '';
  
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${interactiveClasses}
    ${hoverClasses}
    ${glowClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div
      className={combinedClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
};

export default GlassCard;