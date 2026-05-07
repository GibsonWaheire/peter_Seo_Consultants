const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const Project = require('../models/Project');
const { protect, adminOnly } = require('../middleware/auth');

const router = express.Router();
router.use(protect, adminOnly);

/* ── CLIENTS ── */

// GET /api/admin/clients
router.get('/clients', async (req, res) => {
  try {
    const clients = await User.find({ role: 'client' }).sort({ createdAt: -1 });
    res.json(clients);
  } catch {
    res.status(500).json({ message: 'Server error.' });
  }
});

// POST /api/admin/clients
router.post(
  '/clients',
  [
    body('name').notEmpty().withMessage('Name required.'),
    body('email').isEmail().withMessage('Valid email required.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }
    const { name, email, password, company, phone } = req.body;
    try {
      const existing = await User.findOne({ email });
      if (existing) return res.status(400).json({ message: 'Email already in use.' });
      const user = await User.create({ name, email, password, company, phone, role: 'client' });
      res.status(201).json(user);
    } catch {
      res.status(500).json({ message: 'Server error.' });
    }
  }
);

// PATCH /api/admin/clients/:id — update or deactivate
router.patch('/clients/:id', async (req, res) => {
  try {
    const { name, company, phone, active } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, company, phone, active },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: 'Client not found.' });
    res.json(user);
  } catch {
    res.status(500).json({ message: 'Server error.' });
  }
});

/* ── PROJECTS ── */

// GET /api/admin/projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('client', 'name email company')
      .sort({ createdAt: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ message: 'Server error.' });
  }
});

// POST /api/admin/projects
router.post(
  '/projects',
  [
    body('client').notEmpty().withMessage('Client ID required.'),
    body('name').notEmpty().withMessage('Project name required.'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }
    const { client, name, description, service, status, startDate, endDate, notes } = req.body;
    try {
      const project = await Project.create({ client, name, description, service, status, startDate, endDate, notes });
      await project.populate('client', 'name email company');
      res.status(201).json(project);
    } catch {
      res.status(500).json({ message: 'Server error.' });
    }
  }
);

// PATCH /api/admin/projects/:id
router.patch('/projects/:id', async (req, res) => {
  try {
    const { name, description, service, status, startDate, endDate, notes } = req.body;
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description, service, status, startDate, endDate, notes },
      { new: true, runValidators: true }
    ).populate('client', 'name email company');
    if (!project) return res.status(404).json({ message: 'Project not found.' });
    res.json(project);
  } catch {
    res.status(500).json({ message: 'Server error.' });
  }
});

// DELETE /api/admin/projects/:id
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found.' });
    res.json({ message: 'Project deleted.' });
  } catch {
    res.status(500).json({ message: 'Server error.' });
  }
});

/* ── REPORTS ── */

// POST /api/admin/projects/:id/reports
router.post(
  '/projects/:id/reports',
  [body('title').notEmpty().withMessage('Report title required.')],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }
    try {
      const project = await Project.findById(req.params.id);
      if (!project) return res.status(404).json({ message: 'Project not found.' });
      const { title, description, fileUrl, date } = req.body;
      project.reports.push({ title, description, fileUrl, date });
      await project.save();
      await project.populate('client', 'name email company');
      res.status(201).json(project);
    } catch {
      res.status(500).json({ message: 'Server error.' });
    }
  }
);

// DELETE /api/admin/projects/:id/reports/:reportId
router.delete('/projects/:id/reports/:reportId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found.' });
    project.reports = project.reports.filter(r => r._id.toString() !== req.params.reportId);
    await project.save();
    res.json(project);
  } catch {
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
