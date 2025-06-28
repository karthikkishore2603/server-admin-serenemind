const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

// School routes
router.post("/", schoolController.createSchool);
router.get("/", schoolController.getSchools);
router.get("/:id", schoolController.getSchoolById);
router.put("/:id", schoolController.updateSchool);
router.delete("/:id", schoolController.deleteSchool);
router.patch("/:id/toggle-status", schoolController.toggleStatus);

module.exports = router;
