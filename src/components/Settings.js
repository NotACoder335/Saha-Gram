import React from 'react';
import './Settings.css';

const Settings = ({ onBack, userData }) => {
  const user = userData || {
    name: 'xyz',
    profilePhoto: 'https://via.placeholder.com/80',
    digilockerLink: 'https://digilocker.gov.in/mock-link'
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button onClick={onBack} className="back-button">←</button>
        <h1>Settings</h1>
      </div>
      <div className="settings-content">
        <div className="profile-section">
          <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <a href={user.digilockerLink} target="_blank" rel="noopener noreferrer" className="digilocker-link">
              View DigiLocker
            </a>
          </div>
        </div>

        <div className="settings-options">
          {/* More settings options can be added here */}
          <div className="settings-option">
            <span>Account</span>
            <button className="option-button">Manage</button>
          </div>
          <div className="settings-option">
            <span>Notifications</span>
            <button className="option-button">On</button>
          </div>
          <div className="settings-option">
            <span>Language</span>
            <button className="option-button">English</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
