const express = require ('express');
const userRouter = require ('./routes/user.route');

const app = express ();

app.use ('/users', userRouter);

module.exports = app;
