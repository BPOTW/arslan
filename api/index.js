const app = require('../server');
const connectDB = require('../config/mongodb');

module.exports = async (req, res) => {
  try {
    // Ensure DB is connected before handling the request
    await connectDB();
    
    // Forward request to Express app
    return app(req, res);
  } catch (error) {
    console.error('Vercel Function Crash:', error);
    res.status(500).json({ 
      error: 'Serverless Function Crash', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
