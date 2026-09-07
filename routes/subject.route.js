const express = require ('express');
const router = express.Router ();
const subjectController = require ('../controllers/subject.controller');

router
  .route ('/')
  .get (subjectController.getAllSubjects)
  .post (subjectController.addNewSubject);

router
  .route ('/:id')
  .get (subjectController.getSubject)
  .patch (subjectController.updateSubject)
  .delete (subjectController.deleteSubject);
module.exports = router;
