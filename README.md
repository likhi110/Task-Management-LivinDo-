# LivinDo - Task Manager

LivinDo is a full-stack **Task Manager** application that allows users to register, log in, and manage their tasks securely.  
It is built using **Node.js, Express, MongoDB, JWT Authentication** for the backend and **React.js (Vite)** for the frontend.

---

## 🚀 Features

- **User Authentication**
  - Register new accounts
  - Secure login with JWT tokens
  - Logout functionality
- **Task Management**
  - Create tasks
  - View task list
  - Update tasks
  - Delete tasks
- **Responsive UI**
  - Built with React + Tailwind CSS
  - User-friendly navigation
- **Secure API**
  - Protected routes using JWT
  - Password hashing with bcrypt

---

## 🛠️ Tech Stack

**Frontend**
- React.js (Vite)
- Axios
- React Router DOM
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- bcrypt.js

---

## 📂 Project Structure

task-manager/
│
├── server/ # Backend
│ ├── controllers/ # API logic
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes
│ ├── .env # Environment variables
│ ├── index.js # Server entry point
│ └── package.json
│
└── client/ # Frontend
├── src/
│ ├── pages/ # React pages (Login, Register, Tasks)
│ ├── components/ # Reusable UI components
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── vite.config.js
**## Backend Setup**
cd server
npm install
Create a .env file inside server/ with:

**env**

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

**Run the backend:**

npm start

**Frontend Setup**

cd client
npm install
npm run dev

**🔑 API Endpoints**

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |

**Task Routes (Requires JWT Token)**

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| POST   | /api/tasks      | Create a task |
| GET    | /api/tasks      | Get all tasks |
| PUT    | /api/tasks/\:id | Update a task |
| DELETE | /api/tasks/\:id | Delete a task |

**📸 Screenshots**

**# HOME_PAGE**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/53763efd-157e-4932-a154-34260af71ffb" />

**Login_Page**
<img width="1903" height="1079" alt="image" src="https://github.com/user-attachments/assets/102ee0cd-6b88-4ec4-9c40-059f2e96a005" />

**Registration_Page**
<img width="1685" height="857" alt="image" src="https://github.com/user-attachments/assets/29e3a308-a223-4525-abcd-94fde12feefb" />
