'use client';

import HeroSectionClean from './HeroSectionClean';
import EnhancedStatsSection from './EnhancedStatsSection';
import ProgramsAndSuccess from './ProgramsAndSuccess';
import VisitONDISection from './VisitONDISection';
import NewsletterAndCTA from './NewsletterAndCTA';

export default function HomepageClean() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Clean and focused */}
      <HeroSectionClean />

      {/* Enhanced Statistics Section */}
      <EnhancedStatsSection />

      {/* Programs and Success Stories */}
      <ProgramsAndSuccess />

      {/* Visit ONDI Section */}
      <VisitONDISection />

      {/* Newsletter and CTA */}
      <NewsletterAndCTA />
    </div>
  );
}
