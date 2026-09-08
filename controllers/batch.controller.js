const Batch = require ('../models/batch.model');

exports.getAllBatches = async (req, res) => {
  try {
    const batches = await Batch.find ();
    res.status (200).json ({
      status: 'Success',
      results: batches.length,
      data: batches,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.getBatch = async (req, res) => {
  try {
    const batch = await Batch.findById (req.params.id);
    res.status (200).json ({
      status: 'Success',
      data: batch,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.addNewBatch = async (req, res) => {
  try {
    const batch = await Batch.insertOne (req.body);
    res.status (200).json ({
      status: 'Success',
      data: batch,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.updateBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate (req.params.id, req.body, {
      returnDocument: 'after',
    });
    res.status (200).json ({
      status: 'Success',
      data: batch,
    });
  } catch (err) {
    res.status (400).json ({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.deleteBatch = async (req, res) => {
  try {
    await Batch.findByIdAndDelete (req.params.id);
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
