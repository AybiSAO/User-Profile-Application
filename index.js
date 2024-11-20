const express = require('express');
const User = require('./user');

const app = express();
const PORT = 8080;
const hostname = '127.0.0.1';


// Created a new user
const user = new User('Abraham Samuel', 18, 'samuelabraham97@yahoo.com');

// Routing to server user
app.get('/user', (req, res) => {
    res.json({name: 
            user.name, 
            age: user.age, 
            email: user.email,
        });
});


    // Runing the server at the port
app.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}`);
    
});