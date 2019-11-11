// Define Dependences
const express = require('express');
const bodyPareser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Content
const app = express();

// Import file routes config ./app/routes/*
const promotions = require('./app/routes/promotions.route');


// connect to DB
const client = mongoose.connect(
    'mongodb+srv://admin:admin@rest-promotions-qr5cq.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
).then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })


// Middlewares
/*** Set up morgan*/
app.use(logger('dev'));
/*** Set up body-parser */
app.use(bodyPareser.urlencoded({extended: false}));
app.use(bodyPareser.json());

// Routes
app.use('/promotions', promotions);


// Catch 404 Errors forward them to error handle
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

// Error 500 handle function
app.use((req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.stutas || 500;

    // Response to client
    res.status.json({
        error: {
            message: error.message
        }
    });
});

// Module export
module.exports = app;
