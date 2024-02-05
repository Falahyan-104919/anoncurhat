const db = require('../db/models');

const createReport = async (req, res) => {
  try {
    const { description, post_id, report_type_id } = req.body;
    const newReport = await db.Reports.create({
      description: description,
      post_id: post_id,
      report_type_id: report_type_id,
    });
    res.status(200).json({
      message: `Successfull Created Report with ID : ${newReport.id_report}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const getReports = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const reports = await db.Reports.findAll({
      where: { active: true },
      include: [
        { model: db.Posts, attributes: ['content'] },
        { model: db.Report_type, attributes: ['name'] },
      ],
    });
    const results = {
      reports: reports.slice(startIndex, endIndex),
      page: page,
      limit: limit,
      totalPages: Math.ceil(reports.length / limit),
      totalreports: reports.length,
    };
    res.status(200).json({ results });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Reports.update({ active: false }, { where: { id_report: id } });
    return res.status(200).json({
      message: 'Delete Report Successfully!',
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

module.exports = { createReport, getReports, deleteReport };
