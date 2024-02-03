const express = require('express');
const router = express.Router();
const {
  createReport,
  getReports,
  deleteReport,
} = require('../controllers/controller.reports');

router.get('/reports', getReports);
router.post('/reports', createReport);
router.delete('/reports/:id', deleteReport);

module.exports = router;
