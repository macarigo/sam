// Import required modules
const express = require('express');
const cors = require('cors');

const app = express();



const bodyParser = require('body-parser');

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
}));

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

app.get('/api/locations', (req, res) => {
    res.json(occurencies.map(({ id, title, location }) => ({ id, title, location })));
})

// Add a new occurency
app.post('/api/occurencies', (req, res) => {
    const { title, description, category, image, location } = req.body;
    if (!title || !description || !category || !location) {
        return res.status(400).send('Fill in the required fields');
    }

    const newOccurency = {
        id: occurencies.length + 1,
        title,
        description,
        category,
        image,
        location,
        date: Date.now(),
        solved: false,
    };

    occurencies.push(newOccurency);
    res.status(201).json(newOccurency);
});

// Update an existing occurency by ID
app.put('/api/occurencies/:id', (req, res) => {
    const occurency = occurencies.find(o => o.id === parseInt(req.params.id));
    if (!occurency) return res.status(404).send('Occurency not found');

    const { title, description, category, image, location } = req.body;
    if (!title || !description || !category || !location) {
        return res.status(400).send('Fill in the required fields');
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

function haversine(lat1, lng1, lat2, lng2) {
    const toRad = (angle) => (angle * Math.PI) / 180;
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

app.post('/api/closestOccurrences', (req, res) => {

    const { locationLat, locationLng } = req.body;
    if (!locationLat || !locationLng) {
        return res.status(400).send('Fill in the required fields');
    }

    res.json(occurencies
        .map((occurrence) => ({
            ...occurrence,
            distance: haversine(locationLat, locationLng, occurrence.location[0], occurrence.location[1]),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5));
})

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
