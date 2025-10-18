# Bunny Pick

A modern, multilingual Chrome extension that allows you to pick colors from anywhere on your screen using the browser's native EyeDropper API.

![Extension Preview](https://img.shields.io/badge/Chrome-Extension-blue?style=for-the-badge&logo=google-chrome)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge)

## ✨ Features

- 🎨 **Screen Color Picking**: Pick colors from anywhere on your screen
- 🌍 **Multilingual Support**: Available in 12 languages (English, Turkish, German, Spanish, French, Italian, Russian, Portuguese, Dutch, Arabic, Japanese, Chinese)
- 📋 **Multiple Color Formats**: Support for HEX, RGB, HSL, HSV, and CMYK formats
- ⚡ **Instant Copy**: Automatically copies selected colors to clipboard
- 🎯 **Modern UI**: Beautiful glassmorphism design with smooth animations
- ⚙️ **Customizable**: Choose your preferred default color format
- 🔧 **Settings Panel**: Easy access to all configuration options

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

1. **Click the Extension Icon** in your Chrome toolbar
2. **Click "Start Color Picker"** to activate the color picker
3. **Click anywhere on your screen** to select a color
4. **The color is automatically copied** to your clipboard in your preferred format
5. **Click the color preview circle** to see all available formats

## 🌍 Supported Languages

- 🇺🇸 English
- 🇹🇷 Turkish
- 🇩🇪 German
- 🇪🇸 Spanish
- 🇫🇷 French
- 🇮🇹 Italian
- 🇷🇺 Russian
- 🇵🇹 Portuguese
- 🇳🇱 Dutch
- 🇸🇦 Arabic
- 🇯🇵 Japanese
- 🇨🇳 Chinese

## 🎨 Color Formats

The extension supports multiple color formats:

- **HEX**: `#FF5733`
- **RGB**: `rgb(255, 87, 51)`
- **HSL**: `hsl(12, 100%, 60%)`
- **HSV**: `hsv(12, 80%, 100%)`
- **CMYK**: `cmyk(0%, 66%, 80%, 0%)`

## ⚙️ Settings

Access settings by clicking the gear icon in the extension popup:

- **Default Copy Format**: Choose which format to copy by default
- **Interface Language**: Change the extension's language
- **Version Information**: View extension details

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
bunny-pick/
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   ├── icon128.png
│   └── logo.png
├── lang/                  # Translation files
│   └── global.json
├── popup.html            # Extension popup UI
├── popup.css             # Extension styles
├── popup.js              # Extension logic
├── manifest.json         # Extension manifest
├── index.html            # Demo page
└── README.md             # This file
```

### Building from Source
1. Clone the repository
2. No build process required - it's pure HTML/CSS/JS
3. Load the extension in Chrome developer mode

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
