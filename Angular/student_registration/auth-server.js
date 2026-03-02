const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'student_db'
});

// Create users table
db.query(`CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'teacher', 'student') DEFAULT 'student',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`).catch(err => console.error('Table creation error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Auth API Running', endpoints: ['/api/auth/register', '/api/auth/login'] });
});

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log('Register attempt:', { name, email, role });
    
    if (!name || !email || !password) 
      return res.status(400).json({ error: 'All fields required' });
    
    const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length) return res.status(400).json({ error: 'Email already exists' });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, role || 'student']);
    
    console.log('User registered successfully');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', email);
    
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    console.log('Users found:', users.length);
    
    if (!users.length) return res.status(401).json({ error: 'Invalid credentials' });
    
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    console.log('Password valid:', validPassword);
    
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      'your-secret-key',
      { expiresIn: '24h' }
    );
    
    res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Auth middleware
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  
  try {
    req.user = jwt.verify(token, 'your-secret-key');
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
  next();
};

const isTeacher = (req, res, next) => {
  if (req.user.role !== 'teacher' && req.user.role !== 'admin') 
    return res.status(403).json({ error: 'Teacher access required' });
  next();
};

const isStudent = (req, res, next) => {
  if (!['student', 'teacher', 'admin'].includes(req.user.role))
    return res.status(403).json({ error: 'Student access required' });
  next();
};

// Get all users
app.get('/api/users', auth, isAdmin, async (req, res) => {
  try {
    const [users] = await db.query('SELECT id, name, email, role, created_at FROM users');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete user
app.delete('/api/users/:id', auth, isAdmin, async (req, res) => {
  try {
    await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Protected routes
app.get('/api/admin', auth, isAdmin, (req, res) => {
  res.json({ message: 'Admin access granted', user: req.user });
});

app.get('/api/teacher', auth, isTeacher, (req, res) => {
  res.json({ message: 'Teacher access granted', user: req.user });
});

app.get('/api/student', auth, isStudent, (req, res) => {
  res.json({ message: 'Student access granted', user: req.user });
});

app.listen(5000, () => {
  console.log('Auth server running on http://localhost:5000');
});
