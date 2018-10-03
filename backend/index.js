const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./Models/UserModel');

const PORT = 4000;
const app = express();
const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/userList');
app.use(bodyParser.json("reviver"));
db.once('open', function() {
    console.log('mongodb connected.');
});

// Find all users
app.get('/users', (req, res) => {
    User.find({}, function(err, users) {
        if (err) throw err;
        //res.send(users);
        console.log(users);
        res.status(200).json(users);
    });
});

// Find a single user document based on the user firstName route parameter
app.get('/users/:firstName', (req, res) => {
    let firstName = String(req.params.firstName);
    User.find({firstName: firstName}, function(err, user) {
        if (err) throw err;
        res.send(user);
    });
});

// Insert instances to users
app.post("/users", (req, res) => {
    User.create(req.body, function(err, results) {
        if (err) console.log(err);
        console.log(results);
    });
    res.send(req.body);
    console.log("Created a user!");
});

// Delete user instance
app.delete('/users/:id', (req, res) => {
    let id = String(req.params.id);
    console.log(id);
    User.deleteOne({_id: id}, function(err, user) {
        if (err) throw err;
        res.send('User successfully deleted!');
    });
});

// Update instance of user
app.put('/users/:id', (req, res) => {
    let id = String(req.params.id);
    console.log(id);
    User.findOneAndUpdate({_id: id}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        sex: req.body.sex,
        age: req.body.age,
        password: req.body.password,
        repeatPassword: req.body.repeatPassword,
    }, function(err, user) {
        if (err) console.log(err);
        res.send('User successfully updated!');
    });
});

app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});
