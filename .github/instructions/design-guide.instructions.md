---
name: design-guide
description: Design guide for the Bingo Mixer app. Use when creating or updating UI components, screens, or visual effects. Defines the cyberpunk neon aesthetic, component patterns, and polish standards for this social mixer game.
applyTo: "src/components/**,src/App.tsx"
---

# Bingo Mixer Design Guide

This project is a **playful, social cyberpunk-themed bingo mixer** with a polished, neon-accented aesthetic. All UI changes should reinforce this identity while maintaining simplicity and clarity.

## Design Principles

1. **Cohesive Cyberpunk Aesthetic**: Dark, deep blue backgrounds with neon cyan, purple, and pink accents. Every visual choice should feel intentional and themed.
2. **Playfulness**: The game is social and fun. Use emojis, smooth animations, and unexpected micro-interactions to delight users.
3. **Polish & Clarity**: Each component should feel refined. No rough edges, intentional spacing, and clear visual hierarchy.
4. **Lightweight**: Avoid bloat. Keep the codebase easy to understand and components focused on their purpose.
5. **Accessibility**: Ensure sufficient contrast, meaningful interactions, and keyboard navigation.

## Color System

All colors are defined in `src/index.css` using CSS `@theme` variables. **Always use these tokens; never hardcode colors.**

### Core Palette

| Variable | Value | Use Case |
|----------|-------|----------|
| `--color-bg` | `#05060f` | Page background |
| `--color-surface` | `rgba(7, 12, 27, 0.90)` | Secondary backgrounds |
| `--color-card` | `rgba(12, 18, 40, 0.92)` | Card/panel backgrounds |
| `--color-panel` | `rgba(13, 23, 59, 0.95)` | Deep panel backgrounds |
| `--color-fg` | `#e8f3ff` | Primary text (high contrast) |
| `--color-fg-soft` | `#a5b4fc` | Secondary text |
| `--color-accent` | `#7c3aed` | Purple accent (primary CTA, highlights) |
| `--color-accent-bright` | `#22d3ee` | Cyan accent (neon borders, effects) |
| `--color-cta` | `#ec4899` | Pink (call-to-action, emphasis) |
| `--color-border` | `rgba(129, 140, 248, 0.35)` | Subtle borders |
| `--color-marked` | `rgba(34, 211, 238, 0.16)` | Marked bingo square fill |
| `--color-marked-border` | `rgba(45, 212, 191, 0.45)` | Marked bingo square border |
| `--color-bonus` | `#a855f7` | Secondary accent (bonuses, special states) |

### Typography

- **Font Family**: Inter (via system-ui fallback)
- **Font Weight Scale**: 
  - Regular: `font-normal` (body text)
  - Semibold: `font-semibold` (labels, secondary headings)
  - Bold: `font-bold` (headings)
  - Black: `font-black` (hero titles, emphasis)

## Component Patterns

### Containers & Panels

Use **glass-morphism** (semi-transparent backdrop with blur) for layered surfaces:

```tsx
// Main card container
className="rounded-4xl border border-white/10 bg-[rgba(8,12,35,0.92)] p-8 shadow-[0_30px_80px_rgba(14,30,110,0.22)] backdrop-blur-xl"

// Neon panel utility (defined in CSS)
className="neon-panel"

// Deep nested panel
className="rounded-[1.75rem] border border-white/10 bg-[rgba(10,14,32,0.95)] p-6 shadow-[0_15px_45px_rgba(63,63,235,0.12)]"
```

**Guidelines:**
- Rounded corners: Use `rounded-4xl` (default), `rounded-3xl` (buttons), `rounded-[1.75rem]` (nested elements)
- Borders: Subtle `border-white/10` or use neon accents (`border-accent-bright/30`)
- Shadows: Use `shadow-[...]` with neon colors and low opacity (0.08–0.35)
- Padding: Generous spacing (`p-6` to `p-8`) to create breathing room

### Buttons & CTAs

All buttons use **gradient backgrounds** with neon colors and glow effects:

```tsx
// Primary button (Start Game, Keep Playing)
className="rounded-3xl bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#ec4899] px-6 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] transition hover:brightness-110 active:scale-[0.98]"

// Secondary button (if needed)
className="rounded-3xl border border-accent-bright/40 bg-[rgba(10,14,32,0.95)] px-6 py-3 text-white hover:bg-[rgba(20,24,50,0.95)] transition"
```

**Guidelines:**
- Always include `hover:brightness-110` for feedback
- Always include `active:scale-[0.98]` for haptic feel
- Use `transition` class for smooth animations
- Text should always be white or `text-white` for contrast

### Glowing Effects

Use utility classes or custom shadows for neon glow:

```css
/* Defined in src/index.css */
.neon-panel { box-shadow: 0 0 40px rgba(59, 130, 246, 0.12); }
.neon-border { box-shadow: 0 0 32px rgba(124, 58, 237, 0.28); }
.glow-text { text-shadow: 0 0 20px rgba(56, 189, 248, 0.25), ...; }
```

**When to use:**
- Text: Hero titles, important labels → `.glow-text`
- Panels: Special containers, modals → `.neon-panel` or `.neon-border`
- Buttons: Apply subtle shadow in dark contexts

### Bingo Board & Squares

The bingo board uses a **grid layout** with marked/unmarked states:

- **Unmarked**: Dark background, subtle border
- **Marked**: Cyan fill (`--color-marked`) with bright cyan border (`--color-marked-border`)
- **Winning squares**: Animation or enhanced glow when bingo is detected

Apply smooth transitions on state changes:
```tsx
className="transition-all duration-300 cursor-pointer"
```

### Modal & Overlays

Modal overlay uses:
```tsx
className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
```

Modal container uses neon panel + centered content:
```tsx
className="relative w-full max-w-sm overflow-hidden rounded-4xl border border-accent-bright/30 bg-[rgba(4,8,22,0.94)] p-6 text-center shadow-[0_0_80px_rgba(34,211,238,0.16)]"
```

## Animations & Micro-interactions

- **Page Load**: Staggered reveal with `animation-delay` (not scattered effects)
- **Transitions**: Use CSS `transition` class for smooth state changes (200–300ms)
- **Hover States**: `hover:brightness-110`, `hover:scale-105` (subtle, not jarring)
- **Active States**: `active:scale-[0.98]` for tactile feedback
- **Marked Squares**: Smooth color/border transitions when toggled

Avoid excessive motion; focus on **high-impact moments** like the bingo modal reveal.

## Responsive Design

- Mobile-first: Base styles for mobile, use Tailwind breakpoints for larger screens
- Key breakpoints: `sm:640px`, `md:768px`, `lg:1024px`
- Padding: Responsive with `px-4 py-6` (mobile), `md:px-8 md:py-10` (desktop)
- Container: Constrain with `max-w-3xl` for wide screens

## Accessibility

1. **Contrast**: All text meets WCAG AA standards (tested via color tokens)
2. **Focus States**: Always include focus styles for keyboard navigation
3. **Semantic HTML**: Use `<button>`, `<h1>`, etc.; not styled `<div>` elements
4. **ARIA**: Add `aria-label` for icon-only buttons, `role="alert"` for modals
5. **Keyboard Navigation**: Modals should close with `Escape` key

## Dos & Don'ts

### ✅ Do

- Use CSS `@theme` variables for colors
- Keep rounded corners consistent (4xl > 3xl > 1.75rem)
- Apply neon glows to special states (marked, winning, hover)
- Use gradients for CTAs (purple → cyan → pink)
- Make micro-interactions feel responsive (no 1s animations)
- Test on mobile and dark mode

### ❌ Don't

- Hardcode colors (always use `--color-*` tokens)
- Use generic fonts (Inter is set; don't change without consensus)
- Apply animations to every element (reserve for high-impact moments)
- Forget accessibility (contrast, focus states, semantics)
- Bloat components with unnecessary classes
- Use clichéd AI design patterns (avoid "safe" defaults)

## Implementation Example

```tsx
// Cohesive, polished component
export function ExampleComponent() {
  return (
    <div className="rounded-4xl border border-white/10 bg-card p-8 shadow-lg backdrop-blur-xl">
      <h2 className="text-2xl font-black text-white glow-text mb-4">Title</h2>
      <p className="text-fg-soft mb-6">Description text</p>
      <button className="rounded-3xl bg-gradient-to-r from-accent via-accent-bright to-cta px-6 py-3 text-white font-semibold hover:brightness-110 active:scale-[0.98] transition">
        Action
      </button>
    </div>
  );
}
```

All classes are derived from the color system, responsive patterns, and component conventions above.

## Further Reading

- `src/index.css` — Color definitions and utility classes
- `src/components/` — Reference implementations (StartScreen, BingoModal, GameScreen)
- `.github/instructions/frontend-design.instructions.md` — Avoiding generic AI aesthetics
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4 CSS features
