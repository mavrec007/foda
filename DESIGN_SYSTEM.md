# نظام التصميم والأنيميشن - FODA Design System

## 📋 جدول المحتويات
- [متغيرات الألوان](#متغيرات-الألوان)
- [متغيرات التايبوغرافي](#متغيرات-التايبوغرافي)
- [الظلال والتأثيرات](#الظلال-والتأثيرات)
- [التدرجات](#التدرجات)
- [الأنيميشن](#الأنيميشن)
- [Framer Motion Configurations](#framer-motion-configurations)
- [Glass Effects](#glass-effects)
- [Utility Classes](#utility-classes)
- [Component Classes](#component-classes)
- [Tailwind Configuration](#tailwind-configuration)

---

## 🎨 متغيرات الألوان

### Light Mode Colors
```css
:root {
  /* Primary Colors */
  --background: 145 35% 88%;
  --background-secondary: 145 30% 92%;
  --foreground: 210 25% 15%;
  
  /* Surface Colors */
  --card: 145 25% 95%;
  --card-foreground: 210 25% 20%;
  --surface: 145 30% 90%;
  --surface-secondary: 145 25% 92%;
  --surface-accent: 160 30% 88%;
  
  /* Brand Colors */
  --primary: 165 60% 42%;
  --primary-foreground: 0 0% 100%;
  --primary-glow: 165 70% 55%;
  
  --secondary: 28 90% 56%;
  --secondary-foreground: 28 90% 16%;
  --secondary-glow: 28 95% 70%;
  
  --accent: 200 70% 45%;
  --accent-foreground: 0 0% 100%;
  --accent-glow: 200 75% 65%;
  
  /* Neutral Colors */
  --muted: 145 25% 80%;
  --muted-foreground: 210 20% 40%;
  
  /* Semantic Colors */
  --success: 140 60% 40%;
  --warning: 45 95% 55%;
  --destructive: 0 70% 55%;
  --destructive-foreground: 0 0% 100%;
  
  /* UI Elements */
  --border: 145 20% 75%;
  --input: 145 20% 75%;
  --ring: 165 60% 42%;
  
  /* Popover */
  --popover: 145 25% 95%;
  --popover-foreground: 210 25% 20%;
  
  /* Sidebar */
  --sidebar-background: 145 30% 90%;
  --sidebar-foreground: 210 25% 20%;
  --sidebar-primary: 165 60% 42%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 160 30% 88%;
  --sidebar-accent-foreground: 210 25% 20%;
  --sidebar-border: 145 20% 75%;
  --sidebar-ring: 165 60% 42%;
}
```

### Dark Mode Colors
```css
.dark {
  --background: 210 25% 12%;
  --background-secondary: 210 25% 15%;
  --foreground: 145 25% 95%;
  
  --card: 210 25% 15%;
  --card-foreground: 145 25% 95%;
  --surface: 210 25% 18%;
  --surface-secondary: 210 25% 20%;
  --surface-accent: 210 30% 22%;
  
  --primary: 165 60% 50%;
  --primary-foreground: 0 0% 100%;
  --primary-glow: 165 70% 60%;
  
  --secondary: 28 90% 60%;
  --secondary-foreground: 0 0% 100%;
  --secondary-glow: 28 95% 75%;
  
  --accent: 200 70% 50%;
  --accent-foreground: 0 0% 100%;
  --accent-glow: 200 75% 70%;
  
  --muted: 210 20% 25%;
  --muted-foreground: 145 20% 70%;
  
  --border: 210 20% 25%;
  --input: 210 20% 25%;
  --ring: 165 60% 50%;
  
  --popover: 210 25% 15%;
  --popover-foreground: 145 25% 95%;
  
  --sidebar-background: 210 25% 15%;
  --sidebar-foreground: 145 25% 95%;
  --sidebar-primary: 165 60% 50%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 210 30% 22%;
  --sidebar-accent-foreground: 145 25% 95%;
  --sidebar-border: 210 20% 25%;
  --sidebar-ring: 165 60% 50%;
}
```

---

## 📝 متغيرات التايبوغرافي

```css
:root {
  /* Font Families */
  --font-family-base: 'Inter', 'DM Sans', 'Poppins', system-ui, -apple-system, sans-serif;
  --font-family-rtl: 'Noto Kufi Arabic', 'Tajawal', 'Cairo', sans-serif;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  
  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
}
```

---

## 🌟 الظلال والتأثيرات

```css
:root {
  /* Shadows */
  --shadow-soft: 0 4px 12px hsla(200, 25%, 18%, 0.08);
  --shadow-elegant: 0 10px 40px -10px hsl(165 60% 42% / 0.25);
  --shadow-glow: 0 0 50px hsl(165 70% 55% / 0.4);
  --shadow-glass: 0 8px 32px rgba(31, 38, 135, 0.37);
  --shadow-depth: 0 12px 32px hsla(200, 25%, 18%, 0.15);
  
  /* Hover Effects */
  --hover-glow: 0 0 40px hsl(var(--primary-glow) / 0.3);
  
  /* Glass Effects */
  --glass-background: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  --glass-backdrop: blur(20px) saturate(180%);
  
  /* Neon Glow Effects */
  --neon-glow: 0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3);
  --neon-glow-secondary: 0 0 20px hsl(var(--secondary) / 0.5), 0 0 40px hsl(var(--secondary) / 0.3);
  --neon-glow-accent: 0 0 20px hsl(var(--accent) / 0.5), 0 0 40px hsl(var(--accent) / 0.3);
}

.dark {
  --glass-background: rgba(15, 25, 45, 0.4);
  --glass-border: rgba(255, 255, 255, 0.1);
  --hover-background: rgba(255, 255, 255, 0.08);
}
```

---

## 🎨 التدرجات

```css
:root {
  /* Primary Gradients */
  --gradient-primary: linear-gradient(135deg, hsl(165 60% 42%), hsl(200 70% 45%));
  --gradient-secondary: linear-gradient(135deg, hsl(28 90% 56%), hsl(200 70% 45%));
  
  /* Glass Gradient */
  --gradient-glass: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.05)
  );
  
  /* Glow Gradient */
  --gradient-glow: radial-gradient(
    ellipse at top,
    hsl(28 90% 56% / 0.25),
    transparent 65%
  );
}
```

---

## ⚡ الأنيميشن

### Keyframe Animations

```css
/* Gradient Animation */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Pulse Glow */
@keyframes pulse-glow {
  from {
    box-shadow: 0 0 20px rgba(255, 87, 51, 0.3);
  }
  to {
    box-shadow: 0 0 30px rgba(255, 87, 51, 0.6), 0 0 40px rgba(87, 51, 255, 0.25);
  }
}

/* Fade Animations */
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

/* Scale Animations */
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

/* Slide Animations */
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

/* Accordion */
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

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Spin */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Bounce */
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

/* Shimmer */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 🎬 Framer Motion Configurations

### Easing Curves
```typescript
export const easings = {
  smooth: [0.4, 0, 0.2, 1],
  spring: [0.34, 1.56, 0.64, 1],
  elastic: [0.68, -0.55, 0.265, 1.55],
} as const;
```

### Transitions
```typescript
export const transitions = {
  fast: {
    duration: 0.15,
    ease: easings.smooth,
  },
  normal: {
    duration: 0.3,
    ease: easings.smooth,
  },
  slow: {
    duration: 0.5,
    ease: easings.smooth,
  },
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
  bounce: {
    type: "spring",
    stiffness: 400,
    damping: 20,
  },
} as const;
```

### Animation Variants

#### Fade In/Out
```typescript
fadeIn: {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
```

#### Slide Animations
```typescript
slideInLeft: {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
}

slideInRight: {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
}

slideInUp: {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
}

slideInDown: {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
}
```

#### Scale Animations
```typescript
scaleIn: {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
}

scaleInCenter: {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
}
```

#### Card Hover Effects
```typescript
cardHover: {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: transitions.fast,
  },
}

glassHover: {
  rest: {
    backdropFilter: "blur(20px)",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
  },
  hover: {
    backdropFilter: "blur(24px)",
    boxShadow: "0 12px 40px rgba(31, 38, 135, 0.5)",
    transition: transitions.normal,
  },
}
```

#### Modal/Dialog
```typescript
modal: {
  initial: { scale: 0.95, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: transitions.spring,
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: transitions.fast,
  },
}

modalBackdrop: {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
```

#### Stagger Animations
```typescript
staggerContainer: {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

staggerItem: {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}
```

---

## 💎 Glass Effects

### Glass Base
```css
.glass {
  background: var(--glass-background);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  position: relative;
}
```

### Glass Card
```css
.glass-card {
  @apply glass rounded-3xl p-6 transition-all duration-500;
}

.glass-card:hover {
  box-shadow: var(--glass-shadow), var(--hover-glow);
  transform: translateY(-2px) scale(1.01);
}
```

### Glass Button
```css
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

.glass-button:hover {
  background: var(--hover-background);
  transform: translateY(-2px);
  box-shadow: var(--hover-glow);
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

### Animation Utilities
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

### Shadow Utilities
```css
.shadow-soft { box-shadow: var(--shadow-soft); }
.shadow-elegant { box-shadow: var(--shadow-elegant); }
.shadow-glow { box-shadow: var(--shadow-glow); }
.shadow-glass { box-shadow: var(--shadow-glass); }
```

### Transition Utilities
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

### Text Truncate
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

---

## 🧩 Component Classes

### Glow Effects
```css
.glow-border { box-shadow: var(--neon-glow); }
.glow-border-secondary { box-shadow: var(--neon-glow-secondary); }
.glow-border-accent { box-shadow: var(--neon-glow-accent); }
```

### Neon Text
```css
.neon-text {
  text-shadow: 
    0 0 10px currentColor, 
    0 0 20px currentColor, 
    0 0 40px currentColor;
}
```

### Animated Background
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
```

### Pulsing Glow
```css
.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite alternate;
}
```

### Floating Animation
```css
.float {
  animation: float 3s ease-in-out infinite;
}
```

### Hover Scale
```css
.hover-scale {
  @apply transition-transform duration-200;
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

### Story Link
```css
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

### Button Shimmer
```css
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

---

## ⚙️ Tailwind Configuration

### Colors
```javascript
colors: {
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  // ... المزيد
}
```

### Font Families
```javascript
fontFamily: {
  inter: ["Inter", "system-ui", "sans-serif"],
  poppins: ["Poppins", "system-ui", "sans-serif"],
  "dm-sans": ["DM Sans", "system-ui", "sans-serif"],
  cairo: ["Cairo", "system-ui", "sans-serif"],
  tajawal: ["Tajawal", "system-ui", "sans-serif"],
  "noto-kufi": ["Noto Kufi Arabic", "system-ui", "sans-serif"],
}
```

### Border Radius
```javascript
borderRadius: {
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
}
```

### Background Images
```javascript
backgroundImage: {
  "gradient-primary": "var(--gradient-primary)",
  "gradient-secondary": "var(--gradient-secondary)",
  "gradient-glass": "var(--gradient-glass)",
  "gradient-glow": "var(--gradient-glow)",
}
```

### Box Shadow
```javascript
boxShadow: {
  elegant: "var(--shadow-elegant)",
  glow: "var(--shadow-glow)",
  glass: "var(--shadow-glass)",
}
```

---

## 📦 استخدام النظام

### استيراد الأنماط
```typescript
// في main.tsx أو App.tsx
import '@/index.css';
import '@/ui/styles/animations.css';
import '@/ui/styles/utilities.css';
import '@/ui/styles/components.css';
```

### استخدام Motion Variants
```typescript
import { motionVariants, transitions } from '@/infrastructure/config/motion.config';
import { motion } from 'framer-motion';

<motion.div
  variants={motionVariants.fadeIn}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={transitions.normal}
>
  المحتوى
</motion.div>
```

### استخدام Glass Components
```typescript
<div className="glass-card">
  <h2 className="text-gradient-primary">عنوان</h2>
  <p>محتوى البطاقة</p>
</div>
```

### استخدام Utility Classes
```typescript
<div className="full-center animate-fade-in shadow-elegant">
  <p className="text-gradient-secondary">نص متدرج</p>
</div>
```

---

## 🎨 Color Tokens (TypeScript)

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

## 📱 Spacing & Layout

```typescript
export const themeTokens = {
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
  layout: {
    sidebarWidth: "16rem",
    sidebarCollapsed: "5rem",
    headerHeight: "4rem",
    footerHeight: "3.5rem",
    containerPadding: "clamp(1rem, 2.5vw, 2.75rem)",
  },
} as const;
```

---

## 🚀 أفضل الممارسات

1. **استخدم المتغيرات دائماً** - لا تستخدم الألوان مباشرة
2. **اتبع النظام الدلالي** - استخدم `--primary` بدلاً من الألوان المباشرة
3. **استخدم Framer Motion للأنيميشن المعقدة**
4. **استخدم CSS للأنيميشن البسيطة**
5. **اختبر في Dark Mode و Light Mode**
6. **استخدم RTL/LTR utilities للدعم ثنائي اللغة**

---

## 📚 الملفات المرجعية

- `src/index.css` - نقطة الدخول الرئيسية
- `src/infrastructure/theme/theme.css` - متغيرات الثيم
- `src/ui/styles/animations.css` - تعريفات الأنيميشن
- `src/ui/styles/utilities.css` - Utility classes
- `src/ui/styles/components.css` - Component classes
- `src/infrastructure/config/motion.config.ts` - Framer Motion configs
- `src/infrastructure/theme/tokens.ts` - Theme tokens
- `tailwind.config.ts` - إعدادات Tailwind

---

تم إنشاء هذا التوثيق من نظام FODA Design System 🎨
