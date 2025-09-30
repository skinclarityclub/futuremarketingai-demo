import React, { useState, useRef, useEffect } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'default' | 'pills';
  className?: string;
}

/**
 * TabNavigation - Accessible tab component with keyboard navigation
 * 
 * @param tabs - Array of tab objects with id, label, content
 * @param defaultTab - Initial active tab ID
 * @param onChange - Callback when tab changes
 * @param variant - Visual style: 'default' | 'pills'
 */
export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  defaultTab,
  onChange,
  variant = 'default',
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    const enabledTabs = tabs.filter(tab => !tab.disabled);
    const currentTabIndex = enabledTabs.findIndex(tab => tab.id === tabs[currentIndex].id);
    
    let nextIndex = currentTabIndex;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        nextIndex = (currentTabIndex + 1) % enabledTabs.length;
        break;
      case 'ArrowLeft':
        e.preventDefault();
        nextIndex = currentTabIndex - 1;
        if (nextIndex < 0) nextIndex = enabledTabs.length - 1;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = enabledTabs.length - 1;
        break;
      default:
        return;
    }

    const nextTab = enabledTabs[nextIndex];
    if (nextTab) {
      handleTabChange(nextTab.id);
      tabRefs.current[nextTab.id]?.focus();
    }
  };

  const baseTabClasses = 'px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-dark';
  
  const variantClasses = {
    default: {
      active: 'border-b-2 border-accent-primary text-accent-primary',
      inactive: 'border-b-2 border-transparent text-text-secondary hover:text-text-primary hover:border-text-tertiary',
      disabled: 'border-b-2 border-transparent text-text-muted cursor-not-allowed',
    },
    pills: {
      active: 'bg-accent-primary text-white rounded-xl shadow-glow',
      inactive: 'text-text-secondary hover:bg-white/5 rounded-xl',
      disabled: 'text-text-muted cursor-not-allowed rounded-xl',
    },
  };

  return (
    <div className={className}>
      {/* Tab List */}
      <div
        role="tablist"
        className={`flex gap-2 ${variant === 'default' ? 'border-b border-border-primary' : ''}`}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const isDisabled = tab.disabled;
          
          const tabClasses = isDisabled
            ? variantClasses[variant].disabled
            : isActive
            ? variantClasses[variant].active
            : variantClasses[variant].inactive;

          return (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[tab.id] = el)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              aria-disabled={isDisabled}
              tabIndex={isActive ? 0 : -1}
              disabled={isDisabled}
              className={`${baseTabClasses} ${tabClasses}`}
              onClick={() => !isDisabled && handleTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="mt-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className={activeTab === tab.id ? 'animate-fade-in' : ''}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;