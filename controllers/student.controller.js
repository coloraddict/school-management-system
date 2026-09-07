const Student = require ('../models/student.model');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find ();
    res.status (200).json ({
      status: 'Success',
      results: students.length,
      data: students,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById (req.params.id);
    res.status (200).json ({
      status: 'Success',
      data: student,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.addStudent = async (req, res) => {
  try {
    const newStudent = await Student.create (req.body);
    res.status (200).json ({
      status: 'Success',
      data: newStudent,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate (req.params.id, req.body, {
      new: true,
    });
    res.status (200).json ({
      status: 'Success',
      data: student,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete (req.params.id);
    res.status (200).json ({
      status: 'Success',
      data: null,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};
