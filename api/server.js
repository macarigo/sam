// Import required modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Sample data
let occurencies = [
    
];

// Get all occurencies
app.get('/api/occurencies', (req, res) => {
    res.json(occurencies);
});

// Get a single occurency by ID
app.get('/api/occurencies/:id', (req, res) => {
    const occurency = occurencies.find(o => o.id === parseInt(req.params.id));
    if (!occurency) return res.status(404).send('Occurency not found');
    res.json(occurency);
});

// Add a new occurency
app.post('/api/occurencies', (req, res) => {
    const { title, description, location, image, date } = req.body;
    if (!title || !description || !location || !image || !date) {
        return res.status(400).send('All fields are required');
    }

    const newOccurency = {
        id: occurencies.length + 1,
        title,
        description,
        location,
        image,
        date
    };

    occurencies.push(newOccurency);
    res.status(201).json(newOccurency);
});

// Update an existing occurency by ID
app.put('/api/occurencies/:id', (req, res) => {
    const occurency = occurencies.find(o => o.id === parseInt(req.params.id));
    if (!occurency) return res.status(404).send('Occurency not found');

    const { title, description, location, image, date } = req.body;
    if (!title || !description || !location || !image || !date) {
        return res.status(400).send('All fields are required');
    }

    occurency.title = title;
    occurency.description = description;
    occurency.location = location;
    occurency.image = image;
    occurency.date = date;

    res.json(occurency);
});

// Delete an occurency by ID
app.delete('/api/occurencies/:id', (req, res) => {
    const occurencyIndex = occurencies.findIndex(o => o.id === parseInt(req.params.id));
    if (occurencyIndex === -1) return res.status(404).send('Occurency not found');

    const deletedOccurency = occurencies.splice(occurencyIndex, 1);
    res.json(deletedOccurency[0]);
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
