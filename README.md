## SmokeTree Registration Page:

## Overview
This project is a simple Node.js application built using Express and MySQL for user registration. .
It allows users to enter their names and addresses, which are then stored in a MySQL database.
The application features a user-friendly HTML form for data entry and provides feedback upon successful registration.

## Features
User Registration: Users can register by providing their name and address.
Data Storage: User information is securely stored in a MySQL database.
Form Validation: Ensures that both name and address fields are filled before submission.
Error Handling: Displays appropriate error messages for any issues during registration.

## Technologies Used
Node.js: JavaScript runtime for building server-side applications.
Express: Web framework for Node.js for creating web applications.
MySQL: Relational database management system for storing user data.
HTML/CSS: Basic web technologies for creating the front-end form.

## Getting Started
Prerequisites
Node.js installed on your machine
MySQL installed and running
A basic understanding of JavaScript and SQL

Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Install the dependencies:

bash
Copy code
npm install
## Set up the MySQL database:

Create a new database called smokeTree_DB.
Create the users and addresses tables using the provided SQL queries.
Update the database connection details in db.js:

javascript
Copy code
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'smokeTree_DB'
});
## Start the server:
bash
Copy code
node app.js
Open your browser and navigate to http://localhost:3000 to access the registration form.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions for improvements.
