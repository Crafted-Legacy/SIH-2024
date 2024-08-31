const express = require('express');
const mongoose = require('mongoose');
const User = require('./src/database/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';
const app = express();

app.use(express.static(path.join(__dirname, 'Frontend', 'public')));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/craftedlegacy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Register route
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', redirectURL: '/index.html' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Sign In route
// Sign In route
app.post('/api/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
        res.json({ token, message: 'Sign-in successful' });
    } catch (err) {
        console.error('Error during sign-in process:', err);
        res.status(500).json({ message: 'Server error' });
    }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
