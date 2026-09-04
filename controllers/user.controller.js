const User = require ('./../models/user.model');

exports.getAllUsers = (req, res) => {
  res.status (200).json ({
    status: 'Success',
    message: 'Hello world! User route works',
  });
};

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create (req.body);
    res.status (201).json ({
      status: 'success',
      data: newUser,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};
