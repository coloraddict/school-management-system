const Class = require ('../models/classes.model');

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find ();
    res.status (200).json ({
      status: 'Success',
      results: classes.length,
      data: classes,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.getClass = async (req, res) => {
  try {
    const classObj = await Class.findById (req.params.id);
    res.status (200).json ({
      status: 'Success',
      data: classObj,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.addNewClass = async (req, res) => {
  try {
    const newClass = await Class.insertOne (req.body);
    res.status (200).json ({
      status: 'Success',
      data: newClass,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.updateClass = async (req, res) => {
  try {
    const classObj = await Class.findByIdAndUpdate (req.params.id, req.body, {
      returnDocument: 'after',
    });
    res.status (200).json ({
      status: 'Success',
      data: classObj,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.deleteClass = async (req, res) => {
  try {
    await Class.findByIdAndDelete (req.params.id);
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
