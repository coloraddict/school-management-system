const Attendance = require ('../models/attendance.model');

exports.getAllAttendance = async (req, res) => {
  try {
    const attendances = await Attendance.find ();
    res.status (200).json ({
      status: 'Success',
      results: attendances.length,
      data: attendances,
    });
  } catch (err) {
    res.status (404).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findById (req.params.id);
    res.status (200).json ({
      status: 'Success',
      data: attendance,
    });
  } catch (err) {
    res.status (404).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.addAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create (req.body);
    res.status (200).json ({
      status: 'Success',
      data: attendance,
    });
  } catch (err) {
    res.status (404).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate (
      req.params.id,
      req.body,
      {
        returnDocument: 'after',
      }
    );
    res.status (200).json ({
      status: 'Success',
      data: attendance,
    });
  } catch (err) {
    res.status (404).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete (req.params.id);
    res.status (200).json ({
      status: 'Success',
      data: null,
    });
  } catch (err) {
    res.status (404).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};
