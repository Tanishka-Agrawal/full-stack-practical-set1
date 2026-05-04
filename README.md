# 🏋️‍♀️ Fitness App

A full-stack **Fitness Tracking Application** built using **Node.js, Express, MongoDB, EJS, and Passport.js**.
This app allows users to securely register, log in, and manage their workouts with complete CRUD functionality.

🔗 **Live App (Local):** http://localhost:3000/login

---

## ✨ Key Features

### 🔐 Authentication (Passport.js)

* User Registration, Login, Logout
* Secure session handling using `express-session`
* Password authentication with Passport

### 🏋️ Workout Management (CRUD)

* ➕ Create new workouts
* 📋 View all workouts
* 🔍 View workout details
* ✏️ Edit workouts *(except workoutType)*
* ❌ Delete workouts

### 🎯 Personalized Experience

* Displays **user fitness goal** at top-right after login

### ✅ Form Validation (Bootstrap)

* Required fields enforced
* Numeric validation (duration, caloriesBurned)
* Date picker for workoutDate
* Dropdown for gender selection

---

## 🛠️ Tech Stack

| Layer    | Technology Used               |
| -------- | ----------------------------- |
| Frontend | EJS, HTML, CSS, Bootstrap     |
| Backend  | Node.js, Express.js           |
| Database | MongoDB (Mongoose ODM)        |
| Auth     | Passport.js + express-session |

---

## 📁 Folder Structure

```
SET-1/
│
├── models/
│   ├── user.js          # User schema
│   └── workout.js       # Workout schema
│
├── routes/
│   ├── user.js          # Auth routes
│   └── workout.js       # Workout CRUD routes
│
├── views/
│   ├── partials/
│   │   └── navbar.ejs   # Includes fitness goal display
│   │
│   ├── login.ejs
│   ├── register.ejs
│   ├── workouts.ejs
│   ├── new-workout.ejs
│   ├── edit-workout.ejs
│   └── show-workout.ejs
│
├── public/
│   ├── style.css        # Custom styles
│   └── bootstrap/       # Bootstrap files
│
├── app.js               # Main server file
├── package.json
└── .gitignore
```

⚠️ `node_modules` and `package-lock.json` are excluded.

---

## 🧠 Database Schema

### 👤 User Schema

* `username` (String, required)
* `password` (String, required)
* `age` (Number, required)
* `gender` (String, required)
* `fitnessGoal` (String, required)

---

### 🏋️ Workout Schema

* `workoutType` (String, required, ❌ not editable)
* `duration` (Number, required)
* `caloriesBurned` (Number, required)
* `workoutDate` (Date, required)
* `notes` (String)

---

## 🔗 Routes Implementation

### 🔐 Authentication Routes

| Method | Route     | Description       |
| ------ | --------- | ----------------- |
| GET    | /register | Register page     |
| POST   | /register | Create user       |
| GET    | /login    | Login page        |
| POST   | /login    | Authenticate user |
| GET    | /logout   | Logout user       |

---

### 🏋️ Workout Routes

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /workouts          | List all workouts |
| GET    | /workout/new       | New workout form  |
| POST   | /workout           | Create workout    |
| GET    | /workouts/:id      | Show workout      |
| GET    | /workouts/:id/edit | Edit workout form |
| PUT    | /workouts/:id      | Update workout    |
| DELETE | /workouts/:id      | Delete workout    |

---

## 🔒 Authentication & Session

* Uses `express-session` for session management
* Passport handles login authentication
* User stays logged in across pages
* Protected routes restrict unauthorized access

---

## 🎨 UI Highlights

* Responsive design using Bootstrap
* Clean and structured forms
* Navbar with:

  * Logged-in username
  * 🎯 Fitness goal display (top-right)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/fitness-app.git
cd fitness-app
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Configure MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

Example connection in `app.js`:

```
mongoose.connect('mongodb://127.0.0.1:27017/fitness-app')
```

---

### 4️⃣ Run the App

```
node app.js
```

---

### 🌐 Open in Browser

```
http://localhost:3000/login
```

---

## ⚠️ Important Constraints Followed

✔ No dummy/seed data used
✔ workoutType is NOT editable after creation
✔ Forms strictly match schema
✔ Proper MVC folder structure maintained
✔ Authentication with Passport implemented

---

## 🚀 Future Enhancements

* 📊 Workout analytics dashboard
* 📅 Calendar-based tracking
* 📱 Fully responsive mobile UI
* ☁️ Deployment (Render / Railway)
* 🔔 Reminder notifications

---

## 👩‍💻 Author

**Tanishka Agrawal**
B.Tech CSE (AI/ML/IoT)

---

## ⭐ Final Note

This project demonstrates:

* Full-stack CRUD operations
* Authentication with Passport
* MongoDB integration
* Clean MVC architecture

🔥 A complete beginner-to-intermediate level full-stack fitness app!

---
