# Saha Gram - Digital Village Platform

A WhatsApp-like mobile application designed for Indian villages to facilitate government communication, complaints, and community discussions. Built with React.js using authentic Indian government design principles and color schemes.

## 🇮🇳 Features

### 🎨 **Authentic Indian Government Design**
- Official Indian government color scheme (Saffron, White, Green, Navy Blue)
- Figma Gov India inspired icons and layout
- Responsive design optimized for mobile devices
- Hindi & English bilingual support

### 📱 **Four Main Sections**

1. **🗣️ Discussion (चर्चा)**
   - WhatsApp-like chat interface
   - Community discussions
   - Real-time messaging simulation
   - Government moderation

2. **📋 Announcements (घोषणाएं)**
   - Official government announcements
   - Priority-based filtering (Urgent, High, Medium, Low)
   - Multi-department notifications
   - Bilingual content support

3. **⚖️ Complaints (शिकायतें)**
   - File new complaints with categorization
   - Track complaint status and responses
   - Department-wise routing
   - Progress tracking system

4. **🏛️ Contact (संपर्क)**
   - Emergency contact numbers
   - Department contact information
   - Government helplines
   - Digital services integration

### ✨ **Welcome Screen**
- Animated "Welcome to Saha Gram" with government colors
- Indian flag animation with Ashoka Chakra
- Smooth transitions and government branding

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd "e:\app\Sahagram"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - Best viewed in mobile/responsive mode (F12 > Toggle Device Toolbar)

### Build for Production

```bash
npm run build
```

## 📂 Project Structure

```
Sahagram/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Welcome.js          # Animated welcome screen
│   │   ├── Welcome.css
│   │   ├── BottomNavigation.js # Bottom navigation panel
│   │   ├── BottomNavigation.css
│   │   ├── Discussion.js       # Chat interface
│   │   ├── Discussion.css
│   │   ├── Announcements.js    # Government announcements
│   │   ├── Announcements.css
│   │   ├── Complaints.js       # Complaint management
│   │   ├── Complaints.css
│   │   ├── Contact.js          # Contact information
│   │   └── Contact.css
│   ├── App.js                  # Main application logic
│   ├── App.css                 # Global app styles
│   ├── index.js                # React DOM rendering
│   └── index.css               # Global CSS variables & animations
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Saffron**: #FF9933 (Primary actions, highlights)
- **White**: #FFFFFF (Backgrounds, text contrast)
- **Green**: #138808 (Success states, nature elements)
- **Navy Blue**: #000080 (Text, headers, official elements)
- **Light Blue**: #4F94CD (Secondary actions, links)

### Typography
- **Primary**: System fonts (Segoe UI, Roboto, etc.)
- **Hindi Support**: Native system fonts
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Icons
- Government-inspired emoji icons
- Consistent 16px-24px sizing
- Accessibility-compliant contrast ratios

## 📱 Mobile Optimization

- **Responsive Design**: Works on screens from 320px to 480px
- **Touch-Friendly**: Large tap targets (44px minimum)
- **Smooth Animations**: 60fps performance optimized
- **WhatsApp-like UX**: Familiar interface patterns

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🔧 Customization

### Adding New Departments
Edit the contact information in `src/components/Contact.js`:

```javascript
const departmentContacts = [
  {
    name: 'Your Department Name',
    name_en: 'English Name',
    // ... other properties
  }
];
```

### Modifying Colors
Update CSS variables in `src/index.css`:

```css
:root {
  --india-saffron: #FF9933;
  --india-green: #138808;
  /* Add your custom colors */
}
```

### Adding New Announcement Categories
Modify the categories in `src/components/Complaints.js`:

```javascript
<option value="YourCategory">Your Category / English Translation</option>
```

## 🔒 Security Considerations

- All data is currently stored locally (no backend)
- Form validation implemented
- XSS protection through React's built-in sanitization
- For production: Implement proper authentication and backend integration

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is designed for educational and demonstration purposes. Government design elements are used in accordance with public domain guidelines.

## 🙏 Acknowledgments

- **Government of India** for design inspiration
- **Figma Gov India** design system
- **React.js** community for excellent documentation
- **CSS Grid & Flexbox** for responsive layouts

## 📞 Support

For technical support or queries:
- Create an issue in the GitHub repository
- Follow proper issue templates
- Include browser and device information

---

**Built with ❤️ for Digital India Initiative**

*सहा ग्राम - डिजिटल गांव मंच*