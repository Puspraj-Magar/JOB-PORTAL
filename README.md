# 🚀 Job Portal Web Application

A full-stack job portal web application built using the **MERN stack**. The platform provides separate workflows for **students/job seekers** and **recruiters/admins**, allowing users to search and apply for jobs while recruiters can manage companies, jobs, applicants, and application statuses.

## ✨ Features

### 👨‍💻 Student / Job Seeker

* User registration and login
* JWT-based authentication
* Browse and search jobs
* Filter jobs by different criteria
* View detailed job information
* Apply for jobs
* Prevent duplicate job applications
* Track applied jobs and application status
* Update profile information
* Upload and manage resume

### 🏢 Recruiter / Admin

* Create and manage companies
* Create and manage job postings
* Search and filter posted jobs
* View job applicants
* View applicant profiles and resumes
* Accept or reject applications
* Update application status

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* React Router DOM
* Tailwind CSS
* shadcn/ui
* Redux Toolkit
* Redux Persist
* Axios
* Framer Motion
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* JWT Authentication
* bcrypt
* Multer
* Cloudinary
* CORS
* dotenv

## 🏗️ Project Architecture

```text
React.js + Vite
       │
       ▼
React Router + Redux Toolkit
       │
       ▼
Axios API Requests
       │
       ▼
Node.js + Express.js
       │
       ▼
JWT Authentication Middleware
       │
       ▼
Controllers
       │
       ▼
Mongoose
       │
       ▼
MongoDB
```

### Resume Upload Flow

```text
Frontend
   │
   ▼
FormData
   │
   ▼
Axios
   │
   ▼
Multer
   │
   ▼
Cloudinary
   │
   ▼
MongoDB
```

## 🔐 Authentication & Authorization

The application uses:

* JWT for authentication
* HTTP cookies for storing authentication tokens
* bcrypt for password hashing
* Protected routes using authentication middleware
* Role-based access for students and recruiters

### Authentication Flow

```text
Register
   ↓
Password Hashing
   ↓
Login
   ↓
JWT Token
   ↓
HTTP Cookie
   ↓
Authentication Middleware
   ↓
Protected API Routes
```

## 🗄️ Database Models

The application uses the following main MongoDB models:

* **User**
* **Company**
* **Job**
* **Application**

### Relationships

```text
User
 ├── Creates → Company
 ├── Creates → Job
 └── Applies → Application
                  ↓
                 Job
                  ↓
               Company
```

## 📁 Project Structure

```text
Job-Portal/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── redux/
│   │   ├── pages/
│   │   └── utils/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Job-Portal
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> Never upload your `.env` file or secret credentials to GitHub.

### 5. Start the Backend

```bash
cd backend
npm run dev
```

### 6. Start the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

## 🔄 API Communication

The frontend communicates with the backend through REST APIs using Axios.

```text
Frontend
   ↓
Axios
   ↓
Express Routes
   ↓
Controllers
   ↓
Mongoose
   ↓
MongoDB
```

## 📌 Key Technical Highlights

* Full-stack MERN application architecture
* RESTful API development
* JWT-based authentication
* Role-based authorization
* Protected routes
* Redux Toolkit global state management
* Redux Persist for state persistence
* Custom React hooks for reusable API logic
* Resume upload with Multer and Cloudinary
* Job search and filtering
* Application tracking system
* Recruiter applicant management
* Responsive UI using Tailwind CSS and shadcn/ui

## 🚀 Future Improvements

* Email notifications for application status updates
* Advanced job recommendation system
* Recruiter analytics dashboard
* Pagination for jobs and applicants
* Admin dashboard with statistics
* Real-time notifications

## 👨‍💻 Author

**Pusparaj Baache Magar**

B.Tech Computer Science & Engineering Student

---

⭐ If you find this project useful, consider giving it a star!
