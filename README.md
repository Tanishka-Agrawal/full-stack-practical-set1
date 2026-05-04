# 🏋️ Fitness Tracker Web App

A full-stack **Fitness Tracking Application** built using **Node.js, Express, MongoDB, and EJS** that allows users to manage and track their workouts efficiently.

---

## 🚀 Features

* 🔐 User Authentication (Login & Register)
* 🏋️ Create, View, Edit, and Delete Workouts (CRUD)
* 📋 Structured Workout Management
* 🎨 Clean UI using EJS + CSS
* 🔒 Workout type remains fixed after creation
* ♻️ Reusable UI components (Navbar using partials)

---

## 🛠️ Tech Stack

* **Frontend:** EJS, HTML, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose)
* **Other Tools:** Bootstrap (for validation), Git

---

## 📁 Project Structure

```
SET-1/
│
├── models/               # Database schemas (User, Workout)
│
├── routers/              # Route handlers for app logic
│
├── views/                # EJS Templates (Frontend)
│   ├── partials/         # Reusable components
│   │   └── navbar.ejs
│   │
│   ├── edit-workout.ejs
│   ├── login.ejs
│   ├── new-workouts.ejs
│   ├── register.ejs
│   ├── show-workout.ejs
│   └── workouts.ejs
│
├── public/               # Static files (CSS)
│   └── style.css
│
├── node_modules/         # Dependencies
│
├── app.js                # Main server file
├── package.json          # Project metadata & dependencies
├── package-lock.json     # Dependency lock file
└── .gitignore            # Ignored files
```

---

## 🔑 Routes Overview

### Authentication Routes

* `GET /login` → Login page
* `GET /register` → Register page

### Workout Routes

* `GET /workouts` → Show all workouts
* `GET /workout/new` → Create new workout form
* `POST /workout` → Add new workout
* `GET /workouts/:id` → View workout details
* `GET /workouts/:id/edit` → Edit workout
* `PUT /workouts/:id` → Update workout
* `DELETE /workouts/:id` → Delete workout

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```
git clone https://github.com/your-username/fitness-app.git
cd fitness-app
```

2. **Install dependencies**

```
npm install
```

3. **Run the application**

```
node app.js
```

4. Open in browser:

```
http://localhost:3000/login
```

---

## 🧠 Database Models

### User Model

* Username
* Email
* Password (hashed)

### Workout Model

* Workout Name
* Workout Type (not editable after creation)
* Duration
* Date
* Notes

---

## 🎨 UI Components

* **Navbar (Reusable)** → `views/partials/navbar.ejs`
* **Forms with Validation** → Login, Register, Workout
* **Workout Pages** → List, Detail, Edit

---

## 🔐 Validations

* Client-side validation using Bootstrap
* Server-side validation using Express
* Restricted editing of `workoutType`

---

## 📌 Future Improvements

* 📊 Add workout analytics dashboard
* 📅 Calendar view for workouts
* 🔔 Notifications & reminders
* 📱 Mobile responsive UI improvements
* ☁️ Deployment (Render / Vercel)

---

## 👩‍💻 Author

**Tanishka Agrawal**
B.Tech CSE (AI/ML/IoT)

---

## ⭐ Acknowledgements

* Express.js Documentation
* MongoDB & Mongoose
* Bootstrap

---

## 💡 Note

This project is built for learning full-stack development and demonstrates complete CRUD operations with authentication.

---

🔥 *Feel free to fork, improve, and build upon this project!*
