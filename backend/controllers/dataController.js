const Data = require('../models/data');

const getData = async (req, res) => {
    try {
        const filters = req.query;
        const data = await Data.find(filters);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getData };
