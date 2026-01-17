const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/portfolio', (req, res) => {
    res.json({
        name: 'Your Name',
        title: 'Full Stack Developer',
        bio: 'Passionate about building web applications',
        projects: [
            { id: 1, title: 'Project 1', description: 'Description', link: '#' },
            { id: 2, title: 'Project 2', description: 'Description', link: '#' }
        ]
    });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Add email sending logic here
    res.json({ success: true, message: 'Message received' });
});

app.get('/api/projects', (req, res) => {
    res.json([
        { id: 1, title: 'Project 1', tech: ['React', 'Node.js'] },
        { id: 2, title: 'Project 2', tech: ['Vue', 'Express'] }
    ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));