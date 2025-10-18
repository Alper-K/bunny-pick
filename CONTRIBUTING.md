# Contributing to Bunny Pick

Thank you for your interest in contributing to Bunny Pick! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with the following information:

1. **Browser Information**
   - Browser name and version
   - Operating system
   - Extension version

2. **Bug Description**
   - Clear description of the issue
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

3. **Issue Template**
   ```markdown
   ## Bug Description
   [Clear description of the bug]

   ## Steps to Reproduce
   1. [First step]
   2. [Second step]
   3. [Third step]

   ## Expected Behavior
   [What should happen]

   ## Actual Behavior
   [What actually happens]

   ## Environment
   - Browser: [e.g., Chrome 95.0.4638.69]
   - OS: [e.g., Windows 10, macOS 12.0, Ubuntu 20.04]
   - Extension Version: [e.g., 1.0.0]
   ```

### Suggesting Features

We welcome feature suggestions! Please create an issue with:

1. **Feature Description**
   - Clear description of the proposed feature
   - Use case and benefits
   - Mockups or examples (if applicable)

2. **Feature Request Template**
   ```markdown
   ## Feature Description
   [Clear description of the feature]

   ## Use Case
   [Why would this feature be useful?]

   ## Proposed Solution
   [How should this feature work?]

   ## Alternatives Considered
   [Other ways to solve this problem]
   ```

### Code Contributions

#### Setting Up Development Environment

1. **Fork the Repository**
   ```bash
   git clone https://github.com/Alper-K/bunny-pick.git
   cd bunny-pick
   ```

2. **Load Extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project folder

3. **Make Changes**
   - Create a new branch for your feature/fix
   - Make your changes
   - Test thoroughly

#### Development Guidelines

### Code Style

- **JavaScript**: Use modern ES6+ features
- **CSS**: Use consistent naming conventions (kebab-case for classes)
- **HTML**: Use semantic HTML5 elements
- **Comments**: Write clear, concise comments in English

### File Structure

```
bunny-pick/
├── icons/                 # Extension icons (16, 32, 48, 128px)
├── lang/                  # Translation files
│   └── global.json       # All language translations
├── popup.html            # Main extension popup
├── popup.css             # Extension styles
├── popup.js              # Extension logic
├── manifest.json         # Extension configuration
├── index.html            # Demo page
├── README.md             # Project documentation
├── LICENSE               # MIT License
└── CONTRIBUTING.md       # This file
```

### Translation Guidelines

When adding new languages or updating translations:

1. **Add to `lang/global.json`**
   ```json
   {
     "language_code": {
       "title": "Extension Title",
       "button": "Button Text",
       "selecting": "Selecting...",
       "retry": "Retry",
       "languageTitle": "Select Language",
       "settingsTitle": "Settings",
       "defaultFormatLabel": "Default Copy Format",
       "languageSettingLabel": "Interface Language",
       "colorFormatsTitle": "Color Formats",
       "copied": "Copied!"
     }
   }
   ```

2. **Update Language Options**
   Add the new language to the `languageOptions` array in `popup.js`:
   ```javascript
   { code: 'xx', name: 'Language Name', flag: '🇺🇸' }
   ```

3. **Test Translations**
   - Verify all text displays correctly
   - Check for text overflow issues
   - Ensure cultural appropriateness

### Pull Request Process

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of changes"
   ```

3. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Pull Request Template**
   ```markdown
   ## Description
   [Brief description of changes]

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Translation update
   - [ ] Documentation update
   - [ ] Code refactoring

   ## Testing
   - [ ] Tested in Chrome
   - [ ] Tested in Edge
   - [ ] Tested color picking functionality
   - [ ] Tested all supported languages
   - [ ] Tested settings functionality

   ## Screenshots (if applicable)
   [Add screenshots showing the changes]

   ## Checklist
   - [ ] Code follows project style guidelines
   - [ ] Self-review completed
   - [ ] Comments added for complex code
   - [ ] Documentation updated (if needed)
   ```

### Testing Guidelines

Before submitting a PR, please test:

1. **Functionality**
   - Color picking works correctly
   - Clipboard copying works
   - Settings are saved properly
   - All modals open/close correctly

2. **Cross-Browser Compatibility**
   - Chrome (primary)
   - Microsoft Edge
   - Opera

3. **Language Support**
   - All 12 languages display correctly
   - No text overflow issues
   - Proper RTL support for Arabic

4. **UI/UX**
   - Responsive design works
   - Animations are smooth
   - No visual glitches

### Code Review Process

1. **Automated Checks**
   - Code style consistency
   - File structure compliance
   - Basic functionality tests

2. **Manual Review**
   - Code quality and readability
   - Security considerations
   - Performance impact
   - User experience

3. **Approval Process**
   - At least one maintainer approval required
   - All CI checks must pass
   - No conflicts with main branch

## 🎯 Areas for Contribution

### High Priority
- **New Languages**: Add support for more languages
- **Accessibility**: Improve screen reader support
- **Performance**: Optimize extension loading time
- **Testing**: Add automated tests

### Medium Priority
- **UI Improvements**: Enhance visual design
- **Features**: Add new color format support
- **Documentation**: Improve user guides
- **Bug Fixes**: Fix reported issues

### Low Priority
- **Code Refactoring**: Improve code organization
- **Performance**: Minor optimizations
- **Documentation**: Update comments and docs

## 📞 Getting Help

If you need help or have questions:

1. **Check Existing Issues**: Look for similar questions/problems
2. **Create an Issue**: Use the appropriate template
3. **Join Discussions**: Use GitHub Discussions for general questions

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## 📋 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please read and follow our Code of Conduct:

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Inclusive**: Welcome newcomers and different perspectives
- **Be Constructive**: Provide helpful feedback and suggestions
- **Be Patient**: Remember that everyone is learning

### Unacceptable Behavior

- Harassment, discrimination, or offensive language
- Personal attacks or trolling
- Spam or off-topic discussions
- Sharing private information without permission

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Bunny Pick! 🎨
