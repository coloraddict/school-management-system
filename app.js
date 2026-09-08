const express = require ('express');
const userRouter = require ('./routes/user.route');
const studentRouter = require ('./routes/student.route');
const subjectRouter = require ('./routes/subject.route');
const batchRouter = require ('./routes/batch.route');
const attendanceRouter = require ('./routes/attendance.route');

const app = express ();

app.use (express.json ());

app.use ('/users', userRouter);
app.use ('/students', studentRouter);
app.use ('/subjects', subjectRouter);
app.use ('/batches', batchRouter);
app.use ('/attendance', attendanceRouter);

module.exports = app;
