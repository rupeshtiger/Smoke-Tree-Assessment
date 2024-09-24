const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); 
const path = require('path'); 
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle user registration
app.post('/register', (req, res) => {
    const { name, address } = req.body;

    if (!name || !address) {
        return res.status(400).send('Name and address are required');
    }

    // Insert user into 'users' table
    const userQuery = 'INSERT INTO users (name) VALUES (?)';
    db.query(userQuery, [name], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).send('Error registering user');
        }

        const userId = results.insertId;

        // Insert address into 'addresses' table
        const addressQuery = 'INSERT INTO addresses (user_id, address) VALUES (?, ?)';
        db.query(addressQuery, [userId, address], (err) => {
            if (err) {
                console.error('Error inserting address:', err);
                return res.status(500).send('Error storing address');
            }

            res.send('User and address registered successfully!');
        });
    });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
