# Bunny Pick

A modern, multilingual Chrome extension that allows you to pick colors from anywhere on your screen using the browser's native EyeDropper API.

![Extension Preview](https://img.shields.io/badge/Chrome-Extension-blue?style=for-the-badge&logo=google-chrome)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.2.0-orange?style=for-the-badge)

## ✨ Features

### Core Features
- 🎨 **Screen Color Picking**: Pick colors from anywhere on your screen using EyeDropper API
- 🌍 **Multilingual Support**: Available in 11 languages (Turkish, English, German, Spanish, French, Italian, Russian, Portuguese, Dutch, Arabic, Japanese, Chinese)
- 📋 **Multiple Color Formats**: Support for HEX, RGB, HSL, HSV, and CMYK formats
- ⚡ **Instant Copy**: Automatically copies selected colors to clipboard with visual feedback
- 🎯 **Modern UI**: Beautiful glassmorphism design with smooth animations
- ⚙️ **Customizable**: Choose your preferred default color format
- 🔧 **Settings Panel**: Easy access to all configuration options

### New in v1.2.0
- 📊 **Dual Mode Interface**: 
  - **Compact Mode** (200x50px): Minimal space, essential features
  - **Full Mode** (320x400px): Complete toolset with color utilities
- 🔄 **Format Cycling**: Quick format switching with arrow buttons in compact mode
- 📝 **Color History**: Automatically saves last 5 picked colors
- 🎨 **Color Tools**: Generate palettes, invert, lighten, darken colors
- 💬 **Smart Tooltips**: Position-aware, multilingual tooltips
- 🔲 **No Scroll**: Fixed dimensions prevent unwanted scrolling
- 🌐 **100% Offline**: No external dependencies, completely privacy-friendly

## 🚀 Installation

### From Chrome Web Store
*Coming soon...*

### Manual Installation (Developer Mode)

1. **Download the Extension**
   ```bash
   git clone https://github.com/Alper-K/bunny-pick.git
   cd bunny-pick
   ```

2. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the extension folder
   - The Bunny Pick icon should appear in your extensions toolbar

## 🎯 Usage

### Compact Mode (Default)
1. **Click the Extension Icon** in your Chrome toolbar
2. **Click the eyedropper icon** 👁️ to pick a color
3. **Color is automatically copied** to clipboard
4. **Use arrow buttons** (◀ ▶) to cycle through formats (HEX → RGB → HSL → HSV → CMYK)
5. **Click format name** to copy current format
6. **Click expand icon** to switch to full mode

### Full Mode
1. **View large rectangular color preview** with code overlay
2. **Access color history**: Click any of the last 5 colors to reuse
3. **Use quick action tools**:
   - 👁️ **Pick Color**: Select new colors from screen
   - 🎨 **Generate Palette**: Create 5-color palette (2 darker, base, 2 lighter)
   - ⚪ **Invert**: Get the inverse/complementary color
   - ☀️ **Lighten**: Make color 20% brighter
   - 🌙 **Darken**: Make color 20% darker
4. **Click collapse icon** to return to compact mode
5. **All tools update** color history automatically

## 🌍 Supported Languages

All interface elements, tooltips, and tool names are fully translated:

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

## 🎨 Color Formats

The extension supports multiple color formats:

- **HEX**: `#FF5733`
- **RGB**: `rgb(255, 87, 51)`
- **HSL**: `hsl(12, 100%, 60%)`
- **HSV**: `hsv(12, 80%, 100%)`
- **CMYK**: `cmyk(0%, 66%, 80%, 0%)`

## ⚙️ Settings

Access settings by clicking the gear icon in the extension popup:

- **Default Copy Format**: Choose which format to copy by default (HEX, RGB, HSL, HSV, CMYK)
- **Interface Language**: Change the extension's language (11 languages available)
- **Mode Preference**: Your compact/full mode choice is automatically saved
- **Color History**: Automatically managed, stores last 5 colors
- **Version Information**: View extension details (v1.2.0)

## 🔧 Technical Details

### Browser Compatibility
- ✅ Chrome 95+
- ✅ Microsoft Edge 95+
- ✅ Opera 81+
- ❌ Firefox (EyeDropper API not supported)
- ❌ Safari (EyeDropper API not supported)

### Permissions
- `activeTab`: Access to the current tab
- `clipboardWrite`: Copy colors to clipboard
- `storage`: Save user preferences

### Technologies Used
- **HTML5**: Modern semantic markup
- **CSS3**: Glassmorphism design with backdrop filters
- **JavaScript ES6+**: Modern JavaScript features
- **EyeDropper API**: Native browser color picking
- **Chrome Extensions API**: Extension functionality

## 🛠️ Development

### Project Structure
```
extension/
├── icons/                 # Extension icons
│   ├── icon16.png         # 16x16 icon
│   ├── icon32.png         # 32x32 icon
│   ├── icon48.png         # 48x48 icon
│   ├── icon128.png        # 128x128 icon
│   ├── logo.png           # Main logo
│   ├── eyedropper.svg     # Color picker icon
│   ├── expand.svg         # Expand icon
│   ├── collapse.svg       # Collapse icon
│   ├── tick-double.svg    # Copy feedback icon
│   └── ...                # Other UI icons
├── lang/                  # Translation files
│   └── global.json        # All 11 languages
├── popup.html            # Extension popup UI
├── popup.css             # Extension styles (900+ lines)
├── popup.js              # Extension logic (800+ lines)
├── manifest.json         # Extension manifest (v3)
├── package.json          # Project metadata
└── README.md             # This file
```

### Building from Source
1. Clone the repository
2. No build process required - it's pure HTML/CSS/JS
3. Load the extension in Chrome developer mode

### Version Management
```bash
# Update version (updates both package.json and manifest.json)
npm run version:patch  # 1.2.0 -> 1.2.1
npm run version:minor  # 1.2.0 -> 1.3.0
npm run version:major  # 1.2.0 -> 2.0.0
```

### Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this project.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports

If you find a bug, please open an issue with:
- Browser version
- Extension version
- Steps to reproduce
- Expected vs actual behavior

## 💡 Feature Requests

Have an idea for a new feature? Open an issue and let's discuss it!

## 📞 Support

If you need help or have questions:
- Open an issue on GitHub
- Check existing issues for solutions

## 🙏 Acknowledgments

- Chrome Extensions team for the EyeDropper API
- All contributors who help improve this extension
- The open source community for inspiration and tools

---

**Made with ❤️ for the developer community**
