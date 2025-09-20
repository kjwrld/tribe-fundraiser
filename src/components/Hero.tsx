import svgPaths from "../imports/svg-knx35mgwff";
import imgFrame61774 from "../assets/webp/24ffbe288bce42e59626a63b1da81bcb21dce94f.webp";

function InterfaceLightning() {
    return (
        <div
            className="relative shrink-0 size-[21.269px]"
            data-name="interface/lightning"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 22 22"
            >
                <g id="interface/lightning">
                    <g id="Vector">
                        <path
                            d={svgPaths.p1902a600}
                            fill="var(--fill-0, white)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

interface HeroProps {
  onNavigate?: (page: 'home' | 'about' | 'explore' | 'crowdfunding' | 'success' | 'cancel') => void;
}

export function Hero({ onNavigate }: HeroProps = {}) {
    return (
        <section className="relative w-full">
            <div className="flex flex-col items-center justify-center pt-32 lg:pt-40 pb-12 lg:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-12 lg:gap-[45px] items-center justify-center text-center">
                        {/* Hero Content */}
                        <div className="flex flex-col gap-6 items-center justify-start w-full max-w-4xl">
                            {/* Main Heading */}
                            <div className="content-stretch flex gap-2.5 items-start justify-center relative shrink-0 w-full">
                                <div className="font-['Nunito:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#d5adff] text-[0px] tracking-[1.23px] w-full max-w-[693.77px]">
                                    <p className="leading-[41px] text-[24px] sm:text-[32px] lg:text-[41px]">
                                        <span>Help Us </span>
                                        <span className="text-[#a047ff]">
                                            Reimagine
                                        </span>
                                        <span> the Classroom</span>
                                    </p>
                                </div>
                                <div className="absolute blur-[13.5px] filter h-[41px] left-[10%] sm:left-[125px] top-0 w-11" />
                                <div className="absolute bg-gradient-to-r blur-[13.5px] filter from-[#ffffff00] h-[41px] right-0 to-[#ffffff] to-[56.41%] top-0 w-[93px]" />
                            </div>

                            {/* Subtitle */}
                            <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0">
                                <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#737992] text-[16px] sm:text-[18px] text-center tracking-[0.36px]">
                                    <p className="leading-[27px]">
                                        Your pledge fuels access, equity, and
                                        joy in STEM education.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
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
                                className="relative bg-gradient-to-r from-[#782acb] to-[#9333ea] hover:from-[#6b25b5] hover:to-[#7c3aed] box-border content-stretch flex gap-[8.862px] h-[54px] items-center justify-center px-[41.652px] py-[10.634px] rounded-[10.634px] shadow-[0px_20px_25px_-5px_rgba(120,43,201,0.4),0px_10px_10px_-5px_rgba(120,43,201,0.04)] hover:shadow-[0px_25px_50px_-12px_rgba(120,43,201,0.6),0px_0px_0px_1px_rgba(160,71,255,0.3)] hover:scale-110 active:scale-105 shrink-0 transition-all duration-300 ease-out overflow-hidden group animate-pulse-glow">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                                <div className="box-border content-stretch flex gap-3 items-center justify-start px-0 py-[13.293px] relative rounded-[10.634px] shrink-0 z-10">
                                    <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14.179px] text-neutral-100 text-nowrap transition-all duration-300">
                                        <p className="leading-[normal] whitespace-pre">
                                            Launch great ideas
                                        </p>
                                    </div>
                                    <div className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                                        <InterfaceLightning />
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Hero Image */}
                        <div className="w-full max-w-[518px] mx-auto">
                            <div
                                className="bg-top bg-cover bg-no-repeat h-[280px] sm:h-[320px] lg:h-[369px] rounded-[12px] shadow-[23px_81px_24px_0px_rgba(92,88,126,0),15px_52px_21px_0px_rgba(92,88,126,0.01),8px_29px_18px_0px_rgba(92,88,126,0.05),4px_13px_13px_0px_rgba(92,88,126,0.09),1px_3px_7px_0px_rgba(92,88,126,0.1)] shrink-0 w-full"
                                style={{
                                    backgroundImage: `url('${imgFrame61774}')`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
