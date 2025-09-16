function Frame5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="font-['Nunito:Bold',_sans-serif] font-bold leading-[normal] text-[16px] whitespace-pre">Join Us!</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#782acb] relative rounded-[12px] shadow-[0px_46px_13px_0px_rgba(120,43,201,0),0px_30px_12px_0px_rgba(120,43,201,0.01),0px_17px_10px_0px_rgba(120,43,201,0.05),0px_7px_7px_0px_rgba(120,43,201,0.09),0px_2px_4px_0px_rgba(120,43,201,0.1)] size-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-[13px] py-[15px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}