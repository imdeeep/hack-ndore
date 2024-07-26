require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));