import imgRectangle2156 from "../assets/webp/8d2fd097d56f012cee07134bb33d29e004f9eeff.webp";

function Frame61568() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-[18px] py-1.5 relative shrink-0">
      <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5b6178] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Explore</p>
      </div>
    </div>
  );
}

function Frame61569() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-[18px] py-1.5 relative shrink-0">
      <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5b6178] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">About Us</p>
      </div>
    </div>
  );
}

function Frame61566() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-[18px] py-1.5 relative shrink-0">
      <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#a047ff] text-[0px] text-nowrap">
        <p className="font-['Nunito:Bold',_sans-serif] font-bold leading-[normal] text-[16px] whitespace-pre">Crowdfunding</p>
      </div>
    </div>
  );
}

function Frame61570() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-[18px] py-1.5 relative shrink-0">
      <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5b6178] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Reach Out</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="Menu">
      <Frame61568 />
      <Frame61569 />
      <Frame61566 />
      <Frame61570 />
    </div>
  );
}

function Frame61567() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-center relative shrink-0 w-[319px]">
      <div className="bg-[64.29%_50%] bg-no-repeat bg-size-[117.61%_269.8%] h-[39px] shrink-0 w-[159px]" style={{ backgroundImage: `url('${imgRectangle2156}')` }} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="font-['Nunito:Bold',_sans-serif] font-bold leading-[normal] text-[16px] whitespace-pre">Join Us!</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#782acb] box-border content-stretch flex gap-2.5 grow items-center justify-center min-h-px min-w-px px-[13px] py-[15px] relative rounded-[12px] shadow-[0px_46px_13px_0px_rgba(120,43,201,0),0px_30px_12px_0px_rgba(120,43,201,0.01),0px_17px_10px_0px_rgba(120,43,201,0.05),0px_7px_7px_0px_rgba(120,43,201,0.09),0px_2px_4px_0px_rgba(120,43,201,0.1)] shrink-0 w-[135px]" data-name="Button">
      <Frame5 />
    </div>
  );
}

function Frame61571() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 h-[60px] items-end justify-start relative shrink-0 w-[330px]">
      <Button />
    </div>
  );
}

export default function NavMenu() {
  return (
    <div className="relative size-full" data-name="Nav Menu">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[42px] py-[52px] relative size-full">
          <Menu />
          <Frame61567 />
          <Frame61571 />
        </div>
      </div>
    </div>
  );
}