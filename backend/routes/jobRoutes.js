const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const job = new Job(req.body);

    await job.save();

    res.json({
      success: true,
      message: "Job Added"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;