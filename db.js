const mysql = require('mysql');

// MySQL database connection details
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Your MySQL username
    password: 'root',   // Your MySQL password
    database: 'smokeTree_DB'    // Your MySQL database name
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = db;  // Export the database connection for use in other files
