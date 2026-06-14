const express = require("express");
const Company = require("../models/Company");

const router = express.Router();

// Add Company
router.post("/add", async (req, res) => {
  try {
    const company = new Company(req.body);

    await company.save();

    res.json({
      success: true,
      message: "Company Added"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

// Get Companies
router.get("/", async (req, res) => {
  const companies = await Company.find();

  res.json(companies);
});

module.exports = router;