import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../imports/svg-h5pr0nqnbp";
import lightningPaths from "../imports/svg-jkbx1njzf9";
import heroImage from "../assets/webp/ce3be992f9705c8a009f4cf21949a94686798352.webp";
import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { R3FRocketModel } from "./R3FRocketModel";

function Frame61564() {
  return (
    <div className="h-[139px] md:h-[139px] sm:h-auto mb-[-78px] md:mb-[-78px] sm:mb-[-20px] relative shrink-0 w-full px-4 md:px-0">
      <div className="absolute md:absolute sm:static md:left-1/2 md:transform md:-translate-x-1/2 font-['Nunito:Regular',_sans-serif] font-normal h-[139px] md:h-[139px] sm:h-auto text-center top-0 md:top-0 sm:top-auto w-[693.77px] md:w-[693.77px] sm:w-full max-w-full flex flex-col sm:gap-4">
        {/* Title */}
        <div className="leading-[0] text-[#d5adff] text-[59.044px] md:text-[59.044px] sm:text-[28px]">
          <p className="leading-[59.044px] md:leading-[59.044px] sm:leading-[32px] mb-0 sm:mb-2">
            <span className="font-['Nunito:Bold',_sans-serif] font-bold">{` Empower `}</span>
            <span>{`every kid `}</span>
          </p>
          <p className="leading-[59.044px] md:leading-[59.044px] sm:leading-[32px]">
            <span>{`to win in `}</span>
            <span className="font-['Nunito:Bold',_sans-serif] font-bold text-[#8614ff]">STEM</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InterfaceLightning() {
  return (
    <div className="relative shrink-0 size-[21.269px]" data-name="interface/lightning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="interface/lightning">
          <g id="Vector">
            <path d={lightningPaths.p1902a600} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-3 md:gap-3 sm:gap-2 items-center justify-start px-0 py-[13.293px] md:py-[13.293px] sm:py-[8px] relative rounded-[10.634px] shrink-0">
      <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14.179px] md:text-[14.179px] sm:text-[12px] text-neutral-100 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Launch great ideas</p>
      </div>
      <InterfaceLightning />
    </div>
  );
}

function Button({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => void }) {
  return (
    <div 
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
      className="absolute bg-[#782acb] box-border content-stretch flex gap-[8.862px] h-[54px] md:h-[54px] sm:h-[44px] items-center justify-center px-[41.652px] md:px-[41.652px] sm:px-[24px] py-[10.634px] md:py-[10.634px] sm:py-[8px] rounded-[10.634px] shadow-[0px_40.766px_11.521px_0px_rgba(120,43,201,0),0px_26.586px_10.634px_0px_rgba(120,43,201,0.01),0px_15.066px_8.862px_0px_rgba(120,43,201,0.05),0px_6.203px_6.203px_0px_rgba(120,43,201,0.09),0px_1.772px_3.545px_0px_rgba(120,43,201,0.1)] top-[457px] md:top-[457px] sm:top-[300px] translate-x-[-50%] cursor-pointer hover:bg-[#6a259e] transition-colors" data-name="Button" style={{ left: "calc(50% - 1.41px)" }}>
      <Frame5 />
    </div>
  );
}

function Frame61559({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-[514px] md:h-[514px] sm:h-[350px] mb-[-78px] md:mb-[-78px] sm:mb-[-40px] relative shrink-0 w-[499.821px] md:w-[499.821px] sm:w-[300px]">
      {isMobile ? (
        /* Mobile: Use original image */
        <div className="absolute size-[470.576px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-2xl" style={{ top: "calc(50% - 21.712px)", left: "calc(50% - 10.192px)" }}>
          <img 
            src={heroImage} 
            alt="YGBVerse hero" 
            className="size-full object-cover"
          />
        </div>
      ) : (
        /* Desktop/Tablet: Use 3D model */
        <div className="absolute size-[470.576px] md:size-[470.576px] sm:size-[280px] translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 21.712px)", left: "calc(50% - 10.192px)" }}>
          <R3FRocketModel className="w-full h-full" />
        </div>
      )}
      
      <Button onNavigate={onNavigate} />
    </div>
  );
}

function HeroBanner({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => void }) {
  return (
    <div className="box-border content-stretch flex flex-col isolate items-center justify-center min-h-screen pb-[78px] md:pb-[78px] sm:pb-[20px] pt-0 md:pt-0 sm:pt-[60px] px-4 md:px-4 sm:px-6 relative shrink-0 w-full gap-0 md:gap-0 sm:gap-6" data-name="Hero Banner">
      <Frame61564 />
      <Frame61559 onNavigate={onNavigate} />
    </div>
  );
}

function CountingNumber({ target, isInView, delay = 0 }: { target: number; isInView: boolean; delay?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) {
      return;
    }

    const timer = setTimeout(() => {
      const duration = 1500; // 1.5 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = target / steps;
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          setHasAnimated(true);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, isInView, delay, hasAnimated]);

  return <span>{hasAnimated ? target : count}</span>;
}

function Frame61843({ isInView }: { isInView: boolean }) {
  return (
    <div className="h-[344px] md:h-[344px] sm:h-[250px] relative shrink-0 w-full max-w-[1088px] md:max-w-[1088px] sm:max-w-[350px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 344">
        <g id="Frame 61843">
          <motion.path 
            d={svgPaths.p2fce1d00} 
            id="Vector 4" 
            stroke="url(#paint0_linear_1_856)" 
            strokeLinecap="round" 
            strokeWidth="8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: isInView ? 0.5 : 0 }}
          />
          <motion.circle 
            cx="243" 
            cy="303" 
            fill="var(--fill-0, #DDC0FA)" 
            id="Ellipse 38" 
            r="10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0.3 : 0 }}
          />
          <motion.circle 
            cx="536" 
            cy="226" 
            fill="var(--fill-0, #7F1EE5)" 
            id="Ellipse 37" 
            r="10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0.8 : 0 }}
          />
          <motion.circle 
            cx="860" 
            cy="38" 
            fill="var(--fill-0, #CDA2F7)" 
            id="Ellipse 36" 
            r="10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 1.3 : 0 }}
          />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_856" x1="47.5" x2="1061" y1="170.713" y2="170.713">
            <stop stopColor="#C685FF" stopOpacity="0" />
            <stop offset="0.541385" stopColor="#6D00E0" />
            <stop offset="1" stopColor="#C685FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BulletPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="content-stretch flex gap-6 h-[344px] md:h-[344px] sm:h-[250px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Bullet Points">
      <div className="w-full max-w-[1088px] md:max-w-[1088px] sm:max-w-[350px] mx-auto relative">
        <Frame61843 isInView={isInView} />
        {/* Simplified stats without complex positioning */}
        <div className="absolute top-[20%] left-[20%] text-center">
          <div className="text-[32px] font-bold text-[#a047ff]">
            <CountingNumber target={1} isInView={isInView} delay={300} />%
          </div>
          <div className="text-[12px] text-[#8c92ab] w-[100px]">
            of heroes in kids' books reflect students of color
          </div>
        </div>
        <div className="absolute top-[50%] left-[50%] text-center">
          <div className="text-[32px] font-bold text-[#a047ff]">
            <CountingNumber target={36} isInView={isInView} delay={800} />%
          </div>
          <div className="text-[12px] text-[#8c92ab] w-[100px]">
            of U.S. 4th graders are proficient in STEM
          </div>
        </div>
        <div className="absolute top-[20%] right-[20%] text-center">
          <div className="text-[32px] font-bold text-[#a047ff]">
            <CountingNumber target={55} isInView={isInView} delay={1300} />%
          </div>
          <div className="text-[12px] text-[#8c92ab] w-[100px]">
            of U.S. K–5 students are kids of color
          </div>
        </div>
      </div>
    </div>
  );
}

interface YGBVerseHomeProps {
  onNavigate?: (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => void;
}

export function YGBVerseHome({ onNavigate }: YGBVerseHomeProps = {}) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroBanner onNavigate={onNavigate} />
      
      {/* Why It Matters Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-[34px] font-bold text-[#d5adff] mb-4">
            Why It <span className="text-[#8614ff]">Matters</span>
          </h2>
          <p className="text-[18px] text-[#8c92ab]">
            <span className="font-bold">STEM</span> isn't equally accessible or culturally relevant.
          </p>
        </div>
        <BulletPoints />
      </div>

      {/* Our Solution Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-[34px] font-bold text-[#d5adff] mb-4">
            Our <span className="text-[#a047ff]">Solution</span>
          </h2>
          <p className="text-[18px] text-[#8c92ab]">
            Immersive quests. Diverse heroes. Fun science.
            <br />
            Kids explore, experiment, and earn rewards while building real STEM skills.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {[
            { title: "Immersive Gameplay", icon: "🎮" },
            { title: "Culturally Relevant Stories", icon: "🌍" },
            { title: "Cross-Cultural Community", icon: "🤝" },
            { title: "Music + Sports Connections", icon: "🎵" }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-[24px] border border-[#c685ff] p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-[18px] font-bold text-[#a047ff]">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-[#782acb] hover:bg-[#6a259e] text-white px-6 py-4 rounded-[12px] font-medium text-[16px] transition-colors shadow-lg">
            Explore Features 🌍
          </button>
        </div>
      </div>
    </div>
  );
}