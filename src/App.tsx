import { useState, useEffect } from 'react';
import { Navigation } from './layouts/Navigation';
import { Footer } from './layouts/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ImpactPage } from './pages/ImpactPage';
import { InnovationDirectory } from './pages/InnovationDirectory';

import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { IHatchPage } from './pages/programs/IHatchPage';
import { NDICPage } from './pages/programs/NDICPage';
import { WeElevatePage } from './pages/programs/WeElevatePage';




export default function App() {
  // Track the current hash (for simple page switching)
  const [hash, setHash] = useState(
    typeof window !== 'undefined' ? window.location.hash || '#/' : '#/'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Always scroll to top when route (hash) changes
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Decide which page to render
  const renderPage = () => {
    if (hash === '#/about') {
      return <AboutPage />;
    }
    if (hash === '#/contact') {
      return <ContactPage />;
    }
    if (hash === '#/impact') {
    return <ImpactPage />;
    }
    if (hash === '#/directory') {
    return <InnovationDirectory />;
    }
if (hash === '#/opportunities') {
    return <OpportunitiesPage />;  
    }
    if (hash === '#/programs') {
    return <ProgramsPage />;  
    }
    if (hash === '#/resources') {
    return <ResourcesPage />;
    }
    if (hash === '#/ihatch') {
    return <IHatchPage />;
    }
    if (hash === '#/ndic') {
    return <NDICPage />;
    }
    if (hash === '#/we-elevate') {
    return <WeElevatePage />;
    }
    // Default → home
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  );
}

//This code was fully constructed by Lukman Mohammed Abdullahi-the main designer and template creator of this website- and Farouk Mahmoud Abdullahi -a special contributor. No other individual is responsible for the construction of this code
