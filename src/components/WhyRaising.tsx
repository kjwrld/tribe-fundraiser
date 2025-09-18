import { Target, Users, Lightbulb, Heart } from 'lucide-react';
import svgPaths from "../imports/svg-igbbmfl4cz";
import imgFrame61804 from "../assets/webp/869aebf4b973c7144fd76ccf95a4e2ebc49c62f3.webp";
import imgFrame61801 from "../assets/webp/de4db98da767f57e68ad938e671e1f1f9800131f.webp";
import imgFrame61803 from "../assets/webp/d98bc019482bbe3b68a942e5f65f1cedec40f326.webp";

export function WhyRaising() {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Students Reached",
      description: "Across underserved communities"
    },
    {
      icon: Target,
      number: "85%",
      label: "Success Rate",
      description: "Students continuing in STEM"
    },
    {
      icon: Lightbulb,
      number: "200+",
      label: "Projects Built",
      description: "Creative solutions to real problems"
    },
    {
      icon: Heart,
      number: "$2M",
      label: "Impact Goal",
      description: "To transform education nationwide"
    }
  ];

  const reasons = [
    {
      title: "Bridge the Digital Divide",
      description: "Every student deserves access to cutting-edge technology and innovative learning tools, regardless of their zip code or family income."
    },
    {
      title: "Empower Creative Problem-Solving",
      description: "We're building platforms where students don't just consume content—they create solutions to real-world challenges in their communities."
    },
    {
      title: "Scale Proven Impact",
      description: "Our pilot programs have shown remarkable results. With your support, we can bring this transformative approach to classrooms nationwide."
    }
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:gap-20">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-['Nunito:Bold',_sans-serif] font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-[#2d1b69] mb-6">
              We're <span className="text-[#a047ff]">Raising Funds</span>
            </h2>
            <p className="font-['Nunito:Regular',_sans-serif] text-[18px] sm:text-[20px] leading-relaxed text-[#5b6178] max-w-3xl mx-auto">
              Education shouldn't be limited by geography, income, or outdated systems. We're on a mission to democratize access to innovative STEM learning and empower the next generation of problem-solvers.
            </p>
          </div>

          {/* Glassmorphism Banner */}
          <div className="backdrop-blur-[11.5px] backdrop-filter bg-[rgba(255,255,255,0.5)] relative w-full border border-[#d5adff] rounded-[24px]">
            <div className="flex flex-col lg:flex-row items-center relative w-full bg-white rounded-[24px]">
              <div className="box-border content-stretch flex gap-[30px] items-center justify-start overflow-clip pl-6 sm:pl-8 lg:pl-20 pr-6 sm:pr-8 lg:pr-10 py-8 sm:py-12 lg:py-[58px] relative w-full bg-white/95">
                
                {/* Left Content */}
                <div className="content-stretch flex flex-col gap-8 lg:gap-[45px] items-center lg:items-start justify-start relative shrink-0 w-full lg:max-w-[470px]">
                  
                  {/* Title Section */}
                  <div className="content-stretch flex flex-col gap-6 items-center lg:items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-3 items-center lg:items-start justify-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-2.5 items-start justify-center lg:justify-start relative shrink-0 w-full">
                        <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#d5adff] text-[0px] text-nowrap tracking-[1.02px]">
                          <p className="font-['Nunito:Bold',_sans-serif] font-bold leading-[51px] text-[24px] sm:text-[28px] lg:text-[34px] whitespace-pre text-center lg:text-left">
                            <span>{`Why We're `}</span>
                            <span className="text-[#a047ff]">Raising</span>
                          </p>
                        </div>
                        <div className="absolute bg-[#ffffff] blur-[13.5px] filter h-[62px] left-[-20px] lg:left-[-48px] top-[-5px] w-[59px]" />
                      </div>
                      <div className="content-stretch flex flex-col gap-2.5 items-start justify-center relative shrink-0 w-full">
                        <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#8c92ab] text-[14px] sm:text-[16px] lg:text-[18px] tracking-[0.36px] w-full text-center lg:text-left">
                          <p className="leading-[27px]">Our classrooms are diverse, but STEM education and careers fail to reflect that reality.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Images - Only show on mobile */}
                  <div className="block lg:hidden w-full">
                    <div className="flex flex-row items-center justify-center overflow-clip relative h-[280px]">
                      <div className="box-border content-stretch flex gap-2 h-[280px] items-center justify-center p-2 relative w-full">
                        <div className="bg-center bg-cover bg-no-repeat h-[180px] rounded-[8px] shrink-0 w-[120px]" style={{ backgroundImage: `url('${imgFrame61804}')` }} />
                        <div className="bg-center bg-cover bg-no-repeat h-[230px] rounded-[8px] shadow-[17px_67px_19px_0px_rgba(190,157,226,0),11px_43px_18px_0px_rgba(190,157,226,0.03),6px_24px_15px_0px_rgba(190,157,226,0.12),3px_11px_11px_0px_rgba(190,157,226,0.2),1px_3px_6px_0px_rgba(190,157,226,0.23)] shrink-0 w-[150px]" style={{ backgroundImage: `url('${imgFrame61801}')` }} />
                        <div className="bg-center bg-cover bg-no-repeat h-[180px] relative rounded-[8px] shrink-0 w-[120px]" style={{ backgroundImage: `url('${imgFrame61803}')` }} />
                        {/* Right Fade Gradient */}
                        <div className="absolute flex h-[280px] items-center justify-center right-0 top-0 w-20 pointer-events-none">
                          <div className="flex-none rotate-[180deg]">
                            <div className="bg-gradient-to-r from-[#ffffff] from-[15.385%] h-[280px] to-[#ffffff00] w-20" />
                          </div>
                        </div>
                        {/* Left Fade Gradient */}
                        <div className="absolute bg-gradient-to-r from-25% from-[#ffffff] h-[280px] left-0 to-[#ffffff00] top-0 w-20 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="content-stretch flex flex-col gap-6 items-center lg:items-start justify-start overflow-clip relative shrink-0 w-full max-w-md lg:max-w-none">
                    <div className="content-stretch flex flex-col gap-2.5 items-center lg:items-start justify-center relative shrink-0 w-full">
                      <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#a047ff] text-[0px] tracking-[0.36px] w-full text-center lg:text-left">
                        <p className="font-['Nunito:Bold',_sans-serif] font-bold leading-[27px] text-[16px] lg:text-[18px]">How You Can Help</p>
                      </div>
                    </div>
                    
                    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
                      
                      {/* Donate Button */}
                      <div className="box-border content-stretch flex h-12 items-center justify-center sm:justify-between px-6 py-3 relative rounded-[12px] shrink-0 w-full border border-[#a047ff] hover:bg-purple-50/50 transition-colors duration-200 cursor-pointer">
                        <div className="basis-0 content-stretch flex grow items-center justify-center sm:justify-between min-h-px min-w-px relative rounded-[12px] shrink-0">
                          <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#a047ff] text-[0px] text-center sm:text-left">
                            <p className="leading-[24px] text-[14px]">
                              <span className="font-['Nunito:Bold',_sans-serif] font-bold text-[#a047ff]">Donate</span>
                              <span className="hidden sm:inline font-['Nunito:Bold',_sans-serif] font-bold text-[#a047ff]">: </span>
                              <span className="hidden sm:inline font-['Nunito:Regular',_sans-serif] font-normal">Every contribution brings us closer.</span>
                            </p>
                          </div>
                          <div className="relative shrink-0 size-6 hidden sm:block">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path clipRule="evenodd" d={svgPaths.pb468000} fill="#A047FF" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Share Button */}
                      <div className="box-border content-stretch flex gap-2.5 items-center justify-center sm:justify-start px-6 py-3 relative rounded-[12px] shrink-0 w-full border border-[#a047ff] hover:bg-purple-50/50 transition-colors duration-200 cursor-pointer">
                        <div className="content-stretch flex gap-2.5 items-center justify-center sm:justify-between relative rounded-[12px] shrink-0 w-full">
                          <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#a047ff] text-[0px] flex-1 text-center sm:text-left">
                            <p className="leading-[24px] text-[14px]">
                              <span className="font-['Nunito:Bold',_sans-serif] font-bold">Share</span>
                              <span className="hidden sm:inline font-['Nunito:Bold',_sans-serif] font-bold">: </span>
                              <span className="hidden sm:inline font-['Nunito:Regular',_sans-serif] font-normal">Spread our mission with friends, family, and educators.</span>
                            </p>
                          </div>
                          <div className="relative shrink-0 size-6 hidden sm:block">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path clipRule="evenodd" d={svgPaths.pb468000} fill="#A047FF" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Champion Button */}
                      <div className="box-border content-stretch flex h-12 items-center justify-center sm:justify-between px-6 py-3 relative rounded-[12px] shrink-0 w-full border border-[#a047ff] hover:bg-purple-50/50 transition-colors duration-200 cursor-pointer">
                        <div className="basis-0 content-stretch flex grow items-center justify-center sm:justify-between min-h-px min-w-px relative rounded-[12px] shrink-0">
                          <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#a047ff] text-[0px] text-center sm:text-left">
                            <p className="leading-[24px] text-[14px]">
                              <span className="font-['Nunito:Bold',_sans-serif] font-bold">Champion</span>
                              <span className="hidden sm:inline font-['Nunito:Bold',_sans-serif] font-bold">: </span>
                              <span className="hidden sm:inline font-['Nunito:Regular',_sans-serif] font-normal">Introduce us to schools and STEM advocates.</span>
                            </p>
                          </div>
                          <div className="relative shrink-0 size-6 hidden sm:block">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path clipRule="evenodd" d={svgPaths.pb468000} fill="#A047FF" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop/Tablet Images - Original Layout */}
                <div className="hidden lg:block basis-0 grow h-[413px] min-h-px min-w-px relative rounded-[12px] shrink-0">
                  <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex gap-2.5 h-[413px] items-center justify-center p-[10px] relative w-full">
                      <div className="bg-center bg-cover bg-no-repeat h-[267px] rounded-[12px] shrink-0 w-[189px]" style={{ backgroundImage: `url('${imgFrame61804}')` }} />
                      <div className="bg-center bg-cover bg-no-repeat h-[339px] rounded-[12px] shadow-[17px_67px_19px_0px_rgba(190,157,226,0),11px_43px_18px_0px_rgba(190,157,226,0.03),6px_24px_15px_0px_rgba(190,157,226,0.12),3px_11px_11px_0px_rgba(190,157,226,0.2),1px_3px_6px_0px_rgba(190,157,226,0.23)] shrink-0 w-60" style={{ backgroundImage: `url('${imgFrame61801}')` }} />
                      <div className="bg-center bg-cover bg-no-repeat h-[267px] relative rounded-[12px] shrink-0 w-[189px]" style={{ backgroundImage: `url('${imgFrame61803}')` }} />
                      {/* Right Fade Gradient */}
                      <div className="absolute flex h-[413px] items-center justify-center right-0 top-0 w-[151px] pointer-events-none">
                        <div className="flex-none rotate-[180deg]">
                          <div className="bg-gradient-to-r from-[#ffffff] from-[15.385%] h-[413px] to-[#ffffff00] w-[151px]" />
                        </div>
                      </div>
                      {/* Left Fade Gradient */}
                      <div className="absolute bg-gradient-to-r from-25% from-[#ffffff] h-[413px] left-0 to-[#ffffff00] top-0 w-[163px] pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
                    
        </div>
      </div>
    </section>
  );
}