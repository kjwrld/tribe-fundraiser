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
  { id: 'certifications-section', label: 'SAFETY', number: '004' },
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

      {/* Safety & Compliance Section */}
      <section 
        id="certifications-section"
        className="min-h-screen w-full relative z-10 flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20 text-center">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Nunito',_sans-serif]">
              Safe & Compliant
            </h2>
            <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Built with the highest standards of safety and compliance to protect students and educators
            </p>
          </div>

          {/* Certifications Badges */}
          <div className="mb-16">
            <Certifications />
          </div>

          {/* Safety Description */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-['Nunito',_sans-serif]">
                  Privacy First
                </h3>
                <p className="text-purple-200 leading-relaxed">
                  COPPA and FERPA compliant with industry-leading data protection. We never share student information 
                  and follow strict privacy protocols to keep learning environments secure and trusted.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-['Nunito',_sans-serif]">
                  Educational Standards
                </h3>
                <p className="text-purple-200 leading-relaxed">
                  NGSS-aligned learning challenges ensure curriculum compatibility and educational effectiveness. 
                  Built by educators, for educators, with research-backed pedagogical approaches.
                </p>
              </div>
            </div>
          </div>
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
        className="w-full relative z-10"
      >
        <div className="w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
}