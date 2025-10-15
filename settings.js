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
            // Try setting with error handling
            const newSrc = 'assets/setting-white.svg';
            settingsIcon.src = newSrc;
            console.log('Switching to dark icon:', newSrc);

            // Add error handler to detect if image fails to load
            settingsIcon.onerror = function() {
                console.error('Failed to load:', newSrc);
                console.log('Current location:', window.location.href);
            };
        } else {
            document.body.classList.remove('dark-mode');
            const newSrc = 'assets/setting-black.svg';
            settingsIcon.src = newSrc;
            console.log('Switching to light icon:', newSrc);
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
