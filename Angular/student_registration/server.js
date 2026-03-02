const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'student_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create table
db.query(`CREATE TABLE IF NOT EXISTS students (
  sid INT PRIMARY KEY,
  sname VARCHAR(255),
  address VARCHAR(255),
  mobileNo BIGINT,
  email VARCHAR(255)
)`, (err) => {
  if (err) console.error('Table creation error:', err);
  else console.log('Students table ready');
});

// Get all students
app.get('/api/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Register student
app.post('/api/students', (req, res) => {
  const { sid, sname, address, mobileNo, email } = req.body;
  
  if (!sid || sid < 1)
    return res.status(400).json({ error: 'Invalid student ID' });
  if (!sname || sname.length < 3 || sname.length > 100 || !/^[a-zA-Z ]+$/.test(sname))
    return res.status(400).json({ error: 'Invalid name' });
  if (!address || address.length < 5 || address.length > 255)
    return res.status(400).json({ error: 'Invalid address' });
  if (!mobileNo || !/^[0-9]{10}$/.test(mobileNo.toString()))
    return res.status(400).json({ error: 'Invalid mobile number' });
  if (!email || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email))
    return res.status(400).json({ error: 'Invalid email' });
  
  db.query('INSERT INTO students (sid, sname, address, mobileNo, email) VALUES (?, ?, ?, ?, ?)',
    [sid, sname, address, mobileNo, email], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, message: 'Student registered successfully' });
    });
});

// Delete student
app.delete('/api/students/:id', (req, res) => {
  db.query('DELETE FROM students WHERE sid = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Student deleted successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
