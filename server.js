const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes');  
const authRoutes = require('./routes/authRoutes'); 

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON

// MongoDB connection URI
const uri = process.env.MONGO_URI;  

mongoose
  .connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api/recipes', recipeRoutes);  // All routes for recipes are prefixed with /api/recipes


app.use('/api/auth', authRoutes); // All routes for authentication are prefixed with /api/auth

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});