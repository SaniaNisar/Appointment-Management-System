import React, { useState } from 'react';

const CreateAppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
    type: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="">Select Type</option>
        <option value="single">Single</option>
        <option value="group">Group</option>
      </select>
      <button type="submit">Create Appointment</button>
    </form>
  );
};

export default CreateAppointmentPage;