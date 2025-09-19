import Hero from "../imports/Hero";
import Families from "../imports/Families";
import Educators from "../imports/Educators";
import Certifications from "../imports/Certifications";
import ResponsiveRoadmap from "./ResponsiveRoadmap";
import Footer from "../imports/Footer-38-272";
import { ExploreLeftNav } from "./ExploreLeftNav";

interface ExploreProps {
  onNavigate?: (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => void;
}

const sections = [
  { id: 'hero-section', label: 'HERO', number: '001' },
  { id: 'families-section', label: 'FAMILIES', number: '002' },
  { id: 'educators-section', label: 'EDUCATORS', number: '003' },
  { id: 'certifications-section', label: 'CERTIFICATIONS', number: '004' },
  { id: 'roadmap-section', label: 'ROADMAP', number: '005' },
  { id: 'footer-section', label: 'CONTACT', number: '006' },
];

export function Explore({ onNavigate }: ExploreProps = {}) {
  return (
    <div className="w-full overflow-x-hidden relative" style={{ backgroundColor: '#1E002B' }}>
      {/* Desktop Left Navigation - Hidden on mobile */}
      <ExploreLeftNav sections={sections} />
      
      {/* Hero Section */}
      <section 
        id="hero-section" 
        className="min-h-screen w-full relative z-20 flex items-center justify-center"
      >
        <div className="w-full">
          <Hero />
        </div>
      </section>
        
      {/* Families Section */}
      <section 
        id="families-section"
        className="min-h-screen w-full relative z-10 flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20">
          <Families />
        </div>
      </section>

      {/* Educators Section */}
      <section 
        id="educators-section"
        className="min-h-screen w-full relative z-10 flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20">
          <Educators />
        </div>
      </section>

      {/* Certifications Section */}
      <section 
        id="certifications-section"
        className="min-h-screen w-full relative z-10 flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20">
          <Certifications />
        </div>
      </section>

      {/* Roadmap Section */}
      <section 
        id="roadmap-section"
        className="min-h-screen w-full relative z-10 flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20">
          <ResponsiveRoadmap onNavigate={onNavigate} />
        </div>
      </section>

      {/* Footer Section */}
      <section 
        id="footer-section"
        className="min-h-screen w-full relative z-10 flex items-end justify-center"
      >
        <div className="w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
}