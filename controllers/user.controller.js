exports.getAllUsers = (req, res) => {
  res.status (200).json ({
    status: 'Success',
    message: 'Hello world! User route works',
  });
};
