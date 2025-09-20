import { useState, useEffect } from "react";

// Add custom CSS for slide-in animation
const slideInStyles = `
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100px) translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0) translateY(-50%);
      opacity: 1;
    }
  }
  
  .nav-container {
    z-index: 999999 !important;
    pointer-events: auto !important;
    position: fixed !important;
  }
  
  .nav-item {
    z-index: 999999 !important;
    pointer-events: auto !important;
    position: relative !important;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = slideInStyles;
    document.head.appendChild(styleSheet);
}

interface ExploreLeftNavProps {
    sections: Array<{
        id: string;
        label: string;
        number: string;
    }>;
}

export function ExploreLeftNav({ sections }: ExploreLeftNavProps) {
    const [activeSection, setActiveSection] = useState("001");

    useEffect(() => {
        // Intersection Observer setup
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Find the section that corresponds to this element
                        const sectionId = entry.target.id;
                        const section = sections.find(
                            (s) => s.id === sectionId
                        );
                        if (section) {
                            setActiveSection(section.number);
                        }
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "-20% 0px -20% 0px",
            }
        );

        // Observe all sections
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sections]);

    const handleSectionClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Get Lenis instance from window (it's attached globally by our hook)
            const lenis = (window as any).lenis;

            if (lenis) {
                // Use Lenis smooth scrolling for premium experience
                lenis.scrollTo(element, {
                    offset: 0, // Account for navbar height
                    duration: 1.2,
                    easing: (t: number) =>
                        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            } else {
                // Fallback to manual scroll calculation
                const headerOffset = -80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }

            // Update URL hash for better UX
            window.history.pushState(null, "", `#${sectionId}`);
        } else {
            console.warn(`Section element not found: ${sectionId}`);
        }
    };

    return (
        <>
            {/* Desktop Navigation - Modern carousel-style navigation (768px and up) */}
            <div
                className="nav-container fixed left-4 top-1/2 transform -translate-y-1/2 hidden md:block"
                style={{
                    animation: "slideInFromLeft 0.8s ease-out forwards",
                    opacity: 0,
                    transform: "translateX(-100px) translateY(-50%)",
                }}
            >
                <nav className="flex flex-col space-y-10">
                    {sections.map((section, index) => {
                        const isActive = activeSection === section.number;

                        return (
                            <div
                                key={section.id}
                                className="nav-item cursor-pointer group transition-all duration-300 flex items-center w-40 py-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log(
                                        "Navigation clicked:",
                                        section.label
                                    );
                                    handleSectionClick(section.id);
                                }}
                            >
                                {/* Modern carousel-style bullet indicator */}
                                <div className="relative w-8 h-8 flex items-center justify-center">
                                    <div
                                        className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                                            isActive
                                                ? "bg-white scale-150 shadow-lg shadow-white/50"
                                                : "bg-white/40 group-hover:bg-white/70 group-hover:scale-125"
                                        }`}
                                    />

                                    {/* Animated pulsing ring for active state */}
                                    {isActive && (
                                        <div className="absolute inset-0 w-3 h-3 rounded-full border border-white/30 animate-ping m-auto" />
                                    )}
                                </div>

                                {/* Section label - ALL TITLES ALWAYS VISIBLE */}
                                <span
                                    className={`font-medium transition-all duration-300 ${
                                        isActive
                                            ? "text-white opacity-100"
                                            : "text-white opacity-50 group-hover:opacity-75"
                                    }`}
                                    style={{
                                        fontSize: "18px",
                                        marginLeft: "24px"
                                    }}
                                >
                                    {section.label}
                                </span>
                            </div>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}
