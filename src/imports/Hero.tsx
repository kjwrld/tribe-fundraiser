import svgPaths from "./svg-2ljn3lk1ls";
import imgFrame61559 from "../assets/webp/ce3be992f9705c8a009f4cf21949a94686798352.webp";
import { R3FRocketModel } from "../components/R3FRocketModel";

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center lg:justify-start relative shrink-0 w-full" data-name="Title">
      <div className="font-['Nunito:Bold',_sans-serif] font-bold h-auto lg:h-[139px] leading-[0] relative shrink-0 text-[#d5adff] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[59.044px] xl:text-[64px] w-full text-center lg:text-left">
        <p className="leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[59.044px] xl:leading-[64px] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[59.044px] xl:text-[64px] drop-shadow-2xl lg:drop-shadow-none">
          <span className="drop-shadow-2xl lg:drop-shadow-none">{`STEM, but`}</span>
          <br />
          <span className="text-[#29ffe7] drop-shadow-2xl lg:drop-shadow-none">Supercharged.</span>
        </p>
      </div>
      <div className="absolute bg-[#1f002e] blur-[26.25px] filter h-[150px] left-[364px] rounded-[18px] top-0 w-[88px] hidden lg:block" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-auto lg:h-[193px] items-center lg:items-start justify-center relative shrink-0 w-full lg:w-[460.769px] xl:w-[500px]" data-name="TEXT">
      <Title />
      <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#d5adff] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.36px] w-[280px] sm:w-[320px] md:w-[360px] lg:w-[396px] xl:w-[450px] mt-4 lg:mt-0 text-center lg:text-left drop-shadow-md lg:drop-shadow-none">
        <p className="leading-[27px]">NGSS-aligned learning, powered by heroes who reflect every child’s identity and potential.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[8.862px] h-[57.603px] items-center justify-center px-0 py-[13.293px] relative rounded-[10.634px] shrink-0">
      <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14.179px] text-neutral-100 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Explore Now!</p>
      </div>
    </div>
  );
}

function Layer1() {
  return (
    <div className="relative size-[24.371px]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g clipPath="url(#clip0_2_858)" id="Layer_1">
          <path d={svgPaths.p3180c300} fill="var(--fill-0, #E7B900)" id="Vector" />
          <g id="Frame 61650">
            <path d={svgPaths.p1f0b1bf0} fill="var(--fill-0, #C49000)" id="Vector_2" />
            <path d={svgPaths.p2ad9b570} fill="var(--fill-0, #AD7F00)" id="Vector_3" />
          </g>
          <g id="Frame 61651">
            <path d={svgPaths.p2778c300} fill="var(--fill-0, #E7B900)" id="Vector_4" />
            <g id="Group">
              <path d={svgPaths.p21257280} fill="var(--fill-0, #947600)" id="Vector_5" />
              <path d={svgPaths.pc340480} fill="var(--fill-0, #947600)" id="Vector_6" />
              <path d={svgPaths.p5e7ae00} fill="var(--fill-0, #947600)" id="Vector_7" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_858">
            <rect fill="white" height="24.3707" width="24.3707" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InterfaceCoins() {
  return (
    <div className="h-[28.096px] overflow-clip relative shrink-0 w-[26.586px]" data-name="interface/coins">
      <div className="absolute flex items-center justify-center size-[24.371px] translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 0.048px)", left: "calc(50% - 0.292px)" }}>
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Layer1 />
        </div>
      </div>
    </div>
  );
}

function WalletIcon() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative rounded-[10.634px] shrink-0 w-[63.807px]" data-name="Wallet icon">
      <InterfaceCoins />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#782acb] box-border content-stretch flex gap-[6px] sm:gap-[8.862px] h-[48px] sm:h-[55px] items-center justify-start px-[24px] sm:px-[32px] md:px-[41.652px] py-[8px] sm:py-[10.634px] relative rounded-[8px] sm:rounded-[10.634px] shadow-[0px_40.766px_11.521px_0px_rgba(120,43,201,0),0px_26.586px_10.634px_0px_rgba(120,43,201,0.01),0px_15.066px_8.862px_0px_rgba(120,43,201,0.05),0px_6.203px_6.203px_0px_rgba(120,43,201,0.09),0px_1.772px_3.545px_0px_rgba(120,43,201,0.1)] shrink-0" data-name="Button">
      <Frame5 />
      <WalletIcon />
    </div>
  );
}

function Frame61807() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[52px] grow items-center lg:items-start justify-center min-h-px min-w-px relative shrink-0">
      <Text />
      <div className="flex justify-center lg:justify-start w-full relative z-10">
        <Button />
      </div>
    </div>
  );
}

function Frame61559() {
  return (
    <div className="flex items-center justify-center lg:justify-end h-[250px] sm:h-[300px] md:h-[350px] lg:h-[600px] xl:h-[721px] shrink-0 w-full sm:w-[350px] md:w-[400px] lg:w-[600px] xl:w-[730px]">
      {/* Mobile: Use original image */}
      <div className="md:hidden w-full h-full">
        <img 
          src={imgFrame61559} 
          alt="YGB Rocket" 
          className="max-w-full max-h-full object-contain rounded-[0px] mt-[0px] mb-[0px] ml-[0px] sm:py-[12px] mr-[-42px] px-[0px] py-[24px]"
        />
      </div>
      
      {/* Desktop/Tablet: Use React Three Fiber 3D model */}
      <div className="hidden md:block w-full h-full lg:-mr-12 xl:mr-[-120px]">
        <R3FRocketModel className="w-full h-full" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full" data-name="Hero">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center relative px-[0px] p-[0px] m-[0px]">
          {/* Mobile layout: Stack rocket above text */}
          <div className="lg:hidden box-border content-stretch flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 pt-4 pb-12 sm:pb-16 md:pb-20 relative w-full">
            <Frame61559 />
            <Frame61807 />
          </div>
          
          {/* Desktop layout: Side by side on large screens and up */}
          <div className="hidden lg:flex box-border content-stretch flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 xl:py-20 relative w-full">
            <Frame61807 />
            <Frame61559 />
          </div>
        </div>
      </div>
    </div>
  );
}