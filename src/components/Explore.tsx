import Hero from "../imports/Hero";
import Families from "../imports/Families";
import Educators from "../imports/Educators";
import Certifications from "../imports/Certifications";
import ResponsiveRoadmap from "./ResponsiveRoadmap";
import Footer from "../imports/Footer-38-272";
import { ExploreLeftNav } from "./ExploreLeftNav";
import { useLenis } from "../hooks/useLenis";
import { useEffect } from "react";

// CSS to hide scrollbars globally on explore page
const hideScrollbarStyles = `
  body::-webkit-scrollbar {
    display: none;
  }
  
  html::-webkit-scrollbar {
    display: none;
  }
  
  body {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  
  html {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = hideScrollbarStyles;
    document.head.appendChild(styleSheet);
}

interface ExploreProps {
    onNavigate?: (
        page:
            | "home"
            | "about"
            | "explore"
            | "crowdfunding"
            | "success"
            | "cancel"
    ) => void;
}

const sections = [
    { id: "hero-section", label: "Hero", number: "001" },
    { id: "families-section", label: "Families", number: "002" },
    { id: "educators-section", label: "Educators", number: "003" },
    { id: "certifications-section", label: "Safety", number: "004" },
    { id: "roadmap-section", label: "Roadmap", number: "005" },
];

export function Explore({ onNavigate }: ExploreProps = {}) {
    // Initialize Lenis smooth scrolling with section snapping
    useLenis();

    // Hide scrollbar when component mounts, restore when unmounts
    useEffect(() => {
        // Hide scrollbar
        document.body.style.scrollbarWidth = 'none';
        document.body.style.msOverflowStyle = 'none';
        document.documentElement.style.scrollbarWidth = 'none';
        document.documentElement.style.msOverflowStyle = 'none';

        return () => {
            // Restore scrollbar
            document.body.style.scrollbarWidth = '';
            document.body.style.msOverflowStyle = '';
            document.documentElement.style.scrollbarWidth = '';
            document.documentElement.style.msOverflowStyle = '';
        };
    }, []);

    return (
        <div
            className="w-full overflow-x-hidden relative hide-scrollbar"
            style={{ 
                backgroundColor: "#1E002B",
                scrollBehavior: "smooth",
                scrollbarWidth: "none", /* Firefox */
                msOverflowStyle: "none" /* IE and Edge */
            }}
        >
            {/* Desktop Left Navigation - Hidden on mobile */}
            <ExploreLeftNav sections={sections} />

            {/* Hero Section */}
            <section
                id="hero-section"
                className="min-h-screen w-full relative z-10 flex items-center justify-center"
                style={{ scrollSnapAlign: "start" }}
            >
                <div className="w-full">
                    <Hero />
                </div>
            </section>

            {/* Families Section */}
            <section
                id="families-section"
                className="min-h-screen w-full relative z-10 flex items-center justify-center"
                style={{ scrollSnapAlign: "start" }}
            >
                <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20">
                    <Families />
                </div>
            </section>

            {/* Educators Section */}
            <section
                id="educators-section"
                className="min-h-screen w-full relative z-10 flex items-center justify-center"
                style={{ scrollSnapAlign: "start" }}
            >
                <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20">
                    <Educators />
                </div>
            </section>

            {/* Safety & Compliance Section */}
            <section
                id="certifications-section"
                className="min-h-screen w-full relative z-10 flex items-center justify-center"
                style={{ scrollSnapAlign: "start" }}
            >
                <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20 text-center">
                    {/* Section Title */}
                    <div className="mb-16">
                        <h2 className="font-['Nunito:Bold',_sans-serif] text-[#d5adff] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[59.044px] xl:text-[64px] font-bold leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[59.044px] xl:leading-[64px] mb-6">
                            Safe & Compliant
                        </h2>
                        <p className="font-['Nunito:Regular',_sans-serif] text-[#efe0ff] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                            Built with the highest standards of safety and
                            compliance to protect students and educators
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
                                <h3 className="font-['Nunito:Bold',_sans-serif] text-[#d5adff] text-2xl font-semibold mb-4">
                                    Privacy First
                                </h3>
                                <p className="font-['Nunito:Regular',_sans-serif] text-[#efe0ff] leading-relaxed">
                                    COPPA and FERPA compliant with
                                    industry-leading data protection. We never
                                    share student information and follow strict
                                    privacy protocols to keep learning
                                    environments secure and trusted.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-['Nunito:Bold',_sans-serif] text-[#d5adff] text-2xl font-semibold mb-4">
                                    Educational Standards
                                </h3>
                                <p className="font-['Nunito:Regular',_sans-serif] text-[#efe0ff] leading-relaxed">
                                    NGSS-aligned learning challenges ensure
                                    curriculum compatibility and educational
                                    effectiveness. Built by educators, for
                                    educators, with research-backed pedagogical
                                    approaches.
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
                style={{ scrollSnapAlign: "start" }}
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
