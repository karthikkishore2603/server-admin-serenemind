const express = require("express");
const cors = require("cors");
const cityRoutes = require("./routes/cityRoutes");
const countryRouter = require("./routes/countryRoutes");
const stateRouter = require("./routes/stateRoutes");
const instituteRoutes = require("./routes/instituteRoutes");
const branchRoutes = require("./routes/branchRoutes");
const schoolRoutes = require("./routes/schoolRoutes");
const boardRoutes = require("./routes/boardRoutes");
const path = require("path");

const app = express();

// Update your CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/cities", cityRoutes);
app.use("/api/countries", countryRouter);
app.use("/api/states", stateRouter);
app.use("/api/institutes", instituteRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/schools", schoolRoutes);
app.use("/api/boards", boardRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
