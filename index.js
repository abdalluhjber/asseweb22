const express = require('express');
const app = express();

const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Express & Sequelize Backend API!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
