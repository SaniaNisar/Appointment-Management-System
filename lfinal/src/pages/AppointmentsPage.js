import React, { useState, useEffect } from 'react';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('/api/appointments')
      .then(response => response.json())
      .then(data => setAppointments(data));
  }, []);

  return (
    <div>
      <h1>Appointments!!!!!</h1>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <h2>{appointment.name}</h2>
            <p>{appointment.date}</p>
            <p>{appointment.time}</p>
            <p>{appointment.location}</p>
            <p>{appointment.description}</p>
            <button>Register</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsPage;
