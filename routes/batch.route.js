const express = require ('express');
const router = express.Router ();
const batchController = require ('../controllers/batch.controller');

router
  .route ('/')
  .get (batchController.getAllBatches)
  .post (batchController.addNewBatch);
router
  .route ('/:id')
  .get (batchController.getBatch)
  .patch (batchController.updateBatch)
  .delete (batchController.deleteBatch);

module.exports = router;
