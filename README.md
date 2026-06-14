# Placement Management System

## 📌 Project Overview

Placement Management System is a Full Stack Web Application developed to help students manage their placement journey and assist placement coordinators in managing companies, jobs, and student data.

The system also integrates Google Gemini AI to provide:

- AI Resume Review
- Skill Gap Analysis
- Interview Question Generation

---

## 🚀 Features

### Student Module
- Student Registration
- Student Login
- Profile Management
- Resume Upload
- View Placement Opportunities

### Placement Coordinator Module
- Add Company Details
- Post Job Opportunities
- View Student Data
- Track Placement Statistics

### AI Features
- Resume Review using Gemini AI
- Skill Gap Analysis
- Interview Question Generator

---

## 🛠 Technologies Used

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### AI Integration
- Google Gemini API

### Tools
- Git
- GitHub
- Postman
- VS Code

---

## 📂 Project Structure

```
Placement Management System
│
├── backend
│   ├── routes
│   ├── models
│   ├── uploads
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Huchgondkartika/placement-management-system.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### Student APIs

```http
POST /api/students/register
POST /api/students/login
GET /api/students
```

### Company APIs

```http
POST /api/companies
GET /api/companies
```

### Job APIs

```http
POST /api/jobs
GET /api/jobs
```

### AI APIs

```http
POST /api/ai/resume-review
POST /api/ai/skill-gap
POST /api/ai/interview-questions
```

---

## 📸 Screenshots

### Dashboard

(Add Screenshot Here)

### Resume Review

(Add Screenshot Here)

### Skill Gap Analysis

(Add Screenshot Here)

### Interview Question Generator

(Add Screenshot Here)

### MongoDB Collections

(Add Screenshot Here)

---

## 🎯 Future Enhancements

- JWT Authentication
- Resume Upload using Multer
- Placement Analytics Dashboard
- Email Notifications
- Admin Panel
- Company Eligibility Checker

---

## 👨‍💻 Author

**Kartik Huchgond**

B.Tech Information Technology

Dr. J. J. Magdum College of Engineering

GitHub:
https://github.com/Huchgondkartika

---

## ⭐ Project Highlights

- Full Stack MERN Application
- MongoDB Atlas Integration
- Gemini AI Integration
- REST API Development
- Placement Management Automation
- Real-World College Placement Project
