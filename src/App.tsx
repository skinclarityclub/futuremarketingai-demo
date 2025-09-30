import { Routes, Route } from 'react-router-dom';
import { Hero, Explorer, Dashboard, Calculator } from './pages';
import { useScrollToTop } from './hooks';

/**
 * App - Main application component with routing
 * 
 * Configures all routes and layers:
 * - / (Hero) - Landing page
 * - /explorer - System exploration
 * - /dashboard - Analytics and control
 * - /calculator - ROI calculation
 */
function App() {
  // Enable smooth scroll to top on route change
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/explorer" element={<Explorer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
}

export default App;