import React, { useState, useRef, useEffect } from 'react';
import './Discussion.css';
import aiService from '../services/aiService';

const Discussion = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Admin',
      message: 'Welcome to Saha Gram discussion! Here you can share your thoughts.',
      time: '10:00 AM',
      isAdmin: true,
      avatar: '🏛️'
    },
    {
      id: 2,
      sender: 'Ram Sharma',
      message: 'Hello! I want to discuss about the condition of village roads.',
      time: '10:05 AM',
      isAdmin: false,
      avatar: '👨'
    },
    {
      id: 3,
      sender: 'Sita Devi',
      message: 'Yes, the roads have become very bad after the rain. Repair is needed urgently.',
      time: '10:07 AM',
      isAdmin: false,
      avatar: '👩'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAISummary, setShowAISummary] = useState(false);
  const [aiSummaryData, setAiSummaryData] = useState(null);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAdmin: false,
        avatar: '👤'
      };
      
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate admin response
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const adminResponse = {
            id: messages.length + 2,
            sender: 'Moderator',
            message: 'Your message has been received. We will look into this matter.',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isAdmin: true,
            avatar: '👨‍💼'
          };
          setMessages(prev => [...prev, adminResponse]);
        }, 2000);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleAISummary = async () => {
    setIsGeneratingSummary(true);
    try {
      // Convert messages to the format expected by AI service
      const formattedMessages = messages.map(msg => ({
        sender: msg.sender,
        text: msg.message,
        time: msg.time,
        isAdmin: msg.isAdmin
      }));

      const result = await aiService.generateAISummary(formattedMessages);
      setAiSummaryData(result);
      setShowAISummary(true);
    } catch (error) {
      console.error('Failed to generate AI summary:', error);
      alert('Failed to generate summary. Please try again.');
    } finally {
      setIsGeneratingSummary(false);
    }
  };

  return (
    <div className="discussion-container">
      {/* Header */}
      <div className="discussion-header">
        <div className="header-content">
          <div className="header-icon">🗣️</div>
          <div className="header-info">
            <h2 className="header-title">Community Discussion</h2>
            <p className="header-subtitle">Community Discussion</p>
          </div>
          <div className="header-actions">
            <div className="online-indicator">
              <span className="online-dot"></span>
              <span className="online-text">12 Active</span>
            </div>
            <button 
              className="ai-summary-btn" 
              onClick={handleAISummary}
              disabled={isGeneratingSummary}
              title="Generate AI Summary"
            >
              {isGeneratingSummary ? '⏳' : '🤖'}
            </button>
          </div>
        </div>
        <div className="header-decoration"></div>
      </div>

      {/* Messages Area */}
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.isAdmin ? 'admin-message' : 'user-message'}`}>
            <div className="message-avatar">{msg.avatar}</div>
            <div className="message-content">
              <div className="message-header">
                <span className="sender-name">{msg.sender}</span>
                <span className="message-time">{msg.time}</span>
              </div>
              <div className="message-text">{msg.message}</div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message admin-message typing-indicator">
            <div className="message-avatar">👨‍💼</div>
            <div className="message-content">
              <div className="typing-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="input-container">
        <div className="input-wrapper">
          <button className="attachment-btn" title="Attach File">
            📎
          </button>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="message-input"
            rows="1"
          />
          <button 
            onClick={handleSendMessage}
            className="send-btn"
            disabled={!newMessage.trim()}
            title="Send Message"
          >
            ➤
          </button>
        </div>
        
        {/* Government Footer */}
        <div className="input-footer">
          <div className="gov-notice">
            <span className="notice-icon">⚠️</span>
            <span className="notice-text">Please use respectful language | Please use respectful language</span>
          </div>
        </div>
      </div>

      {/* AI Summary Modal */}
      {showAISummary && (
        <div className="ai-summary-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>🤖 AI Discussion Summary</h3>
              <button 
                className="close-btn"
                onClick={() => setShowAISummary(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              {aiSummaryData?.success ? (
                <div className="summary-content">
                  <div className="summary-info">
                    <p className="info-text">
                      📄 Discussion text file has been downloaded to your device.
                    </p>
                    <p className="timestamp">
                      Generated at: {new Date(aiSummaryData.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="summary-text">
                    <h4>Summary:</h4>
                    <div className="summary-content-text">
                      {aiSummaryData.summary}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="summary-error">
                  <p>❌ Failed to generate summary: {aiSummaryData?.error}</p>
                  <p>Please check your internet connection and try again.</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button 
                className="close-modal-btn"
                onClick={() => setShowAISummary(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discussion;