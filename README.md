# 🐰 Bunny Pick | Color Picker

<div align="center">
  <img src="web/icons/logo.png" alt="Bunny Pick Logo" width="128" height="128">
  
  **Modern, multilingual color picker Chrome extension and web application**
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-blue.svg)](https://chrome.google.com/webstore)
  [![Version](https://img.shields.io/badge/Version-1.2.0-orange.svg)](https://github.com/Alper-K/bunny-pick/releases)
</div>

## 📖 About

Bunny Pick is a modern and user-friendly Chrome extension and web application that allows you to pick colors from anywhere on your screen using your browser's built-in EyeDropper API. It's the perfect tool for designers, developers, and color enthusiasts.

## ✨ Features

### 🎨 Color Picking
- **EyeDropper API**: Uses browser's built-in color picker API
- **Real-time Preview**: Instantly view selected colors in a modern rectangular display
- **Multiple Format Support**: Color codes in HEX, RGB, HSL, HSV, CMYK formats
- **Format Cycling**: Quick format switching with arrow buttons in compact mode
- **Clipboard Copy**: One-click color code copying to clipboard with visual feedback
- **Color History**: Automatically saves your last 5 picked colors

### 🌍 Multilingual Support
- **11 Languages**: Turkish, English, German, Spanish, French, Italian, Russian, Portuguese, Dutch, Arabic, Japanese, Chinese
- Easy language switching feature
- Fully localized interface including tooltips and tool names
- Automatic browser language detection

### 🎯 User Experience
- **Dual Mode Interface**: 
  - **Compact Mode** (200x50px): Minimal space usage with essential features
  - **Full Mode** (320x400px): Complete feature set with color tools
- **Modern Design**: Clean and intuitive interface with smooth animations
- **Responsive**: Perfect appearance on all screen sizes
- **Fast and Lightweight**: Minimal resource usage, 100% offline
- **Accessibility**: Keyboard navigation, screen reader support, and helpful tooltips
- **No External Dependencies**: Completely privacy-friendly, no tracking

### ⚙️ Settings and Customization
- Default copy format selection
- Language preference settings
- User preference saving (localStorage)
- Compact/Full mode preference persistence

### 🛠️ Color Tools (New!)
- **Color History**: Access your last 5 picked colors instantly
- **Generate Palette**: Create 5-color palettes (2 darker, base, 2 lighter)
- **Invert Color**: Get the inverse of any color
- **Lighten/Darken**: Adjust color brightness with one click
- **Format Preview**: See format names (HEX, RGB, etc.) in compact mode

## 🚀 Installation

### Chrome Extension

1. **Download from GitHub**
   ```bash
   git clone https://github.com/Alper-K/bunny-pick.git
   cd bunny-pick
   ```

2. **Install in Chrome**
   - Go to `chrome://extensions/` in Chrome
   - Enable "Developer mode"
   - Click "Load unpacked extension"
   - Select the `extension` folder

3. **Start Using**
   - Click the Bunny Pick icon in the browser toolbar
   - Click "Start Color Picker" button
   - Select any color from your screen

### Web Application

1. **Open Web Version**
   ```bash
   # After cloning the project
   cd bunny-pick/web
   # Open index.html in your browser
   ```

2. **Live Demo**
   - Live demo via [GitHub Pages](https://alper-k.github.io/bunny-pick)
   - No installation required

## 🛠️ Technical Details

### Supported Browsers
- **Chrome** 95+
- **Microsoft Edge** 95+
- **Opera** 81+

### Technologies
- **Manifest V3**: Latest Chrome extension standard
- **EyeDropper API**: Built-in color picker API
- **Vanilla JavaScript**: No framework dependencies
- **CSS3**: Modern styling features
- **SVG**: Vector-based icons

### File Structure
```
bunny-pick/
├── extension/           # Chrome extension files
│   ├── icons/          # Extension icons
│   ├── lang/           # Language files
│   ├── manifest.json   # Extension manifest
│   ├── popup.html      # Extension popup interface
│   ├── popup.css       # Popup styles
│   └── popup.js        # Popup JavaScript
├── web/                # Web application files
│   ├── icons/          # Web application icons
│   ├── lang/           # Language files
│   ├── index.html      # Main HTML file
│   ├── style.css       # CSS styles
│   └── script.js       # JavaScript code
├── package.json        # Project configuration
├── README.md           # This file
├── CONTRIBUTING.md     # Contributing guide
└── CHANGELOG.md        # Change history
```

## 🎨 New Features in v1.2.0

### Compact Mode
- **Ultra-compact interface** (200x50px) for minimal screen usage
- **Format cycling** with arrow buttons
- **Visual feedback** with tick icon on copy
- **Eyedropper icon** for quick color picking
- **Persistent mode preference**

### Color Tools
- **Color History**: Last 5 colors with one-click reuse
- **Palette Generator**: Automatic 5-color palette creation
- **Color Manipulation**: Invert, lighten, darken functions
- **Smart Tooltips**: Multilingual, position-aware tooltips

### Enhanced UX
- **Rectangular color preview** for better visibility
- **No scroll**: Fixed dimensions prevent unwanted scrolling
- **Smooth animations**: Professional transitions between modes
- **11 languages**: Comprehensive multilingual support

## 📱 Usage

### Chrome Extension

#### Compact Mode (Default)
1. Click the 🐰 icon in the browser toolbar
2. Click the eyedropper icon to pick a color
3. Color code is automatically copied to clipboard
4. Use arrow buttons (◀ ▶) to cycle through formats
5. Click on format name to copy current format
6. Click expand icon to switch to full mode

#### Full Mode
1. View large color preview with code overlay
2. Access color history (last 5 colors)
3. Use quick action tools:
   - 👁️ **Pick Color**: Select new colors
   - 🎨 **Generate Palette**: Create color variations
   - ⚪ **Invert**: Get inverse color
   - ☀️ **Lighten**: Make color brighter
   - 🌙 **Darken**: Make color darker
4. Click collapse icon to return to compact mode

### Web Application
1. Open the web page
2. Click "Start Color Picker" button
3. Use the color picker to select your desired color
4. View and copy color information

## ⚙️ Settings

### Language Settings
- Click the 🌍 icon to select language
- **Supported languages**: 
  - 🇹🇷 Turkish (Türkçe)
  - 🇬🇧 English
  - 🇩🇪 German (Deutsch)
  - 🇪🇸 Spanish (Español)
  - 🇫🇷 French (Français)
  - 🇮🇹 Italian (Italiano)
  - 🇷🇺 Russian (Русский)
  - 🇵🇹 Portuguese (Português)
  - 🇳🇱 Dutch (Nederlands)
  - 🇸🇦 Arabic (العربية)
  - 🇯🇵 Japanese (日本語)
  - 🇨🇳 Chinese (中文)

### Copy Format
- Click the ⚙️ icon to open settings
- Select default copy format:
  - HEX (#ffffff)
  - RGB (rgb(255, 255, 255))
  - HSL (hsl(0, 0%, 100%))
  - HSV (hsv(0, 0%, 100%))
  - CMYK (cmyk(0%, 0%, 0%, 0%))

## 🤝 Contributing

This project is open source and we welcome your contributions!

### Ways to Contribute
1. **Bug Reports**: Report bugs in the [Issues](https://github.com/Alper-K/bunny-pick/issues) section
2. **Feature Requests**: Share your new feature suggestions
3. **Code Contributions**: Submit pull requests
4. **Documentation**: Improve README and code comments
5. **Translations**: Add support for new languages

### Development Environment Setup
```bash
# Clone the project
git clone https://github.com/Alper-K/bunny-pick.git
cd bunny-pick

# Load in Chrome for development
# chrome://extensions/ -> Developer mode -> Load unpacked extension
```

For detailed contribution guidelines, see the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## 📄 License

This project is licensed under the [MIT License](LICENSE). This license allows you to freely use, modify, and distribute the project.

## 👨‍💻 Developer

**ALPER KINALI**
- GitHub: [@Alper-K](https://github.com/Alper-K)
- Project: [Bunny Pick](https://github.com/Alper-K/bunny-pick)

## 🔗 Links

- **GitHub Repository**: [https://github.com/Alper-K/bunny-pick](https://github.com/Alper-K/bunny-pick)
- **Chrome Web Store**: (Coming Soon)
- **Web Demo**: [https://alper-k.github.io/bunny-pick](https://alper-k.github.io/bunny-pick)
- **Issues**: [https://github.com/Alper-K/bunny-pick/issues](https://github.com/Alper-K/bunny-pick/issues)

## 📊 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/Alper-K/bunny-pick?style=social)
![GitHub forks](https://img.shields.io/github/forks/Alper-K/bunny-pick?style=social)
![GitHub issues](https://img.shields.io/github/issues/Alper-K/bunny-pick)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Alper-K/bunny-pick)

## 🎯 Future Plans

- [ ] Firefox extension support
- [ ] Safari extension support
- [ ] Export color palettes
- [x] ~~Color history~~ ✅ Completed (v1.2.0)
- [x] ~~Color analysis tools~~ ✅ Completed (v1.2.0)
- [x] ~~More language support~~ ✅ Completed (11 languages)
- [x] ~~Compact mode~~ ✅ Completed (v1.2.0)
- [ ] Custom color palettes
- [ ] Keyboard shortcuts
- [ ] Color contrast checker

## 🙏 Acknowledgments

Thanks to the entire open source community and everyone who contributed to making this project possible!

---

<div align="center">
  <p>⭐ If you liked this project, don't forget to give it a star!</p>
  <p>🐰 Discover your colors with <strong>Bunny Pick</strong>!</p>
</div>
