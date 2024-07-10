import React, { useState } from 'react';

const RegistrationModal = ({ appointment, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, appointmentId: appointment.id })
    })
    .then(response => response.json())
    .then(data => {
      // Handle success
      closeModal();
    });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <select name="type" value={formData.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="single">Single</option>
          <option value="group">Group</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default RegistrationModal;