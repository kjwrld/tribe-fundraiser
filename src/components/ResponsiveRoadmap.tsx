import svgPaths from "../imports/svg-ljbynob7mi";

// Mobile Timeline Component (Vertical)
function MobileTimeline() {
  const milestones = [
    {
      period: "APR - JUN",
      title: "Beta Testing MVP 1",
      completed: true,
    },
    {
      period: "JUL - SEP", 
      title: "MVP 1 Crowdfunding campaigns",
      completed: true,
    },
    {
      period: "OCT - DEC",
      title: "Continue testing, start developing for MVP 2",
      completed: false,
    },
  ];

  return (
    <div className="md:hidden flex flex-col items-center w-full max-w-sm mx-auto">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          {/* Timeline Node */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg className="w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <circle 
                  cx="9" 
                  cy="9" 
                  fill={milestone.completed ? "#00F5DA" : "#A047FF"} 
                  r="5" 
                />
                <circle 
                  cx="9" 
                  cy="9" 
                  r="7" 
                  stroke={milestone.completed ? "#86FAED" : "#C685FF"} 
                  strokeOpacity={milestone.completed ? "0.75" : "0.3"} 
                  strokeWidth="4" 
                />
              </svg>
            </div>
            
            {/* Content */}
            <div className="flex flex-col items-center text-center mt-4 mb-6">
              <div className="font-['Nunito:Bold',_sans-serif] text-[#a047ff] text-[16px] tracking-[0.32px] mb-2">
                {milestone.period}
              </div>
              <div className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[14px] leading-[21px] max-w-[200px]">
                {milestone.title}
              </div>
            </div>
          </div>
          
          {/* Vertical Line (except for last item) */}
          {index < milestones.length - 1 && (
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#00F5DA] to-[#A047FF] opacity-40 -mt-2 mb-2"></div>
          )}
        </div>
      ))}
      
      {/* 2026 indicator */}
      <div className="mt-4 font-['Nunito:Bold',_sans-serif] text-[#a047ff] text-[16px] tracking-[0.32px]">
        2026
      </div>
    </div>
  );
}

// Desktop Timeline Component (Horizontal)
function DesktopTimeline() {
  return (
    <div className="hidden md:block w-full max-w-5xl mx-auto">
      {/* Timeline SVG */}
      <div className="relative h-7 mb-8">
        <div className="absolute h-0 left-0 top-3.5 w-full max-w-[1177px]">
          <svg className="block w-full h-[6px]" fill="none" preserveAspectRatio="none" viewBox="0 0 1183 6">
            <path d="M3 3H1180" stroke="url(#paint0_linear_2_827)" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_827" x1="3" x2="1180" y1="3.5" y2="3.5">
                <stop stopColor="#88FFFF" />
                <stop offset="1" stopColor="#A047FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Progress line - reaches halfway between second and third milestones (Sep-Oct transition) */}
        <div className="absolute h-0 left-0 top-3.5 w-[calc(50%)]">
          <svg className="block w-full h-[6px]" fill="none" preserveAspectRatio="none" viewBox="0 0 100 6">
            <path d="M3 3H97" stroke="url(#paint0_linear_2_825)" strokeLinecap="round" strokeWidth="6" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_825" x1="3" x2="97" y1="3.5" y2="3.5">
                <stop stopColor="#00F5DA" stopOpacity="0.4" />
                <stop offset="1" stopColor="#00F5DA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Timeline nodes - equally spaced at 0%, 33.33%, 66.66%, 100% */}
        {/* APR-JUN - Completed (0%) */}
        <div className="absolute left-0 w-[18px] h-[18px] top-[5px]">
          <svg className="block w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <circle cx="9" cy="9" fill="#00F5DA" r="5" />
            <circle cx="9" cy="9" r="7" stroke="#86FAED" strokeOpacity="0.75" strokeWidth="4" />
          </svg>
        </div>
        
        {/* JUL-SEP - Completed (33.33%) */}
        <div className="absolute left-[33.33%] w-[18px] h-[18px] top-[5px] -translate-x-1/2">
          <svg className="block w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <circle cx="9" cy="9" fill="#00F5DA" r="5" />
            <circle cx="9" cy="9" r="7" stroke="#86FAED" strokeOpacity="0.75" strokeWidth="4" />
          </svg>
        </div>
        
        {/* OCT-DEC - Not Completed (66.66%) */}
        <div className="absolute left-[66.66%] w-[18px] h-[18px] top-[5px] -translate-x-1/2">
          <svg className="block w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <circle cx="9" cy="9" fill="#A047FF" r="5" />
            <circle cx="9" cy="9" r="7" stroke="#C685FF" strokeOpacity="0.3" strokeWidth="4" />
          </svg>
        </div>
        
        {/* 2026 - Future (101% - just beyond the end) */}
        <div className="absolute left-[101%] w-[18px] h-[18px] top-[5px] -translate-x-1/2">
          <svg className="block w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <circle cx="9" cy="9" fill="#A047FF" r="5" />
            <circle cx="9" cy="9" r="7" stroke="#C685FF" strokeOpacity="0.3" strokeWidth="4" />
          </svg>
        </div>
      </div>
      
      {/* Timeline labels */}
      <div className="flex justify-between items-start w-full font-['Nunito:Regular',_sans-serif]">
        <div className="flex flex-col gap-3 items-start text-left max-w-[180px]">
          <div className="font-['Nunito:Bold',_sans-serif] text-[#a047ff] text-[18px] tracking-[0.36px]">
            APR - JUN
          </div>
          <div className="text-[#d5adff] text-[18px] leading-[27px]">
            Beta Testing MVP 1
          </div>
        </div>
        
        <div className="flex flex-col gap-3 items-start text-left max-w-[180px]">
          <div className="font-['Nunito:Bold',_sans-serif] text-[#a047ff] text-[18px] tracking-[0.36px]">
            JUL - SEP
          </div>
          <div className="text-[#d5adff] text-[18px] leading-[27px]">
            MVP 1 Crowdfunding campaigns
          </div>
        </div>
        
        <div className="flex flex-col gap-3 items-start text-left max-w-[180px]">
          <div className="font-['Nunito:Bold',_sans-serif] text-[#a047ff] text-[18px] tracking-[0.36px]">
            OCT - DEC
          </div>
          <div className="text-[#d5adff] text-[18px] leading-[27px]">
            Continue testing, start developing for MVP 2
          </div>
        </div>
        
        <div className="flex flex-col gap-3 items-end text-right">
          <div className="font-['Nunito:Bold',_sans-serif] text-[#a047ff] text-[18px] tracking-[0.36px]">
            2026
          </div>
        </div>
      </div>
    </div>
  );
}

// Button Component
function LaunchButton({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => void }) {
  return (
    <button 
      onClick={() => {
        if (onNavigate) {
          onNavigate('crowdfunding');
          setTimeout(() => {
            const pledgeSection = document.getElementById('pledge-section');
            if (pledgeSection) {
              pledgeSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }}
      className="bg-[#782acb] flex gap-[8.862px] h-[54px] items-center justify-center px-[41.652px] py-[10.634px] rounded-[10.634px] shadow-[0px_40.766px_11.521px_0px_rgba(120,43,203,0),0px_26.586px_10.634px_0px_rgba(120,43,203,0.01),0px_15.066px_8.862px_0px_rgba(120,43,203,0.05),0px_6.203px_6.203px_0px_rgba(120,43,203,0.09),0px_1.772px_3.545px_0px_rgba(120,43,203,0.1)] transition-all hover:scale-105">
      <div className="font-['Nunito:Medium',_sans-serif] text-[14.179px] text-neutral-100 whitespace-nowrap">
        Launch great ideas
      </div>
      <div className="w-[21.269px] h-[21.269px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <path d={svgPaths.p1902a600} fill="white" />
        </svg>
      </div>
    </button>
  );
}

interface ResponsiveRoadmapProps {
  onNavigate?: (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => void;
}

export default function ResponsiveRoadmap({ onNavigate }: ResponsiveRoadmapProps = {}) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8 lg:py-12">
      {/* Title Section */}
      <div className="flex flex-col gap-2 items-center justify-start mb-8 lg:mb-12 text-center max-w-2xl mx-auto px-4">
        <div className="font-['Nunito:Bold',_sans-serif] text-[28px] sm:text-[34px] text-center tracking-[0.84px] sm:tracking-[1.02px] leading-[34px] sm:leading-[41px]">
          <span className="text-[#a047ff]">Coming </span>
          <span className="text-[#d5adff]">Soon</span>
        </div>
        <div className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[14px] leading-[24px] text-center max-w-[324px]">
          We have a clear, actionable plan to move quickly from funding to impact.
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full mb-8 lg:mb-12">
        <MobileTimeline />
        <DesktopTimeline />
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center">
        <LaunchButton onNavigate={onNavigate} />
      </div>
    </div>
  );
}