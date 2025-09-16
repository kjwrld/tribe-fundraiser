import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import dashboardImage from "figma:asset/57e5ffe5c22c959464f0f0a8a8c720c70064c23c.png";

export default function Families() {
  return (
    <div className="w-full flex flex-col items-center gap-8 lg:gap-12 py-8 lg:py-12" data-name="families">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-['Nunito:Bold',_sans-serif] text-[#d5adff] text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-tight">
          For Families
        </h2>
        <p className="font-['Nunito:Regular',_sans-serif] text-[#efe0ff] text-[16px] sm:text-[18px] leading-relaxed max-w-md">
          Affordable, Measurable and Safe.
        </p>
      </div>

      {/* Content Section - Responsive Layout */}
      <div className="w-full max-w-5xl mx-auto px-4">
        {/* Mobile & Tablet: Vertical Stack */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Dashboard Image */}
          <div className="w-full">
            <div className="relative w-full h-[280px] sm:h-[360px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={dashboardImage}
                alt="Family dashboard showing screen time analytics, progress reports, and parental controls"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Features Section for Mobile/Tablet */}
          <div className="w-full max-w-2xl mx-auto sm:max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Family Mode */}
              <div className="flex flex-col gap-4 p-6">
                <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[20px] sm:text-[22px] font-medium leading-tight">
                  Family Mode
                </h3>
                <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[16px] sm:text-[17px] leading-relaxed">
                  Detailed screen time analytics, progress reports, and insights to help your family thrive
                </p>
              </div>

              {/* Safe & Simple */}
              <div className="flex flex-col gap-4 p-6">
                <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[20px] sm:text-[22px] font-medium leading-tight">
                  Safe & Simple
                </h3>
                <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[16px] sm:text-[17px] leading-relaxed">
                  COPPA-compliant monitoring with intuitive dashboards designed for families
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Dashboard Image - Left Side */}
          <div className="w-full">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={dashboardImage}
                alt="Family dashboard showing screen time analytics, progress reports, and parental controls"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Features Section - Right Side */}
          <div className="w-full flex flex-col gap-8">
            {/* Family Mode */}
            <div className="flex flex-col gap-4">
              <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[24px] font-medium leading-tight">
                Family Mode
              </h3>
              <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[18px] leading-relaxed">
                Detailed screen time analytics, progress reports, and insights to help your family thrive
              </p>
            </div>

            {/* Safe & Simple */}
            <div className="flex flex-col gap-4">
              <h3 className="font-['Nunito:Regular',_sans-serif] text-[#a047ff] text-[24px] font-medium leading-tight">
                Safe & Simple
              </h3>
              <p className="font-['Nunito:Regular',_sans-serif] text-[#d5adff] text-[18px] leading-relaxed">
                COPPA-compliant monitoring with intuitive dashboards designed for families
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}