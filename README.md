# Guitarature 🎸

Guitarature is a modern web platform for learning guitar, built using the MERN stack (MongoDB, Express, React, Node.js). It offers a structured learning experience with different roles for Admins, Teachers, and Students, allowing efficient lesson management and progress tracking.

## Features
### Roles & Permissions

- Admin: Assigns specific lessons and teachers to students, manages the platform.

- Teacher: Tracks student progress, provides remarks on lessons.

- Student: Accesses only admin-assigned lessons, plays lessons, and views teacher feedback.

### Platform Capabilities

- JWT Authentication for secure login and role-based access.

- Mobile Responsive design for seamless learning on any device.

- Teachers can monitor student progress and provide guidance.

- Admins can control lesson assignments and manage teachers/students efficiently.

## Tech Stack

- Frontend: React.js, Styled Components, Framer Motion (for animations)

- Backend: Node.js, Express.js

- Database: MongoDB

- Authentication: JWT (JSON Web Tokens)

# Installation
## 1. Clone the repository:
```
git clone https://github.com/NishalDinesh124/Guitar-pro.git
```

## 2. Install dependencies for backend and client:

```
cd backend
npm install
cd ../client
npm install
```


## 3. Create a .env file in the server folder and add:
MONGO_URI=your_mongodb_connection_string\
JWT_SECRET=your_jwt_secret\
PORT=5000


## 4. Start the backend server:
```
cd server
npm run dev
```

## 5. Start the frontend:
```
cd client
npm start
```

## Open http://localhost:3000 in your browser.
# Contact

Developer: Nishal Dinesh\
Email: hire.ndmedia@gmail.com
