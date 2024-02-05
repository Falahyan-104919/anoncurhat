const express = require('express');
const router = express.Router();
const {
  createReport,
  getReports,
  deleteReport,
} = require('../controllers/controller.reports');
const { verifyToken } = require('../middleware/authToken');

router.get('/reports', getReports);
router.post('/reports', verifyToken, createReport);
router.delete('/reports/:id', verifyToken, deleteReport);

module.exports = router;
