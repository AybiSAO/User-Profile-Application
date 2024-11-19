// index.js
const express = require('express');
const User = require('./user');

const app = express();
const PORT = 8080;
const hostname = '127.0.0.1';


// Create a sample user instance
const user = new User('Abraham Samuel', 18, 'samuelabraham97@yahoo.com');

// Define a route to serve user information
app.get('/user', (req, res) => {
    res.json({name: 
            user.name, 
            age: user.age, 
            email: user.email,
        });
});


    // Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}`);
    
});