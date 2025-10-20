document.addEventListener('DOMContentLoaded', function() {
    const pickButton = document.getElementById('color-picker-btn');
    const previewCircle = document.getElementById('preview');
    
    // Compact mode elements
    const container = document.querySelector('.container');
    const expandBtn = document.getElementById('expand-btn');
    const collapseBtn = document.getElementById('collapse-btn');
    const compactColorBtn = document.getElementById('color-picker-compact-btn');
    const compactColorPreview = document.getElementById('compact-color-preview');
    const compactFormatDisplay = document.getElementById('compact-format-display');
    const compactFormatName = document.getElementById('compact-format-name');
    const compactCopyTick = document.getElementById('compact-copy-tick');
    const formatPrevBtn = document.getElementById('format-prev-btn');
    const formatNextBtn = document.getElementById('format-next-btn');
    
    // Language selection elements
    const languageModal = document.getElementById('language-modal');
    const languageList = document.getElementById('language-list');
    const languageTitle = document.getElementById('language-title');
    const closeLanguageBtn = document.getElementById('close-language');
    const globeIcon = document.querySelector('.header-icons img[alt="Select Language"]');
    
    // Color format elements
    const previewWell = document.getElementById('preview-well');
    const colorCodeDisplay = document.getElementById('color-code-display');
    const colorFormats = document.getElementById('color-formats');
    const formatList = document.getElementById('format-list');
    const formatTitle = document.getElementById('format-title');
    const closeFormatsBtn = document.getElementById('close-formats');
    
    // Settings modal elements
    const settingsModal = document.getElementById('settings-modal');
    const settingsTitle = document.getElementById('settings-title');
    const closeSettingsBtn = document.getElementById('close-settings');
    const defaultFormatSelector = document.getElementById('default-format-selector');
    const languageSelector = document.getElementById('language-selector');
    const settingsIcon = document.querySelector('.header-icons img[alt="Settings"]');
    
    // Selected color information
    let selectedColor = null;
    let defaultFormat = localStorage.getItem('defaultFormat') || 'hex';
    
    // Compact mode state (default: compact mode)
    let isCompactMode = localStorage.getItem('compactMode') !== 'false';
    
    // Format cycling for compact mode
    const formatOrder = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk'];
    let currentFormatIndex = 0;
    
    // Color history
    let colorHistory = JSON.parse(localStorage.getItem('colorHistory') || '[]');
    const MAX_HISTORY = 5;
    
    // Color tools elements
    const colorHistoryEl = document.getElementById('color-history');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const generatePaletteBtn = document.getElementById('generate-palette-btn');
    const invertColorBtn = document.getElementById('invert-color-btn');
    const lightenColorBtn = document.getElementById('lighten-color-btn');
    const darkenColorBtn = document.getElementById('darken-color-btn');
    
    // Current language (default: browser language or Turkish)
    let currentLanguage = localStorage.getItem('colorPickerLanguage') || getBrowserLanguage();
    
    // Translations - loaded from global.json file
    let translations = {};
    
    // Load global.json file
    async function loadTranslations() {
        try {
            const response = await fetch('lang/global.json');
            translations = await response.json();
        } catch (error) {
            console.error('Translation file could not be loaded:', error);
            // Fallback translations
            translations = {
                'en': {
                    'title': 'Color Picker',
                    'button': 'Start Color Picker',
                    'selecting': 'Selecting...',
                    'retry': 'Retry',
                    'languageTitle': 'Select Language',
                    'settingsTitle': 'Settings',
                    'defaultFormatLabel': 'Default Copy Format',
                    'languageSettingLabel': 'Interface Language'
                }
            };
        }
    }
    
    // Language options (English first)
    const languageOptions = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'zh', name: '中文', flag: '🇨🇳' }
    ];

    // Color conversion functions
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }

    function rgbToCmyk(r, g, b) {
        const c = 1 - (r / 255);
        const m = 1 - (g / 255);
        const y = 1 - (b / 255);
        const k = Math.min(c, m, y);
        
        return {
            c: Math.round((c - k) / (1 - k) * 100) || 0,
            m: Math.round((m - k) / (1 - k) * 100) || 0,
            y: Math.round((y - k) / (1 - k) * 100) || 0,
            k: Math.round(k * 100)
        };
    }

    function rgbToHsv(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const diff = max - min;
        let h = 0;

        if (diff !== 0) {
            if (max === r) {
                h = ((g - b) / diff) % 6;
            } else if (max === g) {
                h = (b - r) / diff + 2;
            } else {
                h = (r - g) / diff + 4;
            }
        }

        h = Math.round(h * 60);
        if (h < 0) h += 360;

        const s = max === 0 ? 0 : Math.round((diff / max) * 100);
        const v = Math.round(max * 100);

        return { h, s, v };
    }

    function getColorFormats(hex) {
        const rgb = hexToRgb(hex);
        if (!rgb) return null;

        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
        const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

        return {
            hex: hex.toUpperCase(),
            rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
            hsv: `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`,
            cmyk: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`
        };
    }

    // Detect browser language
    function getBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0]; // 'en-US' -> 'en'
        
        // Supported languages list
        const supportedLanguages = ['tr', 'en', 'de', 'es', 'fr', 'it', 'ru', 'pt', 'nl', 'ar', 'ja', 'zh'];
        
        // Debug: log to console
        console.log('Browser language:', browserLang, 'Detected code:', langCode);
        
        // If browser language is supported, use it
        if (supportedLanguages.includes(langCode)) {
            console.log('Supported language selected:', langCode);
            return langCode;
        }
        
        // If not supported, return English as default
        console.log('Unsupported language, default English selected');
        return 'en';
    }

    // Language change functions
    function updateLanguage() {
        const t = translations[currentLanguage];
        
        // Update title
        document.querySelector('.title-text').textContent = t.title;
        
        // Update language modal title
        languageTitle.textContent = t.languageTitle;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });
        
        // Create language options
        languageList.innerHTML = '';
        languageOptions.forEach(option => {
            const div = document.createElement('div');
            div.className = `language-option ${option.code === currentLanguage ? 'active' : ''}`;
            div.innerHTML = `
                <span class="language-flag">${option.flag}</span>
                <span>${option.name}</span>
            `;
            div.addEventListener('click', () => selectLanguage(option.code));
            languageList.appendChild(div);
        });
    }

    function selectLanguage(langCode) {
        currentLanguage = langCode;
        localStorage.setItem('colorPickerLanguage', langCode);
        updateLanguage();
        closeLanguageModal();
    }

    function openLanguageModal() {
        languageModal.classList.add('show');
    }

    function closeLanguageModal() {
        languageModal.classList.remove('show');
    }

    // Globe icon click event
    if (globeIcon) {
        globeIcon.addEventListener('click', openLanguageModal);
    }

    // Modal close events
    if (closeLanguageBtn) {
        closeLanguageBtn.addEventListener('click', closeLanguageModal);
    }

    if (languageModal) {
        languageModal.addEventListener('click', (e) => {
            if (e.target === languageModal) {
                closeLanguageModal();
            }
        });
    }

    // Clipboard copy function (optimized for Chrome extension)
    async function copyToClipboard(text) {
        try {
            // Most reliable method for Chrome extension: temporary text area
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            textArea.style.opacity = '0';
            textArea.style.pointerEvents = 'none';
            textArea.setAttribute('readonly', '');
            textArea.setAttribute('contenteditable', 'true');
            
            document.body.appendChild(textArea);
            
            // Select text
            textArea.focus();
            textArea.select();
            textArea.setSelectionRange(0, 99999); // For mobile
            
            // Copy
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (!successful) {
                throw new Error('execCommand copy failed');
            }
            
            console.log('Copy successful:', text);
        } catch (err) {
            console.error('Copy error:', err);
            throw new Error('Copy failed: ' + err.message);
        }
    }

    // Color formats modal functions
    function showColorFormats(hex) {
        const formats = getColorFormats(hex);
        if (!formats) return;

        const t = translations[currentLanguage];
        
        // Update title
        formatTitle.textContent = t.colorFormatsTitle || 'Color Formats';
        
        formatList.innerHTML = '';
        
        const formatItems = [
            { label: 'HEX', value: formats.hex },
            { label: 'RGB', value: formats.rgb },
            { label: 'HSL', value: formats.hsl },
            { label: 'HSV', value: formats.hsv },
            { label: 'CMYK', value: formats.cmyk }
        ];

        formatItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'format-item';
            div.innerHTML = `
                <span class="format-label">${item.label}</span>
                <span class="format-value">${item.value}</span>
            `;
            div.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Format clicked:', item.label, item.value);
                
                try {
                    await copyToClipboard(item.value);
                    console.log('Copy successful:', item.value);
                    
                    // Successful copy feedback
                    const originalText = div.querySelector('.format-label').textContent;
                    div.querySelector('.format-label').textContent = `✓ ${t.copied || 'Copied!'}`;
                    div.style.background = 'rgba(76, 175, 80, 0.2)';
                    
                    setTimeout(() => {
                        div.querySelector('.format-label').textContent = originalText;
                        div.style.background = 'rgba(255, 255, 255, 0.05)';
                    }, 1500);
                } catch (error) {
                    console.error('Copy error:', error);
                    // Show feedback even in error case
                    const originalText = div.querySelector('.format-label').textContent;
                    div.querySelector('.format-label').textContent = '❌ Error!';
                    div.style.background = 'rgba(244, 67, 54, 0.2)';
                    
                    setTimeout(() => {
                        div.querySelector('.format-label').textContent = originalText;
                        div.style.background = 'rgba(255, 255, 255, 0.05)';
                    }, 1500);
                }
            });
            formatList.appendChild(div);
        });

        colorFormats.classList.add('show');
        previewWell.classList.add('expanded');
    }

    function hideColorFormats() {
        colorFormats.classList.remove('show');
        previewWell.classList.remove('expanded');
    }

    // Circle click event
    if (previewWell) {
        previewWell.addEventListener('click', () => {
            if (selectedColor) {
                showColorFormats(selectedColor);
            }
        });
    }

    // Color formats modal close events
    if (closeFormatsBtn) {
        closeFormatsBtn.addEventListener('click', hideColorFormats);
    }

    if (colorFormats) {
        colorFormats.addEventListener('click', (e) => {
            if (e.target === colorFormats) {
                hideColorFormats();
            }
        });
    }

    // Settings modal functions
    function showSettings() {
        settingsModal.classList.add('show');
        updateSettingsLanguage();
        populateLanguageSelector();
    }

    function hideSettings() {
        settingsModal.classList.remove('show');
    }

    function updateSettingsLanguage() {
        const t = translations[currentLanguage];
        settingsTitle.textContent = t.settingsTitle;
        document.getElementById('default-format-label').textContent = t.defaultFormatLabel;
        document.getElementById('language-setting-label').textContent = t.languageSettingLabel;
    }

    function populateLanguageSelector() {
        languageSelector.innerHTML = '';
        languageOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.code;
            optionElement.textContent = option.name;
            if (option.code === currentLanguage) {
                optionElement.selected = true;
            }
            languageSelector.appendChild(optionElement);
        });
    }

    function updateDefaultFormat() {
        defaultFormat = defaultFormatSelector.value;
        localStorage.setItem('defaultFormat', defaultFormat);
        
        // If color is selected, show new format
        if (selectedColor) {
            const formats = getColorFormats(selectedColor);
            if (formats) {
                const formatValue = formats[defaultFormat] || formats.hex;
                colorCodeDisplay.textContent = formatValue;
            }
        }
    }

    // Settings modal events
    if (settingsIcon) {
        settingsIcon.addEventListener('click', showSettings);
    }

    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', hideSettings);
    }

    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                hideSettings();
            }
        });
    }

    if (defaultFormatSelector) {
        defaultFormatSelector.addEventListener('change', updateDefaultFormat);
    }

    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            localStorage.setItem('colorPickerLanguage', currentLanguage);
            updateLanguage();
            updateSettingsLanguage();
        });
    }

    // Load default format
    if (defaultFormatSelector) {
        defaultFormatSelector.value = defaultFormat;
    }

    // Compact mode functions
    function toggleCompactMode() {
        isCompactMode = !isCompactMode;
        localStorage.setItem('compactMode', isCompactMode);
        applyCompactMode();
    }

    function applyCompactMode() {
        if (isCompactMode) {
            container.classList.add('compact');
            document.body.classList.add('compact-mode');
        } else {
            container.classList.remove('compact');
            document.body.classList.remove('compact-mode');
        }
    }

    // Expand/Collapse button events
    if (expandBtn) {
        expandBtn.addEventListener('click', toggleCompactMode);
    }

    if (collapseBtn) {
        collapseBtn.addEventListener('click', toggleCompactMode);
    }

    // Update compact format name display
    function updateCompactFormatName() {
        if (!selectedColor) return;
        
        const currentFormat = formatOrder[currentFormatIndex];
        
        if (compactFormatName) {
            compactFormatName.textContent = currentFormat.toUpperCase();
        }
    }
    
    // Cycle to next format
    function nextFormat() {
        if (!selectedColor) return;
        currentFormatIndex = (currentFormatIndex + 1) % formatOrder.length;
        updateCompactFormatName();
    }
    
    // Cycle to previous format
    function prevFormat() {
        if (!selectedColor) return;
        currentFormatIndex = (currentFormatIndex - 1 + formatOrder.length) % formatOrder.length;
        updateCompactFormatName();
    }
    
    // Show tick icon animation
    function showCopyTick() {
        if (compactFormatName && compactCopyTick) {
            compactFormatName.classList.add('hide');
            compactCopyTick.classList.add('show');
            
            setTimeout(() => {
                compactFormatName.classList.remove('hide');
                compactCopyTick.classList.remove('show');
            }, 1000);
        }
    }
    
    // Format arrow buttons
    if (formatNextBtn) {
        formatNextBtn.addEventListener('click', nextFormat);
    }
    
    if (formatPrevBtn) {
        formatPrevBtn.addEventListener('click', prevFormat);
    }
    
    // Click on format display to copy
    if (compactFormatDisplay) {
        compactFormatDisplay.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (!selectedColor) return;
            
            const formats = getColorFormats(selectedColor);
            if (!formats) return;
            
            const currentFormat = formatOrder[currentFormatIndex];
            const formatValue = formats[currentFormat];
            
            try {
                await copyToClipboard(formatValue);
                
                // Show tick icon
                showCopyTick();
            } catch (error) {
                console.error('Copy error:', error);
            }
        });
    }
    
    // Compact mode color picker button
    if (compactColorBtn) {
        compactColorBtn.addEventListener('click', async () => {
            if ('EyeDropper' in window) {
                const eyeDropper = new window.EyeDropper();
                try {
                    const result = await eyeDropper.open();
                    const hexColor = result.sRGBHex.toUpperCase();
                    
                    // Update compact preview
                    compactColorPreview.style.backgroundColor = hexColor;
                    selectedColor = hexColor;
                    
                    // Update format name display
                    updateCompactFormatName();
                    
                    // Copy to clipboard
                    const formats = getColorFormats(hexColor);
                    if (formats) {
                        const formatValue = formats[defaultFormat] || formats.hex;
                        await copyToClipboard(formatValue);
                    }
                    
                    // Also update full mode preview if available
                    if (previewCircle) {
                        previewCircle.style.backgroundColor = hexColor;
                    }
                } catch (e) {
                    if (e.name !== 'AbortError') {
                        console.error('Color picker error:', e);
                    }
                }
            }
        });
    }

    // Color History Functions
    function addToHistory(color) {
        // Remove if already exists
        colorHistory = colorHistory.filter(c => c !== color);
        // Add to beginning
        colorHistory.unshift(color);
        // Keep only MAX_HISTORY items
        if (colorHistory.length > MAX_HISTORY) {
            colorHistory = colorHistory.slice(0, MAX_HISTORY);
        }
        // Save to localStorage
        localStorage.setItem('colorHistory', JSON.stringify(colorHistory));
        // Update UI
        renderColorHistory();
    }

    function renderColorHistory() {
        if (!colorHistoryEl) return;
        
        colorHistoryEl.innerHTML = '';
        
        for (let i = 0; i < MAX_HISTORY; i++) {
            const div = document.createElement('div');
            if (colorHistory[i]) {
                div.className = 'history-color';
                div.style.backgroundColor = colorHistory[i];
                div.title = colorHistory[i];
                div.addEventListener('click', () => {
                    selectedColor = colorHistory[i];
                    updateUIAfterPick(colorHistory[i]);
                });
            } else {
                div.className = 'history-color empty';
            }
            colorHistoryEl.appendChild(div);
        }
    }

    function clearHistory() {
        colorHistory = [];
        localStorage.setItem('colorHistory', JSON.stringify(colorHistory));
        renderColorHistory();
    }

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', clearHistory);
    }

    // Color Manipulation Functions
    function invertColor(hex) {
        const rgb = hexToRgb(hex);
        if (!rgb) return hex;
        
        const inverted = {
            r: 255 - rgb.r,
            g: 255 - rgb.g,
            b: 255 - rgb.b
        };
        
        return `#${((1 << 24) + (inverted.r << 16) + (inverted.g << 8) + inverted.b).toString(16).slice(1).toUpperCase()}`;
    }

    function lightenColor(hex, amount = 20) {
        const rgb = hexToRgb(hex);
        if (!rgb) return hex;
        
        const lightened = {
            r: Math.min(255, rgb.r + amount),
            g: Math.min(255, rgb.g + amount),
            b: Math.min(255, rgb.b + amount)
        };
        
        return `#${((1 << 24) + (lightened.r << 16) + (lightened.g << 8) + lightened.b).toString(16).slice(1).toUpperCase()}`;
    }

    function darkenColor(hex, amount = 20) {
        const rgb = hexToRgb(hex);
        if (!rgb) return hex;
        
        const darkened = {
            r: Math.max(0, rgb.r - amount),
            g: Math.max(0, rgb.g - amount),
            b: Math.max(0, rgb.b - amount)
        };
        
        return `#${((1 << 24) + (darkened.r << 16) + (darkened.g << 8) + darkened.b).toString(16).slice(1).toUpperCase()}`;
    }

    function generatePalette(hex) {
        const colors = [
            darkenColor(hex, 40),
            darkenColor(hex, 20),
            hex,
            lightenColor(hex, 20),
            lightenColor(hex, 40)
        ];
        
        // Show palette in color formats modal
        if (formatList && formatTitle) {
            formatTitle.textContent = 'Color Palette';
            formatList.innerHTML = '';
            
            colors.forEach((color, index) => {
                const div = document.createElement('div');
                div.className = 'format-item';
                div.style.background = `linear-gradient(90deg, ${color} 50%, rgba(255, 255, 255, 0.1) 50%)`;
                div.innerHTML = `
                    <span class="format-label">${index === 2 ? 'Base' : index < 2 ? 'Darker ' + (2 - index) : 'Lighter ' + (index - 2)}</span>
                    <span class="format-value">${color}</span>
                `;
                div.addEventListener('click', async () => {
                    try {
                        await copyToClipboard(color);
                        const originalBg = div.style.background;
                        div.style.background = 'rgba(76, 175, 80, 0.3)';
                        setTimeout(() => {
                            div.style.background = originalBg;
                        }, 500);
                    } catch (error) {
                        console.error('Copy error:', error);
                    }
                });
                formatList.appendChild(div);
            });
            
            colorFormats.classList.add('show');
        }
    }

    // Quick Action Buttons
    if (invertColorBtn) {
        invertColorBtn.addEventListener('click', () => {
            if (!selectedColor) return;
            const inverted = invertColor(selectedColor);
            selectedColor = inverted;
            updateUIAfterPick(inverted);
            addToHistory(inverted);
        });
    }

    if (lightenColorBtn) {
        lightenColorBtn.addEventListener('click', () => {
            if (!selectedColor) return;
            const lightened = lightenColor(selectedColor);
            selectedColor = lightened;
            updateUIAfterPick(lightened);
            addToHistory(lightened);
        });
    }

    if (darkenColorBtn) {
        darkenColorBtn.addEventListener('click', () => {
            if (!selectedColor) return;
            const darkened = darkenColor(selectedColor);
            selectedColor = darkened;
            updateUIAfterPick(darkened);
            addToHistory(darkened);
        });
    }

    if (generatePaletteBtn) {
        generatePaletteBtn.addEventListener('click', () => {
            if (!selectedColor) return;
            generatePalette(selectedColor);
        });
    }

    // Load translations and apply language settings when page loads
    async function initializeApp() {
        await loadTranslations();
        updateLanguage();
        applyCompactMode();
        renderColorHistory();
    }
    
    initializeApp();

    // Check if browser supports EyeDropper API
    if ('EyeDropper' in window) {
        const eyeDropper = new window.EyeDropper();

        const pickColor = async () => {
            // Set UI to 'loading' state when button is pressed
            pickButton.disabled = true;
            pickButton.style.opacity = '0.6';
            
            try {
                // Open browser's native color picker and wait for user to select color
                const result = await eyeDropper.open(); 
                const hexColor = result.sRGBHex.toUpperCase(); // Convert color to uppercase

                // Copy selected color to clipboard in default format
                const formats = getColorFormats(hexColor);
                if (formats) {
                    const formatValue = formats[defaultFormat] || formats.hex;
                    await copyToClipboard(formatValue);
                }

                // Update UI and play animations on success
                updateUIAfterPick(hexColor);
                
            } catch (e) {
                // Handle error case (user cancelled or other error occurred)
                if (e.name === 'AbortError') {
                    console.log('Color selection cancelled');
                } else {
                    console.error('Color picker error:', e);
                }
                resetUI();
            } finally {
                // Re-enable button in all cases (successful or error)
                pickButton.disabled = false;
                pickButton.style.opacity = '1';
            }
        };
        
        pickButton.addEventListener('click', pickColor);

        // Function to update interface after color is selected
        function updateUIAfterPick(hexColor) {
            selectedColor = hexColor;
            
            previewCircle.style.backgroundColor = hexColor;
            // Small growth animation
            previewCircle.style.transform = 'scale(1.1)';
            setTimeout(() => { previewCircle.style.transform = 'scale(1)'; }, 200);

            // Show default format in circle
            const formats = getColorFormats(hexColor);
            if (formats) {
                const formatValue = formats[defaultFormat] || formats.hex;
                colorCodeDisplay.textContent = formatValue;
                colorCodeDisplay.classList.add('show');
            }
            
            // Add to history
            addToHistory(hexColor);
        }

        // Function to reset interface on error or cancel
        function resetUI() {
            selectedColor = null;
            
            previewCircle.style.transform = 'scale(0.95)';
            setTimeout(() => { previewCircle.style.transform = 'scale(1)'; }, 200);
            
            colorCodeDisplay.classList.remove('show');
        }


    } else {
        // Browser doesn't support EyeDropper API
        pickButton.disabled = true;
        pickButton.style.opacity = '0.4';
        pickButton.title = 'Your browser does not support the EyeDropper API';
    }
});