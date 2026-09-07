const express = require ('express');
const router = express.Router ();
const studentController = require ('../controllers/student.controller');

router
  .route ('/')
  .get (studentController.getAllStudents)
  .post (studentController.addStudent);

router
  .route ('/:id')
  .get (studentController.getStudent)
  .delete (studentController.deleteStudent);
module.exports = router;
