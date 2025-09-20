import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import imgFrame61819 from "../assets/webp/415485744fdfbde394fc71d336bec39854081ff0.webp";

export default function Educators() {
  return (
    <div className="w-full flex flex-col items-center gap-8 lg:gap-12 py-8 lg:py-12" data-name="educators">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-['Nunito:Bold',_sans-serif] text-[#d5adff] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[59.044px] xl:text-[64px] font-bold leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[59.044px] xl:leading-[64px]">
          For Educators
        </h2>
        <p className="font-['Nunito:Regular',_sans-serif] text-[#efe0ff] text-[16px] sm:text-[18px] leading-relaxed max-w-md">
          Boosts engagement and performance.
        </p>
      </div>

      {/* Features Cards - Mobile/Tablet */}
      <div className="w-full max-w-4xl mx-auto px-4 lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Teacher Dashboard */}
          <div className="flex flex-col gap-3 items-center text-center p-6">
            <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[20px] sm:text-[22px] font-medium leading-tight">
              Teacher Dashboard
            </h3>
            <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[16px] sm:text-[17px] leading-relaxed">
              Student assessment and quick progress checks
            </p>
          </div>

          {/* Ready-to-Use Lessons */}
          <div className="flex flex-col gap-3 items-center text-center p-6">
            <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[20px] sm:text-[22px] font-medium leading-tight">
              Ready-to-Use Lessons
            </h3>
            <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[16px] sm:text-[17px] leading-relaxed">
              Extensive, rigorous and culturally rich STEM content
            </p>
          </div>

          {/* STEM Proficiency */}
          <div className="flex flex-col gap-3 items-center text-center p-6">
            <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[20px] sm:text-[22px] font-medium leading-tight">
              STEM Proficiency
            </h3>
            <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[16px] sm:text-[17px] leading-relaxed">
              Kids achieve STEM proficiency in 1-3 months
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Image - Mobile/Tablet */}
      <div className="w-full max-w-4xl mx-auto px-4 lg:hidden">
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
          <ImageWithFallback
            src={imgFrame61819}
            alt="Teacher dashboard showing student progress, assessments, and analytics"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full max-w-6xl mx-auto px-4">
        {/* Features Cards - Desktop */}
        <div className="grid grid-cols-3 gap-8 mb-10">
          {/* Teacher Dashboard */}
          <div className="flex flex-col gap-3 items-center text-center p-6">
            <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[24px] font-medium leading-tight">
              Teacher Dashboard
            </h3>
            <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[18px] leading-relaxed">
              Student assessment and quick progress checks
            </p>
          </div>

          {/* Ready-to-Use Lessons */}
          <div className="flex flex-col gap-3 items-center text-center p-6">
            <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[24px] font-medium leading-tight">
              Ready-to-Use Lessons
            </h3>
            <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[18px] leading-relaxed">
              Extensive, rigorous and culturally rich STEM content
            </p>
          </div>

          {/* STEM Proficiency */}
          <div className="flex flex-col gap-3 items-center text-center p-6">
            <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[24px] font-medium leading-tight">
              STEM Proficiency
            </h3>
            <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[18px] leading-relaxed">
              Kids achieve STEM proficiency in 1-3 months
            </p>
          </div>
        </div>

        {/* Dashboard Image - Desktop */}
        <div className="w-full">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <ImageWithFallback
              src={imgFrame61819}
              alt="Teacher dashboard showing student progress, assessments, and analytics"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}