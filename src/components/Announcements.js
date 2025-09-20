import React, { useState } from 'react';
import './Announcements.css';

const Announcements = () => {
  const [announcements] = useState([
    {
      id: 1,
      title: 'PM Housing Scheme New Update',
      title_en: 'PM Housing Scheme Update',
      content: 'New applications under Housing Scheme will start from October 15 for all eligible families. Please keep your required documents ready.',
      content_en: 'New applications under Housing Scheme will start from October 15 for all eligible families. Please keep your required documents ready.',
      date: '2025-09-20',
      time: '10:00 AM',
      priority: 'high',
      department: 'Ministry of Rural Development',
      department_en: 'Ministry of Rural Development',
      views: 245,
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Cleanliness Drive - New Initiative',
      title_en: 'Cleanliness Drive - New Initiative',
      content: 'Community cleaning program will be organized every Saturday at 8 AM to maintain village cleanliness. Cooperation from all residents is expected.',
      content_en: 'Community cleaning program will be organized every Saturday at 8 AM to maintain village cleanliness. Cooperation from all residents is expected.',
      date: '2025-09-19',
      time: '2:30 PM',
      priority: 'medium',
      department: 'Swachh Bharat Mission',
      department_en: 'Swachh Bharat Mission',
      views: 189,
      icon: '🧹'
    },
    {
      id: 3,
      title: 'Digital India - Computer Training',
      title_en: 'Digital India - Computer Training',
      content: 'Free computer training program for youth is starting. Contact Gram Panchayat office for registration.',
      content_en: 'Free computer training program for youth is starting. Contact Gram Panchayat office for registration.',
      date: '2025-09-18',
      time: '11:15 AM',
      priority: 'medium',
      department: 'Digital India',
      department_en: 'Digital India',
      views: 156,
      icon: '💻'
    },
    {
      id: 4,
      title: 'Power Cut Notice',
      title_en: 'Power Cut Notice',
      content: 'Power supply will be discontinued from 10 AM to 2 PM on September 22 for maintenance work. Sorry for the inconvenience.',
      content_en: 'Power supply will be discontinued from 10 AM to 2 PM on September 22 for maintenance work. Sorry for the inconvenience.',
      date: '2025-09-17',
      time: '4:45 PM',
      priority: 'urgent',
      department: 'Electricity Board',
      department_en: 'Electricity Board',
      views: 378,
      icon: '⚡'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'var(--priority-urgent)';
      case 'high':
        return 'var(--priority-high)';
      case 'medium':
        return 'var(--priority-medium)';
      default:
        return 'var(--priority-low)';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'Urgent';
      case 'high':
        return 'High';
      case 'medium':
        return 'Medium';
      default:
        return 'Low';
    }
  };

  const filteredAnnouncements = filter === 'all' 
    ? announcements 
    : announcements.filter(ann => ann.priority === filter);

  return (
    <div className="announcements-container">
      {/* Header */}
      <div className="announcements-header">
        <div className="header-content">
          <div className="header-icon">📋</div>
          <div className="header-info">
            <h2 className="header-title">Government Announcements</h2>
            <p className="header-subtitle">Official Announcements</p>
          </div>
          <div className="announcement-count">
            <span className="count-number">{filteredAnnouncements.length}</span>
            <span className="count-label">Announcements</span>
          </div>
        </div>
        <div className="header-decoration"></div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-container">
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-tab ${filter === 'urgent' ? 'active' : ''}`}
            onClick={() => setFilter('urgent')}
          >
            Urgent
          </button>
          <button 
            className={`filter-tab ${filter === 'high' ? 'active' : ''}`}
            onClick={() => setFilter('high')}
          >
            Important
          </button>
          <button 
            className={`filter-tab ${filter === 'medium' ? 'active' : ''}`}
            onClick={() => setFilter('medium')}
          >
            General
          </button>
        </div>
      </div>

      {/* Announcements List */}
      <div className="announcements-list">
        {filteredAnnouncements.map((announcement, index) => (
          <div 
            key={announcement.id} 
            className="announcement-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-header">
              <div className="announcement-icon">{announcement.icon}</div>
              <div className="priority-badge" style={{ backgroundColor: getPriorityColor(announcement.priority) }}>
                {getPriorityLabel(announcement.priority)}
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="announcement-title">{announcement.title}</h3>
              <h4 className="announcement-title-en">{announcement.title_en}</h4>
              
              <p className="announcement-text">{announcement.content}</p>
              <p className="announcement-text-en">{announcement.content_en}</p>
              
              <div className="department-info">
                <span className="department-icon">🏛️</span>
                <span className="department-name">{announcement.department}</span>
              </div>
            </div>
            
            <div className="card-footer">
              <div className="announcement-meta">
                <span className="meta-item">
                  <span className="meta-icon">📅</span>
                  {new Date(announcement.date).toLocaleDateString('hi-IN')}
                </span>
                <span className="meta-item">
                  <span className="meta-icon">🕐</span>
                  {announcement.time}
                </span>
                <span className="meta-item">
                  <span className="meta-icon">👀</span>
                  {announcement.views} views
                </span>
              </div>
              
              <div className="card-actions">
                <button className="action-btn share-btn" title="Share">
                  📤
                </button>
                <button className="action-btn bookmark-btn" title="Bookmark">
                  🔖
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Government Footer */}
      <div className="gov-footer">
        <div className="footer-content">
          <div className="emblem">🇮🇳</div>
          <div className="footer-text">
            <p>Government of India | Government of India</p>
            <p className="footer-tagline">Satyameva Jayate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;