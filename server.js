const app = require('./app');
const db = require('./models'); // Import from models/index.js
const PORT = process.env.PORT || 5000;

// Test database connection and start server
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return db.sequelize.sync(); // Sync all models
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit if DB connection fails
  });