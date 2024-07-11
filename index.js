const express = require('express');
const cors = require('cors'); // Import cors package
const userRoutes = require('./routes/user');
const referRoutes = require('./routes/referRoute');
require('dotenv').config();
const prisma = require('./config/databaseConnection');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Enable CORS for all origins (you can configure more options if needed)
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/referrals', referRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send(`<h1>server connected successfully</h1>`)
})