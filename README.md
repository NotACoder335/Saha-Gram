# Saha Gram - Digital Village Communication Platform


## Features

### 🎨 **Authentic Indian Government Design**
- Official Indian government color scheme (Saffron, White, Green, Navy Blue)
- Responsive design optimized for mobile devices
- Hindi & English bilingual support

### 📱 **Four Main Sections**

1. **🗣️ Discussion (चर्चा)**
   - WhatsApp-like chat interface for familarity to users
   - Community discussions with moderators picked from the users for having a respectable conversation ground.
   - Real-time messaging platform with support for upto 100k users
   - AI Discussion Summmary

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



## 📹 Demo Video

See Saha Gram in action:<br>


![Demo](src\Demo\demo.gif)
## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd "\Sahagram"
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


## 📱 Mobile Optimization

- **Responsive Design**: Works on screens from 320px to 480px
- **Touch-Friendly**: Large tap targets (44px minimum)
- **Smooth Animations**: 60fps performance optimized
- **WhatsApp-like UX**: Familiar interface patterns

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Graceful degradation for older browsers


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


## 📞 Support

For technical support or queries:
- Create an issue in the GitHub repository
- Follow proper issue templates
- Include browser and device information

---
<br>
<center>Built with ❤️ and AI for Vibethon 2025 </center>

