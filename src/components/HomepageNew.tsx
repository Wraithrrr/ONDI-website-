'use client';

import EnhancedHeroSection from './EnhancedHeroSection';
import EnhancedStatsSection from './EnhancedStatsSection';
import EnhancedProgramCards from './EnhancedProgramCards';
import VisitONDISection from './VisitONDISection';
import EnhancedFooter from './EnhancedFooter';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <EnhancedHeroSection />
      <EnhancedStatsSection />
      <EnhancedProgramCards />
      <VisitONDISection />
      <EnhancedFooter />
    </div>
  );
}
