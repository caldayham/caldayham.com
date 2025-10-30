# Project Overview: cfcbayarea.com

## Architecture

This is a **static HTML website** with vanilla JavaScript functionality. The project consists of:

- Multiple standalone HTML pages (index, portfolio, blog)
- A single shared stylesheet ([style.css](style.css))
- Minimal JavaScript for interactive features ([settings.js](settings.js), [portfolio.js](portfolio.js), [blog.js](blog.js))

## Layout & Design Philosophy

### Core Design Principles

1. **Fixed-width, centered layout** - Maximum width of 650px
2. **Clean, minimal aesthetic** - Simple typography with generous whitespace
3. **System fonts** - Uses native OS fonts for optimal performance
4. **Responsive but desktop-first** - Optimized for reading experience

### Layout Structure

```
<body>
  <main> (max-width: 650px, centered)
    - Settings button (fixed bottom-right, aligned to content)
    - Header (with profile photo)
    - Navigation
    - Content sections
    - Footer (social links)
  </main>
</body>
```

### Key Layout Measurements

- **Main content width**: `650px` maximum
- **Padding**: `2rem` on desktop, `1.5rem` on mobile
- **Settings button position**:
  - Desktop: `right: calc(50% - 325px + 2rem)` (aligns with content edge)
  - Mobile: `right: 1.5rem` (fixed to viewport edge)
- **Settings button size**: `40px` diameter circle
- **Settings button distance from bottom**: `1.5rem`

### Settings Button Positioning Logic

The settings button uses a clever calculation to stay aligned with the content:

```css
right: calc(50% - 325px + 2rem);
```

**Breaking this down:**
- `50%` = center of viewport
- `325px` = half of 650px content width
- `2rem` = content padding

This formula ensures the button stays at the edge of the content area, not the viewport.

## Page Structure

### Single-Page Design (Your New Project)

For a single-page site similar to this, you'll want:

1. **Header section** - Name and subtitle
2. **Navigation** (optional) - Could be anchor links to sections if needed
3. **Main content** - Your primary content sections
4. **Footer/Connect section** - Contact or social links

### Typography Scale

- **Base font size**: `15px` (medium), `13px` (small), `20px` (large)
- **H1**: `1.75em` (26.25px at medium)
- **H2**: `1.1rem` (16.5px at medium)
- **Body**: Inherits base size
- **Nav links**: `0.85em`
- **Secondary text**: `0.9em`

### Color Palette Philosophy

Uses CSS variables for theming with two modes:
- Light mode (default)
- Dark mode (toggled via settings)

Colors adapt to theme without hardcoded values throughout the CSS.

## Responsive Behavior

### Breakpoints

- **800px**: Settings button switches to viewport-aligned positioning
- **600px**: Mobile layout activations
  - Reduced padding
  - Profile photo scales down
  - Social links stack vertically

### Mobile Adaptations

The design gracefully adapts to smaller screens while maintaining readability and the essential layout structure.

## File Organization

```
/
├── index.html
├── portfolio.html
├── blog.html
├── style.css (shared styles)
├── settings.js (theme & text size)
├── portfolio.js (portfolio filtering)
├── blog.js (blog filtering)
└── assets/
    ├── setting-black.svg
    ├── setting-white.svg
    └── [images]
```

## Key Features

### 1. Persistent Settings System
- Theme selection (Light/Dark)
- Text size options (Small/Medium/Large)
- Settings saved to localStorage
- Popup interface with floating button

### 2. Clean Typography
- System font stack
- Relative sizing using `em` and `rem`
- Comfortable line-height (1.5)

### 3. Minimal JavaScript
- No frameworks or libraries
- Vanilla DOM manipulation
- Event delegation for efficiency

## For Your New Single-Page Project

**Keep these elements:**
- 650px max-width centered layout
- Settings button with same positioning logic
- CSS variable-based theming system
- Same font sizes and spacing
- Fixed bottom settings button

**You can remove:**
- Multi-page navigation
- Portfolio/blog filtering systems
- Multiple HTML pages

**You'll need:**
- Single `index.html` file
- `style.css` (adapted from this project)
- `settings.js` (exactly as implemented here)
- Settings icon assets (`setting-black.svg`, `setting-white.svg`)

The settings system can be transferred wholesale to your new project with minimal modifications.
