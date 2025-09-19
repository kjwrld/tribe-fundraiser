import { useState, useEffect } from 'react';

interface ExploreLeftNavProps {
  sections: Array<{
    id: string;
    label: string;
    number: string;
  }>;
}

export function ExploreLeftNav({ sections }: ExploreLeftNavProps) {
  const [activeSection, setActiveSection] = useState('001');

  useEffect(() => {
    // Intersection Observer setup (placeholder for now)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the section that corresponds to this element
            const sectionId = entry.target.id;
            const section = sections.find(s => s.id === sectionId);
            if (section) {
              setActiveSection(section.number);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe all sections
    sections.forEach(section => {
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
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
      <nav className="flex flex-col space-y-8">
        {sections.map((section, index) => {
          const isActive = activeSection === section.number;
          
          return (
            <div
              key={section.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleSectionClick(section.id)}
            >
              {/* Number indicator */}
              <div className="relative mb-2">
                <span 
                  className={`text-xs font-mono transition-all duration-300 ${
                    isActive 
                      ? 'text-cyan-400 brightness-125' 
                      : 'text-gray-500 group-hover:text-gray-300'
                  }`}
                >
                  {section.number}
                </span>
                
                {/* Active dot indicator */}
                <div 
                  className={`absolute -right-6 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-cyan-400 opacity-100 shadow-lg shadow-cyan-400/50' 
                      : 'bg-transparent opacity-0'
                  }`}
                />
              </div>
              
              {/* Section label */}
              <div className="writing-mode-vertical-rl text-orientation-mixed">
                <span 
                  className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                    isActive 
                      ? 'text-white brightness-125' 
                      : 'text-gray-400 group-hover:text-gray-200'
                  }`}
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  {section.label.split('').join(' ')}
                </span>
              </div>
              
              {/* Connector line */}
              {index < sections.length - 1 && (
                <div 
                  className={`w-px mt-4 transition-all duration-500 ${
                    isActive 
                      ? 'h-12 bg-gradient-to-b from-cyan-400 to-transparent' 
                      : 'h-8 bg-gray-600'
                  }`}
                />
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}