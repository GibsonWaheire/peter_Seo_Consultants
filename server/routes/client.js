const express = require('express');
const Project = require('../models/Project');
const { protect } = require('../middleware/auth');

const router = express.Router();
router.use(protect);

// GET /api/client/projects — my projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({ client: req.user._id }).sort({ createdAt: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ message: 'Server error.' });
  }
});

// GET /api/client/projects/:id — single project detail
router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id, client: req.user._id });
    if (!project) return res.status(404).json({ message: 'Project not found.' });
    res.json(project);
  } catch {
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
