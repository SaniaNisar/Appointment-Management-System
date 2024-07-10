import React from 'react';

const MyAppointments = () => {
  const mockAppointments = [
    { id: 1, name: "Dental Checkup", date: "2024-07-10", time: "15:00", location: "Clinic" }
  ];

  return (
    <div className="container mt-3">
      <h1>My Appointments</h1>
      <ul className="list-group">
        {mockAppointments.map(app => (
          <li key={app.id} className="list-group-item">
            {app.name} on {app.date} at {app.time} at {app.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyAppointments;

