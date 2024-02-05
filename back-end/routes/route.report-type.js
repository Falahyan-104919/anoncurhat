const express = require('express');
const {
  getReport_types,
  createReport_type,
  deleteReport_type,
} = require('../controllers/controller.report-types');
const { verifyToken } = require('../middleware/authToken');
const router = express.Router();

router.get('/report_types', getReport_types);
router.post('/report_types', verifyToken, createReport_type);
router.delete('/report_types/:id', verifyToken, deleteReport_type);

module.exports = router;
