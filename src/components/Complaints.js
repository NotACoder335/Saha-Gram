import React, { useState } from 'react';
import './Complaints.css';

const Complaints = () => {
  const [activeTab, setActiveTab] = useState('view'); // 'view' or 'file'
  const [viewFilter, setViewFilter] = useState('all'); // 'all' or 'yours'
  const [userComplaints, setUserComplaints] = useState([]); // User's filed complaints
  const [complaints] = useState([
    {
      id: 'COMP2025001',
      title: 'Road Repair Required',
      title_en: 'Road Repair Required',
      category: 'Infrastructure',
      category_hi: 'Infrastructure',
      description: 'There are big potholes on the main road which pose accident risk.',
      status: 'In Progress',
      status_hi: 'In Progress',
      priority: 'High',
      date: '2025-09-15',
      submittedBy: 'Raj Kumar',
      department: 'PWD',
      lastUpdate: '2025-09-18',
      responses: [
        {
          date: '2025-09-16',
          message: 'Your complaint has been registered. Investigation team is being sent.',
          from: 'PWD Office'
        },
        {
          date: '2025-09-18',
          message: 'Site inspection completed. Work will start from September 25.',
          from: 'Site Engineer'
        }
      ]
    },
    {
      id: 'COMP2025002',
      title: 'Water Supply Issue',
      title_en: 'Water Supply Issue',
      category: 'Water Supply',
      category_hi: 'Water Supply',
      description: 'Water supply has not been available for the past week.',
      status: 'Resolved',
      status_hi: 'Resolved',
      priority: 'Medium',
      date: '2025-09-10',
      submittedBy: 'Sunita Devi',
      department: 'Water Department',
      lastUpdate: '2025-09-19'
    },
    {
      id: 'COMP2025003',
      title: 'Electricity Problem',
      title_en: 'Electricity Problem',
      category: 'Electricity',
      category_hi: 'Electricity',
      description: 'Electricity keeps cutting off frequently.',
      status: 'Pending',
      status_hi: 'Pending',
      priority: 'Medium',
      date: '2025-09-20',
      submittedBy: 'Mohan Lal',
      department: 'Electricity Board',
      lastUpdate: '2025-09-20'
    }
  ]);

  const [newComplaint, setNewComplaint] = useState({
    title: '',
    title_en: '',
    category: '',
    description: ''
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved':
        return 'var(--india-green)';
      case 'In Progress':
        return 'var(--india-blue)';
      case 'Pending':
        return 'var(--india-saffron)';
      default:
        return 'var(--gray-dark)';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#FF4757';
      case 'Medium':
        return 'var(--india-saffron)';
      case 'Low':
        return 'var(--india-green)';
      default:
        return 'var(--gray-dark)';
    }
  };

  const handleSubmitComplaint = (e) => {
    e.preventDefault();
    
    // Create new complaint object
    const newComplaintData = {
      id: `COMP${Date.now()}`, // Simple ID generation
      title: newComplaint.title,
      title_en: newComplaint.title_en || newComplaint.title,
      category: newComplaint.category,
      category_hi: newComplaint.category,
      description: newComplaint.description,
      status: 'Pending',
      status_hi: 'Pending',
      priority: 'Medium', // Default to Medium priority
      date: new Date().toISOString().split('T')[0],
      submittedBy: 'You', // This would come from user context
      department: getDepartmentForCategory(newComplaint.category),
      lastUpdate: new Date().toISOString().split('T')[0],
      responses: []
    };
    
    // Add to user complaints
    setUserComplaints(prev => [newComplaintData, ...prev]);
    
    alert(`Complaint successfully registered. Your Reference ID: ${newComplaintData.id}`);
    setNewComplaint({
      title: '',
      title_en: '',
      category: '',
      description: ''
    });
    setActiveTab('view');
    setViewFilter('yours'); // Switch to "Your Complaints" view
  };

  const getDepartmentForCategory = (category) => {
    const departmentMap = {
      'Infrastructure': 'PWD',
      'Water Supply': 'Water Department',
      'Electricity': 'Electricity Board',
      'Healthcare': 'Health Department',
      'Education': 'Education Department',
      'Sanitation': 'Municipal Office',
      'Other': 'General Administration'
    };
    return departmentMap[category] || 'General Administration';
  };

  // Get complaints to display based on current filter
  const getDisplayComplaints = () => {
    if (viewFilter === 'yours') {
      return userComplaints;
    }
    // For 'all' view, show both system complaints and user complaints
    return [...userComplaints, ...complaints];
  };

  return (
    <div className="complaints-container">
      {/* Header */}
      <div className="complaints-header">
        <div className="header-content">
          <div className="header-icon">⚖️</div>
          <div className="header-info">
            <h2 className="header-title">Complaint Management</h2>
            <p className="header-subtitle">Complaint Management</p>
          </div>
          <div className="stats-info">
            <div className="stat-item">
              <span className="stat-number">{complaints.length}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>
        </div>
        <div className="header-decoration"></div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'view' ? 'active' : ''}`}
          onClick={() => setActiveTab('view')}
        >
          <span className="tab-icon">📋</span>
          View Complaints
        </button>
        <button 
          className={`tab-btn ${activeTab === 'file' ? 'active' : ''}`}
          onClick={() => setActiveTab('file')}
        >
          <span className="tab-icon">✍️</span>
          File Complaint
        </button>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {activeTab === 'view' ? (
          <div className="view-complaints-section">
            {/* Filter Tags */}
            <div className="filter-tags">
              <button 
                className={`filter-tag ${viewFilter === 'all' ? 'active' : ''}`}
                onClick={() => setViewFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-tag ${viewFilter === 'yours' ? 'active' : ''}`}
                onClick={() => setViewFilter('yours')}
              >
                Your Complaints
              </button>
            </div>

            <div className="complaints-list">
              {getDisplayComplaints().length === 0 ? (
                <div className="no-complaints">
                  <div className="no-complaints-icon">📝</div>
                  <h3>No complaints found</h3>
                  <p>
                    {viewFilter === 'yours' 
                      ? "You haven't filed any complaints yet." 
                      : "No complaints available."}
                  </p>
                  {viewFilter === 'yours' && (
                    <button 
                      className="file-complaint-btn"
                      onClick={() => setActiveTab('file')}
                    >
                      File Your First Complaint
                    </button>
                  )}
                </div>
              ) : (
                getDisplayComplaints().map((complaint, index) => (
                  <div 
                    key={complaint.id} 
                    className="complaint-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="card-header">
                      <div className="complaint-id">#{complaint.id}</div>
                      <div className="status-badge" style={{ backgroundColor: getStatusColor(complaint.status) }}>
                        {complaint.status_hi}
                      </div>
                    </div>
                    
                    <div className="card-content">
                      <h3 className="complaint-title">{complaint.title}</h3>
                      <h4 className="complaint-title-en">{complaint.title_en}</h4>
                      
                      <div className="complaint-meta">
                        <div className="meta-row">
                          <span className="meta-label">Category:</span>
                          <span className="meta-value">{complaint.category_hi}</span>
                        </div>
                        <div className="meta-row">
                          <span className="meta-label">Priority:</span>
                          <span 
                            className="priority-badge"
                            style={{ backgroundColor: getPriorityColor(complaint.priority) }}
                          >
                            {complaint.priority}
                          </span>
                        </div>
                        <div className="meta-row">
                          <span className="meta-label">Department:</span>
                          <span className="meta-value">{complaint.department}</span>
                        </div>
                      </div>
                      
                      <p className="complaint-description">{complaint.description}</p>
                      
                      {complaint.responses && complaint.responses.length > 0 && (
                        <div className="responses-section">
                          <h4 className="responses-title">Updates:</h4>
                          {complaint.responses.map((response, idx) => (
                            <div key={idx} className="response-item">
                              <div className="response-header">
                                <span className="response-from">{response.from}</span>
                                <span className="response-date">{response.date}</span>
                              </div>
                              <p className="response-message">{response.message}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="card-footer">
                      <div className="footer-info">
                        <span className="submitted-by">By: {complaint.submittedBy}</span>
                        <span className="submit-date">{complaint.date}</span>
                      </div>
                      <button className="track-btn">Track</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="complaint-form-container">
            <form className="complaint-form" onSubmit={handleSubmitComplaint}>
              <div className="form-header">
                <h3>File New Complaint</h3>
                <p>Please fill all required information</p>
              </div>
              
              <div className="form-group">
                <label className="form-label">Complaint Title (in English) *</label>
                <input
                  type="text"
                  className="form-input"
                  value={newComplaint.title}
                  onChange={(e) => setNewComplaint({...newComplaint, title: e.target.value})}
                  placeholder="e.g: Road Repair Required"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Title (Alternative)</label>
                <input
                  type="text"
                  className="form-input"
                  value={newComplaint.title_en}
                  onChange={(e) => setNewComplaint({...newComplaint, title_en: e.target.value})}
                  placeholder="Alternative title if needed"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  className="form-select"
                  value={newComplaint.category}
                  onChange={(e) => setNewComplaint({...newComplaint, category: e.target.value})}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Water Supply">Water Supply</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Sanitation">Sanitation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Detailed Description *</label>
                <textarea
                  className="form-textarea"
                  value={newComplaint.description}
                  onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
                  placeholder="Please provide detailed description of your problem..."
                  rows="5"
                  required
                />
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setActiveTab('view')}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  File Complaint
                </button>
              </div>
            </form>
            
            <div className="form-help">
              <h4>Help:</h4>
              <ul>
                <li>You will receive a Reference ID after filing the complaint</li>
                <li>You can track your complaint using this ID</li>
                <li>Generally resolution takes 7-15 days</li>
                <li>For immediate assistance call helpline: 1800-xxx-xxxx</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Complaints;