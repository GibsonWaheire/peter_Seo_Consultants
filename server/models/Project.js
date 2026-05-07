const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  fileUrl: { type: String, trim: true },
  date: { type: Date, default: Date.now },
}, { _id: true, timestamps: true });

const projectSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  service: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'paused', 'completed'],
    default: 'pending',
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  notes: {
    type: String,
    trim: true,
  },
  reports: [reportSchema],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
