import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [activeSection, setActiveSection] = useState('emergency');
  
  const emergencyContacts = [
    {
      id: 1,
      name: 'Police Station',
      name_en: 'Police Station',
      phone: '100',
      description: 'For emergency assistance',
      icon: '🚨',
      available: '24/7'
    },
    {
      id: 2,
      name: 'Fire Department',
      name_en: 'Fire Department',
      phone: '101',
      description: 'Fire fighting service',
      icon: '🚒',
      available: '24/7'
    },
    {
      id: 3,
      name: 'Ambulance Service',
      name_en: 'Ambulance Service',
      phone: '108',
      description: 'Medical emergency',
      icon: '🚑',
      available: '24/7'
    },
    {
      id: 4,
      name: 'Women Helpline',
      name_en: 'Women Helpline',
      phone: '1091',
      description: 'For women safety',
      icon: '👩‍🦰',
      available: '24/7'
    }
  ];

  const departmentContacts = [
    {
      id: 1,
      name: 'Gram Panchayat Office',
      name_en: 'Gram Panchayat Office',
      designation: 'Sarpanch',
      person: 'Shri Ram Prasad',
      phone: '+91-9876543210',
      email: 'sarpanch@gram.gov.in',
      address: 'Main Chowraha, Saha Gram',
      timing: '10:00 AM - 5:00 PM',
      icon: '🏛️'
    },
    {
      id: 2,
      name: 'PWD Office',
      name_en: 'PWD Office',
      designation: 'Assistant Engineer',
      person: 'Shri Suresh Kumar',
      phone: '+91-9876543211',
      email: 'pwd@district.gov.in',
      address: 'District Headquarters',
      timing: '10:00 AM - 6:00 PM',
      icon: '🏗️'
    },
    {
      id: 3,
      name: 'Health Center',
      name_en: 'Health Center',
      designation: 'Medical Officer',
      person: 'Dr. Priya Sharma',
      phone: '+91-9876543212',
      email: 'health@sahagram.gov.in',
      address: 'Government Hospital, Saha Gram',
      timing: '9:00 AM - 5:00 PM',
      icon: '🏥'
    },
    {
      id: 4,
      name: 'Education Department',
      name_en: 'Education Department',
      designation: 'Education Officer',
      person: 'Shri Anil Kumar',
      phone: '+91-9876543213',
      email: 'education@district.gov.in',
      address: 'District Education Office',
      timing: '10:00 AM - 5:00 PM',
      icon: '🎓'
    }
  ];

  const helplineNumbers = [
    {
      id: 1,
      name: 'Kisan Helpline',
      name_en: 'Kisan Helpline',
      phone: '1800-180-1551',
      description: 'Agriculture related assistance',
      icon: '🌾'
    },
    {
      id: 2,
      name: 'Gas Booking',
      name_en: 'Gas Booking',
      phone: '1800-2333-555',
      description: 'LPG gas booking',
      icon: '🏺'
    },
    {
      id: 3,
      name: 'Railway Enquiry',
      name_en: 'Railway Enquiry',
      phone: '139',
      description: 'Train information',
      icon: '🚂'
    },
    {
      id: 4,
      name: 'Electricity Board',
      name_en: 'Electricity Board',
      phone: '1912',
      description: 'Electricity problems',
      icon: '⚡'
    }
  ];

  const renderEmergencyContacts = () => (
    <div className="contacts-grid">
      {emergencyContacts.map((contact) => (
        <div key={contact.id} className="emergency-card">
          <div className="emergency-icon">{contact.icon}</div>
          <div className="emergency-content">
            <h3 className="emergency-name">{contact.name}</h3>
            <p className="emergency-name-en">{contact.name_en}</p>
            <div className="emergency-phone">
              <a href={`tel:${contact.phone}`} className="phone-link">
                📞 {contact.phone}
              </a>
            </div>
            <p className="emergency-description">{contact.description}</p>
            <div className="availability">
              <span className="availability-dot"></span>
              Available: {contact.available}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDepartmentContacts = () => (
    <div className="department-list">
      {departmentContacts.map((contact) => (
        <div key={contact.id} className="department-card">
          <div className="dept-header">
            <div className="dept-icon">{contact.icon}</div>
            <div className="dept-info">
              <h3 className="dept-name">{contact.name}</h3>
              <p className="dept-name-en">{contact.name_en}</p>
            </div>
          </div>
          
          <div className="dept-content">
            <div className="contact-person">
              <span className="person-icon">👤</span>
              <div>
                <p className="person-name">{contact.person}</p>
                <p className="person-designation">{contact.designation}</p>
              </div>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href={`tel:${contact.phone}`} className="contact-link">
                  {contact.phone}
                </a>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href={`mailto:${contact.email}`} className="contact-link">
                  {contact.email}
                </a>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">{contact.address}</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <span className="contact-text">{contact.timing}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderHelplines = () => (
    <div className="helpline-list">
      {helplineNumbers.map((helpline) => (
        <div key={helpline.id} className="helpline-card">
          <div className="helpline-icon">{helpline.icon}</div>
          <div className="helpline-content">
            <h3 className="helpline-name">{helpline.name}</h3>
            <p className="helpline-name-en">{helpline.name_en}</p>
            <div className="helpline-phone">
              <a href={`tel:${helpline.phone}`} className="phone-link">
                📞 {helpline.phone}
              </a>
            </div>
            <p className="helpline-description">{helpline.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <div className="header-content">
          <div className="header-icon">🏛️</div>
          <div className="header-info">
            <h2 className="header-title">Contact Information</h2>
            <p className="header-subtitle">Contact Information</p>
          </div>
          <div className="header-emblem">
            <div className="emblem-circle">
              <span className="emblem-text">🇮🇳</span>
            </div>
          </div>
        </div>
        <div className="header-decoration"></div>
      </div>

      {/* Navigation Tabs */}
      <div className="contact-nav">
        <button 
          className={`nav-btn ${activeSection === 'emergency' ? 'active' : ''}`}
          onClick={() => setActiveSection('emergency')}
        >
          <span className="nav-icon">🚨</span>
          Emergency
        </button>
        <button 
          className={`nav-btn ${activeSection === 'departments' ? 'active' : ''}`}
          onClick={() => setActiveSection('departments')}
        >
          <span className="nav-icon">🏢</span>
          Departments
        </button>
        <button 
          className={`nav-btn ${activeSection === 'helplines' ? 'active' : ''}`}
          onClick={() => setActiveSection('helplines')}
        >
          <span className="nav-icon">☎️</span>
          Helplines
        </button>
      </div>

      {/* Content Area */}
      <div className="contact-content">
        {activeSection === 'emergency' && renderEmergencyContacts()}
        {activeSection === 'departments' && renderDepartmentContacts()}
        {activeSection === 'helplines' && renderHelplines()}
      </div>

      {/* Footer Information */}
      <div className="contact-footer">
        <div className="footer-section">
          <h4>Important Information</h4>
          <ul>
            <li>In emergency, immediately call 100 (Police)</li>
            <li>All government services are free</li>
            <li>Office hours: Monday to Friday</li>
            <li>Saturday half day (10 AM - 2 PM)</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Digital Services</h4>
          <div className="digital-services">
            <button className="service-btn">📱 Mobile App</button>
            <button className="service-btn">🌐 Website</button>
            <button className="service-btn">💬 Chatbot</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;