// apps/api/migrate-mongo-config.js
require('dotenv').config();
const { MONGO_URI } = require('./src/config/env');

module.exports = {
  mongodb: {
    url: MONGO_URI,
    databaseName: undefined,
    options: { useNewUrlParser: true, useUnifiedTopology: true }
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
  useFileHash: true
};
