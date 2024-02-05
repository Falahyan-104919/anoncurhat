const db = require('../db/models');

const createReport_type = async (req, res) => {
  try {
    const { name } = req.body;
    const newReport_type = await db.Report_types.create({
      name: name,
    });
    res.status(200).json({
      message: `Successfull Created Report_type with ID : ${newReport_type.id_report_type}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const getReport_types = async (req, res) => {
  try {
    const report_types = await db.Report_types.findAndCountAll({
      where: { active: true },
    });
    res.status(200).json({ report_types });
  } catch (error) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

module.exports = { createReport_type, getReport_types };
