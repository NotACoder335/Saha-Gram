import React, { useState, useEffect } from 'react';
import './App.css';

// Import all components
import Welcome from './components/Welcome';
import Login from './components/Login';
import BottomNavigation from './components/BottomNavigation';
import Discussion from './components/Discussion';
import Announcements from './components/Announcements';
import Complaints from './components/Complaints';
import Contact from './components/Contact';
import Settings from './components/Settings';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState('discussion');
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Handle welcome screen completion
  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // Handle login completion
  const handleLogin = (userInfo) => {
    setUserData(userInfo);
    setIsLoggedIn(true);
  };

  // Handle tab change with loading animation
  const handleTabChange = (newTab) => {
    if (newTab !== activeTab) {
      setIsLoading(true);
      
      // Simulate loading time for smooth transition
      setTimeout(() => {
        setActiveTab(newTab);
        setIsLoading(false);
      }, 300);
    }
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleBackFromSettings = () => {
    setShowSettings(false);
  };

  // Render active screen based on selected tab
  const renderActiveScreen = () => {
    if (isLoading) {
      return (
        <div className="loading-screen">
          <div className="loading-spinner">
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
          </div>
          <p className="loading-text">Loading...</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'discussion':
        return <Discussion />;
      case 'announcements':
        return <Announcements />;
      case 'complaints':
        return <Complaints />;
      case 'contact':
        return <Contact />;
      default:
        return <Discussion />;
    }
  };

  // Don't render main app until welcome is complete
  if (showWelcome) {
    return <Welcome onComplete={handleWelcomeComplete} />;
  }

  // Show login page after welcome but before main app
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  if (showSettings) {
    return <Settings onBack={handleBackFromSettings} userData={userData} />;
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">Saha Gram</h1>
        <button onClick={handleSettingsClick} className="settings-button">⚙️</button>
      </div>
      <div className="content-area">
        {renderActiveScreen()}
      </div>
      
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
      
      {/* Government Branding */}
      <div className="app-branding">
        <div className="branding-text">
          <span className="brand-hindi">Saha Gram</span>
          <span className="brand-english">Digital Village Platform</span>
        </div>
        <div className="branding-flag">
          <div className="flag-stripe saffron"></div>
          <div className="flag-stripe white"></div>
          <div className="flag-stripe green"></div>
        </div>
      </div>
    </div>
  );
}

export default App;