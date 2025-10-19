# 🐰 Bunny Pick | Color Picker

<div align="center">
  <img src="web/icons/logo.png" alt="Bunny Pick Logo" width="128" height="128">
  
  **Modern, multilingual color picker Chrome extension and web application**
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-blue.svg)](https://chrome.google.com/webstore)
  [![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](https://github.com/Alper-K/bunny-pick/releases)
</div>

## 📖 About

Bunny Pick is a modern and user-friendly Chrome extension and web application that allows you to pick colors from anywhere on your screen using your browser's built-in EyeDropper API. It's the perfect tool for designers, developers, and color enthusiasts.

## ✨ Features

### 🎨 Color Picking
- **EyeDropper API**: Uses browser's built-in color picker API
- **Real-time Preview**: Instantly view selected colors
- **Multiple Format Support**: Color codes in HEX, RGB, HSL, HSV, CMYK formats
- **Clipboard Copy**: One-click color code copying to clipboard

### 🌍 Multilingual Support
- **Turkish** and **English** language support
- Easy language switching feature
- Localized interface

### 🎯 User Experience
- **Modern Design**: Clean and intuitive interface
- **Responsive**: Perfect appearance on all screen sizes
- **Fast and Lightweight**: Minimal resource usage
- **Accessibility**: Keyboard navigation and screen reader support

### ⚙️ Settings and Customization
- Default copy format selection
- Language preference settings
- User preference saving

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

## 📱 Usage

### Chrome Extension
1. Click the 🐰 icon in the browser toolbar
2. Click "Start Color Picker" button
3. Select any color from your screen
4. Color code is automatically copied to clipboard
5. View different formats with "Show Color Formats"

### Web Application
1. Open the web page
2. Click "Start Color Picker" button
3. Use the color picker to select your desired color
4. View and copy color information

## ⚙️ Settings

### Language Settings
- Click the 🌍 icon to select language
- Supported languages: Turkish, English

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
- [ ] Color palette saving feature
- [ ] Color history
- [ ] Color analysis tools
- [ ] More language support
- [ ] Dark theme
- [ ] Keyboard shortcuts

## 🙏 Acknowledgments

Thanks to the entire open source community and everyone who contributed to making this project possible!

---

<div align="center">
  <p>⭐ If you liked this project, don't forget to give it a star!</p>
  <p>🐰 Discover your colors with <strong>Bunny Pick</strong>!</p>
</div>
