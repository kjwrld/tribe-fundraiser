import { useState, useEffect } from 'react';
import { ResponsiveNav } from './components/ResponsiveNav';
import { Hero } from './components/Hero';
import { WhyRaising } from './components/WhyRaising';
import { ImpactGift } from './components/ImpactGift';
import { About } from './components/About';
import { Explore } from './components/Explore';
import { Footer } from './components/Footer';
import { GradientBackground } from './components/GradientBackground';
import { YGBVerseHome } from './components/YGBVerseHome';
import { StripeProvider } from './components/StripeProvider';
import { SuccessPage } from './components/SuccessPage';
import { CancelPage } from './components/CancelPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel'>('home');

  const handleNavigation = (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => {
    setCurrentPage(page);
  };

  // Check URL on component mount to handle Stripe redirects
  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const searchParams = new URLSearchParams(window.location.search);
    
    if (path === '/success' && searchParams.get('session_id')) {
      setCurrentPage('success');
    } else if (path === '/cancel') {
      setCurrentPage('cancel');
    } else if (hash === '#crowdfunding') {
      setCurrentPage('crowdfunding');
      // Scroll to pledge section after page loads
      setTimeout(() => {
        const pledgeSection = document.getElementById('pledge-section');
        if (pledgeSection) {
          pledgeSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);


  return (
    <StripeProvider>
      <div className="min-h-screen overflow-x-hidden relative">
        {/* Shared Gradient Background for all pages */}
        <GradientBackground currentPage={currentPage} />
        
        {/* Page Content */}
        <div className="relative z-10">
          <ResponsiveNav onNavigate={handleNavigation} currentPage={currentPage} />
        
        {currentPage === 'about' && (
          <div className="bg-white/90">
            <main className="overflow-x-hidden relative">
              <About />
            </main>
            <Footer />
          </div>
        )}

        {currentPage === 'explore' && (
          <div style={{ backgroundColor: 'rgba(30, 0, 43, 0.95)' }}>
            <main className="overflow-x-hidden relative">
              <Explore onNavigate={handleNavigation} />
            </main>
          </div>
        )}

        {currentPage === 'home' && (
          <div className="bg-transparent">
            <main className="overflow-x-hidden relative">
              <div className="relative z-10">
                <YGBVerseHome onNavigate={handleNavigation} />
              </div>
            </main>
            <Footer />
          </div>
        )}

        {currentPage === 'crowdfunding' && (
          <div className="bg-white/90">
            <main className="overflow-x-hidden relative">
              {/* Hero and WhyRaising sections */}
              <div className="relative">
                <div className="relative z-10">
                  <Hero onNavigate={handleNavigation} />
                  <WhyRaising />
                </div>
              </div>
              
              {/* Other Sections */}
              <ImpactGift />
            </main>
            <Footer />
          </div>
        )}

        {currentPage === 'success' && <SuccessPage />}
        {currentPage === 'cancel' && <CancelPage onNavigate={handleNavigation} />}
      </div>
    </div>
    </StripeProvider>
  );
}