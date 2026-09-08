const express = require ('express');
const router = express.Router ();
const attendanceController = require ('../controllers/attendance.controller');

router
  .route ('/')
  .get (attendanceController.getAllAttendance)
  .post (attendanceController.addAttendance);
router
  .route ('/:id')
  .get (attendanceController.getAttendanceById)
  .patch (attendanceController.updateAttendance)
  .delete (attendanceController.deleteAttendance);

module.exports = router;
