import { useState } from "react";
import { Menu, X } from "lucide-react";
import imgRectangle2156 from "../assets/webp/8d2fd097d56f012cee07134bb33d29e004f9eeff.webp";

interface ResponsiveNavProps {
    onNavigate?: (page: "home" | "about" | "explore" | "crowdfunding") => void;
    currentPage?: "home" | "about" | "explore" | "crowdfunding";
}

export function ResponsiveNav({
    onNavigate,
    currentPage = "home",
}: ResponsiveNavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (page: "home" | "about" | "explore" | "crowdfunding") => {
        if (onNavigate) {
            onNavigate(page);
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: "Explore", page: "explore" as const },
        { name: "About Us", page: "about" as const },
        { name: "Crowdfunding", page: "crowdfunding" as const },
        { name: "Reach Out", page: "home" as const },
    ];

    const isExplorePage = currentPage === "explore";

    return (
        <nav
            className={`sticky top-0 z-[100] border-b shadow-lg relative backdrop-blur-md ${
                isExplorePage
                    ? "bg-[#1E002B] border-purple-800 shadow-purple-900/20"
                    : "bg-white/90 border-gray-100 shadow-black/5"
            }`}
            style={{ minHeight: "80px" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center h-16 lg:h-20 font-['Nunito',_sans-serif]">
                    {/* Left side - Navigation (positioned absolutely) */}
                    <div className="absolute left-0 flex items-center">
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-1">
                                {navItems.map((item) => {
                                    const isActive =
                                        (currentPage === "crowdfunding" &&
                                            item.name === "Crowdfunding") ||
                                        (currentPage === "about" &&
                                            item.name === "About Us") ||
                                        (currentPage === "explore" &&
                                            item.name === "Explore");
                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() =>
                                                handleNavClick(item.page)
                                            }
                                            className={`px-[18px] py-1.5 transition-all duration-200 ease-out ${
                                                isActive
                                                    ? isExplorePage
                                                        ? "text-[#782acb] font-bold"
                                                        : "text-[#a047ff] font-bold"
                                                    : isExplorePage
                                                    ? "text-[#d9ddea] font-medium hover:text-[#782acb]"
                                                    : "text-[#5b6178] font-medium hover:text-[#a047ff]"
                                            }`}
                                        >
                                            {item.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Logo - Always Centered */}
                    <div className="flex items-center justify-center z-10 mt-1">
                        <button
                            onClick={() => handleNavClick("home")}
                            className="h-14 w-36 lg:h-20 lg:w-[320px]"
                        >
                            <div
                                className="bg-[64.29%_50%] bg-no-repeat bg-contain h-full w-full transition-all duration-500"
                                style={{
                                    backgroundImage: `url('${imgRectangle2156}')`,
                                    filter: isExplorePage
                                        ? "brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(387%) hue-rotate(185deg) brightness(104%) contrast(98%)"
                                        : "none",
                                }}
                            />
                        </button>
                    </div>

                    {/* Right side - CTA Button and Hamburger (positioned absolutely) */}
                    <div className="absolute right-0 flex items-center">
                        <div className="hidden md:block">
                            <button className="relative bg-gradient-to-r from-[#782acb] to-[#9333ea] text-white px-[13px] py-[15px] rounded-[12px] font-bold shadow-[0px_20px_25px_-5px_rgba(120,43,201,0.4),0px_10px_10px_-5px_rgba(120,43,201,0.04)] hover:shadow-[0px_25px_50px_-12px_rgba(120,43,201,0.5)] transition-all duration-300 ease-out overflow-hidden group">
                                <span className="relative z-10">Join Us!</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6b25b5] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                            </button>
                        </div>

                        {/* Hamburger menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className={`inline-flex items-center justify-center p-2 hover:scale-110 focus:outline-none transition-all duration-200 ease-out ${
                                    isExplorePage
                                        ? "text-[#d9ddea] hover:text-[#782acb]"
                                        : "text-[#5b6178] hover:text-[#a047ff]"
                                }`}
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <div
                                    className={`transition-transform duration-300 ease-out ${
                                        isMenuOpen ? "rotate-90" : "rotate-0"
                                    }`}
                                >
                                    {isMenuOpen ? (
                                        <X
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Menu
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile/Collapsed menu - Slide from right */}
            <div
                className={`xl:hidden fixed inset-0 z-50 ${
                    isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            >
                {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
                        isMenuOpen ? "opacity-50" : "opacity-0"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md border-l border-purple-100 shadow-2xl transform transition-all duration-500 ease-out ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-purple-100">
                        <h2 className="font-bold text-lg text-[#a047ff]">
                            Menu
                        </h2>
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-[#5b6178] hover:text-[#a047ff] hover:bg-purple-50 hover:scale-110 transition-all duration-200 ease-out"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Menu Content */}
                    <div className="px-6 py-8 space-y-3">
                        {navItems.map((item, index) => {
                            const isActive =
                                (currentPage === "crowdfunding" &&
                                    item.name === "Crowdfunding") ||
                                (currentPage === "about" &&
                                    item.name === "About Us");
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.page)}
                                    className={`block w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ease-out transform ${
                                        isActive
                                            ? "text-[#a047ff] font-bold bg-purple-50 shadow-sm border border-purple-200"
                                            : "text-[#5b6178] hover:text-[#a047ff] hover:bg-purple-50"
                                    }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animation: isMenuOpen
                                            ? `slideInRight 0.4s ease-out forwards`
                                            : "none",
                                    }}
                                >
                                    {item.name}
                                </button>
                            );
                        })}

                        {/* Mobile CTA Button */}
                        <div className="pt-8">
                            <button
                                className="relative w-full bg-gradient-to-r from-[#782acb] to-[#9333ea] text-white px-4 py-4 rounded-xl font-bold shadow-[0px_20px_25px_-5px_rgba(120,43,201,0.4)] hover:shadow-[0px_25px_50px_-12px_rgba(120,43,201,0.5)] transition-all duration-300 ease-out overflow-hidden group"
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    animationDelay: `${
                                        navItems.length * 50 + 100
                                    }ms`,
                                    animation: isMenuOpen
                                        ? `slideInRight 0.4s ease-out forwards`
                                        : "none",
                                }}
                            >
                                <span className="relative z-10">Join Us!</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6b25b5] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
