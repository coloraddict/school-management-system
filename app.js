const express = require ('express');
const userRouter = require ('./routes/user.route');
const studentRouter = require ('./routes/student.route');

const app = express ();

app.use (express.json ());

app.use ('/users', userRouter);
app.use ('/students', studentRouter);

module.exports = app;
