import React from 'react';
import './BottomNavigation.css';

const BottomNavigation = ({ activeTab, onTabChange }) => {
  const navItems = [
    {
      id: 'discussion',
      label: 'Discussion',
      icon: '💬',
      governmentIcon: '🗣️'
    },
    {
      id: 'announcements',
      label: 'Announcements',
      icon: '📢',
      governmentIcon: '📋'
    },
    {
      id: 'complaints',
      label: 'Complaints',
      icon: '📝',
      governmentIcon: '⚖️'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: '📞',
      governmentIcon: '🏛️'
    }
  ];

  return (
    <div className="bottom-navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <div className="nav-icon">
              <span className="icon-emoji">{item.governmentIcon}</span>
              <div className="icon-background"></div>
            </div>
            <span className="nav-label">{item.label}</span>
            {activeTab === item.id && <div className="active-indicator"></div>}
          </button>
        ))}
      </div>
      
      {/* Government Branding */}
      <div className="gov-branding">
        <div className="branding-line saffron"></div>
        <div className="branding-line white"></div>
        <div className="branding-line green"></div>
      </div>
    </div>
  );
};

export default BottomNavigation;