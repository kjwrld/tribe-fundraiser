import imgFrame61797 from "figma:asset/92f4b2e348bd6ec795814df23aabd3730268f0c5.png";
import imgImage16 from "figma:asset/71ecd7e320bfa4d7e3a538bd8f0f05ebec8f0386.png";
import imgImage17 from "figma:asset/4f2c17b7c21d2e30a2058cd003398dc75c36ed86.png";
import imgImage18 from "figma:asset/6f5928af1a06de473ac13de227ec9ec6b190f002.png";

export function Footer() {
  const navigationLinks = [
    'Explore',
    'About Us', 
    'Pledge',
    'Contact Us'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Term and Conditions'
  ];

  const socialIcons = [
    { image: imgImage16, alt: 'Social Media 1' },
    { image: imgImage17, alt: 'Social Media 2' },
    { image: imgImage18, alt: 'Social Media 3' }
  ];

  return (
    <footer className="bg-[rgba(225,190,255,0.1)] relative rounded-tl-[16px] rounded-tr-[16px] sm:rounded-tl-[20px] sm:rounded-tr-[20px] lg:rounded-tl-[24px] lg:rounded-tr-[24px] w-full" data-name="Footer">
      <div className="relative w-full">
        {/* Mobile Layout (< 768px) */}
        <div className="block md:hidden px-4 py-6 space-y-6">
          {/* Logo Section */}
          <div className="flex flex-col items-start space-y-4">
            <div className="bg-center bg-cover bg-no-repeat h-[36px] w-[140px] shrink-0" style={{ backgroundImage: `url('${imgFrame61797}')` }} />
          </div>
          
          {/* Navigation and Legal Links in Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-['Nunito:Medium',_sans-serif] text-[#737992] text-[13px] mb-2">Navigation</h4>
              {navigationLinks.map((link, index) => (
                <div key={index} className="font-['Nunito:Regular',_sans-serif] text-[#737992] text-[13px] hover:text-[#a047ff] transition-colors duration-200 cursor-pointer">
                  <p className="leading-[20px]">{link}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <h4 className="font-['Nunito:Medium',_sans-serif] text-[#737992] text-[13px] mb-2">Legal</h4>
              {legalLinks.map((link, index) => (
                <div key={index} className="font-['Nunito:Regular',_sans-serif] text-[#737992] text-[13px] hover:text-[#a047ff] transition-colors duration-200 cursor-pointer">
                  <p className="leading-[20px]">{link}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Icons and Copyright */}
          <div className="flex flex-col space-y-4">
            <div className="flex gap-4 items-center">
              {socialIcons.map((social, index) => (
                <div key={index} className="h-[28px] w-[28px] flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[20px]" style={{ backgroundImage: `url('${social.image}')` }} alt={social.alt} />
                </div>
              ))}
            </div>
            <div className="font-['Nunito:Regular',_sans-serif] text-[#8c92ab] text-[12px]">
              <p className="leading-[20px]">© 2025 YGBVERSE</p>
            </div>
          </div>
        </div>

        {/* Tablet Layout (768px - 1023px) */}
        <div className="hidden md:block lg:hidden px-6 py-8">
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Logo Column */}
            <div className="space-y-6">
              <div className="bg-center bg-cover bg-no-repeat h-[38px] w-[160px] shrink-0" style={{ backgroundImage: `url('${imgFrame61797}')` }} />
              <div className="space-y-3">
                <h4 className="font-['Nunito:Medium',_sans-serif] text-[#737992] text-[13px] mb-2">Navigation</h4>
                {navigationLinks.map((link, index) => (
                  <div key={index} className="font-['Nunito:Regular',_sans-serif] text-[#737992] text-[13px] hover:text-[#a047ff] transition-colors duration-200 cursor-pointer">
                    <p className="leading-[22px]">{link}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-['Nunito:Medium',_sans-serif] text-[#737992] text-[13px] mb-2">Legal</h4>
                {legalLinks.map((link, index) => (
                  <div key={index} className="font-['Nunito:Regular',_sans-serif] text-[#737992] text-[13px] hover:text-[#a047ff] transition-colors duration-200 cursor-pointer">
                    <p className="leading-[22px]">{link}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4 items-center">
                {socialIcons.map((social, index) => (
                  <div key={index} className="h-[30px] w-[30px] flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[21px]" style={{ backgroundImage: `url('${social.image}')` }} alt={social.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Copyright at bottom */}
          <div className="font-['Nunito:Regular',_sans-serif] text-[#8c92ab] text-[13px] pt-4 border-t border-[rgba(115,121,146,0.2)]">
            <p className="leading-[22px]">© 2025 YGBVERSE</p>
          </div>
        </div>

        {/* Desktop Layout (≥ 1024px) - Original Design */}
        <div className="hidden lg:block px-8 xl:px-[168px] py-[39px]">
          <div className="flex items-start justify-between min-h-[140px]">
            {/* Logo and Copyright Section */}
            <div className="flex flex-col items-start justify-start pb-0 pt-[11px] px-0 w-full max-w-[244px] h-full">
              <div className="bg-center bg-cover bg-no-repeat h-[42.61px] shrink-0 w-full mb-8" style={{ backgroundImage: `url('${imgFrame61797}')` }} />
              <div className="font-['Nunito:Regular',_sans-serif] text-[#8c92ab] text-[14px] w-full mt-auto">
                <p className="leading-[24px]">© 2025 YGBVERSE</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-[18px] items-start justify-start p-[10px] pt-[21px]">
              {navigationLinks.map((link, index) => (
                <div key={index} className="font-['Nunito:Regular',_sans-serif] text-[#737992] text-[14px] hover:text-[#a047ff] transition-colors duration-200 cursor-pointer">
                  <p className="leading-[24px]">{link}</p>
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-col gap-[18px] items-start justify-start p-[10px] pt-[21px]">
              {legalLinks.map((link, index) => (
                <div key={index} className="font-['Nunito:Regular',_sans-serif] text-[#737992] text-[14px] hover:text-[#a047ff] transition-colors duration-200 cursor-pointer">
                  <p className="leading-[24px]">{link}</p>
                </div>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-[18px] items-start justify-start p-[10px] pt-[21px]">
              {socialIcons.map((social, index) => (
                <div key={index} className="h-[31px] w-[32px] flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[22px]" style={{ backgroundImage: `url('${social.image}')` }} alt={social.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fff1ed] border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px] sm:rounded-tl-[20px] sm:rounded-tr-[20px] lg:rounded-tl-[24px] lg:rounded-tr-[24px]" />
    </footer>
  );
}