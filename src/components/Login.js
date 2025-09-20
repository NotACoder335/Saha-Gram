import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [voterId, setVoterId] = useState(null);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setProfilePhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleVoterIdChange = (e) => {
    if (e.target.files[0]) {
      setVoterId(e.target.files[0].name);
    }
  };

  const handleVerify = () => {
    if (name && profilePhoto && voterId) {
      onLogin({ name, profilePhoto });
    } else {
      alert('Please fill in all fields and upload both images.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome to Saha Gram</h1>
        <p>Please verify your identity to continue</p>
      </div>
      <div className="login-form">
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label>Profile Photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {profilePhoto && <img src={profilePhoto} alt="Preview" className="image-preview" />}
        </div>
        <div className="input-box">
          <label>Voter ID Card</label>
          <input type="file" accept="image/*,.pdf" onChange={handleVoterIdChange} />
          {voterId && <p className="file-name-preview">Uploaded: {voterId}</p>}
        </div>
        <button onClick={handleVerify} className="verify-button">
          Verify & Proceed
        </button>
      </div>
    </div>
  );
};

export default Login;
