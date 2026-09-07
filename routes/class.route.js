const express = require ('express');
const router = express.Router ();
const classController = require ('../controllers/class.controller');

router
  .route ('/')
  .get (classController.getAllClasses)
  .post (classController.addNewClass);
router
  .route ('/:id')
  .get (classController.getClass)
  .patch (classController.updateClass)
  .delete (classController.deleteClass);

module.exports = router;
