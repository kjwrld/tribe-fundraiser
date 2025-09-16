import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import imgFrameworkInformationalPageHeroBadgesCoppa1 from "figma:asset/bb74394d23434184029d32edaa53519c790e46ef.png";
import imgFrameworkInformationalPageHeroBadgesCoppa2 from "figma:asset/ab9f91aabd7ada5110df2238e6cf037397e5b530.png";
import imgFrameworkInformationalPageHeroBadgesFerpa1 from "figma:asset/7c6115092c595a83c290cbb3f6a50e0d773e05cb.png";

export default function Certifications() {
  return (
    <div className="w-full flex flex-col items-center py-8 lg:py-12" data-name="certifications">
      {/* Certifications Grid */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          {/* NGSS Certification */}
          <div className="flex flex-col items-center gap-3 sm:gap-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[65px] lg:h-[65px] flex-shrink-0">
              <ImageWithFallback
                src={imgFrameworkInformationalPageHeroBadgesCoppa1}
                alt="NGSS-aligned learning certification badge"
                className="w-full h-full object-contain rounded saturate-[0.25]"
              />
            </div>
            <p className="hidden sm:block font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[12px] sm:text-[10px] lg:text-[12px] text-center leading-relaxed max-w-28">
              NGSS-aligned learning challenges.
            </p>
          </div>

          {/* COPPA Certification */}
          <div className="flex flex-col items-center gap-3 sm:gap-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[65px] lg:h-[65px] flex-shrink-0">
              <ImageWithFallback
                src={imgFrameworkInformationalPageHeroBadgesCoppa2}
                alt="COPPA compliance certification badge"
                className="w-full h-full object-contain rounded saturate-0"
              />
            </div>
            <p className="hidden sm:block font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[12px] sm:text-[10px] lg:text-[12px] text-center leading-relaxed max-w-32">
              Children's Online Privacy Protection Rule
            </p>
          </div>

          {/* NBCT Certification */}
          <div className="flex flex-col items-center gap-3 sm:gap-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[65px] lg:h-[65px] flex-shrink-0">
              <ImageWithFallback
                src={imgFrameworkInformationalPageHeroBadgesFerpa1}
                alt="National Board Certified Teachers badge"
                className="w-full h-full object-contain rounded saturate-0"
              />
            </div>
            <p className="hidden sm:block font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[12px] sm:text-[10px] lg:text-[12px] text-center leading-relaxed max-w-28">
              National Board of Certified Teachers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}