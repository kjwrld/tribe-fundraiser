import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import imgRectangle2156 from "../assets/webp/8d2fd097d56f012cee07134bb33d29e004f9eeff.webp";

// Add custom CSS for iOS-style mobile menu animations
const mobileMenuStyles = `
  @keyframes slideInUp {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeInStagger {
    0% {
      opacity: 0;
      transform: translateY(15px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .mobile-menu-item {
    animation: fadeInStagger 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
  }
  
  .animate-slideInUp {
    animation: slideInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = mobileMenuStyles;
  document.head.appendChild(styleSheet);
}

interface ResponsiveNavProps {
    onNavigate?: (page: "home" | "about" | "explore" | "crowdfunding") => void;
    currentPage?: "home" | "about" | "explore" | "crowdfunding";
}

export function ResponsiveNav({
    onNavigate,
    currentPage = "home",
}: ResponsiveNavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for enhanced navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        console.log('Toggle menu clicked. Current state:', isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (page: "home" | "about" | "explore" | "crowdfunding") => {
        console.log('Nav item clicked:', page);
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
            className={`fixed top-0 left-0 right-0 z-[999999] border-b backdrop-blur-xl transition-all duration-300 ${
                isScrolled 
                    ? 'shadow-xl border-opacity-20' 
                    : 'shadow-lg border-opacity-10'
            } ${
                isExplorePage
                    ? `bg-[#1E002B] border-purple-800 shadow-purple-900/30 ${
                        isScrolled ? 'bg-[#1E002B]' : ''
                    }`
                    : `bg-white border-gray-200 shadow-black/10 ${
                        isScrolled ? 'bg-white' : ''
                    }`
            }`}
            style={{ 
                minHeight: isScrolled ? "70px" : "80px",
                transition: "all 0.3s ease-out",
                zIndex: 999999,
                position: "fixed"
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center h-16 lg:h-20 font-['Nunito',_sans-serif]">
                    {/* Left side - Navigation (positioned absolutely) */}
                    <div className="absolute left-0 flex items-center z-20">
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
                                            onClick={(e) => {
                                                e.preventDefault();
                                                console.log('Nav click:', item.page);
                                                handleNavClick(item.page);
                                            }}
                                            className={`px-[18px] py-1.5 transition-all duration-200 ease-out cursor-pointer hover:scale-105 ${
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
                    <div className="relative flex items-center justify-center z-10 mt-1">
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
                    <div className="absolute right-0 flex items-center z-20">
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

            {/* Modern Mobile Menu - iOS Bottom Sheet Style */}
            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0"
                    style={{
                        zIndex: 9999999,
                        position: "fixed",
                        pointerEvents: "auto"
                    }}
                >
                    {/* iOS-style Backdrop with smooth fade */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
                        style={{
                            zIndex: 9999998,
                            position: "fixed",
                            pointerEvents: "auto"
                        }}
                        onClick={(e) => {
                            console.log('Backdrop clicked');
                            e.preventDefault();
                            e.stopPropagation();
                            setIsMenuOpen(false);
                        }}
                    />

                    {/* iOS-style Bottom Sheet Menu */}
                    <div
                        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] border-t border-gray-200/50 shadow-2xl transform animate-in slide-in-from-bottom duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                        style={{
                            maxHeight: "85vh",
                            boxShadow: "0 -20px 60px rgba(0,0,0,0.15), 0 -8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.05)",
                            zIndex: 9999999,
                            position: "fixed",
                            touchAction: "manipulation",
                            pointerEvents: "auto"
                        }}
                        onClick={(e) => {
                            console.log('Menu content clicked');
                            e.stopPropagation();
                        }}
                    >
                        {/* iOS-style Handle Bar */}
                        <div className="flex justify-center pt-3 pb-4">
                            <div 
                                className={`w-10 h-1 bg-gray-400 rounded-full transition-all duration-300 ease-out ${
                                    isMenuOpen ? "opacity-100 scale-100" : "opacity-60 scale-90"
                                }`}
                            />
                        </div>

                        {/* Menu Header */}
                        <div className="px-6 py-4 border-b border-gray-100/50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="font-bold text-xl text-[#a047ff]">Support Our Mission</h2>
                                    <p className="text-sm text-gray-500 mt-1">Help us revolutionize education</p>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsMenuOpen(false);
                                    }}
                                    className="p-3 rounded-2xl bg-gray-100/70 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 z-50 relative"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Menu Content */}
                        <div className="px-6 py-6 space-y-2 overflow-y-auto">
                            {navItems.map((item, index) => {
                                const isActive =
                                    (currentPage === "crowdfunding" && item.name === "Crowdfunding") ||
                                    (currentPage === "about" && item.name === "About Us") ||
                                    (currentPage === "explore" && item.name === "Explore");
                                return (
                                    <button
                                        key={item.name}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleNavClick(item.page);
                                        }}
                                        className={`mobile-menu-item w-full flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative ${
                                            isActive
                                                ? "text-white bg-gradient-to-r from-[#782acb] to-[#9333ea] shadow-lg shadow-purple-500/25"
                                                : "text-[#5b6178] hover:text-[#a047ff] hover:bg-purple-50/80 bg-white/50"
                                        } ${isMenuOpen ? 'animate-slideInUp' : ''}`}
                                        style={{
                                            animationDelay: isMenuOpen ? `${index * 80 + 300}ms` : '0ms',
                                            zIndex: 10000000,
                                            position: "relative"
                                        }}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronRight className={`h-5 w-5 transition-transform duration-200 ${
                                            isActive ? 'text-white/80' : 'text-gray-400'
                                        }`} />
                                    </button>
                                );
                            })}

                            {/* Mobile CTA Section */}
                            <div className="pt-6 mt-6 border-t border-gray-100">
                                <button
                                    className={`mobile-menu-item relative w-full bg-gradient-to-r from-[#782acb] to-[#9333ea] text-white px-6 py-7 rounded-2xl font-bold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden group hover:scale-[1.02] active:scale-[0.98] min-h-[72px] ${isMenuOpen ? 'animate-slideInUp' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsMenuOpen(false);
                                    }}
                                    style={{
                                        animationDelay: isMenuOpen ? `${navItems.length * 80 + 400}ms` : '0ms',
                                        zIndex: 10000000,
                                        position: "relative"
                                    }}
                                >
                                    <div className="flex items-center justify-center space-x-3">
                                        <span className="relative z-10 text-lg">🚀</span>
                                        <span className="relative z-10 text-lg">Join Us!</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#6b25b5] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>
                                
                                {/* Bottom spacing for safe area */}
                                <div className="h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
