/**
 * Run once to create the admin account:
 *   node seed-admin.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  const existing = await User.findOne({ role: 'admin' });
  if (existing) {
    console.log('Admin already exists:', existing.email);
    process.exit(0);
  }

  const admin = await User.create({
    name: 'Goshen Admin',
    email: 'admin@goshen.co.ke',
    password: 'admin123',        // change this after first login
    role: 'admin',
  });

  console.log('Admin created:', admin.email);
  console.log('Password: admin123  ← change this immediately!');
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
