const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

//connect to cloud db

const url2 = 'mongodb://nicolas:dbdouche123@ds129402.mlab.com:29402/enkidoo-prototype';
mongoose.connect(url2);


//connect to local DB
//mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB');
});
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in db connection');
    }
});

const app = express();
const port = 3000;
const users = require('./routes/users');

app.use(cors());


//body-parser middleware
app.use(bodyParser.json());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint')
});

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//start server
app.listen(port, () => {
    console.log('Server started on port ' + port)

});