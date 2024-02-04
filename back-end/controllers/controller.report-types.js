const db = require('../db/models')

const createReport_type = async (req, res) => {
    try {
        const { name, report_type_id } = req.body;
        const newReport_type = await db.Report_types.create({
            name: name,
            report_type_id: report_type_id,
        })
        res.status(200).json({
            message: `Successfull Created Report_type with ID : ${newReport_type.id_report_type}`,
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

const getReport_types = async (req, res) => {
    try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const report_types = await db.Report_types.findAndCountAll({
      where: { active: true },
    });
    const results = {
      report_types: report_types.slice(startIndex, endIndex),
      page: page,
      limit: limit,
      totalPages: Math.ceil(report_types.length / limit),
      totalreport_types: report_types.length,
    };
    res.status(200).json({ results });

    } catch (error) {
    console.error(err);
    res.status(500).json({
    message: 'Internal Server Error',
    });
    }
}


module.exports = { createReport_type, getReport_types }