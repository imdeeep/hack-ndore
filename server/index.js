require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;
const chatRoutes = require("./routes/chatRoutes")

connectDB();

// Middlewares
app.use(express.json({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Chatbot API!");
});
app.use('/api/chat',chatRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));