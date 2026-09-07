const Subject = require ('../models/subject.schema');

exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find ();
    res.status (200).json ({
      status: 'Success',
      results: subjects.length,
      data: subjects,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.getSubject = async (req, res) => {
  try {
    const subject = await Subject.findById (req.params.id);
    res.status (200).json ({
      status: 'Success',
      data: subject,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.addNewSubject = async (req, res) => {
  try {
    const newSubject = await Subject.insertOne (req.body);

    res.status (200).json ({
      status: 'Success',
      data: newSubject,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    await Subject.findByIdAndDelete (req.params.id);
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
