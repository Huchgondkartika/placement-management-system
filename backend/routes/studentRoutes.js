const express = require("express");
const bcrypt = require("bcryptjs");
const Student = require("../models/Student");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.json({
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      name,
      email,
      password: hashedPassword
    });

    await student.save();

    res.json({
      success: true,
      message: "Student Registered Successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

// LOGIN ROUTE ADD HERE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({
        message: "Student not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      student.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    res.json({
      success: true,
      message: "Login Successful",
      student
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;