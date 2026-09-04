const User = require ('./../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find ();
    res.status (200).json ({
      status: 'Success',
      result: users.length,
      data: users,
    });
  } catch (err) {
    res.status (404).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById (req.params.id);

    res.status (200).json ({
      status: 'Success',
      data: user,
    });
  } catch (err) {
    res.status (404).json ({
      status: 'Failed',
      message: err.message,
    });
  }
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

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete (req.params.id);
    res.status (201).json ({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};
