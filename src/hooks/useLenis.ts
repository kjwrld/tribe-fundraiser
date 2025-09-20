import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
    useEffect(() => {
        // Remove automatic CSS scroll-snap for manual control
        document.body.style.scrollSnapType = "";
        document.documentElement.style.scrollBehavior = "smooth";

        // Initialize Lenis with section-based scrolling configuration
        const lenis = new Lenis({
            duration: 1.2, // Smooth scroll duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium feel
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 0.33, // Slightly reduce scroll speed to work better with snap
            smoothTouch: false, // Disable on touch devices for better performance
            touchMultiplier: 2,
            infinite: false,
            autoResize: true,
            syncTouch: true, // Better touch integration with scroll snap
        });

        // Expose Lenis instance globally for navigation components
        (window as any).lenis = lenis;

        // Create visual feedback element for snapping
        const createSnapIndicator = () => {
            const indicator = document.createElement("div");
            indicator.id = "snap-indicator";
            indicator.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        width: 4px;
        height: 60px;
        background: rgba(133, 20, 255, 0.3);
        border-radius: 2px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      `;
            document.body.appendChild(indicator);
            return indicator;
        };

        const snapIndicator = createSnapIndicator();

        // Animation frame for smooth rendering
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Get only the main content sections (exclude footer)
        const sections = document.querySelectorAll(
            "section[id]:not(#footer-section)"
        );
        let isSnapping = false;
        let scrollTimeout: NodeJS.Timeout | null = null;
        let lastScrollY = window.scrollY;
        let isUserScrolling = false;

        // Handle large wheel events for section jumping
        const handleWheel = (e: WheelEvent) => {
            if (isSnapping) {
                e.preventDefault();
                return;
            }

            // Mark user as actively scrolling
            isUserScrolling = true;
            clearTimeout(scrollTimeout);

            // Set timeout to detect when user stops scrolling
            scrollTimeout = setTimeout(() => {
                isUserScrolling = false;
                if (!isSnapping) {
                    // Only snap if not already snapping
                    snapToNearestSection();
                }
            }, 150); // Increased timeout for more reliable detection

            // For very large wheel movements, jump to next/prev section
            const largeScrollThreshold = 120; // Reduced threshold
            if (Math.abs(e.deltaY) > largeScrollThreshold) {
                e.preventDefault();
                clearTimeout(scrollTimeout); // Stop the auto-snap timeout

                const currentSection = getCurrentSection();
                if (!currentSection) return;

                const sectionsArray = Array.from(sections);
                const currentIndex = sectionsArray.indexOf(currentSection);
                let targetSection: Element | null = null;

                if (e.deltaY > 0 && currentIndex < sectionsArray.length - 1) {
                    targetSection = sectionsArray[currentIndex + 1];
                } else if (e.deltaY < 0 && currentIndex > 0) {
                    targetSection = sectionsArray[currentIndex - 1];
                }

                if (targetSection) {
                    isUserScrolling = false; // Clear user scrolling flag
                    scrollToSection(targetSection);
                }
            }
        };

        // Get current section based on scroll position
        const getCurrentSection = (): Element | null => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                const sectionTop = window.scrollY + rect.top;
                const sectionBottom = sectionTop + rect.height;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition <= sectionBottom
                ) {
                    return section;
                }
            }
            return sections[0]; // Default to first section
        };

        // Unified scroll-to-section function
        const scrollToSection = (targetSection: Element) => {
            if (isSnapping) return;

            isSnapping = true;
            snapIndicator.style.opacity = "1";

            // Add a timeout fallback in case onComplete doesn't fire
            const fallbackTimeout = setTimeout(() => {
                snapIndicator.style.opacity = "0";
                isSnapping = false;
            }, 2000); // 2 second fallback

            lenis.scrollTo(targetSection as HTMLElement, {
                offset: 0,
                duration: 1.2,
                easing: (t) =>
                    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
                onComplete: () => {
                    clearTimeout(fallbackTimeout);
                    snapIndicator.style.opacity = "0";
                    setTimeout(() => {
                        isSnapping = false;
                    }, 200);
                },
            });
        };

        // Find the closest section to current scroll position
        const getClosestSection = (): Element | null => {
            const scrollPosition = window.scrollY + window.innerHeight * 0.3; // Use 30% of viewport
            let closestSection: Element | null = null;
            let minDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = window.scrollY + rect.top;
                const distance = Math.abs(scrollPosition - sectionTop);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = section;
                }
            });

            return closestSection;
        };

        // Improved snap to nearest section
        const snapToNearestSection = () => {
            if (isSnapping || isUserScrolling) return;

            const currentScroll = window.scrollY;
            const closestSection = getClosestSection();

            if (!closestSection) return;

            const rect = closestSection.getBoundingClientRect();
            const sectionTop = currentScroll + rect.top;
            const distance = Math.abs(currentScroll - sectionTop);

            // Always snap if we're more than 50px away from the closest section
            const snapThreshold = 40;

            if (distance > snapThreshold) {
                scrollToSection(closestSection);
            }
        };

        // Enhanced scroll tracking
        lenis.on("scroll", (e: any) => {
            const currentScrollY = e.scroll;

            // Only process if scroll position actually changed significantly
            if (Math.abs(currentScrollY - lastScrollY) > 5) {
                lastScrollY = currentScrollY;

                // If user is not actively scrolling and we're not snapping, check for auto-snap
                if (!isUserScrolling && !isSnapping) {
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        snapToNearestSection();
                    }, 200);
                }
            }
        });

        // Keyboard navigation
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isSnapping) return;

            const currentSection = getCurrentSection();
            if (!currentSection) return;

            const sectionsArray = Array.from(sections);
            const currentIndex = sectionsArray.indexOf(currentSection);
            let targetSection: Element | null = null;

            if (
                (e.key === "ArrowDown" || e.key === "PageDown") &&
                currentIndex < sectionsArray.length - 1
            ) {
                targetSection = sectionsArray[currentIndex + 1];
                e.preventDefault();
            } else if (
                (e.key === "ArrowUp" || e.key === "PageUp") &&
                currentIndex > 0
            ) {
                targetSection = sectionsArray[currentIndex - 1];
                e.preventDefault();
            } else if (e.key === "Home") {
                targetSection = sectionsArray[0];
                e.preventDefault();
            } else if (e.key === "End") {
                targetSection = sectionsArray[sectionsArray.length - 1];
                e.preventDefault();
            }

            if (targetSection) {
                scrollToSection(targetSection);
            }
        };

        // Add event listeners
        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        // Cleanup
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);

            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            // Remove snap indicator
            const indicator = document.getElementById("snap-indicator");
            if (indicator) {
                indicator.remove();
            }

            (window as any).lenis = null; // Clear global reference

            // Restore original scroll behavior
            document.body.style.scrollSnapType = "";
            document.documentElement.style.scrollBehavior = "";

            lenis.destroy();
        };
    }, []);
}
