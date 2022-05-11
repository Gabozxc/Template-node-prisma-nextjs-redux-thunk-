const express = require("express");

const router = express.Router(),
      testControllers = require("../controllers/testControllers");

router.get("/", testControllers.testDB);

module.exports = router;
