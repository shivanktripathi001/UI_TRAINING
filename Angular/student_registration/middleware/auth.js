const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
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

module.exports = { auth, isAdmin, isTeacher, isStudent };
