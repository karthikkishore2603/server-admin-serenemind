const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const cityRoutes = require("./routes/cityRoutes");
const countryRouter = require("./routes/countryRoutes");
const stateRouter = require("./routes/stateRoutes");
const instituteRoutes = require("./routes/instituteRoutes");
const branchRoutes = require("./routes/branchRoutes");
const schoolRoutes = require("./routes/schoolRoutes");
const boardRoutes = require("./routes/boardRoutes");
const classRoutes = require("./routes/classRoutes");
const divisionRoutes = require("./routes/divisionRoutes");
const academicyearRoutes = require("./routes/academicyearRoutes");
const emotionRoutes = require("./routes/emotionRoutes");
const zoneRoutes = require("./routes/zoneRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const subcategoryRoutes = require("./routes/subcategoryRoutes");
const impactRoutes = require("./routes/impactRoutes");
const pleasantnessRoutes = require("./routes/pleasantnessRoutes");
const path = require("path");

const app = express();

// Update your CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/countries", countryRouter);
app.use("/api/states", stateRouter);
app.use("/api/institutes", instituteRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/schools", schoolRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/divisions", divisionRoutes);
app.use("/api/academicyears", academicyearRoutes);
app.use("/api/emotions", emotionRoutes);
app.use("/api/zones", zoneRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subcategoryRoutes);
app.use("/api/impacts", impactRoutes);
app.use("/api/pleasantnesses", pleasantnessRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
