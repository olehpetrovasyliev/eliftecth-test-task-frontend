# Test Task for Eliftech - frontend

This repository contains the frontend for an Event Management application. It serves as a test task to demonstrate the ability to manage events and participants through a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [License](#license)

## Features

- User-friendly interface for event management
- Form to register participants for events
- Fetch and display event data with pagination and sorting options
- Responsive design using Sass for styling
- Form validation using React Hook Form

## Technologies Used

- React
- TypeScript
- Axios (for API calls)
- Sass (for styling)
- React Router (for navigation)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/olehpetrovasyliev/event-management-frontend.git
   ```
2.Install the dependencies:
```bash
npm install
```
3. Start the application:
```bash
npm run dev
```
4.Open your browser and navigate to http://localhost:5173 to access the application.

### Live
If you cannot or don't want to clone the project on your local machine, I've deployed it on Render.com by [https://eliftecth-test-task-frontend-xppr.vercel.app/](https://eliftecth-test-task-frontend-xppr.vercel.app/s).

### Warning
Backend is deployed on the free version, so it can load really slow sometimes.

## API Integration
The frontend interacts with the following API endpoints:

### Events
- GET /api/events: Fetch all events
- GET /api/events/:id: Fetch a specific event by ID
### Participants
 - POST /api/events/:id/participants: Add a new participant to an existing event


## License
Feel free to copy and paste this directly into your README file!



