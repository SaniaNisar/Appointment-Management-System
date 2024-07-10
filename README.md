# Appointment Management Platform

This project is a full-stack web application that allows users to create, view, register for, and manage appointments. It is built with React.js for the frontend, Node.js and Express for the backend, and Nodemailer for email functionality.

## Features

- **User Interface**:
  *  Clean and intuitive interface with navigation bar links to Home, Appointments, Create Appointment, and My Appointments pages.
- **Home Page**:
  * Welcome message and brief description of the web application.
- **Appointments Page**:
  * Display a list of appointments with details such as name, date, time, location, and description. Users can register for any appointment.
- **Create Appointment Page**:
  * Form to create a new appointment with fields for name, date, location, description, and type (single or group).
- **My Registrations Page**:
  * Display a list of appointments the user has registered for.
- **Registration Modal**:
  * Modal form to collect user details for appointment registration. Prevents double-booking for the same time slot.
- **Edit Appointment Modal**:
  * Allows users to edit appointment time and notify participants via email.
- **Cancel Appointment Modal**:
  *  Allows users to cancel appointments with restrictions for group appointments.

## Technologies Used

- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express
- **Email**: Nodemailer
- **Database**: MongoDB (Mongoose for ODM)
- **Styling**: CSS

## Installation

### Prerequisites

- Node.js and npm
- MongoDB

### Running the Application
* Ensure MongoDB is running.
* Start the backend server.
* Start the frontend application.
The application should now be running at http://localhost:3000 for the frontend and http://localhost:5000 for the backend.

### API Endpoints
* POST /api/appointments: Create a new appointment.
* GET /api/appointments: Retrieve the list of appointments.
* POST /api/register: Register for an appointment and send confirmation email.
