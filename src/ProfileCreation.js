import React, { useState } from 'react';
import './ProfileStyles.css';

function ProfileCreation() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    height: '',
    chest: '',
    waist: '',
    hips: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data:', profile);
  };

  return (
    <div className="form-container">
      <h1>Create Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={profile.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={profile.email} onChange={handleChange} required />
        <input type="number" name="height" placeholder="Height (cm)" value={profile.height} onChange={handleChange} required />
        <input type="number" name="chest" placeholder="Chest (cm)" value={profile.chest} onChange={handleChange} required />
        <input type="number" name="waist" placeholder="Waist (cm)" value={profile.waist} onChange={handleChange} required />
        <input type="number" name="hips" placeholder="Hips (cm)" value={profile.hips} onChange={handleChange} required />
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default ProfileCreation;
