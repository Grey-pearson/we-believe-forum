import { MongoClient } from 'mongodb';
// can change CONNECTIONSTRING name
MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = MongoClient;

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/we-b', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = mongoose.connection;
