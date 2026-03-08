

## Plan: Add Glowing Animated Circular Border to Stats Cards

Each stat card (line 44) will get a continuously rotating glowing border effect using a CSS conic-gradient animation trick.

### Approach
1. **Add a `@keyframes rotate-glow`** animation in `src/index.css` that rotates 0→360deg continuously
2. **Wrap each stat card** with a container that uses a `conic-gradient` background rotating via the animation, with the inner card slightly inset to create the "glowing border" effect — using `rounded-full` style with 20% border-radius to create a circular/pill shape, or use a pseudo-element approach

Actually, re-reading: "20% width circle around the whole div" — the user wants a circular glowing ring around each stat div that continuously animates.

### Implementation
- **`src/index.css`**: Add `@keyframes spin-glow` (360deg rotation) and a `.glow-border` utility class that uses `::before` pseudo-element with a conic-gradient of the theme colors (electric, coral, cyan), rotating continuously, with `border-radius: 20%` and slightly larger than the card
- **`src/components/AboutSection.tsx`**: Add `relative glow-border` class to each stat card container (line 44), and adjust `overflow-hidden` + inner padding to reveal the animated border

### Files to edit
- `src/index.css` — add rotating glow keyframes + `.glow-border` class
- `src/components/AboutSection.tsx` — apply the class to stat card divs

