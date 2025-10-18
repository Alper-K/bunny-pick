document.addEventListener('DOMContentLoaded', function() {
    const pickButton = document.getElementById('color-picker-btn');
    const previewBunny = document.getElementById('preview-bunny');
    
    // Language selection elements
    const languageModal = document.getElementById('language-modal');
    const languageList = document.getElementById('language-list');
    const languageTitle = document.getElementById('language-title');
    const closeLanguageBtn = document.getElementById('close-language');
    const globeIcon = document.getElementById('language-icon');
    
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
    const settingsIcon = document.getElementById('settings-icon');
    
    // Selected color information
    let selectedColor = null;
    let defaultFormat = localStorage.getItem('defaultFormat') || 'hex';
    
    // Current language (default: browser language or English)
    let currentLanguage = localStorage.getItem('bunnyPickLanguage') || getBrowserLanguage();
    
    // If this is first visit, save detected language to localStorage
    if (!localStorage.getItem('bunnyPickLanguage')) {
        localStorage.setItem('bunnyPickLanguage', currentLanguage);
        console.log('First visit detected, saved language:', currentLanguage);
    }
    
    // Translations and language options - embedded from lang/global.json file
    const appData = {
        "languageOptions": [
            { "code": "en", "name": "English", "flag": "🇺🇸" },
            { "code": "tr", "name": "Türkçe", "flag": "🇹🇷" },
            { "code": "de", "name": "Deutsch", "flag": "🇩🇪" },
            { "code": "es", "name": "Español", "flag": "🇪🇸" },
            { "code": "fr", "name": "Français", "flag": "🇫🇷" },
            { "code": "it", "name": "Italiano", "flag": "🇮🇹" },
            { "code": "ru", "name": "Русский", "flag": "🇷🇺" },
            { "code": "pt", "name": "Português", "flag": "🇵🇹" },
            { "code": "nl", "name": "Nederlands", "flag": "🇳🇱" },
            { "code": "ar", "name": "العربية", "flag": "🇸🇦" },
            { "code": "ja", "name": "日本語", "flag": "🇯🇵" },
            { "code": "zh", "name": "中文", "flag": "🇨🇳" }
        ],
        "tr": {
            "title": "Renk Seçici",
            "button": "Renk Seçiciyi Başlat",
            "feedback": "Renk seçiliyor...",
            "success": "Panoya kopyalandı!",
            "error": "Bir hata oluştu",
            "cancel": "İptal edildi.",
            "browserNotSupported": "Bu özellik sadece Chrome, Edge veya Opera'da çalışır.",
            "selecting": "Seçim Yapılıyor...",
            "retry": "Yeniden Seç",
            "languageTitle": "Dil Seçin",
            "settingsTitle": "Ayarlar",
            "defaultFormatLabel": "Varsayılan Kopyalama Formatı",
            "languageSettingLabel": "Arayüz Dili",
            "colorFormatsTitle": "Renk Formatları",
            "copied": "Kopyalandı!",
            "copySettingsTitle": "Kopyalama Ayarları",
            "languageSectionTitle": "Dil",
            "browserNotSupportedTitle": "Tarayıcı Uyumluluk Sorunu",
            "browserNotSupportedMessage": "Bu özellik Chrome 95+, Edge 95+ veya Opera 81+ gerektirir",
            "currentBrowser": "Mevcut tarayıcı"
        },
        "en": {
            "title": "Color Picker",
            "button": "Start Color Picker",
            "feedback": "Selecting color...",
            "success": "Copied to clipboard!", 
            "error": "An error occurred",
            "cancel": "Cancelled.",
            "browserNotSupported": "This feature only works in Chrome, Edge, or Opera.",
            "selecting": "Selecting...",
            "retry": "Retry",
            "languageTitle": "Select Language",
            "settingsTitle": "Settings",
            "defaultFormatLabel": "Default Copy Format",
            "languageSettingLabel": "Interface Language",
            "colorFormatsTitle": "Color Formats",
            "copied": "Copied!",
            "copySettingsTitle": "Copy Settings",
            "languageSectionTitle": "Language",
            "browserNotSupportedTitle": "Browser Compatibility Issue",
            "browserNotSupportedMessage": "This feature requires Chrome 95+, Edge 95+, or Opera 81+",
            "currentBrowser": "Current browser"
        },
        "de": {
            "title": "Farbauswähler",
            "button": "Farbauswähler starten",
            "feedback": "Farbe auswählen...",
            "success": "In die Zwischenablage kopiert!", 
            "error": "Ein Fehler ist aufgetreten",
            "cancel": "Abgebrochen.",
            "browserNotSupported": "Diese Funktion funktioniert nur in Chrome, Edge oder Opera.",
            "selecting": "Auswählen...",
            "retry": "Wiederholen",
            "languageTitle": "Sprache wählen",
            "settingsTitle": "Einstellungen",
            "defaultFormatLabel": "Standard-Kopierformat",
            "languageSettingLabel": "Oberflächensprache",
            "colorFormatsTitle": "Farbformate",
            "copied": "Kopiert!",
            "copySettingsTitle": "Kopiereinstellungen",
            "languageSectionTitle": "Sprache",
            "browserNotSupportedTitle": "Browser-Kompatibilitätsproblem",
            "browserNotSupportedMessage": "Diese Funktion erfordert Chrome 95+, Edge 95+ oder Opera 81+",
            "currentBrowser": "Aktueller Browser"
        },
        "es": {
            "title": "Selector de Color",
            "button": "Iniciar Selector de Color",
            "feedback": "Seleccionando color...",
            "success": "Copiado al portapapeles!", 
            "error": "Ocurrió un error",
            "cancel": "Cancelado.",
            "browserNotSupported": "Esta función solo funciona en Chrome, Edge o Opera.",
            "selecting": "Seleccionando...",
            "retry": "Reintentar",
            "languageTitle": "Seleccionar Idioma",
            "settingsTitle": "Configuración",
            "defaultFormatLabel": "Formato de Copia Predeterminado",
            "languageSettingLabel": "Idioma de la Interfaz",
            "colorFormatsTitle": "Formatos de Color",
            "copied": "¡Copiado!",
            "copySettingsTitle": "Configuración de Copia",
            "languageSectionTitle": "Idioma",
            "browserNotSupportedTitle": "Problema de Compatibilidad del Navegador",
            "browserNotSupportedMessage": "Esta función requiere Chrome 95+, Edge 95+ u Opera 81+",
            "currentBrowser": "Navegador actual"
        },
        "fr": { 
            "title": "Sélecteur de Couleur",
            "button": "Démarrer le Sélecteur de Couleur",
            "feedback": "Sélection de la couleur...",
            "success": "Copié dans le presse-papiers!",
            "error": "Une erreur est survenue",
            "cancel": "Annulé.",
            "browserNotSupported": "Cette fonctionnalité ne fonctionne que dans Chrome, Edge ou Opera.",
            "selecting": "Sélection...",
            "retry": "Réessayer",
            "languageTitle": "Sélectionner la Langue",
            "settingsTitle": "Paramètres",
            "defaultFormatLabel": "Format de Copie par Défaut",
            "languageSettingLabel": "Langue de l'Interface",
            "colorFormatsTitle": "Formats de Couleur",
            "copied": "Copié !",
            "copySettingsTitle": "Paramètres de Copie",
            "languageSectionTitle": "Langue",
            "browserNotSupportedTitle": "Problème de Compatibilité du Navigateur",
            "browserNotSupportedMessage": "Cette fonctionnalité nécessite Chrome 95+, Edge 95+ ou Opera 81+",
            "currentBrowser": "Navigateur actuel"
        },
        "it": {
            "title": "Selezionatore di Colore",
            "button": "Avvia Selezionatore di Colore",
            "feedback": "Selezionando colore...",
            "success": "Copiato nella clipboard!",
            "error": "Si è verificato un errore",
            "cancel": "Annullato.",
            "browserNotSupported": "Questa funzione funziona solo in Chrome, Edge o Opera.",
            "selecting": "Selezione...",
            "retry": "Riprova",
            "languageTitle": "Seleziona Lingua",
            "settingsTitle": "Impostazioni",
            "defaultFormatLabel": "Formato di Copia Predefinito",
            "languageSettingLabel": "Lingua dell'Interfaccia",
            "colorFormatsTitle": "Formati Colore",
            "copied": "Copiato!",
            "copySettingsTitle": "Impostazioni di Copia",
            "languageSectionTitle": "Lingua",
            "browserNotSupportedTitle": "Problema di Compatibilità del Browser",
            "browserNotSupportedMessage": "Questa funzione richiede Chrome 95+, Edge 95+ o Opera 81+",
            "currentBrowser": "Browser attuale"
        },
        "ru": {
            "title": "Выбор цвета",
            "button": "Начать выбор цвета",
            "feedback": "Выбор цвета...",
            "success": "Скопировано в буфер обмена!",
            "error": "Произошла ошибка",
            "cancel": "Отменено.",
            "browserNotSupported": "Эта функция работает только в Chrome, Edge или Opera.",
            "selecting": "Выбор...",
            "retry": "Повторить",
            "languageTitle": "Выберите язык",
            "settingsTitle": "Настройки",
            "defaultFormatLabel": "Формат копирования по умолчанию",
            "languageSettingLabel": "Язык интерфейса",
            "colorFormatsTitle": "Форматы Цветов",
            "copied": "Скопировано!",
            "copySettingsTitle": "Настройки Копирования",
            "languageSectionTitle": "Язык",
            "browserNotSupportedTitle": "Проблема Совместимости Браузера",
            "browserNotSupportedMessage": "Эта функция требует Chrome 95+, Edge 95+ или Opera 81+",
            "currentBrowser": "Текущий браузер"
        },
        "pt": {
            "title": "Selecionador de Cor",
            "button": "Iniciar Selecionador de Cor",
            "feedback": "Selecionando cor...",
            "success": "Copiado para a área de transferência!",
            "error": "Ocorreu um erro",
            "cancel": "Cancelado.",
            "browserNotSupported": "Esta função funciona apenas no Chrome, Edge ou Opera.",
            "selecting": "Selecionando...",
            "retry": "Tentar novamente",
            "languageTitle": "Selecionar Idioma",
            "settingsTitle": "Configurações",
            "defaultFormatLabel": "Formato de Cópia Padrão",
            "languageSettingLabel": "Idioma da Interface",
            "colorFormatsTitle": "Formatos de Cor",
            "copied": "Copiado!",
            "copySettingsTitle": "Configurações de Cópia",
            "languageSectionTitle": "Idioma",
            "browserNotSupportedTitle": "Problema de Compatibilidade do Navegador",
            "browserNotSupportedMessage": "Esta função requer Chrome 95+, Edge 95+ ou Opera 81+",
            "currentBrowser": "Navegador atual"
        },
        "nl": {
            "title": "Kleurselecteur",
            "button": "Start Kleurselecteur",
            "feedback": "Kleur selecteren...",
            "success": "Gekopieerd naar het klembord!",
            "error": "Er is een fout opgetreden",
            "cancel": "Afgebroken.",
            "browserNotSupported": "Deze functie werkt alleen in Chrome, Edge of Opera.",
            "selecting": "Selecteren...",
            "retry": "Opnieuw proberen",
            "languageTitle": "Selecteer Taal",
            "settingsTitle": "Instellingen",
            "defaultFormatLabel": "Standaard Kopieerformaat",
            "languageSettingLabel": "Interface Taal",
            "colorFormatsTitle": "Kleurformaten",
            "copied": "Gekopieerd!",
            "copySettingsTitle": "Kopieerinstellingen",
            "languageSectionTitle": "Taal",
            "browserNotSupportedTitle": "Browser Compatibiliteitsprobleem",
            "browserNotSupportedMessage": "Deze functie vereist Chrome 95+, Edge 95+ of Opera 81+",
            "currentBrowser": "Huidige browser"
        },
        "ar": {
            "title": "محدد اللون",
            "button": "ابدأ محدد اللون",
            "feedback": "اختيار اللون...",
            "success": "انسخ إلى الحافظة!",
            "error": "حدث خطأ",
            "cancel": "ألغي.",
            "browserNotSupported": "هذه الميزة لا تعمل فقط في Chrome, Edge أو Opera.",
            "selecting": "اختيار...",
            "retry": "إعادة المحاولة",
            "languageTitle": "اختر اللغة",
            "settingsTitle": "الإعدادات",
            "defaultFormatLabel": "تنسيق النسخ الافتراضي",
            "languageSettingLabel": "لغة الواجهة",
            "colorFormatsTitle": "تنسيقات الألوان",
            "copied": "تم النسخ!",
            "copySettingsTitle": "إعدادات النسخ",
            "languageSectionTitle": "اللغة",
            "browserNotSupportedTitle": "مشكلة توافق المتصفح",
            "browserNotSupportedMessage": "هذه الميزة تتطلب Chrome 95+ أو Edge 95+ أو Opera 81+",
            "currentBrowser": "المتصفح الحالي"
        },
        "ja": {
            "title": "色選択器",
            "button": "色選択器を開始",
            "feedback": "色を選択しています...",
            "success": "クリップボードにコピーしました!",
            "error": "エラーが発生しました",
            "cancel": "キャンセルしました.",
            "browserNotSupported": "この機能はChrome、Edge、またはOperaでのみ動作します.",
            "selecting": "選択中...",
            "retry": "再試行",
            "languageTitle": "言語を選択",
            "settingsTitle": "設定",
            "defaultFormatLabel": "デフォルトコピー形式",
            "languageSettingLabel": "インターフェース言語",
            "colorFormatsTitle": "カラーフォーマット",
            "copied": "コピーしました！",
            "copySettingsTitle": "コピー設定",
            "languageSectionTitle": "言語",
            "browserNotSupportedTitle": "ブラウザ互換性の問題",
            "browserNotSupportedMessage": "この機能にはChrome 95+、Edge 95+、またはOpera 81+が必要です",
            "currentBrowser": "現在のブラウザ"
        },
        "zh": {
            "title": "颜色选择器",
            "button": "开始颜色选择器",
            "feedback": "选择颜色...",
            "success": "复制到剪贴板!",
            "error": "发生错误",
            "cancel": "取消.",
            "browserNotSupported": "此功能仅在Chrome、Edge或Opera中运行.",
            "selecting": "选择中...",
            "retry": "重试",
            "languageTitle": "选择语言",
            "settingsTitle": "设置",
            "defaultFormatLabel": "默认复制格式",
            "languageSettingLabel": "界面语言",
            "colorFormatsTitle": "颜色格式",
            "copied": "已复制！",
            "copySettingsTitle": "复制设置",
            "languageSectionTitle": "语言",
            "browserNotSupportedTitle": "浏览器兼容性问题",
            "browserNotSupportedMessage": "此功能需要Chrome 95+、Edge 95+或Opera 81+",
            "currentBrowser": "当前浏览器"
        }
    };
    
    // Extract translations and language options
    const translations = appData;
    const languageOptions = appData.languageOptions;

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
        // Get browser language preferences
        const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
        
        // Supported languages list (matching JSON file)
        const supportedLanguages = ['tr', 'en', 'de', 'es', 'fr', 'it', 'ru', 'pt', 'nl', 'ar', 'ja', 'zh'];
        
        // Check each browser language preference
        for (let lang of browserLanguages) {
            const langCode = lang.split('-')[0].toLowerCase(); // 'en-US' -> 'en'
        
        // If browser language is supported, use it
        if (supportedLanguages.includes(langCode)) {
                console.log('Browser language detected:', langCode);
            return langCode;
            }
        }
        
        // If no supported language found, return English as default
        console.log('No supported browser language found, using English as default');
        return 'en';
    }

    // Language change functions
    function updateLanguage() {
        const t = translations[currentLanguage] || translations['en'];
        
        // Update title
        const titleElement = document.querySelector('.title-text');
        if (titleElement) {
            titleElement.textContent = t.title;
        }
        
        // Update button text
        if (pickButton) {
            pickButton.textContent = t.button;
        }
        
        // Update language modal title
        if (languageTitle) {
            languageTitle.textContent = t.languageTitle;
        }
        
        // Create language options
        if (languageList) {
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
    }

    function selectLanguage(langCode) {
        currentLanguage = langCode;
        localStorage.setItem('bunnyPickLanguage', langCode);
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

    // Clipboard copy function (optimized for web)
    async function copyToClipboard(text) {
        try {
            // Use modern clipboard API for web
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                // Fallback for older browsers
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

        const t = translations[currentLanguage] || translations['en'];
        
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

    // Show empty color formats modal
    function showEmptyColorFormats() {
        const t = translations[currentLanguage] || translations['en'];
        
        // Update title
        if (formatTitle) {
            formatTitle.textContent = t.colorFormatsTitle || 'Color Formats';
        }
        
        if (formatList) {
            formatList.innerHTML = '<div style="text-align: center; color: #ccc; padding: 20px;">Select a color first to see formats</div>';
        }

        if (colorFormats) {
            colorFormats.classList.add('show');
        }
        if (previewWell) {
            previewWell.classList.add('expanded');
        }
    }

    function hideColorFormats() {
        if (colorFormats) {
            colorFormats.classList.remove('show');
        }
        if (previewWell) {
            previewWell.classList.remove('expanded');
        }
    }

    // Circle click event
    if (previewWell) {
        previewWell.addEventListener('click', () => {
            if (selectedColor) {
                showColorFormats(selectedColor);
            } else {
                showEmptyColorFormats();
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
        const t = translations[currentLanguage] || translations['en'];
        settingsTitle.textContent = t.settingsTitle;
        document.getElementById('default-format-label').textContent = t.defaultFormatLabel;
        document.getElementById('language-setting-label').textContent = t.languageSettingLabel;
        
        // Update section titles
        const copySettingsSection = document.querySelector('.settings-section .section-title');
        if (copySettingsSection) {
            copySettingsSection.textContent = t.copySettingsTitle;
        }
        
        const languageSection = document.querySelectorAll('.settings-section .section-title')[1];
        if (languageSection) {
            languageSection.textContent = t.languageSectionTitle;
        }
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
            localStorage.setItem('bunnyPickLanguage', currentLanguage);
            updateLanguage();
            updateSettingsLanguage();
        });
    }

    // Load default format
    if (defaultFormatSelector) {
        defaultFormatSelector.value = defaultFormat;
    }

    // Load translations and apply language settings when page loads
    function initializeApp() {
        console.log('Initializing app with language:', currentLanguage);
        updateLanguage();
    }
    
    initializeApp();

    // Check if browser supports EyeDropper API
    if ('EyeDropper' in window) {
        const eyeDropper = new window.EyeDropper();

        const pickColor = async () => {
            // Set UI to 'loading' state when button is pressed
            const t = translations[currentLanguage] || translations['en'];
            
            pickButton.disabled = true;
            pickButton.textContent = `⏳ ${t.selecting}`;
            
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
                pickButton.textContent = t.retry;
            }
        };
        
        pickButton.addEventListener('click', pickColor);

        // Function to update interface after color is selected
        function updateUIAfterPick(hexColor) {
            selectedColor = hexColor;
            
            if (previewBunny) {
                // Change bunny's fill color
                const path = previewBunny.querySelector('path');
                if (path) {
                    path.setAttribute('fill', hexColor);
                }
                // Small growth animation
                previewBunny.style.transform = 'scale(1.1)';
                setTimeout(() => { previewBunny.style.transform = 'scale(1)'; }, 200);
            }

            // Show default format in circle
            const formats = getColorFormats(hexColor);
            if (formats && colorCodeDisplay) {
                const formatValue = formats[defaultFormat] || formats.hex;
                colorCodeDisplay.textContent = formatValue;
                colorCodeDisplay.classList.add('show');
            }
        }

        // Function to reset interface on error or cancel
        function resetUI() {
            const t = translations[currentLanguage] || translations['en'];
            selectedColor = null;
            
            if (previewBunny) {
                // Reset bunny to default color
                const path = previewBunny.querySelector('path');
                if (path) {
                    path.setAttribute('fill', 'rgb(0%, 0%, 0%)');
                }
                previewBunny.style.transform = 'scale(0.95)';
                setTimeout(() => { previewBunny.style.transform = 'scale(1)'; }, 200);
            }
            
            // Hide color code in circle
            if (colorCodeDisplay) {
                colorCodeDisplay.classList.remove('show');
                colorCodeDisplay.textContent = '';
            }
            
            if (pickButton) {
                pickButton.textContent = t.button;
            }
        }

    } else {
        // Browser doesn't support EyeDropper API
        console.log('EyeDropper API is NOT supported!');
        console.log('Browser:', navigator.userAgent);
        console.log('Available APIs:', Object.keys(window).filter(key => key.includes('Eye') || key.includes('Color')));
        
        const t = translations[currentLanguage] || translations['en'];
        
        // Hide the color picker button
        if (pickButton) {
            pickButton.style.display = 'none';
        }
        
        // Show browser compatibility message
        const infoDiv = document.createElement('div');
        infoDiv.style.cssText = `
            margin-top: 20px;
            padding: 20px;
            background: rgba(244, 67, 54, 0.1);
            border: 1px solid rgba(244, 67, 54, 0.3);
            border-radius: 10px;
            color: #ff6b6b;
            font-size: 14px;
            text-align: center;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        `;
        
        const browserInfo = navigator.userAgent.split(' ').slice(-2).join(' ');
        infoDiv.innerHTML = `
            <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">
                ⚠️ ${t.browserNotSupportedTitle || 'Browser Compatibility Issue'}
            </div>
            <div style="margin-bottom: 10px;">
                ${t.browserNotSupportedMessage || 'This feature requires Chrome 95+, Edge 95+, or Opera 81+'}
            </div>
            <div style="font-size: 12px; opacity: 0.8;">
                ${t.currentBrowser || 'Current browser'}: ${browserInfo}
            </div>
        `;
        
        document.querySelector('.main-content').appendChild(infoDiv);
    }
});
