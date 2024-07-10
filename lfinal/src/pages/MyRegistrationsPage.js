import React, { useState, useEffect } from 'react';

const MyRegistrationsPage = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch('/api/my-registrations')
      .then(response => response.json())
      .then(data => setRegistrations(data));
  }, []);

  return (
    <div>
      <h1>My Appointments</h1>
      <ul>
        {registrations.map(registration => (
          <li key={registration.id}>
            <h2>{registration.name}</h2>
            <p>{registration.date}</p>
            <p>{registration.time}</p>
            <p>{registration.location}</p>
            <p>{registration.description}</p>
            <button>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyRegistrationsPage;

