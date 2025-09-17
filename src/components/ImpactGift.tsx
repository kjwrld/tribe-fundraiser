import { imgInterfaceCheckM, imgInterfaceCheckM1 } from "../imports/svg-quane";
import Slider from "react-slick";
import { useState, useRef, useCallback } from "react";
import { DonationCheckout } from "./DonationCheckout";

export function ImpactGift() {
    // State for mobile drag-to-increment interaction
    const [dragValue, setDragValue] = useState(25);
    const [donationError, setDonationError] = useState<string | null>(null);
    const { handleDonation, isLoading } = DonationCheckout({
        amount: dragValue,
        isRecurring: false,
        description: 'YGBVerse One-time Donation',
        onSuccess: () => {
            console.log('Donation successful!');
            setDonationError(null);
        },
        onError: (error) => {
            setDonationError(error);
        }
    });

    // Handler for tier subscription buttons
    const handleTierSubscription = async (tierAmount: number, tierName: string) => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL || window.location.origin;
            const response = await fetch(`${apiUrl}/api/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: tierAmount,
                    description: `YGBVerse ${tierName} Annual Subscription`,
                    isRecurring: true
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const { url } = await response.json();
            
            if (url) {
                window.location.href = url;
            }
        } catch (error) {
            console.error('Subscription error:', error);
            alert('Failed to process subscription. Please try again.');
        }
    };
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartY, setDragStartY] = useState(0);
    const [dragStartValue, setDragStartValue] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Mobile drag interaction handlers
    const handleTouchStart = useCallback(
        (e: React.TouchEvent) => {
            if (window.innerWidth > 1024) return; // Only on mobile/tablet

            setIsDragging(true);
            setDragStartY(e.touches[0].clientY);
            setDragStartValue(dragValue);

            // Prevent default to avoid scrolling while dragging
            e.preventDefault();
        },
        [dragValue]
    );

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (!isDragging || window.innerWidth > 1024) return;

            const currentY = e.touches[0].clientY;
            const deltaY = dragStartY - currentY; // Invert: drag up = positive, drag down = negative

            // Scale the movement (every 10px of movement = $25 change)
            const valueChange = Math.round(deltaY / 10) * 25;
            const newValue = Math.max(5, dragStartValue + valueChange); // Minimum $5

            setDragValue(newValue);

            // Update input value
            if (inputRef.current) {
                inputRef.current.value = newValue.toString();
            }

            e.preventDefault();
        },
        [isDragging, dragStartY, dragStartValue]
    );

    const handleTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            if (!isDragging) return;

            setIsDragging(false);
            e.preventDefault();
        },
        [isDragging]
    );

    // Handle regular input changes
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value) || 0;
            setDragValue(Math.max(5, value));
        },
        []
    );

    // Handle quick amount button clicks
    const handleQuickAmount = useCallback((amount: number) => {
        setDragValue(amount);
        if (inputRef.current) {
            inputRef.current.value = amount.toString();
        }
    }, []);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        initialSlide: 1, // Start at Steamer ($600) tier
        dotsClass: "slick-dots custom-dots",
        customPaging: () => (
            <div className="w-2 h-2 bg-[#d5adff] rounded-full transition-all duration-300 hover:bg-[#a047ff]" />
        ),
        responsive: [
            {
                breakpoint: 1024, // lg breakpoint
                settings: {
                    centerPadding: "40px", // Reduced padding for better side card visibility
                    initialSlide: 1, // Ensure center start on tablet
                },
            },
            {
                breakpoint: 768, // md breakpoint
                settings: {
                    centerPadding: "30px",
                    initialSlide: 1, // Ensure center start on medium screens
                },
            },
            {
                breakpoint: 640, // sm breakpoint
                settings: {
                    centerPadding: "20px",
                    initialSlide: 1, // Ensure center start on small screens
                },
            },
        ],
    };

    const tiers = [
        {
            name: "Explorer",
            nameColor: "text-[#8c92ab]",
            price: "$200",
            amount: 200,
            period: "/ billed annually",
            benefits: [
                "Gift access to 1 classes (30 students)",
                "Meet the Founder and the Team",
                'Digital "Thank you" postcard',
            ],
            mobileBenefits: [
                { main: "Gift access to 1 classes", subtitle: "(30 students)" },
                { main: "Meet the Founder and the Team", subtitle: null },
                { main: 'Digital "Thank you" postcard', subtitle: null },
            ],
            buttonStyle: "border border-[#230048] text-[#230048]",
            checkIcon: imgInterfaceCheckM,
            isPopular: false,
        },
        {
            name: "Steamer",
            nameColor: "text-[#8614ff]",
            price: "$600",
            amount: 600,
            period: "/ billed annually",
            benefits: [
                "Gift access to 3 classes (90 students)",
                "Meet the Teacher Advisory Board",
                "YGBverse exclusive Lanyard",
                "Plus all Explore benefits",
            ],
            mobileBenefits: [
                { main: "Gift access to 3 classes", subtitle: "(90 students)" },
                { main: "Meet the Teacher Advisory Board", subtitle: null },
                { main: "YGBverse exclusive Lanyard", subtitle: null },
                { main: "Plus all Explore benefits", subtitle: null },
            ],
            buttonStyle:
                "bg-[#782acb] text-white shadow-[0px_46px_13px_0px_rgba(120,43,201,0),0px_30px_12px_0px_rgba(120,43,201,0.01),0px_17px_10px_0px_rgba(120,43,201,0.05),0px_7px_7px_0px_rgba(120,43,201,0.09),0px_2px_4px_0px_rgba(120,43,201,0.1)]",
            checkIcon: imgInterfaceCheckM1,
            isPopular: true,
        },
        {
            name: "YGBer",
            nameColor: "text-[#8c92ab]",
            price: "$1000",
            amount: 1000,
            period: "/ billed annually",
            benefits: [
                "Gift access to 5 classes (120 students)",
                "YGB limited edition Coloring Book",
                "YGBverse limited Edition Journal",
                "Plus all Steamer benefits",
            ],
            mobileBenefits: [
                {
                    main: "Gift access to 5 classes",
                    subtitle: "(120 students)",
                },
                { main: "YGB limited edition Coloring Book", subtitle: null },
                { main: "YGBverse limited Edition Journal", subtitle: null },
                { main: "Plus all Steamer benefits", subtitle: null },
            ],
            buttonStyle: "border border-[#230048] text-[#230048]",
            checkIcon: imgInterfaceCheckM,
            isPopular: false,
        },
    ];

    return (
        <section className="bg-gradient-to-b from-purple-50/10 to-white/70 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-[80px] items-center justify-start">
                    {/* Title Section */}
                    <div className="relative w-full max-w-4xl">
                        <div className="flex flex-row items-center justify-center relative w-full">
                            <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-0 relative w-full">
                                <div className="font-['Nunito:Bold',_sans-serif] font-bold text-center tracking-[1.02px] max-w-[693.77px]">
                                    <p className="text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-[#a047ff]">
                                        <span>Impact </span>
                                        <span className="text-[#d5adff]">
                                            of Your Gift
                                        </span>
                                    </p>
                                </div>
                                <div className="absolute bg-gradient-to-r blur-[13.5px] filter from-[#ffffff00] h-[82px] right-0 to-[#ffffff] to-[56.41%] top-[-22px] w-32" />
                            </div>
                        </div>

                        {/* Subtitle */}
                        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-0 relative mt-3 w-full max-w-[626px] mx-auto">
                            <div className="basis-0 font-['Nunito:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#5b6178] text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                                <p className="leading-relaxed">
                                    Choose your level of impact and help
                                    transform STEM education
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tier Cards - Mobile Carousel */}
                    <div className="w-full max-w-6xl">
                        {/* Mobile Carousel */}
                        <div className="block lg:hidden overflow-hidden">
                            <style>{`
                .slick-slider {
                  overflow: hidden !important;
                }
                .slick-list {
                  overflow: hidden !important;
                  margin: 0 !important;
                }
                .custom-dots {
                  bottom: -80px !important;
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                  gap: 8px !important;
                  list-style: none !important;
                  padding: 0 !important;
                  margin: 0 !important;
                }
                .custom-dots li {
                  margin: 0 !important;
                  cursor: pointer !important;
                }
                .custom-dots li.slick-active div {
                  background-color: #a047ff !important;
                  transform: scale(1.2) !important;
                }
                .slick-center .tier-card {
                  transform: scale(1.05) !important;
                }
                .slick-track {
                  display: flex !important;
                  align-items: center !important;
                }
                .slick-slide > div {
                  height: 100% !important;
                  overflow: hidden !important;
                }
                @media (min-width: 768px) and (max-width: 1023px) {
                  .slick-slide:not(.slick-center) .tier-card {
                    opacity: 0.7 !important;
                    transform: scale(0.92) !important;
                  }
                  .slick-center .tier-card {
                    transform: scale(1.02) !important;
                  }
                }
              `}</style>
                            <div className="relative overflow-hidden">
                                <Slider {...carouselSettings}>
                                    {tiers.map((tier, index) => (
                                        <div
                                            key={tier.name}
                                            className="px-2 outline-none"
                                        >
                                            <div
                                                className={`tier-card backdrop-blur-[2px] backdrop-filter relative rounded-[24px] w-full max-w-[350px] mx-auto min-h-[580px] transition-all duration-300 ${
                                                    tier.isPopular
                                                        ? "bg-white/90 shadow-[75px_53px_26px_0px_rgba(69,9,134,0),48px_34px_24px_0px_rgba(69,9,134,0.01),27px_19px_20px_0px_rgba(69,9,134,0.05),12px_8px_15px_0px_rgba(69,9,134,0.09),3px_2px_8px_0px_rgba(69,9,134,0.1)]"
                                                        : "bg-[rgba(255,255,255,0.4)] border border-[#d5adff]"
                                                }`}
                                            >
                                                <div className="box-border content-stretch flex flex-col gap-8 items-center justify-center overflow-clip px-6 py-8 relative w-full h-full">
                                                    {/* Tier Header */}
                                                    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative w-full">
                                                        {/* Tier Name */}
                                                        <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
                                                            <div className="content-stretch flex items-end justify-start relative shrink-0 w-full">
                                                                <div
                                                                    className={`font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 ${tier.nameColor} text-[16px] sm:text-[18px] text-nowrap`}
                                                                >
                                                                    <p className="leading-[20px] sm:leading-[24px] whitespace-pre">
                                                                        {
                                                                            tier.name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Pricing */}
                                                        <div className="content-stretch flex flex-col gap-6 items-start justify-start relative w-full">
                                                            <div className="content-stretch flex gap-2 items-end justify-start relative shrink-0 w-full">
                                                                <div className="content-stretch flex flex-col font-['Nunito:Regular',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] relative shrink-0 text-nowrap">
                                                                    <div className="relative shrink-0 text-[#5400ad] text-[0px] tracking-[1.02px]">
                                                                        <p className="text-nowrap whitespace-pre">
                                                                            <span className="font-['Nunito:Bold',_sans-serif] font-bold leading-[40px] sm:leading-[56px] text-[28px] sm:text-[36px] lg:text-[46px]">
                                                                                {
                                                                                    tier.price
                                                                                }
                                                                            </span>
                                                                            <span className="font-['Nunito:Bold',_sans-serif] font-bold leading-[35px] sm:leading-[51px] text-[20px] sm:text-[28px] lg:text-[34px] tracking-[1.02px]">
                                                                                {" "}
                                                                            </span>
                                                                            <span className="font-['Nunito:Regular',_sans-serif] font-normal leading-[20px] sm:leading-[24px] text-[14px] sm:text-[16px] lg:text-[18px]">
                                                                                {
                                                                                    tier.period
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="relative shrink-0 text-[#8c92ab] text-[10px] sm:text-[12px] tracking-[0.12px]">
                                                                        <p className="leading-[14px] sm:leading-[18px] text-nowrap whitespace-pre">
                                                                            Plus
                                                                            taxes
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* CTA Button */}
                                                            <button
                                                                onClick={() => handleTierSubscription(tier.amount, tier.name)}
                                                                className={`box-border content-stretch flex gap-2.5 h-[55px] sm:h-[65px] items-center justify-center px-[40px] sm:px-[68px] py-[15px] relative rounded-[12px] shrink-0 w-full hover:scale-105 transition-all duration-200 ${tier.buttonStyle}`}
                                                            >
                                                                <div className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0">
                                                                    <div className="font-['Nunito:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[18px] sm:text-[22px] text-nowrap tracking-[1.1px]">
                                                                        <p className="leading-none whitespace-pre">
                                                                            Continue
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Benefits List */}
                                                    <div className="content-stretch flex flex-col items-start justify-start relative w-full">
                                                        {tier.mobileBenefits.map(
                                                            (
                                                                benefit,
                                                                benefitIndex
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        benefitIndex
                                                                    }
                                                                    className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full mb-3"
                                                                >
                                                                    <div className="box-border content-stretch flex gap-2.5 h-[42px] items-center justify-center overflow-clip p-[8px] relative rounded-[50px] shrink-0">
                                                                        <div className="relative shrink-0 size-[26px]">
                                                                            <img
                                                                                className="block max-w-none size-full"
                                                                                src={
                                                                                    tier.checkIcon
                                                                                }
                                                                                alt="Check"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col gap-1 items-start justify-start relative shrink-0 flex-1">
                                                                        <div className="font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#8c92ab] text-[14px] sm:text-[16px]">
                                                                            <p className="leading-[18px] sm:leading-[20px]">
                                                                                {
                                                                                    benefit.main
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                        {benefit.subtitle && (
                                                                            <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#a0a3b8] text-[12px] sm:text-[13px]">
                                                                                <p className="leading-[16px]">
                                                                                    {
                                                                                        benefit.subtitle
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            {/* Add margin for the lower dots */}
                            <div className="h-20"></div>
                        </div>

                        {/* Desktop Grid - Hidden on Mobile */}
                        <div className="hidden lg:flex flex-row gap-6 items-stretch justify-center w-full">
                            {tiers.map((tier, index) => (
                                <div
                                    key={tier.name}
                                    className={`backdrop-blur-[2px] backdrop-filter relative rounded-[24px] w-full max-w-[380px] h-full min-h-[650px] mx-auto ${
                                        tier.isPopular
                                            ? "bg-white shadow-[75px_53px_26px_0px_rgba(69,9,134,0),48px_34px_24px_0px_rgba(69,9,134,0.01),27px_19px_20px_0px_rgba(69,9,134,0.05),12px_8px_15px_0px_rgba(69,9,134,0.09),3px_2px_8px_0px_rgba(69,9,134,0.1)]"
                                            : "bg-white border border-[#d5adff]"
                                    }`}
                                >
                                    <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center overflow-clip px-6 py-7 relative w-full h-full">
                                        {/* Tier Header */}
                                        <div className="content-stretch flex flex-col gap-3 items-start justify-start relative w-full">
                                            {/* Tier Name */}
                                            <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
                                                <div className="content-stretch flex items-end justify-start relative shrink-0 w-full">
                                                    <div
                                                        className={`font-['Nunito:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 ${tier.nameColor} text-[16px] text-nowrap`}
                                                    >
                                                        <p className="leading-[20px] whitespace-pre">
                                                            {tier.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Pricing */}
                                            <div className="content-stretch flex flex-col gap-6 items-start justify-start relative w-full">
                                                <div className="content-stretch flex gap-2 items-end justify-start relative shrink-0 w-full">
                                                    <div className="content-stretch flex flex-col font-['Nunito:Regular',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] relative shrink-0 text-nowrap">
                                                        <div className="relative shrink-0 text-[#5400ad] text-[0px] tracking-[1.02px]">
                                                            <p className="text-nowrap whitespace-pre">
                                                                <span className="font-['Nunito:Bold',_sans-serif] font-bold leading-[48px] text-[32px] lg:text-[40px]">
                                                                    {tier.price}
                                                                </span>
                                                                <span className="font-['Nunito:Bold',_sans-serif] font-bold leading-[42px] text-[24px] lg:text-[30px] tracking-[1.02px]">
                                                                    {" "}
                                                                </span>
                                                                <span className="font-['Nunito:Regular',_sans-serif] font-normal leading-[20px] text-[14px] lg:text-[16px]">
                                                                    {
                                                                        tier.period
                                                                    }
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="relative shrink-0 text-[#8c92ab] text-[12px] tracking-[0.12px]">
                                                            <p className="leading-[18px] text-nowrap whitespace-pre">
                                                                Plus taxes
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* CTA Button */}
                                                <button
                                                    onClick={() => handleTierSubscription(tier.amount, tier.name)}
                                                    className={`box-border content-stretch flex gap-2.5 h-[60px] items-center justify-center px-[40px] py-[15px] relative rounded-[12px] shrink-0 w-full hover:scale-105 transition-all duration-200 ${tier.buttonStyle}`}
                                                >
                                                    <div className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0">
                                                        <div className="font-['Nunito:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[20px] text-nowrap tracking-[1.1px]">
                                                            <p className="leading-none whitespace-pre">
                                                                Continue
                                                            </p>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Benefits List */}
                                        <div className="content-stretch flex flex-col items-start justify-start relative w-full">
                                            {tier.benefits.map(
                                                (benefit, benefitIndex) => (
                                                    <div
                                                        key={benefitIndex}
                                                        className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full mb-2"
                                                    >
                                                        <div className="box-border content-stretch flex gap-2.5 h-[42px] items-center justify-center overflow-clip p-[8px] relative rounded-[50px] shrink-0">
                                                            <div className="relative shrink-0 size-[26px]">
                                                                <img
                                                                    className="block max-w-none size-full"
                                                                    src={
                                                                        tier.checkIcon
                                                                    }
                                                                    alt="Check"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`font-['Nunito:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#8c92ab] text-[14px] ${
                                                                benefitIndex ===
                                                                    1 &&
                                                                tier.benefits[
                                                                    benefitIndex
                                                                ].length > 30
                                                                    ? ""
                                                                    : "text-nowrap"
                                                            }`}
                                                        >
                                                            <p className="leading-[18px] whitespace-pre">
                                                                {benefit}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* One-time Donation Section */}
                    <div className="w-full max-w-5xl">
                        <div className="backdrop-blur-[11.5px] backdrop-filter bg-[rgba(255,255,255,0.5)] relative rounded-[24px] w-full border border-[#d5adff] overflow-hidden">
                            {/* Modern gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-blue-50/10 pointer-events-none" />

                            <div className="relative px-8 py-12 lg:px-12 lg:py-16">
                                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-center justify-between">
                                    {/* Left Content */}
                                    <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left flex-1 max-w-lg">
                                        <div className="flex flex-col gap-3">
                                            <h3 className="font-['Nunito:Bold',_sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-tight text-[#2d1b69]">
                                                Not ready to pledge?
                                            </h3>
                                            <p className="font-['Nunito:Regular',_sans-serif] text-[16px] sm:text-[18px] leading-relaxed text-[#5b6178] max-w-md">
                                                Support our journey with a
                                                one-time donation and be part of
                                                the STEM community
                                                transformation.
                                            </p>
                                        </div>

                                        {/* Quick amount suggestions */}
                                        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 justify-center lg:justify-start">
                                            <span className="text-[14px] font-['Nunito:Medium',_sans-serif] text-[#8c92ab] lg:mr-2 text-center lg:text-left">
                                                Quick amounts:
                                            </span>
                                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                                {[50, 100, 250].map(
                                                    (amount) => (
                                                        <button
                                                            key={amount}
                                                            onClick={() =>
                                                                handleQuickAmount(
                                                                    amount
                                                                )
                                                            }
                                                            className="px-3 py-1.5 text-[14px] font-['Nunito:Medium',_sans-serif] text-[#a047ff] bg-purple-50/50 border border-[#d5adff] rounded-lg hover:bg-purple-100/50 hover:scale-105 transition-all duration-200"
                                                        >
                                                            ${amount}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Content - Donation Form */}
                                    <div className="flex flex-col gap-4 w-full max-w-sm">
                                        {/* Modern Input Field with Drag-to-increment */}
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                                                <span className="font-['Nunito:Bold',_sans-serif] font-bold text-[20px] text-[#a047ff]">
                                                    $
                                                </span>
                                            </div>
                                            <input
                                                ref={inputRef}
                                                type="number"
                                                step="25"
                                                min="5"
                                                defaultValue="25"
                                                placeholder="25"
                                                onChange={handleInputChange}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                                className={`w-full h-16 pl-10 pr-4 font-['Nunito:Medium',_sans-serif] font-medium text-[20px] text-[#2d1b69] bg-white/80 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-[#a047ff]/20 focus:outline-none transition-all duration-300 placeholder:text-[#8c92ab] lg:touch-none ${
                                                    isDragging
                                                        ? "border-[#a047ff] shadow-lg shadow-[#a047ff]/20 scale-105"
                                                        : "border-[#d5adff] focus:border-[#a047ff]"
                                                }`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/5 to-blue-50/5 rounded-xl pointer-events-none" />

                                            {/* Visual feedback for mobile drag interaction */}
                                            {isDragging && (
                                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#a047ff] text-white px-3 py-1 rounded-lg font-['Nunito:Bold',_sans-serif] font-bold text-sm lg:hidden">
                                                    ${dragValue}
                                                </div>
                                            )}
                                        </div>

                                        {/* Hint for mobile users */}
                                        <div className="text-center lg:hidden">
                                            <p className="text-[12px] font-['Nunito:Regular',_sans-serif] text-[#8c92ab]">
                                                💡 Hold and drag up/down to
                                                change amount
                                            </p>
                                        </div>

                                        {/* Modern Donate Button */}
                                        <button 
                                            onClick={handleDonation}
                                            disabled={isLoading}
                                            className={`relative group w-full h-16 bg-gradient-to-r from-[#782acb] to-[#9333ea] hover:from-[#6b25b5] hover:to-[#7c3aed] rounded-xl font-['Nunito:Bold',_sans-serif] font-bold text-[18px] text-white shadow-[0px_20px_25px_-5px_rgba(120,43,201,0.4),0px_10px_10px_-5px_rgba(120,43,201,0.04)] hover:shadow-[0px_25px_50px_-12px_rgba(120,43,201,0.6)] hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden ${
                                                isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}>
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                <span>{isLoading ? 'Processing...' : 'Make Impact'}</span>
                                                <svg
                                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                    />
                                                </svg>
                                            </span>
                                        </button>

                                        {/* Error display */}
                                        {donationError && (
                                            <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded-lg">
                                                {donationError}
                                            </div>
                                        )}

                                        {/* Trust indicators */}
                                        <div className="flex items-center justify-center gap-3 mt-2">
                                            <div className="flex items-center gap-1">
                                                <svg
                                                    className="w-4 h-4 text-green-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-[12px] font-['Nunito:Medium',_sans-serif] text-[#5b6178]">
                                                    Secure
                                                </span>
                                            </div>
                                            <div className="w-1 h-1 bg-[#d5adff] rounded-full" />
                                            <div className="flex items-center gap-1">
                                                <svg
                                                    className="w-4 h-4 text-blue-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-[12px] font-['Nunito:Medium',_sans-serif] text-[#5b6178]">
                                                    Direct impact
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
