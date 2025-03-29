const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const PORT = 8000;

dotenv.config();
connectDB();
const app = express();

// Body parser
app.use(express.json());
// Dev logging middleware
app.use(morgan("dev"));
app.use("/api/users", require("./routes/page"));
app.listen(PORT, () => console.log(`Server Started at port: ${PORT}`));
