const NGODetails = require('../models/ngoDetails');

// Get all NGOs
const getNGOs = async (req, res) => {
  try {
    const ngos = await NGODetails.find();
    res.status(200).json(NGODetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getNGOs
};
