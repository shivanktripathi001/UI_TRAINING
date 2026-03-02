# Student Registration Portal - Full Stack Application

## Features
- JWT Authentication with role-based access control
- User roles: Admin, Teacher, Student
- User registration with password hashing (bcrypt)
- Protected routes with auth guards
- Role-specific dashboards
- User profile management
- Admin user management panel
- Responsive UI with modern design

## Tech Stack
**Frontend:** Angular 17 (Standalone Components)
**Backend:** Node.js + Express
**Database:** MySQL
**Authentication:** JWT + bcrypt

## Installation

### Prerequisites
- Node.js v20+
- MySQL Server
- Angular CLI

### Setup Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Database Setup**
- Ensure MySQL is running
- Database `student_db` will be created automatically
- Tables `users` and `students` will be created on server start

3. **Start Backend Server**
```bash
node auth-server.js
```
Server runs on: http://localhost:5000

4. **Start Angular App**
```bash
ng serve
```
App runs on: http://localhost:4200

## Usage

### Registration
1. Go to http://localhost:4200
2. Click "Register Now"
3. Fill form with name, email, password, and select role
4. Click "Register Now"

### Login
1. Click "Login" from home page
2. Enter email and password
3. You'll be redirected based on your role:
   - Admin → `/admin`
   - Teacher → `/teacher`
   - Student → `/student-dashboard`

### Role-Based Features

**Admin:**
- View dashboard with user statistics
- Manage all users (view/delete)
- Access user management panel

**Teacher:**
- View teacher dashboard
- View student statistics
- Access student list

**Student:**
- View student dashboard
- Access profile management
- View enrolled courses

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Users (Admin only)
- GET `/api/users` - Get all users
- DELETE `/api/users/:id` - Delete user

### Protected Routes
- GET `/api/admin` - Admin access test
- GET `/api/teacher` - Teacher access test
- GET `/api/student` - Student access test

## Project Structure
```
src/app/
├── admin/              # Admin dashboard
├── teacher/            # Teacher dashboard
├── student-dashboard/  # Student dashboard
├── login/              # Login component
├── student/            # Registration component
├── profile/            # User profile
├── user-management/    # Admin user management
├── navbar/             # Navigation bar
├── guards/             # Route guards
├── services/           # Auth & API services
├── interceptors/       # HTTP interceptors
└── models/             # Data models
```

## Security Features
- Password hashing with bcrypt (10 rounds)
- JWT token authentication (24h expiry)
- Protected routes with auth guards
- Role-based access control
- HTTP interceptor for automatic token attachment

## Default Test Users
Create users via registration form with different roles to test functionality.

## Environment Variables
Create `.env` file in root:
```
JWT_SECRET=your-secret-key
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=student_db
```

## Deployment
1. Build Angular app: `ng build --configuration production`
2. Deploy `dist/` folder to hosting service
3. Deploy Node.js backend to cloud (AWS, Heroku, etc.)
4. Update environment.prod.ts with production API URL

## Troubleshooting
- Ensure MySQL is running on port 3306
- Check both servers are running (ports 5000 and 4200)
- Clear browser localStorage if login issues occur
- Verify database connection in auth-server.js

## License
MIT
