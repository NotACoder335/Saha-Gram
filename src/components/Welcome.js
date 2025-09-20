import React, { useState, useEffect } from 'react';
import './Welcome.css';

const Welcome = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text animation after a brief delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Hide welcome screen after animation completes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="welcome-container">
      <div className="welcome-background">
        {/* Animated circles */}
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        
        {/* Indian Flag Colors Animation */}
        <div className="flag-animation">
          <div className="flag-stripe saffron"></div>
          <div className="flag-stripe white"></div>
          <div className="flag-stripe green"></div>
        </div>

        {/* Ashoka Chakra */}
        <div className="chakra-container">
          <div className="chakra">
            <div className="chakra-spoke"></div>
            <div className="chakra-spoke"></div>
            <div className="chakra-spoke"></div>
            <div className="chakra-spoke"></div>
            <div className="chakra-spoke"></div>
            <div className="chakra-spoke"></div>
            <div className="chakra-spoke"></div>
            <div className="chakra-spoke"></div>
          </div>
        </div>

        {/* Welcome Text */}
        {showText && (
          <div className="welcome-text">
            <h1 className="welcome-title">
              <span className="word word-1">Welcome</span>
              <span className="word word-2">to</span>
              <span className="word word-3">Saha</span>
              <span className="word word-4">Gram</span>
            </h1>
            <p className="welcome-subtitle">Saha Gram - For the People</p>
          </div>
        )}

        {/* Government Logo Placeholder */}
        <div className="gov-logo">
          <div className="logo-emblem">
            <div className="emblem-circle">
              <span className="emblem-text">INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;