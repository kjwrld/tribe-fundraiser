import imgFrame61773 from "figma:asset/6bff8b6b7a4ebc14733dfe499b0d985dfc2bc6d8.png";
import imgText from "figma:asset/8af2d2f5fe4a5057c6ed8ce619fa29f25c2bcb82.png";
import imgFrame61830 from "figma:asset/8d7e1c688edb78bca9b57a2d903533aa53d6dd30.png";
import imgFrame61831 from "figma:asset/559ad7fb9bdf2c2d7b46885aa42c36f383cb7930.png";
import imgFrame61832 from "figma:asset/20d26a6ceb9c81fbf4362573dfb740c5df26e6f8.png";
import imgFrame61833 from "figma:asset/bb0cae14fc041f20d4dd150507c37fc5306bf91f.png";
import imgFrame61834 from "figma:asset/552aec3d7dbbe5f0abeb9efc58e4867a9bb19bc6.png";
import {
    imgInterfaceLeaderboard,
    imgInterfaceBadge,
} from "../imports/svg-a32gx";

export function About() {
    const teamMembers = [
        {
            name: "Chris Campbell",
            role: "Founder & CEO",
            image: imgFrame61830,
        },
        {
            name: "Nicole Veintimilla",
            role: "Lead Designer",
            image: imgFrame61831,
        },
        {
            name: "Emilia Burbano de Lara",
            role: "Lead Content Creator",
            image: imgFrame61832,
        },
        {
            name: "Nihal Pimpale",
            role: "UI/UX Product Strategist",
            image: imgFrame61833,
        },
        {
            name: "Daniela Taylor",
            role: "Social Media Expert",
            image: imgFrame61834,
        },
    ];

    const skills = [
        { name: "Storytelling + Gamification", percentage: 86 },
        { name: "Educator-driven, Multicultural, Accessible", percentage: 82 },
        { name: "Equity, Representation, Community", percentage: 94 },
    ];

    const stats = [
        { number: "210", label: "Active Testers" },
        { number: "200+", label: "Users" },
        { number: "6", label: "Grades" },
        { number: "3", label: "Schools" },
    ];

    return (
        <div className="min-h-screen">
            {/* Background now provided by shared GradientBackground component */}

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center text-center">
                        {/* Title */}
                        <div className="relative mb-6">
                            <h1 className="font-['Nunito:Bold',_sans-serif] font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[1.23px] text-[#d5adff] max-w-md">
                                Empower every kid to win in{" "}
                                <span className="text-[#8614ff]">STEM</span>
                            </h1>
                            <div className="absolute -top-1.5 right-0 w-24 h-12 bg-gradient-to-r from-transparent to-white/80 blur-[13.5px]" />
                        </div>

                        {/* Subtitle */}
                        <p className="font-['Nunito:Regular',_sans-serif] text-[16px] sm:text-[18px] leading-[27px] text-[#8c92ab] text-center max-w-md mb-6 tracking-[0.36px]">
                            <span className="font-['Nunito:Bold',_sans-serif] font-bold">
                                Making STEM culturally relevant,
                            </span>
                            {
                                " so every kid, everywhere, can see themselves – and succeed."
                            }
                        </p>

                        {/* Hero Image */}
                        <div className="w-full max-w-4xl">
                            <div
                                className="w-full h-[200px] sm:h-[300px] lg:h-[237px] opacity-90 rounded-2xl"
                                style={{
                                    backgroundImage: `url('${imgFrame61773}')`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="backdrop-blur-[11.5px] backdrop-filter bg-[rgba(255,255,255,0.5)] rounded-[24px] border-2 border-[#efe0ff] overflow-hidden">
                        <div className="flex flex-col lg:flex-row items-center p-8 lg:p-16 gap-8 lg:gap-12">
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-4">
                                    <div className="bg-[rgba(198,133,255,0.3)] inline-flex items-center justify-center px-3 py-1 rounded-[12px]">
                                        <span className="font-['Nunito:Medium',_sans-serif] font-medium text-[16px] text-[#a047ff]">
                                            Our Story
                                        </span>
                                    </div>

                                    <h2 className="font-['Nunito:Bold',_sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[34px] leading-[51px] text-[#a047ff] tracking-[1.02px]">
                                        Representation that powers the future of{" "}
                                        <span className="text-[#8614ff]">
                                            STEM.
                                        </span>
                                    </h2>

                                    <p className="font-['Nunito:Regular',_sans-serif] text-[18px] leading-[27px] text-[#737992] tracking-[0.36px]">
                                        The YGBverse was created to inspire and
                                        motivate kids from all walks of life to
                                        explore the wonders of STEM+.
                                    </p>
                                </div>

                                {/* Feature Points */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 p-3">
                                            <img
                                                src={imgInterfaceLeaderboard}
                                                alt="Leaderboard"
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <p className="font-['Nunito:Regular',_sans-serif] text-[14px] leading-[24px] text-[#737992] flex-1">
                                            Schools, Teachers and Parents use
                                            our platform for developing
                                            personalized STEM skills and
                                            achieving proficiency standards
                                            through immersive game-based
                                            learning with cross-cultural
                                            exchange and relevancy.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 p-3">
                                            <img
                                                src={imgInterfaceBadge}
                                                alt="Badge"
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <p className="font-['Nunito:Regular',_sans-serif] text-[14px] leading-[24px] text-[#737992] flex-1">
                                            A place where kids feel seen,
                                            celebrated, and empowered to dream
                                            big.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 max-w-md">
                                <div
                                    className="w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[462/415] rounded-[24px] opacity-80"
                                    style={{
                                        backgroundImage: `url('${imgText}')`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="backdrop-blur-[11.5px] backdrop-filter bg-[rgba(255,255,255,0.3)] rounded-[24px] overflow-hidden min-h-[455px]">
                        <div className="p-8 lg:p-16">
                            {/* Header Section */}
                            <div className="mb-8 lg:hidden">
                                <div className="bg-[rgba(198,133,255,0.3)] inline-flex items-center justify-center px-3 py-1 rounded-[12px] mb-4">
                                    <span className="font-['Nunito:Medium',_sans-serif] font-medium text-[16px] text-[#a047ff]">
                                        Our Mission & Vision
                                    </span>
                                </div>

                                <h2 className="font-['Nunito:Bold',_sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[34px] leading-[51px] text-[#a047ff] tracking-[1.02px]">
                                    Culture sparks STEM success.
                                </h2>
                            </div>

                            {/* Mobile Image - appears after heading on mobile */}
                            <div className="lg:hidden mb-8">
                                <div
                                    className="w-full aspect-[4/3] sm:aspect-[16/10] rounded-[24px] opacity-80 mx-auto max-w-md"
                                    style={{
                                        backgroundImage: `url('${imgText}')`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                />
                            </div>

                            {/* Desktop Layout */}
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                                {/* Desktop Image Content */}
                                <div className="hidden lg:block flex-1 max-w-md">
                                    <div
                                        className="w-full h-[309px] rounded-[24px] opacity-80"
                                        style={{
                                            backgroundImage: `url('${imgText}')`,
                                            backgroundSize: "97.3% 108.77%",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "50% 99.81%",
                                        }}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 space-y-8">
                                    {/* Desktop Header */}
                                    <div className="hidden lg:block space-y-4">
                                        <div className="bg-[rgba(198,133,255,0.3)] inline-flex items-center justify-center px-3 py-1 rounded-[12px]">
                                            <span className="font-['Nunito:Medium',_sans-serif] font-medium text-[16px] text-[#a047ff]">
                                                Our Mission & Vision
                                            </span>
                                        </div>

                                        <h2 className="font-['Nunito:Bold',_sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[34px] leading-[51px] text-[#a047ff] tracking-[1.02px]">
                                            Culture sparks STEM success.
                                        </h2>
                                    </div>

                                    {/* Mission */}
                                    <div className="space-y-3">
                                        <h3 className="font-['Nunito:Bold',_sans-serif] font-bold text-[18px] leading-[27px] text-[#737992] tracking-[0.36px]">
                                            Mission
                                        </h3>
                                        <p className="font-['Nunito:Regular',_sans-serif] text-[14px] leading-[24px] text-[#737992]">
                                            Schools, Teachers and Parents use
                                            our platform for developing
                                            personalized STEM skills and
                                            achieving proficiency standards
                                            through immersive game-based
                                            learning with cross-cultural
                                            exchange and relevancy.
                                        </p>
                                    </div>

                                    {/* Vision */}
                                    <div className="space-y-3">
                                        <h3 className="font-['Nunito:Bold',_sans-serif] font-bold text-[18px] leading-[27px] text-[#737992] tracking-[0.36px]">
                                            Vision
                                        </h3>
                                        <p className="font-['Nunito:Regular',_sans-serif] text-[14px] leading-[24px] text-[#737992]">
                                            A place where kids feel seen,
                                            celebrated, and empowered to dream
                                            big.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-['Nunito:Bold',_sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[34px] leading-[51px] text-[#a047ff] tracking-[1.02px] mb-4">
                            Our Team
                        </h2>
                        <p className="font-['Nunito:Regular',_sans-serif] text-[18px] leading-[27px] text-[#8c92ab] tracking-[0.36px] max-w-2xl mx-auto">
                            Meet the diverse, passionate crew behind YGBverse:
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-[3.45px] backdrop-filter bg-[rgba(255,255,255,0.5)] rounded-[24px] border-2 border-[#00f5da] overflow-hidden"
                            >
                                <div className="relative p-8 flex flex-col items-center gap-7">
                                    {/* Teal Background Circle */}
                                    <div className="absolute top-[137px] left-[35.5px] w-[310px] h-[147px] bg-[#00f5da] rounded-t-[100px]" />

                                    {/* Member Image */}
                                    <div className="relative z-10 w-[335px] h-[272px] rounded-lg overflow-hidden">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `url('${member.image}')`,
                                                backgroundSize:
                                                    index === 1
                                                        ? "115.25% 252.35%"
                                                        : index === 2
                                                        ? "140.3% 259.29%"
                                                        : index === 3
                                                        ? "91.54% 122.4%"
                                                        : index === 4
                                                        ? "115.82% 147.52%"
                                                        : index === 5
                                                        ? "85.37% 108.74%"
                                                        : "100% 133.71%",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition:
                                                    index === 1
                                                        ? "23.57% 21.96%"
                                                        : index === 2
                                                        ? "57.41% 9.03%"
                                                        : index === 3
                                                        ? "62.94% 41.79%"
                                                        : index === 4
                                                        ? "21.93% 6.47%"
                                                        : index === 5
                                                        ? "47.96% 28.96%"
                                                        : "0% 75.09%",
                                            }}
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div className="relative z-10 text-center">
                                        <h3 className="font-['Nunito:Bold',_sans-serif] font-bold text-[18px] leading-normal text-[#002924] tracking-[0.36px] mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="font-['Nunito:Regular',_sans-serif] text-[14px] leading-[24px] text-[#00c2ad]">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Skills Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="backdrop-blur-[11.5px] backdrop-filter bg-[rgba(255,255,255,0.3)] rounded-[24px] overflow-hidden">
                        <div className="flex flex-col lg:flex-row items-center p-8 lg:p-16 gap-8 lg:gap-12">
                            {/* Skills Content */}
                            <div className="flex-1 space-y-8">
                                <div className="space-y-4">
                                    <h2 className="font-['Nunito:Bold',_sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[34px] leading-[51px] text-[#a047ff] tracking-[1.02px]">
                                        Our Skills
                                    </h2>
                                    <p className="font-['Nunito:Regular',_sans-serif] text-[18px] leading-[27px] text-[#737992] tracking-[0.36px]">
                                        A diverse team combining strategy,
                                        design, and technology to create
                                        impactful, innovative solutions.
                                    </p>
                                </div>

                                {/* Skills Progress Bars */}
                                <div className="space-y-6">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="space-y-3">
                                            <p className="font-['Nunito:Regular',_sans-serif] text-[14px] leading-[24px] text-[#737992]">
                                                {skill.name}
                                            </p>
                                            <div className="relative h-3 overflow-hidden">
                                                {/* Background Line */}
                                                <div className="absolute inset-0 w-full h-0.5 top-1.5 bg-[#782ACB] opacity-28" />
                                                {/* Progress Line */}
                                                <div
                                                    className="absolute h-0.5 top-1.5 bg-[#A047FF] transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: `${skill.percentage}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className="bg-[#782acb] hover:bg-[#6b25b5] transition-colors duration-300 rounded-[12px] shadow-[0px_46px_13px_0px_rgba(120,43,201,0),0px_30px_12px_0px_rgba(120,43,201,0.01),0px_17px_10px_0px_rgba(120,43,201,0.05),0px_7px_7px_0px_rgba(120,43,201,0.09),0px_2px_4px_0px_rgba(120,43,201,0.1)] px-6 py-4 flex items-center gap-3 group">
                                    <span className="font-['Nunito:Medium',_sans-serif] font-medium text-[16px] text-white">
                                        Meet the Team & Join Us!
                                    </span>
                                    <svg
                                        className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Stats Content */}
                            <div className="flex-1 max-w-md">
                                <div className="grid grid-cols-2 gap-8 p-6">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="text-center py-3"
                                        >
                                            <div className="font-['Nunito:Bold',_sans-serif] font-bold text-[36px] sm:text-[46px] leading-[56px] text-[#737992] mb-1">
                                                {stat.number}
                                            </div>
                                            <div className="font-['Nunito:Regular',_sans-serif] text-[18px] leading-normal text-[#737992] tracking-[0.36px]">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
