import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppointmentsPage from './pages/AppointmentsPage';
import CreateAppointmentPage from './pages/CreateAppointmentPage';
import MyRegistrationsPage from './pages/MyRegistrationsPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/appointments">Appointments</a></li>
          <li><a href="/create-appointment">Create Appointment</a></li>
          <li><a href="/my-registrations">My Appointments</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/appointments" element={AppointmentsPage} />
        <Route path="/create-appointment" element={CreateAppointmentPage} />
        <Route path="/my-registrations" element={MyRegistrationsPage} />
        </Routes>
    </Router>
  );
}

export default App;