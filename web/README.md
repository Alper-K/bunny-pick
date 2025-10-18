# Bunny Pick - Web Version

A modern, multilingual web application that allows you to pick colors from anywhere on your screen using the browser's native EyeDropper API.

![Web App](https://img.shields.io/badge/Web-Application-blue?style=for-the-badge&logo=google-chrome)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge)

## ✨ Features

- 🎨 **Screen Color Picking**: Pick colors from anywhere on your screen
- 🌍 **Multilingual Support**: Available in 12 languages
- 📋 **Multiple Color Formats**: Support for HEX, RGB, HSL, HSV, and CMYK formats
- ⚡ **Instant Copy**: Automatically copies selected colors to clipboard
- 🎯 **Modern UI**: Beautiful glassmorphism design with smooth animations
- ⚙️ **Customizable**: Choose your preferred default color format
- 🔧 **Settings Panel**: Easy access to all configuration options
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices

## 🚀 Quick Start

### Live Demo
Visit the live demo: [Bunny Pick Web](https://yourusername.github.io/bunny-pick/web/)

### Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Alper-K/bunny-pick.git
   cd bunny-pick/web
   ```

2. **Open in Browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the Application**
   - Navigate to `http://localhost:8000` (or your chosen port)
   - The Bunny Pick web app will load automatically

## 🎯 Usage

1. **Click "Start Color Picker"** to activate the color picker
2. **Click anywhere on your screen** to select a color
3. **The color is automatically copied** to your clipboard in your preferred format
4. **Click the color preview circle** to see all available formats
5. **Use the settings icon** to customize your preferences

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

The web app supports multiple color formats:

- **HEX**: `#FF5733`
- **RGB**: `rgb(255, 87, 51)`
- **HSL**: `hsl(12, 100%, 60%)`
- **HSV**: `hsv(12, 80%, 100%)`
- **CMYK**: `cmyk(0%, 66%, 80%, 0%)`

## ⚙️ Settings

Access settings by clicking the gear icon:

- **Default Copy Format**: Choose which format to copy by default
- **Interface Language**: Change the app's language
- **Version Information**: View app details

## 🔧 Technical Details

### Browser Compatibility
- ✅ Chrome 95+
- ✅ Microsoft Edge 95+
- ✅ Opera 81+
- ❌ Firefox (EyeDropper API not supported)
- ❌ Safari (EyeDropper API not supported)

### Technologies Used
- **HTML5**: Modern semantic markup
- **CSS3**: Glassmorphism design with backdrop filters
- **JavaScript ES6+**: Modern JavaScript features
- **EyeDropper API**: Native browser color picking
- **Local Storage**: User preferences persistence

### File Structure
```
web/
├── index.html              # Main web page
├── style.css               # Web app styles
├── script.js               # Web app logic
├── debug.html              # Debug test page
├── README.md               # This file
└── icons/                  # Web icons
    ├── logo.png
    ├── globe.svg
    ├── settings.svg
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    ├── icon128.png
    ├── moon.svg
    └── sun.svg
```

## 🛠️ Development

### Building from Source
1. Clone the repository
2. Navigate to the `web` directory
3. Open `index.html` in your browser
4. No build process required - it's pure HTML/CSS/JS

### Customization
- **Colors**: Modify CSS variables in `style.css`
- **Languages**: Update `../shared/lang/global.json`
- **Features**: Extend functionality in `script.js`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please see the main [CONTRIBUTING.md](../CONTRIBUTING.md) file for guidelines.

### Web-Specific Contributions
- UI/UX improvements
- Mobile responsiveness enhancements
- Performance optimizations
- Accessibility improvements
- New language translations

## 🐛 Bug Reports

If you find a bug, please open an issue with:
- Browser version and OS
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 💡 Feature Requests

Have an idea for a new feature? Open an issue and let's discuss it!

## 📞 Support

If you need help or have questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Visit the main project documentation

## 🙏 Acknowledgments

- Chrome Extensions team for the EyeDropper API
- All contributors who help improve this web app
- The open source community for inspiration and tools

---

**Made with ❤️ for the developer community**

🐰 **Bunny Pick Web** - Pick Colors from Anywhere!
