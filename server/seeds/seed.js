const db = require('../config/connection');
const { Post, User } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await User.insertMany(techData);
  const posts = await Post.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
