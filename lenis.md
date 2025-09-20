# Lenis Scroll Snapping Implementation

## Overview

This project implements a sophisticated scroll snapping system using Lenis smooth scrolling library to create a magnetic, section-based navigation experience on the explore page. The implementation overcomes common issues with inconsistent scroll detection and provides reliable snap-to-section behavior.

## Key Problem Solved

The original implementation suffered from inconsistent scroll snapping where the magnetism wouldn't trigger reliably. Users would scroll between sections but not get pulled back to the nearest section, creating a frustrating navigation experience.

## Solution Architecture

### 1. Unified State Management

Instead of competing scroll states, we use clear separation between user-initiated scrolling and automatic snapping:

```typescript
let isSnapping = false;        // Prevents conflicts during snap animations
let isUserScrolling = false;   // Tracks active user input
let scrollTimeout: NodeJS.Timeout | null = null;
```

### 2. Reliable Snap Detection

The core breakthrough was implementing proper scroll detection with appropriate thresholds:

```typescript
// Enhanced scroll tracking with meaningful change detection
lenis.on("scroll", (e: any) => {
    const currentScrollY = e.scroll;

    // Only process significant scroll changes (5px threshold)
    if (Math.abs(currentScrollY - lastScrollY) > 5) {
        lastScrollY = currentScrollY;
        
        // Auto-snap only when user stops scrolling and we're not already snapping
        if (!isUserScrolling && !isSnapping) {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                snapToNearestSection();
            }, 200);
        }
    }
});
```

### 3. Consistent Snap Behavior

All scroll operations use a unified function with fallback safety:

```typescript
const scrollToSection = (targetSection: Element) => {
    if (isSnapping) return;
    
    isSnapping = true;
    snapIndicator.style.opacity = "1";

    // Fallback timeout prevents stuck indicators
    const fallbackTimeout = setTimeout(() => {
        snapIndicator.style.opacity = "0";
        isSnapping = false;
    }, 2000);

    lenis.scrollTo(targetSection as HTMLElement, {
        offset: 0,
        duration: 1.2,
        easing: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
        onComplete: () => {
            clearTimeout(fallbackTimeout);
            snapIndicator.style.opacity = "0";
            setTimeout(() => {
                isSnapping = false;
            }, 200);
        }
    });
};
```

## Features

- **Magnetic scrolling**: Always snaps to nearest section when scrolling stops
- **Multi-input support**: Works with mouse wheel, keyboard arrows, and Page Up/Down
- **Visual feedback**: Purple indicator shows when snapping is active
- **Conflict prevention**: Proper state management prevents competing animations
- **Fallback safety**: Timeout ensures animations never get stuck

## Result

The final implementation provides a smooth, predictable section-based scrolling experience where users can confidently scroll knowing they'll always land properly aligned with content sections.