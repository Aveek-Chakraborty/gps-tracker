const mongoose = require('mongoose');

const NGODetailsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  location: { type: String, required: true },
  contactNumber: { type: String, required: true }
});

module.exports = mongoose.model('NGODetail', NGODetailsSchema);
