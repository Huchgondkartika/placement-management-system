const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  skills: [String],

  certifications: [String],

  resume: {
    type: String
  },

  applications: [
    {
      company: String,
      status: String
    }
  ]
});

module.exports = mongoose.model("Student", studentSchema);
