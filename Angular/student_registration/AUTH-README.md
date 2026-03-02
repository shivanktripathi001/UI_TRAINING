# JWT Authentication System

## Installation
```bash
npm install express mongoose bcrypt jsonwebtoken cors dotenv
```

## Start Server
```bash
node auth-server.js
```

## API Endpoints

### Register
POST http://localhost:4000/api/auth/register
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

### Login
POST http://localhost:4000/api/auth/login
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Protected Routes
GET http://localhost:4000/api/admin
GET http://localhost:4000/api/teacher
GET http://localhost:4000/api/student

Headers: `Authorization: Bearer <token>`

## Roles
- admin: Full access
- teacher: Teacher + Student access
- student: Student access only
