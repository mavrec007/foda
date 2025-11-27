# 🎨 Complete Design System & Animation Documentation

## Table of Contents
1. [Color System](#color-system)
2. [Typography](#typography)
3. [Animations & Keyframes](#animations--keyframes)
4. [Tailwind Configuration](#tailwind-configuration)
5. [CSS Variables](#css-variables)
6. [Component Patterns](#component-patterns)
7. [Utility Classes](#utility-classes)
8. [Framer Motion Variants](#framer-motion-variants)
9. [Usage Examples](#usage-examples)

---

## 🎨 Color System

### Light Mode Colors (HSL)
```css
--background: 145 35% 88%;
--background-secondary: 145 30% 92%;
--foreground: 210 25% 15%;
--card: 145 25% 95%;
--card-foreground: 210 25% 20%;
--surface: 145 30% 90%;
--surface-secondary: 145 25% 92%;
--surface-accent: 160 30% 88%;
--primary: 165 60% 42%;           /* Emerald Hill */
--primary-foreground: 0 0% 100%;
--primary-glow: 165 70% 55%;
--secondary: 28 90% 56%;          /* Warm Terracotta */
--secondary-foreground: 28 90% 16%;
--secondary-glow: 28 95% 70%;
--accent: 200 70% 45%;            /* Sky Blue */
--accent-foreground: 0 0% 100%;
--accent-glow: 200 75% 65%;
--muted: 145 25% 80%;
--muted-foreground: 210 20% 40%;
--border: 145 20% 75%;
--ring: 165 60% 42%;
--success: 140 60% 40%;
--warning: 45 95% 55%;
--destructive: 0 70% 55%;
--destructive-foreground: 0 0% 100%;
```

### Dark Mode Colors (HSL)
```css
--background: 230 40% 10%;
--background-secondary: 230 35% 14%;
--foreground: 210 45% 95%;
--card: 230 35% 14%;
--card-foreground: 210 45% 95%;
--surface: 230 35% 12%;
--surface-secondary: 230 30% 16%;
--surface-accent: 240 35% 18%;
--primary: 215 70% 58%;
--primary-foreground: 0 0% 100%;
--primary-glow: 215 70% 70%;
--secondary: 270 65% 58%;
--secondary-foreground: 270 65% 15%;
--secondary-glow: 270 65% 68%;
--accent: 30 100% 60%;
--accent-foreground: 0 0% 12%;
--accent-glow: 30 100% 70%;
--muted: 228 22% 24%;
--muted-foreground: 0 0% 78%;
--border: 228 20% 26%;
--ring: 215 70% 58%;
```

### Legacy Color Tokens (TypeScript)
```typescript
export const COLOR_TOKENS = {
  primary: { hex: "#FF5733", hsl: "11 100% 60%" },
  secondary: { hex: "#33FF57", hsl: "131 100% 60%" },
  accent: { hex: "#5733FF", hsl: "251 100% 60%" },
  background: { hex: "#F5F5F5", hsl: "0 0% 96%" },
  textPrimary: { hex: "#333333", hsl: "0 0% 20%" },
  textSecondary: { hex: "#777777", hsl: "0 0% 47%" },
} as const;

export const SUPPORTING_TOKENS = {
  textMuted: { hex: "#999999", hsl: "0 0% 60%" },
  border: { hex: "#D1D1D1", hsl: "0 0% 82%" },
  input: { hex: "#E0E0E0", hsl: "0 0% 88%" },
  success: { hex: "#1FAA59", hsl: "142 76% 36%" },
  warning: { hex: "#FFB347", hsl: "45 100% 52%" },
  destructive: { hex: "#FF4D4F", hsl: "0 85% 55%" },
} as const;
```

---

## 📝 Typography

### Font Families
```css
--font-family-base: 'Inter', 'DM Sans', 'Poppins', system-ui, -apple-system, sans-serif;
--font-family-rtl: 'Noto Kufi Arabic', 'Tajawal', 'Cairo', sans-serif;
```

### Font Weights
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Font Sizes
```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
```

### Line Heights
```css
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.6;
```

---

## 🎬 Animations & Keyframes

### Gradient Shift Animation
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Pulse Glow Animation
```css
@keyframes pulse-glow {
  from {
    box-shadow: 0 0 20px rgba(255, 87, 51, 0.3);
  }
  to {
    box-shadow: 0 0 30px rgba(255, 87, 51, 0.6), 0 0 40px rgba(87, 51, 255, 0.25);
  }
}
```

### Fade Animations
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}
```

### Scale Animations
```css
@keyframes scale-in {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scale-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.95);
    opacity: 0;
  }
}
```

### Slide Animations
```css
@keyframes slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slide-out-right {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

@keyframes slide-in-left {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slide-out-left {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}
```

### Accordion Animations
```css
@keyframes accordion-down {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}
```

### Special Effects Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## ⚙️ Tailwind Configuration

### Border Radius
```javascript
borderRadius: {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  full: "var(--radius-full)",
}
```

### Spacing Scale
```css
--spacing-2xs: 0.375rem;  /* 6px */
--spacing-xs: 0.5rem;     /* 8px */
--spacing-sm: 0.75rem;    /* 12px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 2.5rem;    /* 40px */
--spacing-3xl: 3rem;      /* 48px */
--spacing-4xl: 4rem;      /* 64px */
```

### Shadows & Effects
```css
--shadow-soft: 0 4px 12px hsla(200, 25%, 18%, 0.08);
--shadow-elegant: 0 10px 40px -10px hsl(var(--primary) / 0.25);
--shadow-glow: 0 0 50px hsl(var(--primary-glow) / 0.4);
--shadow-glass: 0 8px 32px rgba(31, 38, 135, 0.37);
--shadow-neomorph-raised: 8px 8px 16px hsla(145, 25%, 75%, 0.4), -8px -8px 16px hsla(0, 0%, 100%, 0.9);
--shadow-neomorph-inset: inset 6px 6px 12px hsla(145, 25%, 75%, 0.3), inset -6px -6px 12px hsla(0, 0%, 100%, 0.7);
--shadow-depth: 0 12px 32px hsla(200, 25%, 18%, 0.15);
```

### Glassmorphism Variables
```css
--glass-background: rgba(255, 255, 255, 0.65);
--glass-border: rgba(255, 255, 255, 0.35);
--glass-shadow: var(--shadow-glass);
--glass-backdrop: blur(20px);
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)));
--gradient-secondary: linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)));
--gradient-glass: linear-gradient(135deg, rgba(69, 195, 255, 0.12), rgba(40, 180, 160, 0.08));
--gradient-glow: radial-gradient(ellipse at top, hsl(var(--secondary) / 0.25), transparent 65%);
--gradient-mountain-base: linear-gradient(135deg, hsl(145, 35%, 88%) 0%, hsl(160, 45%, 85%) 50%, hsl(175, 50%, 80%) 100%);
--gradient-mountain-depth: radial-gradient(ellipse at top, hsla(145, 30%, 90%, 0.8), hsla(160, 30%, 82%, 0.6) 50%, transparent);
--gradient-mountain-fog: linear-gradient(to bottom, hsla(145, 25%, 95%, 0) 0%, hsla(145, 25%, 95%, 0.3) 40%, hsla(145, 25%, 95%, 0.6) 100%);
```

### Transitions & Easing
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth: all var(--transition-normal);
--transition-glass: backdrop-filter var(--transition-normal), background-color var(--transition-normal);
--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--easing-ease: ease-in-out;
```

### Layout Variables
```css
--layout-max-width: 1280px;
--container-padding: clamp(1rem, 2.5vw, 2.75rem);
--header-height: 4rem;
--footer-height: 3.5rem;
--sidebar-width-expanded: 16rem;
--sidebar-width-collapsed: 5rem;
--sidebar-width: var(--sidebar-width-expanded);
```

### Z-Index Scale
```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1100;
--z-modal: 1200;
--z-popover: 1300;
--z-toast: 1400;
--z-tooltip: 1500;
```

---

## 🧩 Component Patterns

### Glass Effects
```css
.glass {
  background: var(--glass-background);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  position: relative;
}

.glass-card {
  @apply glass rounded-3xl p-6 transition-all duration-500;
}

.glass-card:hover {
  box-shadow: var(--glass-shadow), var(--hover-glow);
  transform: translateY(-2px) scale(1.01);
}

.glass-button {
  @apply glass rounded-xl px-6 py-3 transition-all duration-300;
  position: relative;
  overflow: hidden;
}

.glass-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.glass-button:hover::before {
  left: 100%;
}
```

### Glow Effects
```css
.glow-border {
  box-shadow: var(--neon-glow);
}

.glow-border-secondary {
  box-shadow: var(--neon-glow-secondary);
}

.glow-border-accent {
  box-shadow: var(--neon-glow-accent);
}

.neon-text {
  text-shadow: 
    0 0 10px currentColor, 
    0 0 20px currentColor, 
    0 0 40px currentColor;
}
```

### Animated Backgrounds
```css
.animated-gradient {
  background: linear-gradient(
    -45deg, 
    hsl(var(--primary)), 
    hsl(var(--secondary)), 
    hsl(var(--accent)), 
    hsl(var(--primary-glow))
  );
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite alternate;
}

.float {
  animation: float 3s ease-in-out infinite;
}
```

### Custom Scrollbar
```css
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  @apply bg-muted/30 rounded-full;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-primary/50 rounded-full;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-primary/70;
}
```

### Card Variants
```css
.card-elevated {
  @apply rounded-2xl bg-card shadow-elegant border border-border/50 transition-all duration-300;
}

.card-elevated:hover {
  @apply shadow-glow transform -translate-y-1;
}

.card-flat {
  @apply rounded-xl bg-surface border border-border/30;
}
```

### Interactive Elements
```css
.hover-scale {
  @apply transition-transform duration-200;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.story-link {
  @apply relative inline-block;
}

.story-link::after {
  content: '';
  @apply absolute w-full scale-x-0 h-0.5 bottom-0 left-0 bg-primary origin-bottom-right transition-transform duration-300;
}

.story-link:hover::after {
  @apply scale-x-100 origin-bottom-left;
}
```

### Shimmer Effect
```css
.shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

.button-shimmer {
  position: relative;
  overflow: hidden;
}

.button-shimmer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.6s;
}

.button-shimmer:hover::before {
  left: 100%;
}
```

---

## 🎯 Utility Classes

### Text Gradients
```css
.text-gradient-primary {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-secondary {
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Background Gradients
```css
.bg-gradient-primary {
  background: var(--gradient-primary);
}

.bg-gradient-secondary {
  background: var(--gradient-secondary);
}

.bg-gradient-glass {
  background: var(--gradient-glass);
}
```

### Animation Classes
```css
.animate-fade-in { animation: fade-in 0.3s ease-out; }
.animate-fade-out { animation: fade-out 0.3s ease-out; }
.animate-scale-in { animation: scale-in 0.2s ease-out; }
.animate-scale-out { animation: scale-out 0.2s ease-out; }
.animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
.animate-slide-out-right { animation: slide-out-right 0.3s ease-out; }
.animate-slide-in-left { animation: slide-in-left 0.3s ease-out; }
.animate-slide-out-left { animation: slide-out-left 0.3s ease-out; }
.animate-accordion-down { animation: accordion-down 0.2s ease-out; }
.animate-accordion-up { animation: accordion-up 0.2s ease-out; }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-spin { animation: spin 1s linear infinite; }
.animate-bounce { animation: bounce 1s infinite; }
```

### Shadow Classes
```css
.shadow-soft { box-shadow: var(--shadow-soft); }
.shadow-elegant { box-shadow: var(--shadow-elegant); }
.shadow-glow { box-shadow: var(--shadow-glow); }
.shadow-glass { box-shadow: var(--shadow-glass); }
```

### Transition Classes
```css
.transition-smooth { transition: var(--transition-smooth); }
.transition-glass { transition: var(--transition-glass); }
```

### Display Utilities
```css
.full-center { @apply flex items-center justify-center; }
.full-between { @apply flex items-center justify-between; }
.full-start { @apply flex items-center justify-start; }
.full-end { @apply flex items-center justify-end; }
```

### Truncate Text
```css
.truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### RTL/LTR Support
```css
.rtl\:mr-auto[dir="rtl"] { margin-right: auto; }
.rtl\:ml-auto[dir="rtl"] { margin-left: auto; }
.ltr\:ml-auto[dir="ltr"] { margin-left: auto; }
.ltr\:mr-auto[dir="ltr"] { margin-right: auto; }
.rtl\:rotate-180[dir="rtl"] { transform: rotate(180deg); }
.rtl\:flex-row-reverse[dir="rtl"] { flex-direction: row-reverse; }
```

---

## 🎭 Framer Motion Variants

### Fade Variants
```typescript
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeOut" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};
```

### Scale Variants
```typescript
const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
  transition: { duration: 0.2, ease: "easeOut" }
};

const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};
```

### Slide Variants
```typescript
const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
  transition: { type: "spring", stiffness: 300, damping: 30 }
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: { type: "spring", stiffness: 300, damping: 30 }
};
```

### Card Hover Variants
```typescript
const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.25)"
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 60px -15px rgba(0,0,0,0.35)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

### Stagger Children
```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

---

## 💡 Usage Examples

### Using Glass Components
```tsx
import { motion } from 'framer-motion';

// Glass Card Component
const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
```

### Using Animation Classes
```tsx
// Fade in on mount
<div className="animate-fade-in">
  Content fades in smoothly
</div>

// Floating effect
<div className="animate-float">
  Floating element
</div>

// Combined with Tailwind
<button className="glass-button hover-scale animate-fade-in">
  Click Me
</button>
```

### Using Text Gradients
```tsx
<h1 className="text-4xl font-bold text-gradient-primary">
  Beautiful Gradient Text
</h1>

<p className="text-xl text-gradient-secondary">
  Secondary gradient style
</p>
```

### Using Custom Scrollbar
```tsx
<div className="custom-scrollbar h-96 overflow-y-auto">
  {/* Scrollable content */}
</div>
```

### Theme Toggle Implementation
```tsx
import { useTheme } from '@/infrastructure/shared/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="glass-button"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};
```

### Animated Background
```tsx
<div className="animated-gradient min-h-screen">
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

### Story Link Effect
```tsx
<a href="#" className="story-link text-lg font-medium">
  Hover me for underline animation
</a>
```

### Card with Hover Effect
```tsx
<motion.div
  className="card-elevated p-6"
  variants={cardHover}
  initial="rest"
  whileHover="hover"
>
  <h3 className="text-xl font-semibold">Card Title</h3>
  <p className="text-muted-foreground">Card content goes here</p>
</motion.div>
```

### Shimmer Button
```tsx
<button className="button-shimmer bg-primary text-primary-foreground px-6 py-3 rounded-xl">
  Shimmer on Hover
</button>
```

---

## 📦 TypeScript Theme Tokens

```typescript
export const themeTokens = {
  colors: {
    background: "145 35% 88%",
    primary: "165 60% 42%",
    secondary: "28 90% 56%",
    accent: "200 70% 45%",
    // ... all color values
  },
  typography: {
    fontFamilies: {
      base: "'Inter', 'DM Sans', 'Poppins', system-ui, -apple-system, sans-serif",
      rtl: "'Noto Kufi Arabic', 'Tajawal', 'Cairo', sans-serif",
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  spacing: {
    "2xs": "0.375rem",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
    "4xl": "4rem",
  },
  radii: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    pill: "999px",
  },
} as const;
```

---

## 🚀 Quick Start Guide

1. **Import styles in your main CSS:**
```css
@import './infrastructure/theme/theme.css';
@import './ui/styles/animations.css';
@import './ui/styles/utilities.css';
@import './ui/styles/components.css';
```

2. **Use semantic color tokens:**
```tsx
// ✅ Correct
<div className="bg-background text-foreground border-border">

// ❌ Wrong - Don't use direct colors
<div className="bg-white text-black">
```

3. **Apply animations:**
```tsx
<div className="animate-fade-in hover-scale">
  Animated content
</div>
```

4. **Use glass effects:**
```tsx
<div className="glass-card">
  Glass morphism card
</div>
```

5. **Theme-aware components:**
```tsx
import { useTheme } from '@/infrastructure/shared/contexts/ThemeContext';
```

---

## 🎨 Design Principles

1. **Always use HSL colors** for all color definitions
2. **Use semantic tokens** instead of direct color values
3. **Leverage CSS variables** for consistency and theme switching
4. **Apply animations sparingly** for meaningful interactions
5. **Maintain hierarchy** with typography scale
6. **Support RTL/LTR** in all layouts
7. **Ensure accessibility** with proper contrast ratios
8. **Optimize performance** with CSS transforms and GPU acceleration

---

## 📚 Files Reference

- `src/infrastructure/theme/theme.css` - Main theme definitions
- `src/infrastructure/theme/tokens.ts` - TypeScript token definitions
- `src/ui/styles/animations.css` - Animation keyframes
- `src/ui/styles/utilities.css` - Utility classes
- `src/ui/styles/components.css` - Component patterns
- `src/ui/styles/colorTokens.ts` - Legacy color tokens
- `src/infrastructure/shared/contexts/ThemeContext.tsx` - Theme management

---

## 🔧 Customization

To customize the design system:

1. **Modify colors** in `theme.css` `:root` and `.dark` sections
2. **Add new animations** in `animations.css`
3. **Create utility classes** in `utilities.css`
4. **Define component patterns** in `components.css`
5. **Update TypeScript tokens** in `tokens.ts` for type safety

---

**Made with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion**
