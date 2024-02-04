const express = require('express')
const { getReport_types, createReport_type } = require('../controllers/controller.report-types')
const router = express.Router()

router.get('/reports/report_types', getReport_types)
router.post('/reports/report_types', createReport_type)

module.exports = router