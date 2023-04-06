import { MongoClient } from 'mongodb';
// can change CONNECTIONSTRING name
MongoClient.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = MongoClient;