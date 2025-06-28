const express = require("express");
const router = express.Router();
const instituteController = require("../controllers/instituteController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, GIF, or PNG files are allowed"));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 800 * 1024 },
  fileFilter,
});

router.post("/institutes", upload.single("image"), instituteController.createInstitute);
router.get("/", instituteController.getInstitutes);
router.get("/:id", instituteController.getInstituteById);
router.put("/:id", upload.single("image"), instituteController.updateInstitute);
router.delete("/:id", instituteController.deleteInstitute);

module.exports = router;
