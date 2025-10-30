# Settings System Implementation Guide

This document provides complete implementation details for the theme and text-size settings system used in the CalDayHam.com project. An AI agent can use this guide to implement an identical system in a new project.

---

## System Overview

The settings system provides:
1. **Theme switching** (Light/Dark mode)
2. **Text size adjustment** (Small/Medium/Large)
3. **Persistent user preferences** (localStorage)
4. **Fixed floating button** (bottom-right, content-aligned)
5. **Popup settings panel**

---

## File Structure Required

```
/
├── index.html
├── style.css
├── settings.js
└── assets/
    ├── setting-black.svg
    ├── setting-white.svg
```

---

## Implementation Step 1: HTML Structure

Add this HTML to your `<body>` tag, **inside your `<main>` element** (before your content):

```html
<!-- Settings Button -->
<button id="settings-toggle" class="settings-icon" aria-label="Settings">
    <img src="assets/setting-black.svg" alt="Settings" width="20" height="20" id="settings-icon-img">
</button>

<!-- Settings Popup -->
<div id="settings-popup" class="settings-popup hidden">
    <h3>Settings</h3>
    <div class="setting-group">
        <label>Theme</label>
        <div class="setting-buttons">
            <button class="setting-btn active" data-theme="light">Light</button>
            <button class="setting-btn" data-theme="dark">Dark</button>
        </div>
    </div>
    <div class="setting-group">
        <label>Text Size</label>
        <div class="setting-buttons">
            <button class="setting-btn" data-size="small">Small</button>
            <button class="setting-btn active" data-size="medium">Medium</button>
            <button class="setting-btn" data-size="large">Large</button>
        </div>
    </div>
</div>
```

**Before closing `</body>` tag, add:**

```html
<script src="settings.js"></script>
```

---

## Implementation Step 2: CSS Variables (Root)

Add these CSS variables to your stylesheet. These go at the **top of your CSS file**:

```css
:root {
    /* Layout */
    --border-radius: 3px;

    /* Font Sizes */
    --font-size-base: 15px;

    /* Colors - Light Mode */
    --bg-color: #fff;
    --text-color: #333;
    --text-secondary: #666;
    --border-color: #e0e0e0;
    --border-color-medium: #d0d0d0;
    --callout-bg: #f8f8f8;
    --callout-border: #d0d0d0;
    --link-color: #0066cc;
    --button-bg: #f8f8f8;
    --button-hover: #e8e8e8;
    --popup-bg: #ffffff;
    --shadow-color: rgba(0, 0, 0, 0.1);
}
```

---

## Implementation Step 3: Theme Classes

Add these body class modifiers for **dark mode** and **text sizing**:

```css
body.dark-mode {
    /* Colors - Dark Mode */
    --bg-color: #1a1a1a;
    --text-color: #e0e0e0;
    --text-secondary: #999;
    --border-color: #404040;
    --border-color-medium: #404040;
    --callout-bg: #252525;
    --callout-border: #404040;
    --link-color: #6699ff;
    --button-bg: #252525;
    --button-hover: #303030;
    --popup-bg: #252525;
    --shadow-color: rgba(0, 0, 0, 0.3);
}

body.text-small {
    --font-size-base: 13px;
}

body.text-large {
    --font-size-base: 20px;
}
```

**How this works:**
- When `body` has class `dark-mode`, CSS variables are overridden to dark theme colors
- When `body` has class `text-small` or `text-large`, base font size changes
- JavaScript adds/removes these classes dynamically

---

## Implementation Step 4: Base Body Styles

Apply CSS variables to your body element:

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.5;
    color: var(--text-color);
    background: var(--bg-color);
    font-size: var(--font-size-base);
}
```

**Key point:** All colors and the base font size reference CSS variables, so they automatically update when the user changes settings.

---

## Implementation Step 5: Settings Button Styles

Add these styles for the **floating settings button**:

```css
.settings-icon {
    position: fixed;
    bottom: 1.5rem;
    right: calc(50% - 325px + 2rem);  /* Aligns with 650px content edge */
    width: 40px;
    height: 40px;
    border: 1px solid var(--callout-border);
    background: var(--callout-bg);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px var(--shadow-color);
    transition: all 0.2s ease;
    z-index: 100;
    padding: 0;
}

.settings-icon:hover {
    background: var(--button-hover);
    transform: scale(1.05);
}

.settings-icon img {
    display: block;
    width: 20px;
    height: 20px;
}
```

**Position calculation explanation:**
- `50%` = viewport center
- `325px` = half of 650px content width
- `2rem` = content padding
- Result: Button aligns with right edge of content

---

## Implementation Step 6: Settings Popup Styles

Add these styles for the **popup panel**:

```css
.settings-popup {
    position: fixed;
    bottom: 5rem;
    right: calc(50% - 325px + 2rem);  /* Aligns with settings button */
    background: var(--popup-bg);
    border: 1px solid var(--border-color-medium);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 4px 16px var(--shadow-color);
    z-index: 99;
    min-width: 200px;
}

.settings-popup.hidden {
    display: none;
}

.settings-popup h3 {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    font-weight: 600;
}

.setting-group {
    margin-bottom: 1.25rem;
}

.setting-group:last-child {
    margin-bottom: 0;
}

.setting-group label {
    display: block;
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.setting-buttons {
    display: flex;
    gap: 0.5rem;
}

.setting-btn {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border-color-medium);
    background: var(--popup-bg);
    color: var(--text-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.2s ease;
}

.setting-btn:hover {
    background: var(--button-hover);
}

.setting-btn.active {
    background: var(--link-color);
    color: white;
    border-color: var(--link-color);
}
```

---

## Implementation Step 7: Mobile Responsive Styles

Add media query to adjust button position on smaller screens:

```css
@media (max-width: 800px) {
    .settings-icon {
        right: 1.5rem;  /* Switch to viewport-relative positioning */
    }

    .settings-popup {
        right: 1.5rem;  /* Switch to viewport-relative positioning */
    }
}
```

**Why this breakpoint?**
- At 800px and below, the content-aligned positioning can push the button off-screen or too close to the edge
- Switching to fixed `1.5rem` from viewport edge ensures visibility

---

## Implementation Step 8: JavaScript File (settings.js)

Create a new file `settings.js` with this **complete code**:

```javascript
// Settings functionality for theme and text size
document.addEventListener('DOMContentLoaded', () => {
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsPopup = document.getElementById('settings-popup');
    const themeButtons = document.querySelectorAll('[data-theme]');
    const sizeButtons = document.querySelectorAll('[data-size]');

    // Load saved settings from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedSize = localStorage.getItem('textSize') || 'medium';

    // Apply saved settings on load
    applyTheme(savedTheme);
    applyTextSize(savedSize);
    updateActiveButtons();

    // Toggle settings popup
    settingsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsPopup.classList.toggle('hidden');
    });

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsPopup.contains(e.target) && e.target !== settingsToggle) {
            settingsPopup.classList.add('hidden');
        }
    });

    // Theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            applyTheme(theme);
            localStorage.setItem('theme', theme);
            updateActiveButtons();
        });
    });

    // Text size buttons
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const size = button.dataset.size;
            applyTextSize(size);
            localStorage.setItem('textSize', size);
            updateActiveButtons();
        });
    });

    function applyTheme(theme) {
        const settingsIcon = document.querySelector('.settings-icon img');

        if (!settingsIcon) {
            console.error('Settings icon not found');
            return;
        }

        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            settingsIcon.src = 'assets/setting-white.svg';
        } else {
            document.body.classList.remove('dark-mode');
            settingsIcon.src = 'assets/setting-black.svg';
        }
    }

    function applyTextSize(size) {
        // Remove existing size classes
        document.body.classList.remove('text-small', 'text-large');

        // Apply new size class
        if (size === 'small') {
            document.body.classList.add('text-small');
        } else if (size === 'large') {
            document.body.classList.add('text-large');
        }
        // Medium is the default, no class needed
    }

    function updateActiveButtons() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const currentSize = localStorage.getItem('textSize') || 'medium';

        // Update theme buttons
        themeButtons.forEach(button => {
            if (button.dataset.theme === currentTheme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Update size buttons
        sizeButtons.forEach(button => {
            if (button.dataset.size === currentSize) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
});
```

---

## How the JavaScript Works

### Initialization Flow

1. **DOM Ready**: Waits for `DOMContentLoaded`
2. **Load Preferences**: Reads `theme` and `textSize` from localStorage
3. **Apply Settings**: Calls `applyTheme()` and `applyTextSize()`
4. **Update UI**: Calls `updateActiveButtons()` to highlight current selections

### Event Handlers

**Toggle Button:**
```javascript
settingsToggle.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevent immediate close from document listener
    settingsPopup.classList.toggle('hidden');
});
```

**Close on Outside Click:**
```javascript
document.addEventListener('click', (e) => {
    if (!settingsPopup.contains(e.target) && e.target !== settingsToggle) {
        settingsPopup.classList.add('hidden');
    }
});
```

**Theme Selection:**
```javascript
button.addEventListener('click', () => {
    const theme = button.dataset.theme;  // Read data-theme attribute
    applyTheme(theme);
    localStorage.setItem('theme', theme);  // Persist choice
    updateActiveButtons();
});
```

### Key Functions

**`applyTheme(theme)`**
- Adds/removes `dark-mode` class from `<body>`
- Swaps settings icon between black/white versions
- CSS variables automatically update via `.dark-mode` class

**`applyTextSize(size)`**
- Removes existing size classes
- Adds appropriate class (`text-small` or `text-large`)
- Medium is default (no class needed)

**`updateActiveButtons()`**
- Reads current settings from localStorage
- Adds `active` class to matching buttons
- Removes `active` from others

---

## Required Assets

You need two SVG icon files in your `assets/` directory:

1. **`setting-black.svg`** - Used in light mode
2. **`setting-white.svg`** - Used in dark mode

These should be simple gear/cog icons. The icon swaps when the theme changes to maintain visibility.

---

## localStorage Keys

The system uses these localStorage keys:

- `theme` - Values: `"light"` or `"dark"`
- `textSize` - Values: `"small"`, `"medium"`, or `"large"`

These persist across page reloads and browser sessions.

---

## Customization Guide

### Changing Content Width

If you want a different content width (e.g., 800px instead of 650px):

1. Change `max-width` in your `main` selector
2. Update settings button positioning:
   ```css
   right: calc(50% - 400px + 2rem);  /* 400px = half of 800px */
   ```

### Adding More Themes

To add a third theme (e.g., "Sepia"):

1. Add button to HTML:
   ```html
   <button class="setting-btn" data-theme="sepia">Sepia</button>
   ```

2. Add CSS class:
   ```css
   body.sepia-mode {
       --bg-color: #f4ecd8;
       --text-color: #5c4a3c;
       /* ... other colors ... */
   }
   ```

3. Update JavaScript `applyTheme()`:
   ```javascript
   if (theme === 'dark') {
       document.body.classList.remove('sepia-mode');
       document.body.classList.add('dark-mode');
   } else if (theme === 'sepia') {
       document.body.classList.remove('dark-mode');
       document.body.classList.add('sepia-mode');
   } else {
       document.body.classList.remove('dark-mode', 'sepia-mode');
   }
   ```

### Adding More Text Sizes

Follow the same pattern as existing sizes. Add a new `data-size` attribute and corresponding CSS class.

---

## Integration Checklist

Use this checklist when implementing in a new project:

- [ ] Create HTML structure (settings button + popup)
- [ ] Add CSS variables to `:root`
- [ ] Add theme modifier classes (`body.dark-mode`, etc.)
- [ ] Apply CSS variables to body styles
- [ ] Add settings button styles
- [ ] Add settings popup styles
- [ ] Add mobile media query adjustments
- [ ] Create `settings.js` file with complete code
- [ ] Include `<script src="settings.js"></script>` before `</body>`
- [ ] Add settings icon SVG files to `assets/` directory
- [ ] Test theme switching
- [ ] Test text size switching
- [ ] Test localStorage persistence (reload page)
- [ ] Test mobile responsive behavior

---

## Common Issues & Solutions

### Issue: Button not aligned with content
**Solution:** Check that your `main` element has the correct `max-width` and padding, and that the calculation matches:
```css
right: calc(50% - [half-of-max-width] + [padding-value]);
```

### Issue: Icon doesn't change color in dark mode
**Solution:** Ensure you have both `setting-black.svg` and `setting-white.svg` files, and that paths are correct in JavaScript.

### Issue: Settings don't persist after reload
**Solution:** Check browser console for localStorage errors. Ensure `localStorage.setItem()` is being called in event handlers.

### Issue: Popup doesn't close when clicking outside
**Solution:** Verify the document click listener is attached and that `e.stopPropagation()` is used on the toggle button click.

---

## Design Philosophy

**Why CSS Variables?**
- Single source of truth for colors and sizes
- Theme changes affect entire site instantly
- No need to override hundreds of individual selectors

**Why localStorage?**
- Simple persistence without backend
- Works offline
- Respects user preferences across sessions

**Why Fixed Positioning?**
- Settings always accessible
- Doesn't disrupt content flow
- Professional, modern UI pattern

**Why Content-Aligned Button?**
- Maintains visual relationship with content
- Avoids awkward whitespace
- Adapts gracefully to different viewport sizes

---

## End of Guide

This implementation is production-ready and requires no external dependencies. Copy the code exactly as shown, adjust the content width if needed, and you'll have a fully functional settings system.
