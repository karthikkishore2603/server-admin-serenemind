const express = require('express');
const cors = require('cors');
const cityRoutes = require('./routes/cityRoutes');
const countryRouter = require('./routes/countryRoutes');
const stateRouter = require('./routes/stateRoutes');

const app = express();

// Update your CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// API routes
app.use('/api/cities', cityRoutes);
app.use('/api/countries', countryRouter);
app.use('/api/states', stateRouter);



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;